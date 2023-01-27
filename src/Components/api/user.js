import { createHeaders } from "./index";
const apiUrl = process.env.REACT_APP_API_URL;

//checks the api for a username and returns the data if the user exists
export const checkForUSer = async (username) => {
  try {
    const response = await fetch(`${apiUrl}?username=${username}`);
    if (!response.ok) {
      throw new Error("Could not complete request.");
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};

// fetches a user by id and posts new translations into the users translation array
export const updateUserTranslations = async (userId, newTranslations) => {
  try {
    const response = await fetch(`${apiUrl}/${userId}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: newTranslations,
      }),
    });

    if (!response.ok) {
      throw new Error(
        "Could not update translations for user with id " + userId + "."
      );
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};

// fetches the api and posts a new user object into the api
export const createUser = async (username) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: createHeaders(),
      body: JSON.stringify({
        username,
        translations: [],
      }),
    });

    if (!response.ok) {
      throw new Error("Could not create user with username " + username + ".");
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};

// checks if a user exists in the api and creates a new one if the username put in does not exist
export const loginUser = async (username) => {
  const [checkError, user] = await checkForUSer(username);

  if (checkError !== null) {
    return [checkError, null];
  }

  if (user.length > 0) {
    return [null, user.pop()];
  }

  return await createUser(username);
};
