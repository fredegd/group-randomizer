import React from "react";

export default function Groups({ groupName, members }) {
  console.log(groupName, typeof members);
  return (
    <div>
      <h1>{groupName}</h1>
      {members && members.map((member) => <p key={member}>{member}</p>)}
    </div>
  );
}
