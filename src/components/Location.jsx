import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import SimpleMap from "@/components/SimpleMap";
const Location = () => {
  return (
    <section className="py-20 bg-[#00aeef]">
      <div className="mainContainer mx-auto ">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          {/* <ScrollReveal direction="left" className="col-span-1 lg:col-span-5"> */}
          <div className="col-span-1 lg:col-span-5">
            <SimpleMap />
          </div>
          {/* </ScrollReveal> */}

          <ScrollReveal direction="right" className="col-span-1 lg:col-span-7">
            <div className="text-white">
              <h2 className="h1 mb-6">LOCATION</h2>

              <p className="p2 mb-8 ">
                Dubailand is the ideal retreat for those looking to reconnect
                with nature and escape the city's hustle and bustle. This
                beautiful community will offer convenient access to key roads,
                major highways, and is just a short distance from Al Maktoum
                International Airport.
              </p>

              <h3 className="h1 mb-6">LANDMARKS NEARBY:</h3>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: "Sports City", time: "15-minute drive" },
                  { name: "Dubai Investment Park", time: "20-minute drive" },
                  {
                    name: "Al Maktoum\n International Airport",
                    time: "25-minute drive",
                  },
                  {
                    name: "Dubai International Airport",
                    time: "28-minute drive",
                  },
                ].map((landmark, index) => (
                  <motion.div
                    key={landmark.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="p1 whitespace-pre-line">{landmark.name}</p>
                    <p className="p1 ">{landmark.time}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Location;
