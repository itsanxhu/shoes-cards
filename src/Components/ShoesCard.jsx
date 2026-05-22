import { IconShoppingBagCheck } from "@tabler/icons-react";
import { IconHeart } from "@tabler/icons-react";

const ShoesCard = ({ title, brand, img, price }) => {
  return (
    <div className="flex justify-center mt-28">
      <div className="h-83 w-60 bg-neutral-800 rounded-2xl p-2 flex flex-col justify-between cursor-pointer">
        <div className="relative">
          <img
            className="rounded-xl h-50 w-60 object-cover"
            src={img}
            alt="shoe image here"
          />
          <div className="absolute text-neutral-200 top-1.5 right-1.5 h-8 w-8 bg-neutral-800 rounded-full flex justify-center items-center">
            <IconHeart stroke={1.5} size={22} />
          </div>

          <h3
            title={title}
            className="text-neutral-200 text-xl px-1.5 mt-2 truncate"
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
            <div className="h-11 w-11 bg-neutral-200 rounded-xl flex justify-center items-center">
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
