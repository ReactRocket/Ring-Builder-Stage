import React from "react";
import "./resources/css/breadcrumb.css"
const Breadcrumb = () => {
  return (
    <section className="bg-red-100 h-auto w-full flex flex-col gap-3">
      <span className="font-medium text-sm font-lato text-prussian-blue-light">
        Ring Builder
      </span>
      <section className="flex bg-red-50 w-full">
        <article id="polygon-r" className=" diamond h-[10vh] w-1/3 border-2   bg-red-400 "></article>
        <article id="polygon-x" className="h-[10vh] w-1/3 border-2  "></article>
        <article id="polygon-l" className="h-[10vh] w-1/3 border-2 "></article>
      </section>
    </section>
  );
};

export default Breadcrumb;
