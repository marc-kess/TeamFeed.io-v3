import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

const SubmitArticle: React.FC = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await axios.post(`${API_URL}/articles`, { title, content }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      console.log('Article submitted:', response.data)
      navigate('/articles')
    } catch (error) {
      console.error('Error submitting article:', error)
      setError('Failed to submit article. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // ... rest of the component remains the same
}

export default SubmitArticle