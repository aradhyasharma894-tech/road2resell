import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      },
    })
  }

  try {
    const { quoteData } = await req.json()

    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY not set')
    }

    // Send email to business owner
    const ownerEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Road2Resell <noreply@road2resell.com>',
        to: ['your-email@road2resell.com'], // Replace with your actual email
        subject: `New Quote Request from ${quoteData.name}`,
        html: `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${quoteData.name}</p>
          <p><strong>Email:</strong> ${quoteData.email}</p>
          <p><strong>Phone:</strong> ${quoteData.phone}</p>
          <p><strong>Product:</strong> ${quoteData.product}</p>
          <p><strong>Condition:</strong> ${quoteData.condition}</p>
          ${quoteData.image_url ? `<p><strong>Image:</strong> <a href="${quoteData.image_url}">View Image</a></p>` : ''}
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        `,
      }),
    })

    // Send confirmation email to customer
    const customerEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Road2Resell <noreply@road2resell.com>',
        to: [quoteData.email],
        subject: 'Quote Request Received - Road2Resell',
        html: `
          <h2>Thank you for your quote request!</h2>
          <p>Hi ${quoteData.name},</p>
          <p>We've received your quote request for: <strong>${quoteData.product}</strong></p>
          <p>Our team will review your device details and get back to you within 24 hours with a competitive quote.</p>
          <br>
          <p><strong>Your request details:</strong></p>
          <ul>
            <li>Product: ${quoteData.product}</li>
            <li>Condition: ${quoteData.condition}</li>
            <li>Phone: ${quoteData.phone}</li>
          </ul>
          <br>
          <p>If you have any questions, feel free to call us at (437) 123-4567.</p>
          <p>Best regards,<br>Road2Resell Team</p>
        `,
      }),
    })

    if (!ownerEmailResponse.ok || !customerEmailResponse.ok) {
      throw new Error('Failed to send email')
    }

    return new Response(
      JSON.stringify({ message: 'Emails sent successfully' }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    )
  }
})