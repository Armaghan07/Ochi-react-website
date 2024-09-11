const Cards = () => {
  return (
    <div className=" grid grid-cols-4 space-x-5	w-full h-screen px-10 mt-10 ">
      <div className="card1 relative col-span-2 bg-[#004D43] rounded-lg h-96 flex justify-center items-center ">
        <img
          className=""
          src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
        />
        <button className="  absolute px-5 py-1 rounded-full border-2 border-[#41837a] left-10 bottom-10 ">
          &copy;2019-2024
        </button>
      </div>
      <div className="card1 relative bg-[#1e3d21] rounded-lg h-96 flex justify-center items-center ">
        <img
          className=""
          src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
        />
        <button className="  absolute uppercase leading-none tracking-tighter px-5 py-1 rounded-full border-2 border-[#41837a] left-10 bottom-10 ">
          rating 5.0 cluth
        </button>
      </div>
      <div className="card1 relative bg-[#212121] rounded-lg h-96 flex justify-center items-center ">
        <img
          className=""
          src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
        />
        <button className="  absolute  uppercase leading-none tracking-tighter px-5 py-1 rounded-full border-2 border-[#41837a] left-10 bottom-10 ">
          Business Bootcamp Alumni
        </button>
      </div>
    </div>
  );
};

export default Cards;
