import React from "react";

export default ({ record }) => {
  return <span>Guest {record ? `"${record.id}"` : ""}</span>;
};
