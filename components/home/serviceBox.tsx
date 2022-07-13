import React from "react";

interface Props {
  number: string;
  title: string;
  description: string;
  image: string;
  className?: string;
  rightAlign?: boolean;
}

export const ServiceBox: React.FC<Props> = ({
  number,
  title,
  description,
  image,
  className,
  rightAlign,
}) => {
  return (
    <div
      className={`w-full h-96 flex items-center p-10 md:p-16 rounded relative -z-20 lg:-z-0 ${
        rightAlign && "flex-row-reverse"
      } ${className}`}
    >
      <div className={`w-full lg:w-1/2 ${rightAlign && "text-right"}`}>
        <h2 className="font-medium text-appYellow text-xl md:text-2xl">
          {number}
        </h2>
        <h1 className="mt-2 mb-3 md:mb-5 text-2xl md:text-3xl text-appBlue font-semibold">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-appBlue font-medium">
          {description}
        </p>
      </div>
      <img
        src={image}
        alt={title}
        className={`absolute bottom-0 ${
          rightAlign ? "left-0" : "right-0"
        } w-1/2 sm:w-1/4 -z-10 lg:-z-0`}
      />
    </div>
  );
};
