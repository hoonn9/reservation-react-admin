import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
import BoardTitle from "./BoardTitle";
import { dateOptions } from "../../Utils";
import { globalText } from "../../GlobalText";

export default (props) => (
  <Edit title={<BoardTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled label={`${globalText.text_board} ID`} source="id" />
      <TextInput
        label={`${globalText.text_board} ${globalText.text_type}`}
        source="name"
      />
    </SimpleForm>
  </Edit>
);
