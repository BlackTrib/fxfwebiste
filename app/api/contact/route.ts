import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  budget?: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Câmpurile obligatorii sunt incomplete' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Format email invalid' },
        { status: 400 }
      )
    }

    // Configure SMTP transporter for cPanel
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'mail.fxf.ro',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER || 'office@fxf.ro',
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // Email content for office
    const officeEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0f172a;">Noua solicitare de contact</h2>
        
        <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Nume:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          ${body.phone ? `<p><strong>Telefon:</strong> ${body.phone}</p>` : ''}
          ${body.company ? `<p><strong>Companie:</strong> ${body.company}</p>` : ''}
          ${body.service ? `<p><strong>Serviciu interesat:</strong> ${body.service}</p>` : ''}
          ${body.budget ? `<p><strong>Buget estimat:</strong> ${body.budget}</p>` : ''}
        </div>
        
        <div style="background: #f8fafc; padding: 20px; border-left: 4px solid #00b4d8; border-radius: 4px;">
          <h3 style="margin-top: 0; color: #0f172a;">Mesaj:</h3>
          <p style="line-height: 1.6; color: #475569;">${body.message.replace(/\n/g, '<br>')}</p>
        </div>
        
        <p style="font-size: 12px; color: #94a3b8; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 20px;">
          Mesaj trimis automat de la formularul de contact. ${new Date().toLocaleString('ro-RO')}
        </p>
      </div>
    `

    // Confirmation email for client
    const clientEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0f172a;">Multumim pentru solicitarea ta!</h2>
        
        <p style="font-size: 16px; line-height: 1.6; color: #475569;">
          Salut ${body.name},
        </p>
        
        <p style="line-height: 1.6; color: #475569;">
          Am primit cu succes solicitarea ta de contact. Echipa noastra va reveni la tine in cel mai scurt timp posibil, de preferinta in urmatoarele 24 de ore.
        </p>
        
        <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #0f172a;">Informatii de contact rapid:</h3>
          <p style="margin: 8px 0;"><strong>Telefon:</strong> +40 785 277 566</p>
          <p style="margin: 8px 0;"><strong>Email:</strong> office@fxf.ro</p>
          <p style="margin: 8px 0;"><strong>Program:</strong> Luni - Vineri, 10:00 - 18:00</p>
        </div>
        
        <p style="line-height: 1.6; color: #475569;">
          Daca ai intrebari urgente, poti apela direct la numarul de telefon de mai sus.
        </p>
        
        <p style="line-height: 1.6; color: #475569;">
          Cu placere,<br>
          <strong>Echipa FXF Web Solution</strong>
        </p>
      </div>
    `

    // Send email to office
    await transporter.sendMail({
      from: '"FXF Contact Form" <office@fxf.ro>',
      to: 'office@fxf.ro',
      subject: `Noua solicitare de contact de la ${body.name}`,
      html: officeEmailContent,
      replyTo: body.email,
    })

    // Send confirmation email to client
    await transporter.sendMail({
      from: '"FXF Web Solution" <office@fxf.ro>',
      to: body.email,
      subject: 'Confirmare primire solicitare - FXF Web Solution',
      html: clientEmailContent,
    })

    return NextResponse.json(
      { success: true, message: 'Email trimis cu succes!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Contact form error:', error)
    return NextResponse.json(
      { error: 'Eroare la trimitere. Te rugam sa incerci din nou.' },
      { status: 500 }
    )
  }
}
