import React from "react";
export default ({ record }) => {
  return <span>Room {record ? `"${record.name}"` : ""}</span>;
};
