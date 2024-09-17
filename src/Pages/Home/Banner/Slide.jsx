import { Link } from "react-router-dom";

const Slide = ({ image, text }) => {
  return (
    <div
      className="bg-center bg-cover h-[22rem] md:h-[38rem]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
        <div className="flex items-center flex-col justify-center">
          <h1 className="text-xl md:text-3xl w-[80%] mx-auto font-semibold text-white lg:text-4xl text-center">
            {text}
          </h1>
          <br />
          <Link to="/queries">
            <button className="relative inline-flex h-12 transition-transform duration-300 transform overflow-hidden rounded-lg p-[1px] focus:outline-none bg-slate-950 text-white hover:scale-105 hover:bg-slate-800">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0000ff_0%,#00ffff_50%,#0000ff_100%)]"></span>
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium backdrop-blur-3xl gap-2">
                Explore Queries
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                </svg>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
