
const About = () => {
  return (
    <div>
      <div  className=" w-full p-20 bg-[#CDEA68] rounded-tl-3xl text-black ">
        <h1 className=" font-['Neue_Montreal] text-[3vw] leading-[3vw] tracking-tight ">
          Ochi is a strategic partner for fast-grow­ing tech businesses that
          need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire
          great peo­ple.
        </h1>
      </div>

      <div className=" Three divs grid  text-gray-800 grid-cols-3 border-t-2 border-[#99AD53]  w-full bg-[#CDEA68] px-20 pt-2 space-x-[10vw] pb-[6vw] ">
        <div className="">
          <p>What you can expect:</p>
        </div>
        <div className=" flexflex-col space-y-4 ">
          <p>
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </p>
          <p>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className=" mt-20 ">
          <p>S:</p>
          <div>
            <p>Instagram </p>
            <p> Behance </p>
            <p>Facebook</p>
            <p>Linkedin</p>
          </div>
        </div>
      </div>

      <div className=" flex gap-x-5 w-full border-t-[1px] border-[#99AD53]  bg-[#CDEA68]  py-10 px-10 ">
        <div className=" w-1/2 ">
          <h1 className=" text-6xl text-[#212121] ">Our Approch :</h1>
          <button className=" flex items-center gap-x-3 px-5 uppercase py-3 bg-[#000000] rounded-full text-[#EBEBEB] mt-5 ">
            Read More
            <div className=" w-2 h-2 rounded-full text-white bg-zinc-100 "></div>
          </button>
        </div>

        <div className=" w-1/2 bg-[#928471] h-[70vh] rounded-3xl pb-6">
        </div>
      </div>
    </div>
  );
};

export default About;
