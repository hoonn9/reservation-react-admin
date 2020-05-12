import React from "react";
export default ({ record }) => {
  return <span>Comment {record ? `"${record.id}"` : ""}</span>;
};
