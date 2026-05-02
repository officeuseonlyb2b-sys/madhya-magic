import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import statsBg from "@/assets/stats-bg.jpg";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Tours Completed" },
  { value: 10000, suffix: "+", label: "Happy Customers" },
  { value: 50, suffix: "+", label: "Destinations" },
];

const Counter = ({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1600;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div className="flex justify-center items-baseline gap-1 w-full overflow-hidden">
      <span
        className="
        font-extrabold
        text-white
        leading-none
        tracking-tight
        text-3xl
        sm:text-4xl
        md:text-5xl
        lg:text-6xl
        drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)]
      "
      >
        {count.toLocaleString()}
      </span>

      <span
        className="
        font-bold
        bg-gradient-to-r
        from-yellow-300
        to-amber-400
        bg-clip-text
        text-transparent
        text-xl
        sm:text-2xl
        md:text-3xl
        lg:text-4xl
      "
      >
        {suffix}
      </span>
    </div>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${statsBg})` }}
      />


      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-400/10 blur-[180px] rounded-full" />
      </div>

      {/* Content */}
      <div ref={ref} className="container mx-auto px-6 relative z-10 py-24">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-5">
            Our Journey in{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Numbers
            </span>
          </h2>

          <div className="w-28 h-1 mx-auto rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg shadow-amber-500/30" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group"
            >
              <div className="relative rounded-3xl border border-white/20 bg-black/25 backdrop-blur-sm px-6 py-10 text-center shadow-xl hover:bg-black/30 hover:border-amber-400/50 transition-all duration-500 overflow-hidden">
                
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-amber-500/10 to-transparent" />

                {/* Counter */}
                <motion.div
                  animate={inView ? { y: [0, -6, 0] } : {}}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                >
                  <Counter
                    target={stat.value}
                    suffix={stat.suffix}
                    inView={inView}
                  />
                </motion.div>

                {/* Label */}
                <p className="mt-5 text-white/90 text-xs md:text-sm tracking-[0.25em] uppercase font-semibold">
                  {stat.label}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;