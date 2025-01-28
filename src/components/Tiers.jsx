import { motion } from "framer-motion";
import { GoCheckCircle } from "react-icons/go";
import { RiCloseCircleLine } from "react-icons/ri";
import { IoStar } from "react-icons/io5";
import { useState } from "react";
import solanaIcon from "../images/solana-sol-logo.png";
import ethereumIcon from "../images/ethereum.png";

const pricingData = [
  [
    { label: "AI Search Engine", value: [1, 1, 1] },
    { label: "Spectre AI Dapp", value: [1, 1, 1] },
    { label: "AI Lounge", value: [0, 1, 1] },
    { label: "AI Prediction Mainbot", value: [0, 1, 1] },
    { label: "Sentiment Analysis Basic", value: [1, 1, 1] },
    { label: "Sentiment Analysis Pro", value: [0, 1, 1] },
    { label: "Sentiment Analysis Charts", value: [0, 1, 1] },
    { label: "Technical Analysis Basic", value: [1, 1, 1] },
    { label: "SpectPulse - SocialFi", value: [1, 1, 1] },
    { label: "Revenue Share & Staking (35% pool)", value: [0, 0, 1] },
    { label: "Revenue Share & Staking (50% pool)", value: [0, 0, 0] },
  ],
  [
    { label: "AI Search Engine", value: [1, 1, 1] },
    { label: "Spectre AI Dapp", value: [1, 1, 1] },
    { label: "AI Lounge", value: [0, 1, 1] },
    { label: "AI Prediction Mainbot", value: [0, 1, 1] },
    { label: "Sentiment Analysis Basic", value: [1, 1, 1] },
    { label: "Sentiment Analysis Pro", value: [0, 1, 1] },
    { label: "Sentiment Analysis Charts", value: [0, 0, 1] },
    { label: "Technical Analysis Basic", value: [0, 1, 1] },
    { label: "SpectPulse - SocialFi", value: [0, 1, 1] },
    { label: "Revenue Share & Staking (35% pool)", value: [0, 0, 1] },
    { label: "Revenue Share & Staking (50% pool)", value: [0, 0, 0] },
  ],
];
export default function Tiers() {
  const [activeTab, setActiveTab] = useState(0);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <section id="tires" className="bg-[#2d1b55]/10 py-48">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-52">
        <div className="flex flex-col gap-8">
          <div className="px-4 lg:px-20 md:pt-16 lg:pt-24 pb-8 border bg-neutral-950 border-gray-900 rounded-lg flex flex-col gap-4" >
            <p className="grid grid-cols-2 items-center gap-4 lg:text-xl xl:text-2xl 2xl:text-3xl">
              <div />
              <div className="flex justify-between">
                <p className="hidden md:block text-white text-2xl font-bold px-2 text-center">
                  GLLIMPSE
                </p>
                <p className="hidden md:block text-white text-2xl font-bold px-2 text-center">
                  APERTURE
                </p>
                <p className="hidden md:block text-white text-2xl font-bold px-2 text-center">
                  GOD'S EYE
                </p>
              </div>
            </p>
            <p
              className="p-3 bg-neutral-950 rounded-lg text-pink-500 cursor-pointer flex items-center w-60 justify-between"
              
            >
              <img src={ethereumIcon} alt="Solana Icon" className="w-10" />
              <span class="ml-4 text-2xl">Ethereum</span>
            </p>
            {pricingData[activeTab].map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-4 lg:text-xl xl:text-2xl 2xl:text-3xl"
              >
                <span className="flex-1">{item.label}</span>
                <div className="grid grid-cols-3 gap-16 lg:gap-36 mr-4">
                  {item.value.map((value, value_index) =>
                    value ? (
                      <GoCheckCircle
                        key={value_index}
                        className="text-blue-400"
                      />
                    ) : (
                      <RiCloseCircleLine
                        key={value_index}
                        className="text-gray-400"
                      />
                    )
                  )}
                </div>
              </div>
            ))}

            <p
              className="p-3 mt-24 bg-neutral-950 rounded-lg text-pink-500 cursor-pointer flex items-center w-48 justify-between"
              
            >
              <img src={solanaIcon} alt="Solana Icon" className="w-10" />
              <span class="ml-4 text-3xl">Solana</span>
            </p>
            {pricingData[activeTab + 1].map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-4 lg:text-xl xl:text-2xl 2xl:text-3xl"
              >
                <span className="flex-1">{item.label}</span>
                <div className="grid grid-cols-3 gap-16 lg:gap-36 mr-4">
                  {item.value.map((value, value_index) =>
                    value ? (
                      <GoCheckCircle
                        key={value_index}
                        className="text-purple-400"
                      />
                    ) : (
                      <RiCloseCircleLine
                        key={value_index}
                        className="text-gray-400"
                      />
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* <div className="w-full absolute -top-28 left-0 z-20 flex flex-col md:flex-row items-center justify-end px-12">
            <div className="flex gap-5 text-2xl text-center font-normal mt-20">
              <span
                className="p-3 bg-neutral-950 border border-gray-900 rounded-lg text-pink-500 cursor-pointer"
                style={{backgroundColor: "#330133"}}
                onClick={() => setActiveTab(0)}
              >
                Ethereum
              </span>
              <span
                className="p-3 bg-neutral-950 border border-gray-900 rounded-lg text-blue-500 cursor-pointer"
                style={{backgroundColor: "#330133"}}
                onClick={() => setActiveTab(1)}
              >
                Solana
              </span>
            </div>
            <div className="flex items-center gap-10 mt-4 md:mt-10">
              <div className="md:w-32 p-2 md:py-6 bg-neutral-950 border border-gray-900 rounded-lg flex flex-col items-center" style={{backgroundColor: "#330133"}}>
                <span className="hidden md:flex text-white text-2xl font-bold">
                  GLLIMPSE
                </span>
                <span className="text-purple-500">FREE</span>
              </div>
              <div className="md:w-32 p-2 md:py-6 bg-neutral-950 border border-gray-900 rounded-lg flex flex-col items-center" style={{backgroundColor: "#330133"}}>
                <span className="hidden md:flex text-white text-2xl font-bold">
                  APERTURE
                </span>
                <span className="text-purple-500">500 SPECTRE</span>
              </div>
              <div className="md:w-32 p-2 md:py-6 bg-neutral-950 border border-gray-900 rounded-lg flex flex-col items-center" style={{backgroundColor: "#330133"}}>
                <span className="hidden md:flex text-white text-2xl font-bold">
                  GOD'S EYE
                </span>
                <span className="text-purple-500">FREE</span>
              </div>
              <div className="w-24 py-6 bg-neutral-950 border border-gray-900 rounded-lg flex flex-col items-center">
                <span className="hidden md:flex text-white text-2xl font-bold">*Tire4</span>
                <span className="text-purple-500">FREE</span>
              </div>
            </div>
          </div> */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-4"
          >
            <motion.div
              variants={item}
              className="bg-neutral-950 border border-gray-900 p-4 rounded-lg flex flex-col items-start gap-4"
              
            >
              <div className="flex items-center gap-2">
                <IoStar className="text-purple-100 text-2xl" />
                <span className="text-xl">GLLIMPSE</span>
              </div>
              <span>Free-Spectre AI Search Engine is free at its core</span>
            </motion.div>
            <motion.div
              variants={item}
              className="bg-neutral-950 border border-gray-900 p-4 rounded-lg flex flex-col items-start gap-4"
              
            >
              <div className="flex items-center gap-2">
                <IoStar className="text-pink-400 text-2xl" />
                <span className="text-xl">APERTURE</span>
              </div>
              <span>Standard-0.005% of Tokens (500 SPECTRE tokens)</span>
            </motion.div>
            <motion.div
              variants={item}
              className="bg-neutral-950 border border-gray-900 p-4 rounded-lg flex flex-col items-start gap-4"
              
            >
              <div className="flex items-center gap-2">
                <IoStar className="text-green-200 text-2xl" />
                <span className="text-xl">GOD'S EYE</span>
              </div>
              <span>Advanced-0.01% of Tokens(1000 SPECTRE tokens)</span>
            </motion.div>
            {/* <motion.div
      variants={item} className="bg-neutral-950 border border-gray-900 p-4 rounded-lg flex flex-col items-start gap-4">
              <div className="flex items-center gap-2">
                <IoStar className="text-green-500 text-2xl" />
                <span className="text-xl">*Tire4</span>
              </div>
              <span>Premium-0.07% of Tokens(7000 PECTRE tokens)</span>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
