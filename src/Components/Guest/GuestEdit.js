import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
import { globalText } from "../../GlobalText";
import GuestTitle from "./GuestTitle";

export default (props) => (
  <Edit title={<GuestTitle />} {...props}>
    <SimpleForm>
      <TextInput
        disabled
        label={`${globalText.text_no_member} ID`}
        source="id"
      />
      <TextInput label={globalText.text_username} source="username" />
      <TextInput label={globalText.text_email} source="email" />
      <TextInput label={globalText.text_phone_num} source="phoneNum" />
      <TextInput label={globalText.text_bio} source="bio" />
      <TextInput
        disabled
        showTime
        label={globalText.text_createdAt}
        source="createdAt"
      />
    </SimpleForm>
  </Edit>
);
