import { motion } from "framer-motion";
import { useMemo } from "react";

const GitHubGrid = () => {
  const weeks = 20;
  const days = 7;

  const grid = useMemo(() => {
    return Array.from({ length: weeks }, () =>
      Array.from({ length: days }, () => Math.random())
    );
  }, []);

  const getLevel = (val: number) => {
    if (val < 0.3) return "bg-primary/5";
    if (val < 0.5) return "bg-primary/15";
    if (val < 0.7) return "bg-primary/30";
    if (val < 0.85) return "bg-primary/50";
    return "bg-primary/80";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card border border-border rounded-xl p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-mono text-sm text-primary font-semibold">Contribution Activity</h4>
        <span className="font-mono text-xs text-muted-foreground">1,247 contributions in the last year</span>
      </div>
      <div className="flex gap-[3px] overflow-x-auto pb-2">
        {grid.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.map((day, di) => (
              <motion.div
                key={`${wi}-${di}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (wi * 7 + di) * 0.003 }}
                className={`w-3 h-3 rounded-sm ${getLevel(day)} hover:ring-1 hover:ring-primary/50 transition-all cursor-pointer`}
                title={`${Math.floor(day * 10)} contributions`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-3 justify-end">
        <span className="text-xs text-muted-foreground font-mono">Less</span>
        {[5, 15, 30, 50, 80].map((level) => (
          <div key={level} className={`w-3 h-3 rounded-sm bg-primary/${level}`} />
        ))}
        <span className="text-xs text-muted-foreground font-mono">More</span>
      </div>
    </motion.div>
  );
};

export default GitHubGrid;
