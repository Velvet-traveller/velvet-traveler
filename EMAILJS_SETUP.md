# EmailJS Setup Instructions

This guide will help you set up EmailJS to receive booking form submissions via email.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)

## Step 2: Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (you'll need this later)

## Step 3: Create Email Templates

### Booking Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use the following template variables in your email:

**Template Variables Available:**

- `{{to_email}}` - Recipient email (your booking email)
- `{{from_name}}` - Customer's full name
- `{{from_email}}` - Customer's email
- `{{phone}}` - Customer's phone number
- `{{trip_type}}` - Type of trip (hotel/week/seascape)
- `{{destination}}` - Destination name
- `{{region}}` - Region
- `{{price}}` - Price
- `{{travel_date}}` - Travel date
- `{{number_of_guests}}` - Number of guests
- `{{special_requests}}` - Special requests
- `{{description}}` - Description
- `{{submitted_at}}` - Submission timestamp
- `{{message}}` - Full formatted message

**Example Email Template:**

Copy and paste this template into EmailJS:

**Subject:**

```
{{subject}}
```

**Note:** Make sure to add `subject` as a parameter in your EmailJS template settings. The subject will be: `🎯 New Booking Request - {{destination}} ({{trip_type}})`

**Email Body (HTML format with inline styles - better email client compatibility):**

```html
<div
  style="font-family: system-ui, sans-serif, Arial; font-size: 14px; color: #2c3e50; line-height: 1.6"
>
  <!-- Velvet Traveler Header -->
  <div
    style="background: linear-gradient(135deg, #8B6914 0%, #A67C1A 100%); padding: 25px 20px; text-align: center; border-radius: 8px 8px 0 0; margin-bottom: 0"
  >
    <div
      style="color: white; font-size: 24px; font-weight: bold; margin-bottom: 8px; letter-spacing: 1px"
    >
      THE VELVET TRAVELER
    </div>
    <div
      style="color: rgba(255, 255, 255, 0.9); font-size: 13px; font-style: italic"
    >
      Luxury Travel • Smart Choices • Beautiful Experiences
    </div>
  </div>

  <!-- Content Container -->
  <div
    style="background-color: #ffffff; padding: 30px 20px; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 8px 8px"
  >
    <div
      style="margin-bottom: 20px; font-size: 18px; font-weight: bold; color: #8B6914; text-align: center; padding-bottom: 15px; border-bottom: 2px solid #f9f3eb"
    >
      🎯 New Booking Request Received
    </div>
    <div
      style="margin-bottom: 20px; color: #666; font-size: 14px; text-align: center"
    >
      A booking request from
      <strong style="color: #2c3e50">{{from_name}}</strong> has been received.
      <br />
      <span style="font-size: 12px; color: #999"
        >Kindly respond at your earliest convenience.</span
      >
    </div>

    <!-- Contact Information Section -->
    <div
      style="margin-top: 25px; padding: 20px 0; border-width: 1px 0; border-style: dashed; border-color: lightgrey"
    >
      <table role="presentation" style="width: 100%">
        <tr>
          <td style="vertical-align: top; width: 60px">
            <div
              style="padding: 8px 12px; margin: 0 10px; background-color: #f9f3eb; border-radius: 5px; font-size: 28px; width: 50px; text-align: center"
              role="img"
            >
              👤
            </div>
          </td>
          <td style="vertical-align: top">
            <div
              style="color: #2c3e50; font-size: 18px; font-weight: bold; margin-bottom: 5px"
            >
              {{from_name}}
            </div>
            <div style="color: #8B6914; font-size: 14px; margin-bottom: 8px">
              📧
              <a
                href="mailto:{{from_email}}"
                style="color: #8B6914; text-decoration: none"
                >{{from_email}}</a
              >
            </div>
            <div style="color: #8B6914; font-size: 14px; margin-bottom: 10px">
              📞
              <a
                href="tel:{{phone}}"
                style="color: #8B6914; text-decoration: none"
                >{{phone}}</a
              >
            </div>
            <div style="color: #cccccc; font-size: 12px; margin-top: 10px">
              Submitted: {{submitted_at}}
            </div>
          </td>
        </tr>
      </table>
    </div>

    <!-- Trip Details Section -->
    <div
      style="margin-top: 25px; padding: 20px 0; border-width: 1px 0; border-style: dashed; border-color: lightgrey"
    >
      <table role="presentation" style="width: 100%">
        <tr>
          <td style="vertical-align: top; width: 60px">
            <div
              style="padding: 8px 12px; margin: 0 10px; background-color: #f9f3eb; border-radius: 5px; font-size: 28px; width: 50px; text-align: center"
              role="img"
            >
              ✈️
            </div>
          </td>
          <td style="vertical-align: top">
            <div
              style="color: #2c3e50; font-size: 16px; font-weight: bold; margin-bottom: 12px"
            >
              Trip Details
            </div>
            <div style="font-size: 14px; margin-bottom: 6px">
              <strong style="color: #555">Trip Type:</strong>
              <span style="color: #8B6914; font-weight: bold"
                >{{trip_type}}</span
              >
            </div>
            <div style="font-size: 14px; margin-bottom: 6px">
              <strong style="color: #555">Destination:</strong>
              <span style="color: #2c3e50; font-weight: bold"
                >{{destination}}</span
              >
            </div>
            <div style="font-size: 14px; margin-bottom: 6px">
              <strong style="color: #555">Region:</strong> {{region}}
            </div>
            <div style="font-size: 14px; margin-bottom: 6px">
              <strong style="color: #555">Price:</strong>
              <span style="color: #8B6914; font-weight: bold">{{price}}</span>
            </div>
            <div style="font-size: 14px; margin-bottom: 6px">
              <strong style="color: #555">Travel Date:</strong> {{travel_date}}
            </div>
            <div style="font-size: 14px; margin-bottom: 6px">
              <strong style="color: #555">Number of Guests:</strong>
              {{number_of_guests}}
            </div>
          </td>
        </tr>
      </table>
    </div>

    <!-- Description Section -->
    <div
      style="margin-top: 25px; padding: 20px 0; border-width: 1px 0; border-style: dashed; border-color: lightgrey"
    >
      <table role="presentation" style="width: 100%">
        <tr>
          <td style="vertical-align: top; width: 60px">
            <div
              style="padding: 8px 12px; margin: 0 10px; background-color: #f9f3eb; border-radius: 5px; font-size: 28px; width: 50px; text-align: center"
              role="img"
            >
              📝
            </div>
          </td>
          <td style="vertical-align: top">
            <div
              style="color: #2c3e50; font-size: 16px; font-weight: bold; margin-bottom: 8px"
            >
              Description
            </div>
            <p
              style="font-size: 14px; color: #2c3e50; margin: 0; line-height: 1.6"
            >
              {{description}}
            </p>
          </td>
        </tr>
      </table>
    </div>

    <!-- Special Requests Section -->
    <div
      style="margin-top: 25px; padding: 20px 0; border-width: 1px 0; border-style: dashed; border-color: lightgrey"
    >
      <table role="presentation" style="width: 100%">
        <tr>
          <td style="vertical-align: top; width: 60px">
            <div
              style="padding: 8px 12px; margin: 0 10px; background-color: #f9f3eb; border-radius: 5px; font-size: 28px; width: 50px; text-align: center"
              role="img"
            >
              💬
            </div>
          </td>
          <td style="vertical-align: top">
            <div
              style="color: #2c3e50; font-size: 16px; font-weight: bold; margin-bottom: 8px"
            >
              Special Requests
            </div>
            <p
              style="font-size: 14px; color: #2c3e50; margin: 0; line-height: 1.6"
            >
              {{special_requests}}
            </p>
          </td>
        </tr>
      </table>
    </div>

    <!-- Quick Contact Footer -->
    <div
      style="margin-top: 30px; padding: 20px; background-color: #f9f3eb; border-radius: 8px; text-align: center"
    >
      <div
        style="font-size: 14px; color: #8B6914; font-weight: bold; margin-bottom: 12px"
      >
        📧 Quick Actions:
      </div>
      <div style="font-size: 14px; margin-bottom: 15px">
        <a
          href="mailto:{{from_email}}?subject=Re: Booking Request - {{destination}}"
          style="color: #8B6914; text-decoration: none; margin: 0 10px; font-weight: bold; padding: 8px 16px; background-color: white; border-radius: 5px; display: inline-block"
        >
          Reply via Email
        </a>
        <span style="color: #ccc; margin: 0 5px">|</span>
        <a
          href="tel:{{phone}}"
          style="color: #8B6914; text-decoration: none; margin: 0 10px; font-weight: bold; padding: 8px 16px; background-color: white; border-radius: 5px; display: inline-block"
        >
          Call {{phone}}
        </a>
      </div>
      <div
        style="font-size: 11px; color: #999; margin-top: 10px; padding-top: 10px; border-top: 1px solid #e5e5e5"
      >
        Please reach out to the customer within 24 hours.
      </div>
    </div>

    <!-- Velvet Traveler Footer -->
    <div
      style="margin-top: 20px; padding: 15px; background-color: #f9f3eb; border-radius: 8px; text-align: center; border-top: 2px solid #8B6914"
    >
      <div
        style="font-size: 12px; color: #8B6914; font-weight: bold; margin-bottom: 5px"
      >
        The Velvet Traveler
      </div>
      <div style="font-size: 11px; color: #999">booking@velvettraveler.com</div>
    </div>
  </div>
</div>
```

**Plain Text Version (if HTML doesn't work):**

```
═══════════════════════════════════════════════════════════
    🎯 NEW BOOKING REQUEST RECEIVED
═══════════════════════════════════════════════════════════

👤 CONTACT INFORMATION
───────────────────────────────────────────────────────────
Name:     {{from_name}}
Email:    {{from_email}}
Phone:    {{phone}}

✈️ TRIP DETAILS
───────────────────────────────────────────────────────────
Trip Type:        {{trip_type}}
Destination:       {{destination}}
Region:            {{region}}
Price:             {{price}}
Travel Date:       {{travel_date}}
Number of Guests:  {{number_of_guests}}

📝 DESCRIPTION
───────────────────────────────────────────────────────────
{{description}}

💬 SPECIAL REQUESTS
───────────────────────────────────────────────────────────
{{special_requests}}

═══════════════════════════════════════════════════════════
📧 Quick Contact:
   Email: {{from_email}}
   Phone: {{phone}}

Submitted on: {{submitted_at}}
Please reach out to the customer within 24 hours.
═══════════════════════════════════════════════════════════
```

4. Save the template and note down the **Template ID**

**📧 What the Operations Team Will See:**

When a customer submits a booking form, your operations team will receive an email that looks like this:

```
┌─────────────────────────────────────────────────────────┐
│  🎯 New Booking Request Received                       │
│  [Header with gold background]                          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                                                         │
│  👤 Contact Information                                 │
│  ─────────────────────────────────────────────────────  │
│  Name:     John Doe                                     │
│  Email:    john.doe@example.com                         │
│  Phone:    +1 (555) 123-4567                            │
│                                                         │
│  ✈️ Trip Details                                        │
│  ─────────────────────────────────────────────────────  │
│  Trip Type:        hotel                                │
│  Destination:      Paris                                │
│  Region:            Europe                               │
│  Price:             $2,500                              │
│  Travel Date:       2024-06-15                          │
│  Number of Guests:  2                                   │
│                                                         │
│  📝 Description                                         │
│  ─────────────────────────────────────────────────────  │
│  [Description text here]                                │
│                                                         │
│  💬 Special Requests                                    │
│  ─────────────────────────────────────────────────────  │
│  [Special requests text here]                           │
│                                                         │
│  ┌───────────────────────────────────────────────────┐ │
│  │ 📧 Quick Contact:                                 │ │
│  │ Reply via Email | Call +1 (555) 123-4567         │ │
│  └───────────────────────────────────────────────────┘ │
│                                                         │
│  Submitted on: 12/15/2024, 2:30:45 PM                  │
│  Please reach out to the customer within 24 hours.     │
└─────────────────────────────────────────────────────────┘
```

The email will be professionally formatted with:

- ✅ Clear sections for easy reading
- ✅ Clickable email and phone links for quick contact
- ✅ All booking details organized and visible
- ✅ Brand colors matching your website (#8B6914)
- ✅ Mobile-friendly responsive design

### Newsletter Template

1. Create another template for newsletter subscriptions (Template ID: `template_nru6ajr`)
2. Use these variables:
   - `{{to_email}}` - Your booking email
   - `{{subject}}` - Email subject line
   - `{{subscriber_email}}` - Subscriber's email
   - `{{subscribed_at}}` - Subscription timestamp
   - `{{message}}` - Subscription message

**Subject:**

```
{{subject}}
```

**Note:** Make sure to add `subject` as a parameter in your EmailJS template settings. The subject will be: `📧 New Newsletter Subscription - The Velvet Traveler`

**Email Body (HTML format with inline styles):**

```html
<div
  style="font-family: system-ui, sans-serif, Arial; font-size: 14px; color: #2c3e50; line-height: 1.6"
>
  <!-- Velvet Traveler Header -->
  <div
    style="background: linear-gradient(135deg, #8B6914 0%, #A67C1A 100%); padding: 25px 20px; text-align: center; border-radius: 8px 8px 0 0; margin-bottom: 0"
  >
    <div
      style="color: white; font-size: 24px; font-weight: bold; margin-bottom: 8px; letter-spacing: 1px"
    >
      THE VELVET TRAVELER
    </div>
    <div
      style="color: rgba(255, 255, 255, 0.9); font-size: 13px; font-style: italic"
    >
      Luxury Travel • Smart Choices • Beautiful Experiences
    </div>
  </div>

  <!-- Content Container -->
  <div
    style="background-color: #ffffff; padding: 30px 20px; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 8px 8px"
  >
    <div
      style="margin-bottom: 20px; font-size: 18px; font-weight: bold; color: #8B6914; text-align: center; padding-bottom: 15px; border-bottom: 2px solid #f9f3eb"
    >
      📧 New Newsletter Subscription
    </div>
    <div
      style="margin-bottom: 20px; color: #666; font-size: 14px; text-align: center"
    >
      A new subscriber has joined your newsletter mailing list.
    </div>

    <!-- Subscriber Information Section -->
    <div
      style="margin-top: 25px; padding: 20px 0; border-width: 1px 0; border-style: dashed; border-color: lightgrey"
    >
      <table role="presentation" style="width: 100%">
        <tr>
          <td style="vertical-align: top; width: 60px">
            <div
              style="padding: 8px 12px; margin: 0 10px; background-color: #f9f3eb; border-radius: 5px; font-size: 28px; width: 50px; text-align: center"
              role="img"
            >
              ✉️
            </div>
          </td>
          <td style="vertical-align: top">
            <div
              style="color: #2c3e50; font-size: 16px; font-weight: bold; margin-bottom: 12px"
            >
              Subscriber Details
            </div>
            <div style="font-size: 14px; margin-bottom: 8px">
              <strong style="color: #555">Email Address:</strong>
              <span
                style="color: #8B6914; font-weight: bold; word-break: break-all"
                >{{subscriber_email}}</span
              >
            </div>
            <div style="font-size: 14px; margin-bottom: 8px">
              <strong style="color: #555">Subscribed At:</strong>
              <span style="color: #2c3e50">{{subscribed_at}}</span>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <!-- Quick Action Footer -->
    <div
      style="margin-top: 30px; padding: 20px; background-color: #f9f3eb; border-radius: 8px; text-align: center"
    >
      <div
        style="font-size: 14px; color: #8B6914; font-weight: bold; margin-bottom: 12px"
      >
        📧 Quick Action:
      </div>
      <div style="font-size: 14px; margin-bottom: 15px">
        <a
          href="mailto:{{subscriber_email}}"
          style="color: #8B6914; text-decoration: none; margin: 0 10px; font-weight: bold; padding: 8px 16px; background-color: white; border-radius: 5px; display: inline-block"
        >
          Send Welcome Email
        </a>
      </div>
      <div
        style="font-size: 11px; color: #999; margin-top: 10px; padding-top: 10px; border-top: 1px solid #e5e5e5"
      >
        Consider sending a welcome email to thank them for subscribing.
      </div>
    </div>

    <!-- Velvet Traveler Footer -->
    <div
      style="margin-top: 20px; padding: 15px; background-color: #f9f3eb; border-radius: 8px; text-align: center; border-top: 2px solid #8B6914"
    >
      <div
        style="font-size: 12px; color: #8B6914; font-weight: bold; margin-bottom: 5px"
      >
        The Velvet Traveler
      </div>
      <div style="font-size: 11px; color: #999">booking@velvettraveler.com</div>
    </div>
  </div>
</div>
```

3. Save and note down the **Template ID** (`template_nru6ajr`)

## Step 4: Get Your Public Key

1. Go to **Account** > **General** in your EmailJS dashboard
2. Find your **Public Key** (also called API Key)
3. Copy it

## Step 5: Configure Environment Variables

1. Create a `.env.local` file in the root of your project
2. Add the following variables:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_BOOKING_TEMPLATE_ID=your_booking_template_id_here
NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID=your_newsletter_template_id_here
NEXT_PUBLIC_BOOKING_EMAIL=booking@velvettraveler.com
```

3. Replace the placeholder values with your actual EmailJS credentials

## Step 6: Test the Setup

1. Start your development server: `npm run dev`
2. Fill out one of the booking forms on your site
3. Submit the form
4. Check your email inbox for the booking notification

## Troubleshooting

- **Emails not sending?** Check that all environment variables are set correctly
- **Template errors?** Make sure your template variables match exactly (case-sensitive)
- **Service not working?** Verify your email service is properly connected in EmailJS dashboard

## Security Notes

- Never commit `.env.local` to version control (it's already in `.gitignore`)
- The public key is safe to expose in frontend code (it's designed for client-side use)
- For production, set these environment variables in your hosting platform (Vercel, Netlify, etc.)
