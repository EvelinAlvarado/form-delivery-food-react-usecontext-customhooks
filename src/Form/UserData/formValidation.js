export const emailValidation = (email) => {
  console.log(email);
  const regex =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  if (regex.test(email)) {
    return true;
  } else {
    console.log("You have entered an invalid email address!");
    return false;
  }
};

export const passwordValidation = (password) => {
  console.log(password);
  const regexPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (regexPassword.test(password)) {
    return true;
  } else {
    console.log("Password is not valid");
    return false;
  }
};
