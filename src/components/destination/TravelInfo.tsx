import { motion } from "framer-motion";
import { Calendar, Car, Train, Plane } from "lucide-react";
import type { TravelInfo as TravelInfoType } from "@/data/destinationDetails";

const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const TravelInfo = ({ info }: { info: TravelInfoType }) => (
  <motion.div {...fade} className="mt-16 md:mt-24">
    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
      Travel Information
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[
        { icon: Calendar, title: "Best Time to Visit", body: info.bestTime },
        { icon: Car, title: "By Road", body: info.road },
        { icon: Train, title: "By Rail", body: info.rail },
        { icon: Plane, title: "By Air", body: info.air },
      ].map(({ icon: Icon, title, body }) => (
        <div key={title} className="bg-card rounded-xl p-5 shadow-[var(--shadow-card)] flex gap-4">
          <Icon className="text-primary shrink-0" size={22} />
          <div>
            <h3 className="font-semibold text-foreground mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{body}</p>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default TravelInfo;
