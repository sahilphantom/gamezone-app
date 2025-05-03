import TrueFocus from "./TrueFocus"

function Hero() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-green-900/30 text-green-400 text-sm font-medium">
            Next-Gen Gaming Platform
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            <TrueFocus
              sentence="Dominate The Arena"
              blurAmount={3}
              borderColor="#22c55e"
              glowColor="rgba(34, 197, 94, 0.6)"
              animationDuration={0.7}
              pauseBetweenAnimations={2}
            />
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Join the ultimate gaming experience where skill meets strategy. Compete in tournaments, climb the
            leaderboards, and become a legend in the gaming community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-md transition-colors">
              Play Now
            </button>
            <button className="px-6 py-3 border border-green-900/50 hover:bg-green-900/20 text-white rounded-md transition-colors">
              View Games
            </button>
          </div>
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
    </main>
  )
}

export default Hero
