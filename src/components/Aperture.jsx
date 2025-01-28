import { motion } from "framer-motion";
import Card from "./common/Card";
import eyeIcon from "../images/aperatuure-eye.png";
import solanaIcon from "../images/solana-sol-logo.png";
import ethereumIcon from "../images/ethereum.png";
import mobile1Icon from "../images/Phone1.png";
import mobile2Icon from "../images/Phone2.png";

const data = [
  {
    title: "Ethereum",
    content:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    title: "Filters",
    content:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    title: "Solana",
    content:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    title: "Filters",
    content:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
];

export default function Aperture() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <section id="aperture" className="bg-[#2d1b55]/10 py-6 lg:py-12">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-52 grid md:grid-cols-2 gap-12 lg:gap-4 xl:gap-12">
        <motion.div
          initial={{ opacity: 0, x: 0, y: 200 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex flex-col items-start">
            <h2 className="text-3xl md:text-xl xl:text-5xl">
              Aperture
            </h2>
          </div>
          <img src={eyeIcon} alt="Eye Icon" className="w-2/3 md:w-full" />
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-4 xl:gap-8">
          <div>            
            <motion.div
              variants={container}
              initial={{ opacity: 0, y: -50 }} // Initial state
              animate={{ opacity: 1, y: 0 }} // Animation state
              transition={{ duration: 0.5 }} // Animation duration
              whileHover={{ scale: 1.1 }} // Hover effect
              className="flex flex-col flex-1 gap-4 xl:gap-8 items-center mark-icon"
            >
              <img src={mobile1Icon} alt="Ethereum Icon" className="w-full image-round" />
            </motion.div>  
            <motion.div
              variants={container}
              initial={{ opacity: 0, y: -50 }} // Initial state
              animate={{ opacity: 1, y: 0 }} // Animation state
              transition={{ duration: 0.5 }} // Animation duration
              whileHover={{ scale: 1.3 }} // Hover effect
              className="flex flex-col flex-1 gap-4 xl:gap-8 items-center mark-icon"
            >
              <img src={ethereumIcon} alt="Ethereum Icon" className="w-28 py-8" />
            </motion.div>
            <div className="bg-gray-950 text-white rounded-md mark-content"
              style={{backgroundColor: "rgb(57 0 57)"}}>
              <p className="text-start">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
              <h3 className="border-l-2 pl-2 text-lg font-bold my-6">
                Ethereum
              </h3>
              <p className="text-start">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
              <h3 className="border-l-2 pl-2 text-lg font-bold my-6">
                Filters
              </h3>
              <p className="text-start">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
            </div>
          </div>
          <div>
            <motion.div
              variants={container}
              initial={{ opacity: 0, y: -50 }} // Initial state
              animate={{ opacity: 1, y: 0 }} // Animation state
              transition={{ duration: 0.5 }} // Animation duration
              whileHover={{ scale: 1.1 }} // Hover effect
              className="flex flex-col flex-1 gap-4 xl:gap-8 items-center mark-icon"
            >
              <img src={mobile2Icon} alt="Solana Icon" className="w-full image-round" />
            </motion.div>            
            
            <motion.div
              variants={container}
              initial={{ opacity: 0, y: -50 }} // Initial state
              animate={{ opacity: 1, y: 0 }} // Animation state
              transition={{ duration: 0.5 }} // Animation duration
              whileHover={{ scale: 1.3 }} // Hover effect
              className="flex flex-col flex-1 gap-4 xl:gap-8 items-center mark-icon"
            >
              <img src={solanaIcon} alt="Solana Icon" className="w-28 py-8" />
            </motion.div>
            <div className="bg-gray-950 text-white rounded-md mark-content"
              style={{backgroundColor: "rgb(57 0 57)"}}>
              <p className="text-start">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
              <h3 className="border-l-2 pl-2 text-lg font-bold my-6">
                Solana
              </h3>
              <p className="text-start">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
              <h3 className="border-l-2 pl-2 text-lg font-bold my-6">
                Filters
              </h3>
              <p className="text-start">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
