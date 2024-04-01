import React from "react";

const DiamondInfoTable = () => {
  const diamondCharacteristics = [
    {
      name: "IGI",
      value: "View Certificate",
    },

    {
      name: "Table",
      value: "60%",
    },
    {
      name: "Shape",
      value: "Round",
    },
    {
      name: "Depth",
      value: "61.9%",
    },
    {
      name: "Carat",
      value: "0.45",
    },
    {
      name: "L/W Ratio",
      value: "1.01",
    },
    {
      name: "Cut",
      value: "Rare Carat Ideal",
    },
    {
      name: "Measurement",
      value: "4.91 x 4.87 x 3.03 mm",
    },
    {
      name: "Color",
      value: "E",
    },
    {
      name: "Crown Angle",
      value: "34.9",
    },
    {
      name: "Clarity",
      value: "VS1",
    },
    {
      name: "Pavilion Angle ",
      value: "41.3",
    },
    {
      name: "Fluorescence ",
      value: "None",
    },
    {
      name: "Girdle Thick",
      value: "Med.",
    },
    {
      name: "Polish",
      value: "Excellent",
    },
    {
      name: "Girdle % ",
      value: "3.5%",
    },
    {
      name: "Symmetry",
      value: "Excellent",
    },
    {
      name: "Seller Comments",
      value: "Eye Clean",
    },
    {
      name: "Price",
      value: "$385",
    },
    {},
  ];
  return (
    <>
      <div className="h-full w-full py-5  ">
        <h1 className="text-[#804294] leading-8 font- font-medium text-2xl ">
          Diamond Information
        </h1>
        <div className="h-full min-w-full  py-5  ">
          <ul className="grid grid-cols-2 w-full   ">
            {diamondCharacteristics.map((property) => (
              <li
                className="border border-[#DCDCDC] flex gap-4 p-1.5"
                key={property.name}
              >
                <div className="text-[#804294]   text-nowrap font-[Poppins]   font-semibold  text-sm h-full px-2 w-1/2 ">
                  {property.name}
                </div>

                <span className={`${property.name == null && "hidden"}`}>
                  :
                </span>

                <div className="w-[70%] h-full text-sm font-[Poppins]   font-medium text-ellipsis   text-[#464646] ">
                  {" "}
                  {property.value}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DiamondInfoTable;
