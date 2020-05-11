import React from "react";

export default ({ record }) => {
  return <span>NoUser {record ? `"${record.id}"` : ""}</span>;
};
