export const classifyUsers = (list) => {
  const dentistsList = list.filter((user) => user.SELECTROLES === "DENTIST");

  const usersList = list.filter((user) => {
    if (user.SELECTROLES !== "DENTIST" && user.SELECTROLES !== "ADMIN")
      return true;
    else false;
  });

  return { dentistsList, usersList };
};
