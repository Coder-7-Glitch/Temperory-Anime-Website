import React from "react";
import Navbar from "../../components/user/navbar/Navbar";
import Slider from "../../components/user/home/Slider";
import PopularAnime from "../../components/user/home/PopularAnime";
import ActionAnime from "../../components/user/home/ActionAnime";
import LatestAnime from "../../components/user/home/LatestAnime";
import RomanceAnime from "../../components/user/home/RomanceAnime";
import ComedyAnime from "../../components/user/home/ComedyAnime";
import MoviesAnime from "../../components/user/home/MoviesAnime";
import BannerCard from "../../components/user/home/BannerCard";
import RowCard from "../../components/user/home/RowCard";

const Home = () => {
  return (
    <>
      <Slider />
      <div className="px-4 sm:px-7 md:px-9 lg:px-14 max-w-7xl mx-auto">
        <LatestAnime />
        <PopularAnime />
        <ComedyAnime />
        <BannerCard />
        <RomanceAnime />
        <ActionAnime />
        <RowCard />
        <MoviesAnime />
      </div>
    </>
  );
};

export default Home;
