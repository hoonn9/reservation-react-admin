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
