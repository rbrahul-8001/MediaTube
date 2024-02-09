import React from "react";
import { categories } from "../utils/constants";

const Sidebar = (props) => {
  return (
    <div className="fixed flex-col mt-5">
      {categories.map((category) => {
        return (
          <div
            className={`flex justify-start w-full mx-auto gap-x-5 mb-3 xl:mb-4 hover:bg-red-600 px-4 py-1 xl:px-8 xl:py-2
          rounded-full transition duration-200 ease-in ${
            props.selectedCategory === category.name ? "bg-red-600" : ""
          } group`}
            onClick={() => {
              props.setSelectedCategory(category.name);
            }}
          >
            <span
              className={`text-xl ${
                props.selectedCategory === category.name
                  ? "text-white"
                  : "text-red-600"
              } group-hover:text-white`}
            >
              {category.icon}
            </span>
            <span className="text-white text-md">{category.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
