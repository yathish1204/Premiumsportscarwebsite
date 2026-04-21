import { useState } from "react";
import { motion } from "motion/react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import heroGif from "../imports/BigBoyToys_Export_2026-04-13_06-20-03-1.gif";

const carModels = [
  {
    id: 1,
    name: "Phantom GT-R",
    year: "2026",
    image: "https://images.unsplash.com/photo-1763165562062-91d744691c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    price: "$289,000",
    specs: { hp: "850 HP", speed: "0-60 in 2.8s", top: "205 MPH" }
  },
  {
    id: 2,
    name: "Inferno RSX",
    year: "2026",
    image: "https://images.unsplash.com/photo-1696581084151-8a038c7dfc83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    price: "$325,000",
    specs: { hp: "920 HP", speed: "0-60 in 2.5s", top: "218 MPH" }
  },
  {
    id: 3,
    name: "Apex Storm",
    year: "2026",
    image: "https://images.unsplash.com/photo-1742056024244-02a093dae0b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    price: "$275,000",
    specs: { hp: "780 HP", speed: "0-60 in 3.1s", top: "198 MPH" }
  }
];

const carParts = [
  { id: "engine", name: "Engine", detail: "Twin-turbo V8 with 850 HP output, advanced cooling system, and optimized air intake" },
  { id: "transmission", name: "Transmission", detail: "8-speed dual-clutch automatic with paddle shifters and race mode" },
  { id: "suspension", name: "Suspension", detail: "Adaptive magnetic ride control with adjustable dampers for track and comfort modes" },
  { id: "brakes", name: "Brakes", detail: "Carbon-ceramic brakes with 6-piston calipers and advanced ABS system" },
  { id: "aerodynamics", name: "Aerodynamics", detail: "Active rear spoiler and front splitter with dynamic downforce adjustment" },
  { id: "interior", name: "Interior", detail: "Hand-stitched leather, carbon fiber trim, 12.3\" digital display, premium sound system" },
  { id: "wheels", name: "Wheels & Tires", detail: "21\" forged aluminum wheels with high-performance summer tires" }
];

export default function App() {
  const [selectedPart, setSelectedPart] = useState(carParts[0]);
  const [currentModel, setCurrentModel] = useState(0);

  const nextModel = () => {
    setCurrentModel((prev) => (prev + 1) % carModels.length);
  };

  const prevModel = () => {
    setCurrentModel((prev) => (prev - 1 + carModels.length) % carModels.length);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={heroGif}
            alt="Luxury sports car"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-8 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-6"
              >
                <h1 className="text-7xl md:text-8xl tracking-tighter mb-2">
                  BigBoyToys
                </h1>
                <div className="h-1 w-24 bg-red-600" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl md:text-6xl mb-6 leading-tight"
              >
                Where Power Meets Precision
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl text-zinc-400 mb-10 max-w-lg"
              >
                Experience the ultimate collection of high-performance supercars engineered for those who demand excellence.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 text-lg transition-colors"
              >
                Explore Collection
              </motion.button>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-zinc-500">
            <span className="text-sm tracking-widest">SCROLL</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-px h-12 bg-gradient-to-b from-zinc-500 to-transparent"
            />
          </div>
        </motion.div>
      </section>

      {/* New Models Section */}
      <section className="py-32 px-8 md:px-16">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-7xl mb-4">2026 Collection</h2>
            <p className="text-xl text-zinc-400 max-w-2xl">
              The newest generation of supercars, pushing the boundaries of engineering and design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {carModels.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-zinc-900 mb-6">
                  <ImageWithFallback
                    src={car.image}
                    alt={car.name}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent opacity-60" />
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-red-600 text-sm tracking-widest">{car.year}</span>
                    <h3 className="text-3xl mt-2">{car.name}</h3>
                  </div>

                  <div className="flex gap-6 text-sm text-zinc-400">
                    <span>{car.specs.hp}</span>
                    <span>{car.specs.speed}</span>
                    <span>{car.specs.top}</span>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <span className="text-2xl">{car.price}</span>
                    <ChevronRight className="w-6 h-6 text-red-600 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Car Details Section */}
      <section className="py-32 px-8 md:px-16 bg-zinc-900/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-7xl mb-4">Engineered Excellence</h2>
            <p className="text-xl text-zinc-400 max-w-2xl">
              Explore every detail of our flagship model. Click on any component to learn more.
            </p>
          </motion.div>

          {/* Car Showcase with Navigation */}
          <div className="relative mb-12">
            <div className="relative h-[500px] flex items-center justify-center overflow-hidden bg-zinc-950/50">
              <motion.div
                key={currentModel}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <ImageWithFallback
                  src={carModels[currentModel].image}
                  alt={carModels[currentModel].name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 z-10">
                <motion.h3
                  key={`name-${currentModel}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl mb-2"
                >
                  {carModels[currentModel].name}
                </motion.h3>
                <motion.p
                  key={`price-${currentModel}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl text-zinc-400"
                >
                  {carModels[currentModel].price}
                </motion.p>
              </div>

              <button
                onClick={prevModel}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-zinc-950/80 hover:bg-zinc-900 p-3 transition-colors z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={nextModel}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-zinc-950/80 hover:bg-zinc-900 p-3 transition-colors z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
          </div>

          {/* Horizontal Scrollable Parts List */}
          <div className="mb-12">
            <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900">
              {carParts.map((part) => (
                <motion.button
                  key={part.id}
                  onClick={() => setSelectedPart(part)}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 whitespace-nowrap transition-all ${
                    selectedPart.id === part.id
                      ? "bg-red-600 text-white"
                      : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                  }`}
                >
                  {part.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Part Detail Display */}
          <motion.div
            key={selectedPart.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-zinc-900/50 p-12 border border-zinc-800"
          >
            <div className="max-w-4xl">
              <h3 className="text-3xl mb-6">{selectedPart.name}</h3>
              <p className="text-xl text-zinc-400 leading-relaxed">
                {selectedPart.detail}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-8 md:px-16">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl mb-8">Ready to Own the Road?</h2>
            <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
              Schedule a private viewing and experience these machines in person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-lg transition-colors"
              >
                Schedule Viewing
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-zinc-950 text-white px-12 py-4 text-lg transition-all"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
