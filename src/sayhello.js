export const helloSay = (name) => {
  if (name) {
    return `Hello ${name}`;
  } else {
    throw new Error("value undefined");
  }
};
