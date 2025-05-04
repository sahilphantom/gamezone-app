
import { motion } from "framer-motion"

// Helper function to conditionally join classNames
function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-green-500/[0.08]",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-green-500/[0.15]",
            "shadow-[0_8px_32px_0_rgba(0,255,0,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.2),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

function GeometricBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#050505] -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/[0.1] via-transparent to-green-500/[0.1] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-green-500/[0.3]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-emerald-500/[0.3]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-green-300/[0.3]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-lime-500/[0.3]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-green-700/[0.3]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />

        <ElegantShape
          delay={0.45}
          width={250}
          height={250}
          rotate={10}
          gradient="from-green-400/[0.35]"
          className="left-[40%] md:left-[45%] top-[60%] md:top-[65%]"
        />

        <ElegantShape
          delay={0.55}
          width={180}
          height={180}
          rotate={-5}
          gradient="from-emerald-300/[0.35]"
          className="right-[30%] md:right-[35%] top-[30%] md:top-[35%]"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/70 pointer-events-none" />
    </div>
  )
}

export default GeometricBackground
