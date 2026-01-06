import emailjs from '@emailjs/browser';
import { BookingData } from '@/store/bookingStore';

// Initialize EmailJS with your public key
const initEmailJS = () => {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  if (publicKey) {
    emailjs.init(publicKey);
  } else {
    console.warn('EmailJS Public Key is missing');
  }
};

// Initialize EmailJS when module loads
if (typeof window !== 'undefined') {
  initEmailJS();
}

// Send booking email
export const sendBookingEmail = async (bookingData: BookingData): Promise<void> => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_BOOKING_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    const missing = [];
    if (!serviceId) missing.push('NEXT_PUBLIC_EMAILJS_SERVICE_ID');
    if (!templateId) missing.push('NEXT_PUBLIC_EMAILJS_BOOKING_TEMPLATE_ID');
    if (!publicKey) missing.push('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY');
    throw new Error(`EmailJS configuration is missing: ${missing.join(', ')}. Please check your environment variables.`);
  }

  // Ensure EmailJS is initialized
  initEmailJS();

  // Format the booking data for the email template
  const templateParams = {
    to_email: process.env.NEXT_PUBLIC_BOOKING_EMAIL || 'bookings@velvettraveler.com',
    subject: `🎯 New Booking Request - ${bookingData.destination} (${bookingData.tripType})`,
    from_name: `${bookingData.firstName} ${bookingData.lastName}`,
    from_email: bookingData.email,
    phone: bookingData.phone,
    trip_type: bookingData.tripType,
    destination: bookingData.destination,
    region: bookingData.region || 'Not specified',
    price: bookingData.price || 'Not available',
    travel_date: bookingData.travelDate || 'Not specified',
    number_of_guests: bookingData.numberOfGuests?.toString() || 'Not specified',
    special_requests: bookingData.specialRequests || 'None',
    description: bookingData.description || 'Not available',
    submitted_at: bookingData.submittedAt 
      ? new Date(bookingData.submittedAt).toLocaleString() 
      : new Date().toLocaleString(),
    // Full details for email body
    message: `
New Booking Request Received

Contact Information:
- Name: ${bookingData.firstName} ${bookingData.lastName}
- Email: ${bookingData.email}
- Phone: ${bookingData.phone}

Trip Details:
- Trip Type: ${bookingData.tripType}
- Destination: ${bookingData.destination}
- Region: ${bookingData.region || 'N/A'}
- Price: ${bookingData.price || 'N/A'}
- Travel Date: ${bookingData.travelDate || 'Not specified'}
- Number of Guests: ${bookingData.numberOfGuests || 'Not specified'}

Special Requests:
${bookingData.specialRequests || 'None'}

${bookingData.description ? `Description: ${bookingData.description}` : ''}

Submitted at: ${bookingData.submittedAt 
  ? new Date(bookingData.submittedAt).toLocaleString() 
  : new Date().toLocaleString()}
    `.trim(),
  };

  try {
    const response = await emailjs.send(serviceId, templateId, templateParams);
    console.log('EmailJS success:', response);
  } catch (error: any) {
    console.error('EmailJS error details:', error);
    // Provide more specific error messages
    if (error?.text) {
      throw new Error(`EmailJS error: ${error.text}`);
    } else if (error?.message) {
      throw new Error(`Failed to send email: ${error.message}`);
    } else {
      throw new Error('Failed to send email. Please check your EmailJS configuration and try again.');
    }
  }
};

// Send newsletter subscription email
export const sendNewsletterEmail = async (email: string): Promise<void> => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    const missing = [];
    if (!serviceId) missing.push('NEXT_PUBLIC_EMAILJS_SERVICE_ID');
    if (!templateId) missing.push('NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID');
    if (!publicKey) missing.push('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY');
    throw new Error(`EmailJS configuration is missing: ${missing.join(', ')}. Please check your environment variables.`);
  }

  // Ensure EmailJS is initialized
  initEmailJS();

  const templateParams = {
    // Note: to_email must be set in EmailJS template settings, not here
    // Set "To Email" field in template to: bookings@velvettraveler.com
    reply_to: email, // Reply-to address (subscriber's email)
    subject: `📧 New Newsletter Subscription - The Velvet Traveler`,
    subscriber_email: email,
    subscribed_at: new Date().toLocaleString(),
    message: `New newsletter subscription from: ${email}`,
  };

  try {
    const response = await emailjs.send(serviceId, templateId, templateParams);
    console.log('EmailJS success:', response);
  } catch (error: any) {
    console.error('EmailJS error details:', error);
    // Provide more specific error messages
    if (error?.text) {
      throw new Error(`EmailJS error: ${error.text}`);
    } else if (error?.message) {
      throw new Error(`Failed to subscribe: ${error.message}`);
    } else {
      throw new Error('Failed to subscribe. Please check your EmailJS configuration and try again.');
    }
  }
};

