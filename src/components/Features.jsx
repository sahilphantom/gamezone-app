import React from 'react'

const Features = () => {
  return (
    <div className="container border-b border-green-900/30  mx-auto px-4  md:py-14">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        <div className="inline-block px-3 py-1  rounded-full bg-green-900/30 text-green-400 text-xl font-medium">
            Features
          </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {[
            {
              number: "01",
              title: "Competitive Tournaments",
              description: "Join daily tournaments with cash prizes and exclusive rewards",
            },
            {
              number: "02",
              title: "Cross-Platform Gaming",
              description: "Play seamlessly across PC, console, and mobile devices",
            },
            {
              number: "03",
              title: "Advanced Matchmaking",
              description: "AI-powered matchmaking for balanced and fair gameplay",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-green-900/30 bg-black/50 backdrop-blur-sm hover:border-green-500/50 transition-colors"
            >
              <div className="text-2xl font-bold text-green-500 mb-3">{feature.number}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        </div>
      
    </div>
  )
}

export default Features
