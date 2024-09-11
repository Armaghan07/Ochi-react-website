import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.2" className="  bg-zinc-900 w-full h-screen pt-1 ">
      <div className=" textsutructure mt-52 px-20  ">
        {["  We Creat", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className=" masker " key={index}>
              <div className=" w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "7vw" }}
                    transition={{ ease: [0.45, 0, 0.55, 1], duration: 1 }}
                    className=" mr-[1vw] rounded-md bg-green-500 w-[7vw] h-[4vw] relative -top-[0.2vw] "
                  ></motion.div>
                )}
                <h1 className=" py-2 -mb-[1vw] uppercase text-[6vw] font-['Stencil'] leading-[5vw] ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" border-t-[1px] border-zinc-800 mt-[9vw] flex justify-between items-center py-5 px-20 ">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="  leading-none tracking-tight text-md font-light "
          >
            {item}
          </p>
        ))}
        <div className=" start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase ">
            Start the project
          </div>
          <div className=" w-10 h-10 rounded-full flex justify-center items-center border-[1px] border-zinc-400 ">
            <span className=" rotate-[45deg] ">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
