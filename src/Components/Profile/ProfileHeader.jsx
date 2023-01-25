import { useEffect, useState } from "react";

function ProfileHeader() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (typeof Storage !== "undefined") {
      const storedUsername = localStorage.getItem("username");
      if (storedUsername) {
        setUsername(storedUsername);
      }
    }
  }, []);

  return (
    <div>
      <h1>Hello there {username}</h1>
    </div>
  );
}

export default ProfileHeader;
