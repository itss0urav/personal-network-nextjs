/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { Button } from "@/components/ui/moving-border";

interface DataItem {
  href: string;
  src: string;
  alt: string;
}

interface GridProps {
  data: DataItem[];
}

const Grid: FC<GridProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((item, index) => (
        <a key={index} href={item.href}>
          <Button className="flex justify-between p-2 hover:bg-cyan-500 transition-all duration-1000 ">
            <img
              className="rounded-md h-auto w-[3rem]"
              src={item.src}
              alt={item.alt}
            />
            <span className="m-2 text-center">{item.alt}</span>
          </Button>
        </a>
      ))}
    </div>
  );
};

export default Grid;
