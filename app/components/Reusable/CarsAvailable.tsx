import { TiStarOutline } from "react-icons/ti";

const CarsAvailable = () => {
  return (
    <div className="w-full mt-10 h-fit text-center  shadow-2xl rounded-lg p-6 ">
      <p className=" mb-4 font-semibold text-2xl text-center">Cars Available</p>
      <ul className="space-y-4 font-semibold ">
        <li className="flex items-center cursor-pointer gap-4 underline">
          <TiStarOutline />
          Swift Dzire
        </li>
        <li className="flex items-center cursor-pointer gap-4 underline">
          <TiStarOutline /> Toyota Etios
        </li>
        <li className="flex items-center cursor-pointer gap-4 underline">
          <TiStarOutline /> Toyota Innova
        </li>
        <li className="flex items-center cursor-pointer gap-4 underline">
          <TiStarOutline /> Innova Crysta
        </li>
        <li className="flex items-center cursor-pointer gap-4 underline">
          <TiStarOutline /> Ertiga
        </li>
        <li className="flex items-center cursor-pointer gap-4 underline">
          <TiStarOutline />
          Kia Carens
        </li>
        <li className="flex items-center cursor-pointer gap-4 underline">
          <TiStarOutline /> Ciaz
        </li>
        <li className="flex items-center cursor-pointer gap-4 underline">
          <TiStarOutline /> Tempo Traveller
        </li>
      </ul>
    </div>
  );
};

export default CarsAvailable;
