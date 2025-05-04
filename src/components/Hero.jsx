import TrueFocus from "./TrueFocus"
import GeometricBackground from "./GeometricBackground"

function Hero() {
  return (
    <main className="relative container border-b border-green-900/30 mx-auto px-4 py-12 md:py-24">
      {/* Background component */}
      <GeometricBackground />

      {/* <SplashCursor /> */}
      <div className="flex flex-col py-3.5 items-center justify-center text-center max-w-4xl mx-auto relative z-10">
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-green-900/40 text-green-400 text-sm font-medium backdrop-blur-sm border border-green-500/20">
            Next-Gen Gaming Platform
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
            <TrueFocus
              sentence="Dominate The Arena"
              blurAmount={3}
              borderColor="#22c55e"
              glowColor="rgba(34, 197, 94, 0.6)"
              animationDuration={0.7}
              pauseBetweenAnimations={2}
            />
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto drop-shadow">
            Join the ultimate gaming experience where skill meets strategy. Compete in tournaments, climb the
            leaderboards, and become a legend in the gaming community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-md transition-colors shadow-lg shadow-green-900/50">
              Play Now
            </button>
            <button className="px-6 py-3 border border-green-500/50 hover:bg-green-900/30 text-white rounded-md transition-colors backdrop-blur-sm">
              View Games
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero
