import React, { useEffect } from "react";
import { useState } from "react";
import InputMask from "./InputMask";
import Groups from "./Groups";
import List from "./List";
import jwt_decode from "jwt-decode";
import axios from "axios";



export default function Randomizer() {
 

  return (
    <div style={{ display: "flex", gap: "4rem" }}>
      <InputMask
        batch={title}
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
