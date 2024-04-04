export const addressValidation = (address) => {
  return address.length > 3 ? true : false;
};
export const cityValidation = (city) => {
  return city.length > 3 ? true : false;
};

export const stateValidation = (inputState) => {
  return inputState.length > 3 ? true : false;
};
