"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";

interface Landmark {
  name: string;
  time: string;
  x: number;
  y: number;
}

const landmarks: Landmark[] = [
  { name: "Sports City", time: "15-minute drive", x: 25, y: 45 },
  { name: "Dubai Investment Park", time: "20-minute drive", x: 15, y: 65 },
  {
    name: "Al Maktoum International Airport",
    time: "25-minute drive",
    x: 70,
    y: 75,
  },
  {
    name: "Dubai International Airport",
    time: "28-minute drive",
    x: 85,
    y: 35,
  },
  { name: "DAMAC Islands", time: "Your New Home", x: 45, y: 55 },
  // 🌍 New location added
  {
    name: "25°01'23.1\"N 55°17'46.0\"E",
    time: "Approx. Palm Jumeirah area",
    x: 60,
    y: 50,
  },
];

export function InteractiveMap() {
  const [selectedLandmark, setSelectedLandmark] = useState<Landmark | null>(
    null
  );

  return (
    <div className="relative w-full h-[29.25rem] bg-[#f8f5f0] rounded-lg overflow-hidden">
      <Image
        src="https://ext.same-assets.com/343990903/65032890.png"
        alt="Location Map"
        fill
        className="object-cover"
      />

      {landmarks.map((landmark, index) => (
        <motion.button
          key={landmark.name}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.2 }}
          className="absolute"
          style={{
            left: `${landmark.x}%`,
            top: `${landmark.y}%`,
            transform: "translate(-50%, -50%)",
          }}
          onClick={() => setSelectedLandmark(landmark)}
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
            className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${
              landmark.name === "DAMAC Islands"
                ? "bg-[#00BCD4]"
                : "bg-[#d4af37]"
            }`}
          >
            <MapPin className="w-5 h-5 text-white" />
          </motion.div>
        </motion.button>
      ))}

      <AnimatePresence>
        {selectedLandmark && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-4 rounded-lg shadow-xl z-10"
          >
            <button
              onClick={() => setSelectedLandmark(null)}
              className="absolute -top-2 -right-2 bg-gray-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
            >
              ×
            </button>
            <h3 className="font-bold text-gray-900">{selectedLandmark.name}</h3>
            <p className="text-sm text-gray-600">{selectedLandmark.time}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
