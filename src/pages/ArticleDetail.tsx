import React from 'react'
import { useParams } from 'react-router-dom'

// Mock data for a single article
const mockArticle = {
  id: 1,
  title: 'Detailed Article',
  content: 'This is the full content of the detailed article. It can be quite long and contain multiple paragraphs.',
  summary: 'This is a summary of the detailed article.',
}

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  // In a real app, we would fetch the article data based on the id
  // For now, we'll just use our mock data

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{mockArticle.title}</h1>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <h2 className="text-xl font-semibold mb-2">Summary</h2>
        <p>{mockArticle.summary}</p>
      </div>
      <div className="prose max-w-none">
        <p>{mockArticle.content}</p>
      </div>
    </div>
  )
}

export default ArticleDetail