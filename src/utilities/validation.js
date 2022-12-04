export const validateUser = (userInfo) => {
  if (!userInfo.BIRTHDATE) return true;
  if (!userInfo.COUNTRY) return true;
  if (!userInfo.EMAIL) return true;
  if (!userInfo.FULLNAME) return true;
  if (!userInfo.PASSWORD) return true;
  if (!userInfo.SELECTROLES) return true;
  return false;
};

export const validateRole = (roleInfo) => {
  if (!roleInfo.ENGLISHROLE) return true;
  if (!roleInfo.SPANISHROLE) return true;
  return false;
};
