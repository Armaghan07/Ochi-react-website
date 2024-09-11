import { useEffect } from "react";
import { useState } from "react";

const Eyes = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerHeight / 2;
    let angle = Math.atan2(y, x) * (180 / Math.PI);
    setRotation(angle - 180);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className=" w-full h-screen overflow-hidden ">
      <div
        data-scroll
        data-scroll-speed="-0.7"
        data-scroll-section
        className=" relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] "
      >
        <div className=" absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
          <div className=" flex justify-center items-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full ">
            <div className="relative w-2/3 h-2/3  bg-zinc-900 rounded-full ">
              <div
                style={{
                  transform: ` translate(-50%, -50%) rotate(${rotation}deg)`,
                }}
                className=" w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] "
              >
                <div className=" w-[2vw] h-[2vw] bg-zinc-100 rounded-full "></div>
              </div>
            </div>
          </div>
          <div className=" flex justify-center items-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full  ">
            <div className="relative w-2/3 h-2/3  bg-zinc-900 rounded-full ">
              <div
                style={{
                  transform: ` translate(-50%, -50%) rotate(${rotation}deg)`,
                }}
                className=" w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] "
              >
                <div className=" w-[2vw] h-[2vw] bg-zinc-100 rounded-full "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
