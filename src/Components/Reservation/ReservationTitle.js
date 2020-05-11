import React from "react";
export default ({ record }) => {
  return <span>Reservation {record ? `"${record.id}"` : ""}</span>;
};
