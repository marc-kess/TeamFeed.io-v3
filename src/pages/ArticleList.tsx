import React from 'react'
import { Link } from 'react-router-dom'

// Mock data for articles
const mockArticles = [
  { id: 1, title: 'First Article', summary: 'This is a summary of the first article.' },
  { id: 2, title: 'Second Article', summary: 'This is a summary of the second article.' },
  { id: 3, title: 'Third Article', summary: 'This is a summary of the third article.' },
]

const ArticleList: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Latest Articles</h1>
      <div className="space-y-4">
        {mockArticles.map((article) => (
          <div key={article.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">
              <Link to={`/articles/${article.id}`} className="text-blue-600 hover:underline">
                {article.title}
              </Link>
            </h2>
            <p className="text-gray-600">{article.summary}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArticleList