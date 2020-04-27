import React from "react";

export default ({ record }) => {
  return <span>Board {record ? `"${record.title}"` : ""}</span>;
};
