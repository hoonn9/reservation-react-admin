import React from "react";
import { Edit, SimpleForm, TextInput, required } from "react-admin";
import BoardTitle from "./BoardTitle";
import { globalText } from "../../GlobalText";

export default (props) => (
  <Edit title={<BoardTitle />} {...props}>
    <SimpleForm>
      <TextInput
        disabled
        label={`${globalText.text_board} ID`}
        source="id"
        validate={[required()]}
      />
      <TextInput
        label={`${globalText.text_board} ${globalText.text_type}`}
        source="name"
        validate={[required()]}
      />
    </SimpleForm>
  </Edit>
);
