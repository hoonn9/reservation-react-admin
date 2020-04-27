import React from "react";

export default ({ record }) => {
  return <span>NoUser {record ? `"${record.title}"` : ""}</span>;
};
