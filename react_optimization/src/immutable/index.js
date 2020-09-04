import React, { useState, useEffect } from "react";

function Immutable() {
  const [users, setUsers] = useState([
    { name: "Ridoan", address: "Batam" },
    { name: "Andi", address: "Semarang" },
  ]);

  useEffect(() => {
    const myusers = users;
    myusers.push({ name: "Surya", address: "Jember" });
    console.log("myusers : ", myusers);
    setUsers(myusers);
    // setUsers([...users, { name: "Surya", address: "Jember" }]);
  }, []);

  console.log("users : ", users);

  return (
    <div>
      {users.map((d) => (
        <div key={d.name}>{d.name}</div>
      ))}
    </div>
  );
}

export default Immutable;
