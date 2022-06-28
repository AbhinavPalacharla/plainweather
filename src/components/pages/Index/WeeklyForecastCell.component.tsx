import React from "react";
import { z } from "zod";

const propSchema = z.object({
  day: z.enum(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]),
  high: z.number(),
  low: z.number(),
});

export const WeeklyForecastCell: React.FC<z.infer<typeof propSchema>> = ({
  day,
  high,
  low,
}) => {
  return (
    <div>
      <p className="font-light">{day}</p>
      <p className="pt-2 font-semibold">{high}</p>
      <p className="pt-2 font-semibold">{low}</p>
    </div>
  );
};
