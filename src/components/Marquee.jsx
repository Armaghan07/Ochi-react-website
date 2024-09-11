import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.4" className=" w-full py-16 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl ">
      <div className=" border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden ">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 9 }}
          className=" text-[20vw] leading-none font-['Founders_Grotesk_X-Condensed'] font-semibold uppercase  pr-4 "
        >
          We Are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 9 }}
          className=" text-[20vw] leading-none font-['Founders_Grotesk_X-Condensed'] font-semibold uppercase "
        >
          We Are Ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
