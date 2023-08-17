import React from "react";


export default function Groups({ title, members }) {
  // console.log(title, members);

  return (
    <div>
      {title && <h1>{title}</h1>}
      
      {members && members.map((member) => <p key={member}>{member}</p>)}
    </div>
  );
}
