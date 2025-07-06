import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckCircleIcon } from 'lucide-react';
import { featuredBuilds } from '../data/mockComponents';
import heroBg from '../assets/image_hero.jpg';
import ctaBg from '../assets/cta.jpg';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-r from-black to-purple-600 text-white"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay to Improve Text Readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                Build Your Dream PC With Confidence
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Our interactive PC builder helps you create the perfect custom
                computer with real-time compatibility checks and price
                estimates.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/builder"
                  className="bg-white text-indigo-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition flex items-center"
                >
                  Start Building <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/catalog"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition"
                >
                  Browse Components
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Build With Us?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our PC Builder provides everything you need to create your perfect
              custom computer
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <CheckCircleIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Compatibility Checker
              </h3>
              <p className="text-gray-600">
                Our system automatically checks component compatibility in
                real-time as you build your PC.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <CheckCircleIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Price Estimator
              </h3>
              <p className="text-gray-600">
                Get instant price updates as you add or change components to
                stay within your budget.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <CheckCircleIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Expert Recommendations
              </h3>
              <p className="text-gray-600">
                Get personalized component suggestions based on your needs and
                budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Builds Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured PC Builds
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Check out some of our most popular pre-configured builds or use
              them as a starting point
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredBuilds.map((build) => (
              <div
                key={build.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={build.image}
                  alt={build.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {build.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{build.description}</p>
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-1">
                      Key Components:
                    </div>
                    <div className="text-sm text-gray-700">
                      <div>CPU: {build.components.cpu}</div>
                      <div>GPU: {build.components.gpu}</div>
                      <div>RAM: {build.components.ram}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      ${build.price.toLocaleString()}
                    </span>
                    <Link
                      to="/builder"
                      className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition"
                    >
                      Customize
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section
        className="relative bg-gradient-to-r from-black to-indigo-700 text-white"
        style={{
          backgroundImage: `url(${ctaBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for Readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-25">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Your Dream PC?
              </h2>
              <p className="text-lg md:text-xl mb-8">
                Start building your custom PC today with our intuitive builder
                tool.
              </p>
              <Link
                to="/builder"
                className="bg-white text-indigo-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition inline-block"
              >
                Start Building Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;