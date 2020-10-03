export const getUserData = async () => {
  try {
    let response = await fetch('https://randomuser.me/api/0.4/?randomapi');
    if (response.status == 200) {
      let json = await response.json();
      return json.results;
    }
    return null;
  } catch (error) {
    console.error(error);
  }
};
