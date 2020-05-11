import React from "react";
import { Edit, SimpleForm, TextInput, required } from "react-admin";
import { globalText } from "../../GlobalText";
import PopupTitle from "./PopupTitle";

export default (props) => (
  <Edit title={<PopupTitle />} {...props}>
    <SimpleForm>
      <TextInput
        label={globalText.text_title}
        source="title"
        validate={[required()]}
      />
      <TextInput
        label={globalText.text_content}
        multiline
        source="content"
        validate={[required()]}
      />
    </SimpleForm>
  </Edit>
);
