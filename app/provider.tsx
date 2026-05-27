"use client";
import React, { useEffect } from "react";
import axios from "axios";
import { UserDetailContext } from "@/context/UserDetailContext";

function Provider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [userDetails, setUserDetails] = React.useState<any>(null);

  useEffect(() => {
    createNewUser();
  }, []);

  const createNewUser = async () => {
    const result = await axios.post("/api/users", {});
    console.log("Result :", result);
    setUserDetails(result.data?.user);
  };
  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      <div>{children}</div>
    </UserDetailContext.Provider>
  );
}

export default Provider;
