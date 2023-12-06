import React, { useEffect, useState } from "react";

import { ChevronDownIcon } from "@heroicons/react/20/solid";

const options = [1, 2, 3, 4, 5, 6];

export default function GroupsAmountSelect({ groupsAmount, setGroupsAmount }) {
  const [open, setOpen] = useState(false);
const [selected, setSelected] = useState(groupsAmount);

  return (
    <div className="w-96 font-medium">
      <ul
        className={`w-full bg-white mt-2 overflow-y-auto absolute bottom-20 ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        {options?.map((option) => (
          <li
          
            key={option}
            className="p-2 text-sm hover:bg-sky-600 hover:text-white"
            onClick={() => {
              if (option !== selected) {
                setSelected(option);
                setGroupsAmount(option);
                setOpen(false);
              }
            }}
          >
            {option}
          </li>
        ))}
      </ul>
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center justify-between rounded ${
          !selected && "text-gray-700"
        }`}
      >
        {selected ? selected : "How many groups do you want to create?"}

        <ChevronDownIcon
          className={`-mr-1 h-8 w-8 text-gray-400 ${open && "rotate-180"}`}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
