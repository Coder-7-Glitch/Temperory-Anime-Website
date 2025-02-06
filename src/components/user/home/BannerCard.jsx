import React from 'react'
import { Link } from 'react-router-dom';

const BannerCard = () => {
  return (
    <Link>
      <div className="w-100 h-auto min-h-[300px] py-20">
        <img
          className="h-full w-full rounded-md"
          src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1350/CurationAssets/ZENSHU/SEASON%201/MARKETING%20BANNER/Zenshu-S1-KV1-Banner-2100x700-EN.png"
          alt=""
        />
      </div>
    </Link>
  );
}

export default BannerCard