import nodemailer from 'nodemailer'

const requiredEnv = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'SMTP_FROM',
  'SMTP_TO',
]

const missingEnv = () => requiredEnv.filter((key) => !process.env[key])

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed.' })
  }

  const missing = missingEnv()
  if (missing.length) {
    return res.status(500).json({
      ok: false,
      error: `Missing env vars: ${missing.join(', ')}`,
    })
  }

  const { name, email, project } = req.body || {}

  if (!name || !email || !project) {
    return res.status(400).json({
      ok: false,
      error: 'Name, email and project are required.',
    })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `Novo contato - ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\n\nProjeto:\n${project}`,
    })

    return res.json({ ok: true })
  } catch (error) {
    console.error('Email error:', error)
    return res.status(500).json({ ok: false, error: 'Failed to send email.' })
  }
}
