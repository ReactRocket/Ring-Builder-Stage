import React from "react";

const RingInfoTable = () => {
  const ringInfo = [
    {
      name: "SKU",
      value: "SL0335-14K-W",
    },
    {
      name: "Setting Style",
      value: "Solitaire",
    },
    {
      name: "Sizes Available",
      value: "3.0 to 12.0",
    },
    {
      name: "Width Range",
      value: "1.70mm to 1.80mm",
    },
    {
      name: "Can be set with",
      value:
        "Round, Cushion, Oval, Princess, Emerald, Radiant, Pear, Asscher, Heart",
    },
    {
      name: "Metal",
      value: "14K White Gold",
    },
  ];
  return (
    <>
      <div className="w-full h-full   py-10">
        <div className="w-full  h-72">
          <div>
            <p className="text-[#804294]  font-['Lato', sans-serif] font-medium text-lg">Ring Information</p>
          </div>

          <div className="h-full w-full py-5  ">
            <ul className="w-full">
              {ringInfo.map((item, index) => {
                return (
                  <li key={index} className="flex ">
                    <div className="font-[Poppins] text-[#804294] w-36   text-sm font-medium leading-7">
                      {item.name}
                    </div>
                    <div className="text-sm font-[Poppins] text-[#464646]">
                      {item.value}
                    </div>
                  </li>
                );
              })}
            </ul>
             <hr className="mt-5  border-[#DCDCDC] w-full" />

          </div>
         
        </div>
      </div>
    </>
  );
};

export default RingInfoTable;
