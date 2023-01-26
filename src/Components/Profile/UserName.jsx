import { useState } from 'react';
import { useEffect } from 'react';

export default function UserName(){
    const [username, setUsername] = useState(localStorage.getItem("username"));

    useEffect(() => {
        const handleStorageChange = (e) => {
          if (e.key === "username") {
            setUsername(e.newValue);
          }
        };
        window.addEventListener("storage", handleStorageChange);
        return () => {
          window.removeEventListener("storage", handleStorageChange);
        };
      }, [setUsername]);

      return(<p>{username}</p>)
}