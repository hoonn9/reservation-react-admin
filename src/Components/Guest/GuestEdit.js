import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DateTimeInput,
  SelectInput,
  required,
} from "react-admin";
import { globalText } from "../../GlobalText";
import GuestTitle from "./GuestTitle";

export default (props) => (
  <Edit title={<GuestTitle />} {...props}>
    <SimpleForm>
      <TextInput
        disabled
        label={`${globalText.text_no_member} ID`}
        source="id"
        validate={[required()]}
      />
      <TextInput
        label={globalText.text_username}
        source="username"
        validate={[required()]}
      />
      <TextInput
        label={globalText.text_email}
        source="email"
        validate={[required()]}
      />
      <TextInput
        label={globalText.text_phone_num}
        source="phoneNum"
        validate={[required()]}
      />
      <SelectInput
        label={globalText.text_bio}
        source="bio"
        choices={[
          { id: "남", name: "남" },
          { id: "여", name: "여" },
        ]}
        validate={[required()]}
      />
      <DateTimeInput
        disabled
        label={globalText.text_createdAt}
        source="createdAt"
      />
    </SimpleForm>
  </Edit>
);
