import React, { useEffect } from "react";
import { useState } from "react";
import InputMask from "./InputMask";
import Groups from "./Groups";
import List from "./List";
import jwt_decode from "jwt-decode";

export default function Randomizer() {
  const [title, setTitle] = useState();
  const [members, setMembers] = useState();
  const [tokenValue, setTokenValue] = useState();
  const [pastGroups, setPastGroups] = useState([]);
  useEffect(() => {

    const getCookieValue = (name) => {
      if(document.cookie.length>0){const cookies = document.cookie.split("; ");
      for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split("=");
        if (cookieName === name) {
          return cookieValue;
        }
      }}
      return null;
    };
    const token = getCookieValue("randomGroups_token");
   const decodedToken = jwt_decode(token);
    console.log(decodedToken); // Display the decoded token payload

   setTitle(decodedToken.title);
   setMembers(decodedToken.members);
   setPastGroups(decodedToken.pastGroups)
  }, [tokenValue]);

  return (
    <div style={{display:"flex", gap:"4rem"}}>
      <InputMask
        title={title}
        members={members}
        setTokenValue={setTokenValue}
        pastGroups={pastGroups}
      />
      <List title={title} members={members} />
      <Groups  members={members} pastGroups={pastGroups} setPastGroups={setPastGroups} />
    </div>
  );
}
