import React from "react";

export default ({ record }) => {
  return <span>Guest {record ? `"${record.title}"` : ""}</span>;
};
