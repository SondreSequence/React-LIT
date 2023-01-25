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

  return <h1>Hello there {username.replace(/"/g, "")}</h1>;
}

export default ProfileHeader;
