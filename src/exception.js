export class MyException extends Error {}

export const CallMe = (name) => {
  if (name === "Dyaksa") {
    throw new MyException("unavailable");
  } else {
    return "Ok";
  }
};
