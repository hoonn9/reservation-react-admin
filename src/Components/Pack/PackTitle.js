import React from "react";
import { globalText } from "../../GlobalText";
export default ({ record }) => {
  return (
    <span>
      {globalText.text_pack} {record ? `"${record.name}"` : ""}
    </span>
  );
};
