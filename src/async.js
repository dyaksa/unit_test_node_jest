export const sayHello = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name) {
        resolve(`Hello ${name}`);
      } else {
        reject("error value undefined");
      }
    }, 1000);
  });
};
