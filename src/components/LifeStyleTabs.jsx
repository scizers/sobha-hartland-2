"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Button } from "./ui/button";

const tabs = [
  {
    id: "live",
    label: "Live",
    position: "left",
    // icon: "/f6a6f049-34c3-474f-8621-3b788dc2301f.png",
    title: "Crafting a Lifestyle of Your Dreams",
    text: `Sobha Hartland II is a stunning mixed-use community featuring lush green spaces and sustainable amenities. It offers a harmonious blend of residential and recreational options, creating an ideal urban living environment intertwined with nature. 

Within this community is Sobha Estates, an exclusive gated villa enclave offering luxurious 5- and 6-bedroom villas. This private retreat emphasises both luxury and privacy, surrounded by vibrant greenery and serene waterways.

The Riverside Crescent, Skyscape and Skyvue residences further enhance the appeal. Riverside Crescent features six unique towers for waterfront living, while Skyscape, comprising Aura, Altius, and Avenue boasts stunning views of the lagoon and Dubai Downtown and Skyvue consists of three towers overlooking the iconic Dubai skyline and Ras Al Khor wildlife sanctuary. Together, they redefine urban sophistication and luxury living in Dubai.`,
    img: "/sobha-hartland2/lifestyleTabs/tab1.webp",
  },
  {
    id: "entertainment",
    label: "Entertainment",
    position: "right",
    // icon: "/icons/pool.svg",
    title: "Leisure that Refreshes Your Soul",
    text: `The amenities are thoughtfully designed to cater to your every need and desire, providing a holistic living experience. Enjoy a 40-seater indoor movie theatre, relax in the sensory and zen gardens, and stay active with battle ropes, jumping blocks, and an aerobic zone. The community also features a dedicated gardening zone and spaces for chess and carrom, ensuring there's always something exciting to enrich your life.`,
    img: "/sobha-hartland2/lifestyleTabs/tab2.webp",
  },
  {
    id: "dine",
    label: "Dine",
    position: "left",
    // icon: "/icons/dine.svg",
    title: "Where Dining Becomes an Experience",
    text: `A vibrant community hub with diverse dine-in restaurants and cafés, each offering a unique ambiance and cuisine to suit every palate. Whether you're craving gourmet dishes crafted by world-class chefs or a casual coffee with friends, the community has it all. The BBQ area, surrounded by lush greenery, invites you to relax and savour the simple joys of life—great food and an unforgettable dining experience under the open sky.`,
    img: "/sobha-hartland2/lifestyleTabs/tab3.webp",
  },
];

export default function LifestyleTabs({ onOpenPopup }) {
  const [activeTab, setActiveTab] = useState("live");
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    tabs.forEach((tab) => {
      const section = sectionRefs.current[tab.id];
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleTabClick = (id) => {
    const section = sectionRefs.current[id];
    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="w-full py-16">
      <div className="mainContainer grid grid-cols-1 lg:grid-cols-12 items-start gap-10">
        {/* LEFT TABS */}

        {/* LEFT TABS */}
        <div className="lg:col-span-3 sticky top-24 h-max">
          <div className="pointer-events-none absolute inset-y-0 z-10 right-0 w-40 bg-gradient-to-l from-white to-transparent"></div>

          <div className="flex flex-col gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={clsx(
                  "flex gap-4 items-center px-16 py-8 border rounded-[30px] transition-all text-left p1 hover:border-[#eee3da] hover:bg-[#eee3da]",
                  activeTab === tab.id
                    ? "bg-[#eee3da] border-[#eee3da]"
                    : "bg-white border border-gray-300 hover:bg-gray-50"
                )}
              >
                {/* <Image src={tab.icon} width={28} height={28} alt="" /> */}
                <span
                  className={clsx(
                    "text-lg font-medium",
                    activeTab === tab.id ? "text-[#b48a62]" : "text-gray-700"
                  )}
                >
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SCROLLABLE CONTENT */}
        <div className="lg:col-span-9  flex flex-col gap-36 pt-6 pr-4">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              id={tab.id}
              ref={(el) => (sectionRefs.current[tab.id] = el)}
              className="scroll-mt-24"
            >
              {/* Content Block */}
              <div className="grid lg:grid-cols-12  items-start ">
                {/* IMAGE */}
                <div
                  className={`lg:col-span-7 ${
                    tab.position === "left" ? "order-1" : "order-2"
                  } `}
                >
                  <Image
                    src={tab.img}
                    alt={tab.label}
                    width={900}
                    height={700}
                    className="w-full h-auto rounded-xl"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* TEXT */}
                <div
                  className={`lg:col-span-5 flex flex-col gap-5 ${
                    tab.position === "left" ? "order-2 " : "order-1 "
                  }`}
                >
                  <p
                    className={`text-sm tracking-widest text-[#d3b08d] uppercase  ${
                      tab.position === "left" ? " pl-5" : " pr-5"
                    }`}
                  >
                    {tab.label}
                  </p>

                  <h3
                    className={`h2 italic text-gray-900  border-b border-gray-300 pb-4  ${
                      tab.position === "left" ? " pl-5" : " pr-5"
                    }`}
                  >
                    {tab.title}
                  </h3>

                  <p
                    className={`text-gray-600 max-h-[6.5rem] overflow-y-auto custom-scrollbar whitespace-pre-line p3 ${
                      tab.position === "left" ? "px-5" : "mr-5 p-2"
                    }`}
                  >
                    {tab.text}
                  </p>

                  <div
                    className={`flex gap-4 mt-4  ${
                      tab.position === "left" ? " pl-5" : " pr-5"
                    }`}
                  >
                    <div>
                      <Button
                        variant="outlineBlack"
                        size="sm"
                        className="  "
                        onClick={onOpenPopup}
                      >
                        Register Your Interest
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
