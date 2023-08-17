import React, { useState, useEffect } from "react";
import { set } from "react-hook-form";

export default function Groups({ members, pastGroups, setPastGroups }) {
  const [groupsAmount, setGroupsAmount] = useState();
  const [groups, setGroups] = useState();

  const generateShuffledGroups = (array) => {
    if (array && array.length < 12) {
      return [];
    }
    const shuffledArray =
      array && array.slice().sort(() => Math.random() - 0.5);

    const groupedArray = [];
    for (let i = 0; i < groupsAmount; i++) {
      const group = shuffledArray.splice(0, array.length / groupsAmount);
      groupedArray.push(group);
    }

    console.log(groupedArray);
    const temp = [...pastGroups]
    setPastGroups([groupedArray,...pastGroups]);
    console.log(pastGroups);

    return groupedArray;
  };

  useEffect(() => {
    const shuffledGroups = generateShuffledGroups(members);
    // console.log(shuffledGroups);
    setGroups(shuffledGroups);
  }, [members, groupsAmount]);

  return (
    <div>
      <select
        name="groups-amount"
        id="groups-amount"
        onChange={(e) => setGroupsAmount(e.target.value)}
>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
      <h3>Shuffled Groups:</h3>
      {groups &&
        groups.map((group, index) => (
          <div key={index}>
            <h4>Group {index + 1}:</h4>
            <ul>
              {group &&
                group.map((member, memberIndex) => (
                  <li key={memberIndex}>{member}</li>
                ))}
            </ul>
          </div>
        ))}
    </div>
  );
}
