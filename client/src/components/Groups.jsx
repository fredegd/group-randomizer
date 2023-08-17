import React, { useState, useEffect } from "react";

export default function Groups({ members }) {
  console.log(members)
  const [groups, setGroups] = useState();

  const generateShuffledGroups = (array) => {
    if (array && array.length < 12) {
      return [];
    }
    const shuffledArray = array&& array.slice().sort(() => Math.random() - 0.5);

    const groupedArray = [];
    for (let i = 0; i < 4; i++) {
      const group =shuffledArray&& shuffledArray.splice(0, 3);
      groupedArray.push(group);
    }

    return groupedArray;
  };

  useEffect(() => {
    const shuffledGroups = generateShuffledGroups(members);
    console.log(shuffledGroups)
    setGroups(shuffledGroups);
  }, [members]);

  return (
    <div>
      <h3>Shuffled Groups:</h3>
      {groups && groups.map((group, index) => (
        <div key={index}>
          <h4>Group {index + 1}:</h4>
          <ul>
            {group &&  group.map((member, memberIndex) => (
              <li key={memberIndex}>{member}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
