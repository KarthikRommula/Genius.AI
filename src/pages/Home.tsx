import { BookOpen, Code, Video, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const FEATURED_COURSES = [
  {
    id: '1',
    title: 'Advanced Data Structures & Algorithms',
    description: 'Master complex algorithms and data structures with hands-on practice and real-world applications.',
    instructor: 'Dr. Sarah Johnson',
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
    duration: '12 weeks',
    level: 'Advanced',
    students: 1200
  },
  {
    id: '2',
    title: 'Machine Learning & Neural Networks',
    description: 'Deep dive into ML algorithms, neural networks, and practical AI applications.',
    instructor: 'Prof. Michael Chen',
    thumbnail: 'https://images.unsplash.com/photo-1527430253228-e93688616381',
    duration: '10 weeks',
    level: 'Intermediate',
    students: 950
  },
  {
    id: '3',
    title: 'Modern Full Stack Development',
    description: 'Build scalable web applications using cutting-edge technologies and best practices.',
    instructor: 'Emily Rodriguez',
    thumbnail: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8',
    duration: '14 weeks',
    level: 'Intermediate',
    students: 1500
  }
];

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Master Engineering Through
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
              Interactive Learning
            </span>
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
            Join thousands of BTech students mastering engineering concepts through our
            comprehensive platform featuring interactive learning and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/courses"
              className="inline-flex items-center px-8 py-3 rounded-full bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors"
            >
              Browse Courses
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-3 rounded-full bg-indigo-500 bg-opacity-20 text-white font-semibold hover:bg-opacity-30 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            A Complete Learning Experience
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
              <div className="h-12 w-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <Video className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Video Lectures</h3>
              <p className="text-gray-600">
                High-quality video content from industry experts and professors.
              </p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
              <div className="h-12 w-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interactive Coding</h3>
              <p className="text-gray-600">
                Practice coding with real-time feedback and AI assistance.
              </p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
              <div className="h-12 w-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Notes</h3>
              <p className="text-gray-600">
                Detailed study materials and references for all topics.
              </p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
              <div className="h-12 w-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">
                Connect with peers and mentors for collaborative learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Courses</h2>
            <Link to="/courses" className="text-indigo-600 hover:text-indigo-700 font-semibold">
              View All Courses →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_COURSES.map(course => (
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
                    <div className="text-sm text-gray-500">
                      {course.students} students
                    </div>
                  </div>
                  <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}