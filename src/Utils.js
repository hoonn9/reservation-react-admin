export const dateOptions = {
  weekday: "long",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
};

export const getSafe = (params, success, fail) => {
  try {
    return eval(success);
  } catch (e) {
    return null;
  }
};
