export const dateOptions = {
  weekday: "long",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
};

export const editorStyle = {
  padding: "0px 32px",
  borderRadius: "2px",
  height: "480px",
  width: "100%",
};

export const mobileEditorStyle = {
  padding: "0px 16px",
  borderRadius: "2px",
  height: "300px",
  width: "100%",
};

export const getSafe = (params, success, fail) => {
  try {
    return eval(success);
  } catch (e) {
    return null;
  }
};

export const dateDetailConverter = (date) => {
  const convertDate = new Date(date);
  return `${convertDate.getFullYear()}년 ${
    convertDate.getMonth() + 1
  }월 ${convertDate.getDate()}일 ${convertDate.getHours()}시 ${convertDate.getMinutes()}분`;
};
