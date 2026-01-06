# Fix: "The recipients address is empty" Error for Newsletter

## Problem

When clicking the subscribe button, you get: `EmailJS error: The recipients address is empty`

## Solution

The recipient email must be configured in your EmailJS dashboard. Here's how to fix it:

### Option 1: Set Recipient in Email Service Settings (Recommended)

1. Go to your **EmailJS Dashboard** → **Email Services**
2. Click on your email service (the one with ID `service_sadf15a`)
3. Look for **"Default Recipient"** or **"To Email"** field
4. Set it to: `bookings@velvettraveler.com`
5. Save the changes

### Option 2: Set Recipient in Newsletter Template Settings

1. Go to **Email Templates** in your EmailJS dashboard
2. Open your Newsletter template (`template_nru6ajr`)
3. Look for the **"To Email"** field in the template settings
4. You can either:
   - Set a static email: `bookings@velvettraveler.com`
   - OR use the template variable: `{{to_email}}`
5. If using `{{to_email}}`, make sure it's added as a template parameter:
   - Go to template settings
   - Add `to_email` as a parameter
   - Set default value to: `bookings@velvettraveler.com`
6. Save the template

### Option 3: Verify Template Parameters

Make sure your Newsletter template has these parameters configured:

1. Go to **Email Templates** → Your Newsletter template
2. Click on **"Settings"** or **"Parameters"**
3. Ensure these parameters are added:
   - `to_email` (default: `bookings@velvettraveler.com`)
   - `subject`
   - `subscriber_email`
   - `subscribed_at`
   - `message`
   - `reply_to` (optional, for reply-to address)

### Quick Check

After making changes:

1. Test the newsletter subscription form
2. Check your email inbox at `bookings@velvettraveler.com`
3. If it still doesn't work, verify the Email Service is properly connected

## Why This Happens

EmailJS requires the recipient email to be configured in one of these places:

- Email Service settings (static recipient)
- Template settings (can use template variables)
- Template parameters (if configured to accept `to_email`)

The code sends `to_email` as a parameter, but EmailJS needs it to be properly configured in the dashboard to recognize it.
