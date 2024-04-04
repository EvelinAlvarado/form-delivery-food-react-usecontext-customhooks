export const firstNameValidation = (firstName) => {
  return firstName.length > 1 && firstName.length < 30 ? true : false;
};

export const lastNameValidation = (lastName) => {
  return lastName.length > 1 && lastName.length < 50 ? true : false;
};

export const phoneNumberValidation = (phoneNumber) => {
  return phoneNumber.length > 7 && phoneNumber.length < 15 ? true : false;
};
