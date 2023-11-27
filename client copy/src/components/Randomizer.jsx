import React, { useEffect } from "react";
import { useState } from "react";
import InputMask from "./InputMask";
import Groups from "./Groups";
import List from "./List";
import jwt_decode from "jwt-decode";
import axios from "axios";



export default function Randomizer() {
  const [title, setTitle] = useState();
  const [members, setMembers] = useState();
  const [tokenValue, setTokenValue] = useState();
  const [pastGroups, setPastGroups] = useState([]);

  const verify = document.cookie.length > 0;
  console.log(verify, document.cookie.length);

  verify &&
    useEffect(() => {
      const getCookieValue = (name) => {
        console.log(name);
        if (document.cookie.length > 0) {
          const cookies = document.cookie.split("; ");
          for (const cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split("=");
            if (cookieName === name) {
              return cookieValue;
            }
          }
          return null;
        }
      };
      const token = getCookieValue("randomGroups_token");
      const decodedToken = jwt_decode(token);
      console.log(decodedToken); // Display the decoded token payload
      
      setTitle(decodedToken.title);
      setMembers(decodedToken.members);
      setPastGroups(decodedToken.history);

      setTokenValue({
        title: decodedToken.title,
        members: decodedToken.members,
        history: decodedToken.history || [], // Ensure history is an array
      });
    }, [document.cookie]);

    

  return (
    <div style={{ display: "flex", gap: "4rem" }}>
      <InputMask
        title={title}
        members={members}
        pastGroups={pastGroups}
        tokenValue={tokenValue}
        setTokenValue={setTokenValue}
      />
      {/* <List title={title} members={members} /> */}
      <Groups
        members={tokenValue && tokenValue.members}
        pastGroups={tokenValue && tokenValue.history}
        setPastGroups={setPastGroups}
      />
    </div>
  );
}
