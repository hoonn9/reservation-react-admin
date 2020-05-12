import React from "react";
export default ({ record }) => {
  return <span>File {record ? `"${record.id}"` : ""}</span>;
};
