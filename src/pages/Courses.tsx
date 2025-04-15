import { useState } from 'react';
import { Search } from 'lucide-react';
import type { Course } from '../types';

const COURSES: Course[] = [
  {
    id: 'cs-1',
    title: 'Data Structures & Algorithms',
    description: 'Master essential data structures and algorithms with practical implementations.',
    instructor: 'Dr. Sarah Johnson',
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
    duration: '12 weeks',
    level: 'Advanced',
    category: 'cs',
    rating: 4.8,
    students: 1200
  },
  {
    id: 'cs-2',
    title: 'Database Management Systems',
    description: 'Learn database design, SQL, and advanced database management techniques.',
    instructor: 'Prof. David Miller',
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d',
    duration: '10 weeks',
    level: 'Intermediate',
    category: 'cs',
    rating: 4.7,
    students: 980
  },
  {
    id: 'ai-1',
    title: 'Machine Learning Fundamentals',
    description: 'Master machine learning algorithms, data preprocessing, and model evaluation.',
    instructor: 'Prof. Alan Turing',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c',
    duration: '12 weeks',
    level: 'Advanced',
    category: 'ai',
    rating: 4.9,
    students: 1500
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Courses' },
  { id: 'cs', label: 'Computer Science' },
  { id: 'ai', label: 'AI & ML' }
] as const;

export function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = COURSES.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">Explore Our Courses</h1>
          <p className="mt-4 text-xl text-indigo-100 text-center max-w-3xl mx-auto">
            Comprehensive learning paths designed for BTech students across various engineering disciplines
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="border-b bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${selectedCategory === category.id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">
                    {course.level}
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                    {course.duration}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    by {course.instructor}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm font-medium">{course.rating}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{course.students} students</span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                  View Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}