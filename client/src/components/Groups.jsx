import React, { useState, useEffect } from "react";

export default function Groups({ members, pastGroups, setPastGroups }) {
  const [groupsAmount, setGroupsAmount] = useState(4);
  const [groups, setGroups] = useState();

  const isGroupEqual = (group1, group2) => {
    console.log(group1,group2)
    return (
      group1.length === group2.length &&
      group1.every((subGroup, index) =>
        subGroup.every(
          (member, memberIndex) => { 
            return member === group2[index][memberIndex]
            // console.log(member,memberIndex ,"/", group2[index][memberIndex],memberIndex) 
          }
        )
      )
    );
  };

  const generateShuffledGroups = (array) => {
    if (!array || array.length < 12) {
      return [];
    }

    let shuffledArray = array.slice().sort(() => Math.random() - 0.5);
    // console.log(shuffledArray);
    let groupedArray = [];

    // Keep generating until a unique group is found
    let uniqueGroupFound = false;
    while (!uniqueGroupFound) {
      groupedArray = [];
      for (let i = 0; i < groupsAmount; i++) {
        const group = shuffledArray.splice(
          0,
          Math.floor(array.length / groupsAmount)
        );
        groupedArray.push(group);
      }
      console.log(groupedArray)

      // Check if the generated group already exists in pastGroups
      const groupExists =
        pastGroups &&
        pastGroups.some((pastGroup) => {
          isGroupEqual(pastGroup, groupedArray);
        });

      if (!groupExists) {
        uniqueGroupFound = true;
      } else {
        // Re-shuffle and try again
        shuffledArray = array.slice().sort(() => Math.random() - 0.5);
      }
    }

    setPastGroups([groupedArray, ...pastGroups]);
    return groupedArray;
  };

  useEffect(() => {
    if (members && members.length >= 12) {
      const shuffledGroups = generateShuffledGroups(members);
      setGroups(shuffledGroups);
    }
  }, [members, groupsAmount]);

  return (
    <div>
      <select
        defaultValue={4}
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
      <div style={{display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridGap: "1rem",
            textAlign:"left"}}>

      {groups &&
        groups.map((group, index) => (
          <div key={index} >
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
    </div>
  );
}
