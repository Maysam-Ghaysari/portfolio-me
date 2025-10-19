const validatePhone = (phone) => {
  const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
  return pattern.test(phone);
};

const validateName = (name) => {
  const pattern = /^[a-zA-Zآ-ی\s]{2,30}$/g;
  return pattern.test(name);
};
const valiadteEmail = (email) => {
  const pattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g;
  return pattern.test(email);
};

export { validateName, valiadteEmail, validatePhone };
