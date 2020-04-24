import React from "react";

export default ({ record }) => {
  return <span>User {record ? `"${record.title}"` : ""}</span>;
};
