import React from 'react'
import { Link } from 'react-router-dom'
import { Newspaper } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center text-xl font-bold text-gray-800">
          <Newspaper className="w-6 h-6 mr-2" />
          Newsfeed App
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link></li>
            <li><Link to="/articles" className="text-gray-600 hover:text-gray-800">Articles</Link></li>
            <li><Link to="/submit" className="text-gray-600 hover:text-gray-800">Submit</Link></li>
            <li><Link to="/login" className="text-gray-600 hover:text-gray-800">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header