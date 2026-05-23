import {
  IconHeart,
  IconHeartFilled,
  IconShoppingBagCheck,
} from "@tabler/icons-react";
import { useState } from "react";

const ShoesCard = ({ title, brand, img, price, hoverImg }) => {
  const [hovered, sethovered] = useState(false);
  const [liked, setLiked] = useState(false);
  return (
    <div className="flex justify-center mt-28">
      <div className="h-83 w-60 bg-neutral-800 rounded-2xl p-2 flex flex-col justify-between cursor-pointer transition-opacity duration-200 shadow-lg">
        <div className="relative">
          <div
            className="relative h-50 w-full"
            onMouseEnter={() => sethovered(true)}
            onMouseLeave={() => sethovered(false)}
          >
            <img
              className={`absolute inset-0 rounded-xl h-full w-full object-cover transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"}`}
              src={img}
              alt="shoe image here"
            />
            <img
              className={`absolute inset-0 rounded-xl h-full w-full object-cover transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`}
              src={img}
              src={hoverImg}
              alt="shoe image here"
            />
          </div>

          <div
            onClick={() => setLiked(!liked)}
            className="absolute text-neutral-200 top-1.5 right-1.5 h-8 w-8 bg-neutral-800 rounded-full flex justify-center items-center"
          >
            {liked ? (
              <IconHeartFilled size={22} className="text-red-500" />
            ) : (
              <IconHeart stroke={1.5} size={22} className="text-neutral-200" />
            )}
          </div>

          <h3
            title={title}
            className="text-neutral-200 text-lg px-1.5 mt-2 truncate"
          >
            {title}
          </h3>
          <p className="text-neutral-200/70 text-sm px-1.5 tracking-tight leading-none">
            {brand}
          </p>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <h1 className="text-neutral-200 text-3xl font-bold px-1.5">
              {price}$
            </h1>
            <div className="h-11 w-11 bg-neutral-200 rounded-xl flex justify-center items-center transition-all duration-200 active:scale-95">
              <IconShoppingBagCheck stroke={2} size={30} />
            </div>
          </div>
          <p className="text-neutral-200/70 text-[10px] leading-none tracking-tight px-1.5">
            Inclusive of all taxes
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShoesCard;
