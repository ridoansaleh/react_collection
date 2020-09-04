import React, { useState, useEffect } from "react";
import Job from "./Job";

function Memo() {
  const [user, setUser] = useState({
    name: "Ridoan",
    address: "Batam",
    date_of_birth: "19 June 1992",
    education: "Telkom University",
    job: "Software Engineer",
  });
  // const [job, setJob] = useState();

  useEffect(() => {
    console.log("Mounted");
    // setJob("Software Engineer");
    setUser({
      ...user,
      address: "Jakarta",
    });
  }, []);

  console.log("render");
  return (
    <>
      <div>Name : {user.name}</div>
      <div>Address : {user.address}</div>
      <div>Date of Birth : {user.date_of_birth}</div>
      <div>Education : {user.education}</div>
      <Job job={user.job} />
    </>
  );
}

export default Memo;
