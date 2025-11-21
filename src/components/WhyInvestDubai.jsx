"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import Image from "next/image";

const benefits = [
  {
    title: "Higher Rental Yields",
    description:
      "Investors can earn rental yields of up to 8-10% annually, surpassing many global markets.",
    image: "/sobha-hartland2/whyInvest/img1.jpeg",
  },
  {
    title: "Zero Taxes",
    description:
      "The UAE offers zero income, capital gains, and wealth tax, maximising returns for investors.",
    image: "/sobha-hartland2/whyInvest/img2.jpeg",
  },
  {
    title: "Premium Healthcare",
    description:
      "With strong healthcare investments, the city is ideal for supporting your health and wellbeing.",
    image: "/sobha-hartland2/whyInvest/img3.jpeg",
  },
  {
    title: "World Class Education",
    description:
      "Dubai offers top-tier schools and universities with globally recognized curricula, ideal for families and expatriates.",
    image: "/sobha-hartland2/whyInvest/img4.jpeg",
  },
  {
    title: "Entertainment Hub",
    description:
      "From iconic landmarks to theme parks and cultural events, Dubai is a world-class entertainment destination.",
    image: "/sobha-hartland2/whyInvest/img5.jpeg",
  },
  {
    title: "UAE Golden Visa",
    description:
      "Real estate investments in Dubai can grant you long-term residency and exclusive Golden Visa benefits.",
    image: "/sobha-hartland2/whyInvest/img6.jpeg",
  },
  {
    title: "Communal Safety",
    description:
      "The UAE ranks among the world's safest nations, with a well-developed, effective law enforcement system.",
    image: "/sobha-hartland2/whyInvest/img7.jpeg",
  },
  {
    title: "Touristic Appeal",
    description:
      "Dubai's iconic landmarks, luxury shopping, and vibrant culture make it a top global tourist destination.",
    image: "/sobha-hartland2/whyInvest/img8.jpeg",
  },
];

export default function WhyInvestDubai() {
  return (
    <section className="py-16 lg:py-24 mainContainer mx-auto bg-white">
      <h2 className="h1 text-center mb-12">WHY INVEST IN DUBAI?</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8">
        {benefits.map((benefit, index) => (
          <ScrollReveal key={benefit.title} delay={index * 0.1}>
            <div className="bg-white rounded-[10px] overflow-hidden  h-full flex flex-col">
              <Image
                src={benefit.image}
                alt={benefit.title}
                width={400}
                height={250}
                className="w-full h-auto object-cover"
              />
              <div className="py-4 flex flex-col flex-grow">
                <h3 className="p2 font-medium !tracking-tighter mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm  !tracking-tighter">
                  {benefit.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
