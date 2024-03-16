import React from "react";
import "../components/resources/css/tooltip.css";
const Tooltip = ({ data, toggle }) => {
  return (
    <div className="relative w-[450px] h-[200px] ">
      <span id="triangle-up" className="absolute -top-[14.5px] left-5"></span>
      <div className="h-full bg-white w-full rounded-lg  shadow-xl p-5 overflow-hidden ">
        <div className="w-full h-[7%] flex justify-between items-center pb-5 ">
          <h1 className="font-medium text-[#804294] text-lg ">
            {data?.title || "Title"}
          </h1>
          <button onClick={() => toggle && toggle(false)}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.125 7.7875L10.8812 10L13.125 12.2125C13.1874 12.271 13.2372 12.3416 13.2712 12.4201C13.3053 12.4986 13.3228 12.5832 13.3228 12.6688C13.3228 12.7543 13.3053 12.8389 13.2712 12.9174C13.2372 12.9959 13.1874 13.0665 13.125 13.125C13.0666 13.1829 12.9973 13.2288 12.9212 13.2599C12.845 13.291 12.7635 13.3067 12.6812 13.3063C12.5173 13.3056 12.3601 13.2405 12.2437 13.125L9.99998 10.8813L7.78748 13.125C7.67107 13.2405 7.51394 13.3056 7.34998 13.3063C7.26772 13.3067 7.18619 13.291 7.11004 13.2599C7.03389 13.2288 6.96463 13.1829 6.90623 13.125C6.78982 13.0079 6.72448 12.8495 6.72448 12.6844C6.72448 12.5193 6.78982 12.3609 6.90623 12.2438L9.11873 10L6.90623 7.7875C6.80384 7.66794 6.75033 7.51414 6.75641 7.35685C6.76249 7.19955 6.82769 7.05034 6.939 6.93903C7.05031 6.82772 7.19952 6.76251 7.35682 6.75643C7.51412 6.75036 7.66792 6.80386 7.78748 6.90625L9.99998 9.11875L12.2125 6.90625C12.2703 6.84634 12.3394 6.79841 12.4158 6.7652C12.4922 6.73199 12.5744 6.71414 12.6577 6.71269C12.741 6.71124 12.8237 6.72621 12.9012 6.75674C12.9787 6.78727 13.0494 6.83277 13.1094 6.89063C13.1693 6.94849 13.2172 7.01759 13.2504 7.09398C13.2836 7.17037 13.3015 7.25255 13.3029 7.33583C13.3044 7.41911 13.2894 7.50187 13.2589 7.57936C13.2283 7.65686 13.1828 7.72759 13.125 7.7875ZM16.1875 16.1875C14.9637 17.4111 13.4046 18.2444 11.7073 18.5819C10.01 18.9195 8.25073 18.7462 6.65192 18.0839C5.05312 17.4216 3.68661 16.3001 2.72519 14.8612C1.76377 13.4222 1.25061 11.7306 1.25061 10C1.25061 8.26946 1.76377 6.57777 2.72519 5.13886C3.68661 3.69995 5.05312 2.57844 6.65192 1.91614C8.25073 1.25385 10.01 1.08052 11.7073 1.41807C13.4046 1.75562 14.9637 2.58888 16.1875 3.8125C17.0001 4.62503 17.6447 5.58966 18.0845 6.65132C18.5243 7.71298 18.7506 8.85086 18.7506 10C18.7506 11.1491 18.5243 12.287 18.0845 13.3487C17.6447 14.4103 17.0001 15.375 16.1875 16.1875ZM15.3062 4.69375C14.2563 3.64747 12.9199 2.93575 11.4657 2.64847C10.0116 2.36119 8.50493 2.51123 7.136 3.07965C5.76708 3.64807 4.59727 4.60938 3.77431 5.84218C2.95135 7.07499 2.51214 8.524 2.51214 10.0063C2.51214 11.4885 2.95135 12.9375 3.77431 14.1703C4.59727 15.4031 5.76708 16.3644 7.136 16.9329C8.50493 17.5013 10.0116 17.6513 11.4657 17.364C12.9199 17.0768 14.2563 16.365 15.3062 15.3188C16.0054 14.622 16.5602 13.794 16.9387 12.8824C17.3173 11.9708 17.5121 10.9934 17.5121 10.0063C17.5121 9.01915 17.3173 8.04175 16.9387 7.13012C16.5602 6.21848 16.0054 5.39053 15.3062 4.69375Z"
                fill="#464646"
              />
            </svg>
          </button>
        </div>
        <div className="w-full h-[93%]  text-[#464646] text-lg font-normal text-wrap overflow-y-auto .scrollBar ">
          <p>
            {data?.description ||
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum iure vero suscipit dolor ex officia aut nobis sapiente voluptas delectus praesentium quas maxime est aperiam odit rerum eligendi, a recusandae corrupti veniam alias dolores omnis, velit itaque. Quam corrupti neque assumenda odio itaque voluptatum repellat ullam aut ducimus veniam, facilis iusto dicta necessitatibus officiis laudantium, provident ea in quia optio hic soluta numquam velit eum? Odit quibusdam commodi asperiores facilis et sequi nesciunt quas odio doloribus qui possimus neque provident, reiciendis omnis quia laboriosam id excepturi quo, repudiandae molestiae cum aut ad ipsam eos. Fugit et veniam consequuntur architecto possimus!"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
