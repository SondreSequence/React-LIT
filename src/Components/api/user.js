const apiUrl = process.env.REACT_APP_API_URL;

export const checkForUSer = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Could not complete request.");
    }
    const data = await (await response).json();
    return [null, data];
  } catch (error) {
    return [error.message, null];
  }
};

export const createUser = () => {};

export const loginUser = async (username) => {
  const [error, user] = await checkForUSer(username);
};
