import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

const Register: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await axios.post(`${API_URL}/register`, { username, password })
      navigate('/login')
    } catch (error) {
      console.error('Registration failed', error)
      // Handle registration error (show message to user)
    }
  }

  // ... rest of the component remains the same
}

export default Register