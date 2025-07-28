import { useEffect } from "react";

export default function SecondHomeCounting() {
  const counting = [
    { title: "2M+", body: "active users" },
    { title: "150k", body: "successful matches" },
    { title: "98%", body: "verify profile" },
  ];

  return (
    <div className="flex justify-around w-full">
      {counting.map((counts, index) => (
        <div key={index} className="flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold ">{counts.title}</h2>
          <h4 className="text-[10px] capitalize text-white sm:text-2xl">
            {counts.body}
          </h4>
        </div>
      ))}
    </div>
  );
}
