import 'dotenv/config'
import express from 'express'
import nodemailer from 'nodemailer'

const app = express()
const port = Number(process.env.PORT || 3001)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const requiredEnv = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'SMTP_FROM',
  'SMTP_TO',
]

const validateEnv = () => requiredEnv.filter((key) => !process.env[key])

app.post('/api/contact', async (req, res) => {
  const missing = validateEnv()
  if (missing.length) {
    return res.status(500).json({
      ok: false,
      error: `Missing env vars: ${missing.join(', ')}`,
    })
  }

  const { name, email, project } = req.body

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
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
