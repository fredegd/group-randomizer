import React from "react";


export default function List({ title, members }) {
  // console.log(title, members);

  return (
    <div>
      <h3>List:</h3>
      {title && <h1>{title}</h1>}
      {members && members.map((member) => <p key={member}>{member}</p>)}
    </div>
  );
}
