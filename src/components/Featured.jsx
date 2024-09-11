import { motion } from "framer-motion";
import { useState } from "react";

const Featured = () => {
  const [isHovering, setHovering] = useState(false);
  const [isHover, setHover] = useState(false);

  return (
    <div className=" w-full py-20  ">
      <div className=" w-full p-10 border-b-[1px] border-zinc-700 pb-20">
        <h1 className=" text-8xl font-['Neue Montreal] tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className=" px-20 ">
        <div className=" w-full flex gap-10 mt-10 ">
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className=" relative w-1/2 h-[75vh] "
          >
            <h1 className="text-[#CDEA68] uppercase absolute left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tighter text-[5vw] ">
              <h1 className="text-[#CDEA68] uppercase flex overflow-hidden absolute left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tighter text-[5vw] ">
                {"Fyde".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={isHovering ? { y: "0" } : { y: "100%" }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.06,
                    }}
                    className=" inline-block "
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
            </h1>

            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                alt="card"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                className=" w-full h-full bg-cover "
              />
            </div>
          </div>
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className=" relative w-1/2 h-[75vh] "
          >
            <div className="text-[#CDEA68] uppercase absolute right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tighter text-[5vw] ">
              <h1 className="text-[#CDEA68] uppercase flex overflow-hidden absolute right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tighter text-[5vw] ">
                {"Vise".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={isHover ? { y: "0" } : { y: "100%" }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.06,
                    }}
                    className=" inline-block "
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
            </div>

            <div className="w-full h-full rounded-xl overflow-hidden  ">
              <img
                alt="card"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                className=" w-full h-full bg-cover "
              />
            </div>
          </div>
          {/* <div className=" bg-red-500 w-1/2 h-[75vh] rounded-xl  "></div> */}
        </div>
      </div>
    </div>
  );
};

export default Featured;
