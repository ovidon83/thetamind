'use client';

import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white font-sans relative overflow-hidden">
      
      {/* Global Spiritual Network Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* World Map Constellation */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1200 800">
          <defs>
            <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="1"/>
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0"/>
            </radialGradient>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.8"/>
            </linearGradient>
          </defs>
          
          {/* Global Network Connections */}
          <g className="animate-pulse-network">
            {/* North America to Europe */}
            <path d="M200,250 Q400,150 600,280" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" opacity="0.6">
              <animate attributeName="stroke-dasharray" values="0,500;250,250;500,0;0,500" dur="4s" repeatCount="indefinite"/>
            </path>
            
            {/* Europe to Asia */}
            <path d="M600,280 Q750,200 900,300" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" opacity="0.6">
              <animate attributeName="stroke-dasharray" values="0,400;200,200;400,0;0,400" dur="5s" repeatCount="indefinite"/>
            </path>
            
            {/* Asia to Australia */}
            <path d="M900,300 Q950,400 1000,500" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" opacity="0.6">
              <animate attributeName="stroke-dasharray" values="0,300;150,150;300,0;0,300" dur="3s" repeatCount="indefinite"/>
            </path>
            
            {/* North America to South America */}
            <path d="M200,250 Q250,350 300,450" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" opacity="0.6">
              <animate attributeName="stroke-dasharray" values="0,350;175,175;350,0;0,350" dur="4.5s" repeatCount="indefinite"/>
            </path>
            
            {/* Cross-Pacific Connection */}
            <path d="M900,300 Q600,200 200,250" stroke="url(#connectionGradient)" strokeWidth="1.5" fill="none" opacity="0.4">
              <animate attributeName="stroke-dasharray" values="0,800;400,400;800,0;0,800" dur="8s" repeatCount="indefinite"/>
            </path>
            
            {/* Africa connections */}
            <path d="M600,280 Q650,350 700,420" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" opacity="0.6">
              <animate attributeName="stroke-dasharray" values="0,250;125,125;250,0;0,250" dur="3.5s" repeatCount="indefinite"/>
            </path>
          </g>
          
          {/* Spiritual Community Nodes (Major Cities/Regions) */}
          <g className="spiritual-nodes">
            {/* North America */}
            <circle cx="200" cy="250" r="8" fill="url(#nodeGradient)" className="animate-pulse-node">
              <animate attributeName="r" values="6;12;6" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="180" cy="280" r="5" fill="#8B5CF6" opacity="0.7" className="animate-pulse-node">
              <animate attributeName="r" values="3;8;3" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            
            {/* Europe */}
            <circle cx="600" cy="280" r="8" fill="url(#nodeGradient)" className="animate-pulse-node">
              <animate attributeName="r" values="6;12;6" dur="3.2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="580" cy="260" r="5" fill="#3B82F6" opacity="0.7" className="animate-pulse-node">
              <animate attributeName="r" values="3;8;3" dur="2.8s" repeatCount="indefinite"/>
            </circle>
            
            {/* Asia */}
            <circle cx="900" cy="300" r="8" fill="url(#nodeGradient)" className="animate-pulse-node">
              <animate attributeName="r" values="6;12;6" dur="2.8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="850" cy="280" r="5" fill="#EC4899" opacity="0.7" className="animate-pulse-node">
              <animate attributeName="r" values="3;8;3" dur="3.5s" repeatCount="indefinite"/>
            </circle>
            
            {/* Australia */}
            <circle cx="1000" cy="500" r="6" fill="#8B5CF6" opacity="0.8" className="animate-pulse-node">
              <animate attributeName="r" values="4;10;4" dur="2.3s" repeatCount="indefinite"/>
            </circle>
            
            {/* South America */}
            <circle cx="300" cy="450" r="6" fill="#3B82F6" opacity="0.8" className="animate-pulse-node">
              <animate attributeName="r" values="4;10;4" dur="2.7s" repeatCount="indefinite"/>
            </circle>
            
            {/* Africa */}
            <circle cx="700" cy="420" r="6" fill="#EC4899" opacity="0.8" className="animate-pulse-node">
              <animate attributeName="r" values="4;10;4" dur="3.1s" repeatCount="indefinite"/>
            </circle>
          </g>
        </svg>


      </div>

      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900" style={{height: '100vh', minHeight: '600px'}}>
        {/* Hero Background Image - black & white minimalist */}
        <div 
          className="absolute inset-0 bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(/hero.png?v=3)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            filter: 'grayscale(100%) contrast(1.1) brightness(0.8)',
          }}
        >
        </div>
        {/* Minimalist overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-purple-900/20 to-slate-900/40"></div>
        
        <div className="relative z-10 flex items-center justify-center h-screen px-6">
          {/* Centered text container to match the symmetric background */}
          <div className="max-w-4xl mx-auto text-center">
          
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
            Awaken the world<br />
            through spiritual circles
          </h1>
          
          <div className="mt-12">
            
            <p className="text-lg md:text-xl font-medium text-gray-100 mb-12 drop-shadow-lg">
              What if every neighborhood had a spiritual circle?
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button 
              data-tally-open="mR19l4" 
              data-tally-layout="modal" 
              data-tally-hide-title="1"
              className="bg-gradient-to-r from-purple-600/80 to-blue-600/80 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-500/90 hover:to-blue-500/90 transition-all duration-300 shadow-2xl border border-white/20 hover:border-white/30 cursor-pointer hover:shadow-3xl hover:-translate-y-0.5 backdrop-blur-sm"
            >
              Join the Movement
            </button>
          </div>

          </div>
        </div>
      </div>

      {/* Three Simple Cards */}
      <div className="relative z-10 px-6 py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              Global Network
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
              The Spiritual Nervous System<br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">of the Planet</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl">❂</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors">Spiritual Circles</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Host or Join spiritual circles for meditation, prayer, healing, soaking, yoga, teaching, and deep connection. Find your spiritual tribe and grow together in presence, love, and transformation.
                </p>
                <div className="flex items-center text-purple-600 font-medium text-sm">
                  <span>Connect & Grow</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl">🏘️</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">Build Community</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Spiritual circles that transform communities, neighborhoods and cities by the power of love. Let your Divine Light shine and support others in your area.
                </p>
                <div className="flex items-center text-blue-600 font-medium text-sm">
                  <span>Transform Together</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl">🌍</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-700 transition-colors">Awaken the World</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  People that fire together, wire together. Awaken consciousness soul by soul, circle by circle neighborhood by neighborhood, city by city. Inner change - global effect.
                </p>
                <div className="flex items-center text-indigo-600 font-medium text-sm">
                  <span>Global Impact</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>

          </div>

          {/* Connection visualization */}
          <div className="relative">
            <svg className="w-full h-24 opacity-30" viewBox="0 0 800 100">
              <defs>
                <linearGradient id="connectionLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0"/>
                  <stop offset="50%" stopColor="#3B82F6" stopOpacity="1"/>
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path d="M0,50 Q200,20 400,50 T800,50" stroke="url(#connectionLine)" strokeWidth="2" fill="none">
                <animate attributeName="stroke-dasharray" values="0,1000;500,500;1000,0;0,1000" dur="4s" repeatCount="indefinite"/>
              </path>
              <circle cx="200" cy="35" r="3" fill="#8B5CF6" opacity="0.8">
                <animate attributeName="r" values="2;5;2" dur="2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="400" cy="50" r="3" fill="#3B82F6" opacity="0.8">
                <animate attributeName="r" values="2;5;2" dur="2.5s" repeatCount="indefinite"/>
              </circle>
              <circle cx="600" cy="35" r="3" fill="#6366F1" opacity="0.8">
                <animate attributeName="r" values="2;5;2" dur="3s" repeatCount="indefinite"/>
              </circle>
            </svg>
          </div>

        </div>
      </div>

      {/* How It Works - Simple Steps */}
      <div className="relative z-10 px-6 py-12 bg-white overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-32 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-200/15 to-indigo-200/15 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          
          <div className="text-center mb-20">
            
            <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
              How <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">ThetaMind</span> Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Simple steps to create lasting spiritual transformation in your community
            </p>
          </div>

          <div className="space-y-20">
            
            {/* Step 1: Discover Circles */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    1
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Discover Circles</h3>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Find spiritual circles happening in your neighborhood. Browse by location, practice type, and schedule to connect with like-minded souls nearby.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">🧘‍♀️ Meditation</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">🙏 Prayer</span>
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">✨ Healing</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">🌸 Yoga</span>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-blue-200 rounded-3xl rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-gray-100">
                    {/* Mock UI for Discovering Circles */}
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-4 mb-4">
                      <h4 className="text-white font-bold text-lg mb-2">Circles Near You</h4>
                      <div className="bg-white/20 rounded-lg p-2">
                        <input placeholder="📍 San Francisco, CA" className="bg-transparent text-white placeholder-white/80 w-full outline-none" />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl border border-purple-100">
                        <div className="w-10 h-10 bg-purple-200 rounded-lg flex items-center justify-center">🧘‍♀️</div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">Morning Meditation</p>
                          <p className="text-sm text-gray-600">Sarah's Garden • 0.3 miles</p>
                        </div>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Today 7am</span>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
                        <div className="w-10 h-10 bg-blue-200 rounded-lg flex items-center justify-center">🙏</div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">Unity Prayer Circle</p>
                          <p className="text-sm text-gray-600">Community Center • 0.8 miles</p>
                        </div>
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Sun 6pm</span>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-xl border border-indigo-100">
                        <div className="w-10 h-10 bg-indigo-200 rounded-lg flex items-center justify-center">✨</div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900">Healing Circle</p>
                          <p className="text-sm text-gray-600">Mark's Backyard • 1.2 miles</p>
                        </div>
                        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Wed 7pm</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Host a Circle */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-3xl -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-gray-100">
                    {/* Mock UI for Hosting a Circle */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-4 mb-4">
                      <h4 className="text-white font-bold text-lg mb-2">Create Your Circle</h4>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Circle Name</label>
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                          <span className="text-gray-900">Evening Meditation & Tea</span>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Practice Type</label>
                        <div className="flex gap-2">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">🧘‍♀️ Meditation</span>
                          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">🍵 Tea Ceremony</span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center">
                            <span className="text-gray-900">Every Saturday</span>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center">
                            <span className="text-gray-900">6:00 PM</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-green-800 text-sm font-medium">Circle Published Successfully!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    2
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Host a Circle</h3>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Open your space and create meaningful gatherings. Set your schedule, practice preferences, and welcome others into your spiritual community.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">🏡 Your Space</span>
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">📅 Your Schedule</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">👥 Your Community</span>
                </div>
              </div>
            </div>

            {/* Step 3: Community Chat */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    3
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Connect & Share</h3>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Stay connected with your circle through dedicated chat channels. Coordinate gatherings, share insights, and build lasting spiritual friendships.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">💬 Group Chat</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">📸 Share Moments</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">🤝 Coordinate</span>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-3xl rotate-2 group-hover:rotate-4 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-gray-100">
                    {/* Mock UI for Community Chat */}
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-4 mb-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm">💬</span>
                      </div>
                      <div>
                        <h4 className="text-white font-bold">Evening Meditation Group</h4>
                        <p className="text-white/80 text-xs">12 members online</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 max-h-64 overflow-hidden">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center text-xs">S</div>
                        <div className="flex-1">
                          <div className="bg-gray-100 rounded-2xl px-4 py-2">
                            <p className="text-sm text-gray-900">I'll bring some herbal tea for after meditation 🍵</p>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">Sarah • 2 min ago</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-xs">M</div>
                        <div className="flex-1">
                          <div className="bg-gray-100 rounded-2xl px-4 py-2">
                            <p className="text-sm text-gray-900">Perfect! Here's a photo from last Saturday's sunset meditation ✨</p>
                            <div className="mt-2 bg-gradient-to-br from-orange-200 to-purple-200 rounded-lg h-20 flex items-center justify-center">
                              <span className="text-xs text-gray-600">🌅 Beautiful sunset</span>
                            </div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">Mark • 5 min ago</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-xs">L</div>
                        <div className="flex-1">
                          <div className="bg-gray-100 rounded-2xl px-4 py-2">
                            <p className="text-sm text-gray-900">Count me in for tomorrow! Should I bring my singing bowl? 🎵</p>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">Lisa • 8 min ago</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex gap-2">
                      <input placeholder="Type your message..." className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm outline-none focus:border-purple-300" />
                      <button className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="relative z-10 px-6 py-8 bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">θ</span>
            </div>
            <span className="font-bold text-white">ThetaMind</span>
          </div>
          <div className="text-gray-400 text-sm">
            © 2024 ThetaMind. Building the future of spiritual community.
          </div>
        </div>
      </footer>

      {/* Enhanced Animations for Global Network */}
      <style jsx>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes pulse-network {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-float-gentle {
          animation: float-gentle 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-pulse-network {
          animation: pulse-network 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
      `}</style>

    </div>
  );
}