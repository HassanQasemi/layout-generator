import React, { FC, useEffect } from "react";
import { sizes } from "../enum/sizes";
import { inputValueType } from "./custom-input";

interface cardListPropsType {
  sizeList: inputValueType[];
}

const CardList: FC<cardListPropsType> = ({ sizeList }) => {
  const gridSizeHandler = (item: inputValueType) => {
    return item.text === sizes.sm ? "col-span-6" : "col-span-12";
  };

  useEffect(() => {}, [sizeList]);

  const handleShowItems = (item: inputValueType) => {
    const a = [];
    for (let i = 0; i < item.count; i++) {
      a.push(i);
    }
    return a.map((j) => {
      return (
        <div
          className={
            gridSizeHandler(item) +
            " justify-center flex items-center border border-b border-dashed " +
            getHeight(item)
          }
          key={item.id + "-" + j}
        >
          {item.text}
        </div>
      );
    });
  };

  const getHeight = (item: inputValueType) => {
    return item.text === sizes.xl ? "h-12" : "h-6";
  };

  return (
    <div
      className={"border grid grid-cols-12 border-gray-300 w-96 mx-auto mt-5"}
    >
      {sizeList.map((item) => {
        return handleShowItems(item);
      })}
    </div>
  );
};

export default CardList;
