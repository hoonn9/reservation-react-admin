import React from "react";
export default ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};
