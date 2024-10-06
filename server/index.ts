import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { OpenAI } from 'openai'

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

// Mock database
let users: any[] = []
let articles: any[] = []

// JWT secret (in a real app, this would be an environment variable)
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

// OpenAI configuration (replace with your actual API key)
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

// ... rest of the server code remains the same

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})