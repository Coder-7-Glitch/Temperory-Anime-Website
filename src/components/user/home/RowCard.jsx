import React from "react";
import { IoPlayOutline } from "react-icons/io5";
import { RxDotFilled } from "react-icons/rx";
import { Link } from "react-router-dom";

const RowCard = () => {
  return (
      <div className="flex flex-col sm:flex-row items-center gap-10 py-20">
        <div className="w-[90%] sm:w-[50%]">
            <Link>
          <img
            className="w-full rounded h-auto min-h-[250px] max-h-[300px]"
            src="https://m.media-amazon.com/images/S/pv-target-images/96d6b139b3242a43336e5d820ee9970e24d0e9ec89cb4e0a31ffd0d5dfd37f0d.jpg"
            alt=""
          />
    </Link>
        </div>
        <div className="w-full">
          <Link className="transition-all duration-100 hover:underline text-xl md:text-2xl active:text-primary">
            <h1>Anyway, I'm Falling in Love with You.</h1>
          </Link>
          <div className="md:flex hidden items-center text-[15px] mt-6">
            <span className="bg-zinc-700 text-zinc-200 font-workSans font-semibold text-[13px] px-2 py-1 rounded">
              16+
            </span>
            <RxDotFilled className="mx-2" />
            <span className="text-zinc-400">Sub | Dub</span>
            <RxDotFilled className="mx-2" />
            <span className="text-zinc-400">Action</span>
          </div>
          <p className="text-[#888888] mt-4 text-sm md:text-[15px]">
            Several thousand years after a mysterious phenomenon that turns all
            of humanity to stone, the extraordinarily intelligent,
            science-driven boy, Senku Ishigami, awakens. Facing a world of stone
            and the total collapse of civilization,
          </p>
          <div className="mt-4">
            <Link>
            <button className="px-4 py-1 md:py-2 md:px-4 relative overflow-hidden bg-gradient-to-r bg-primary text-b font-semibold rounded-3xl shadow-xl transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:skew-x-12">
              <span className="absolute top-0 left-0 w-full h-full bg-primary"></span>
              <span className="relative z-10 text-sm md:text-[16px]">
                Watch Now
              </span>
            </button>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default RowCard;
