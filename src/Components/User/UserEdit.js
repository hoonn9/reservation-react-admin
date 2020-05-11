import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  required,
} from "react-admin";
import UserTitle from "./UserTitle";
import { globalText } from "../../GlobalText";

const UserInput = ({ props, record }) => {
  if (record) {
    return record.user ? (
      <ReferenceInput
        {...props}
        label={`${globalText.text_member} ID`}
        source="user.id"
        reference="User"
      >
        <TextInput disabled source="id" />
      </ReferenceInput>
    ) : (
      <ReferenceInput
        {...props}
        label={`${globalText.text_no_member} ID`}
        source="noUser.id"
        reference="NoUser"
      >
        <TextInput disabled source="id" />
      </ReferenceInput>
    );
  }
};

export default (props) => (
  <Edit title={<UserTitle />} {...props}>
    <SimpleForm>
      <TextInput
        disabled
        label={`${globalText.text_member} ID`}
        source="id"
        validate={[required()]}
      />
      <TextInput
        disabled
        label={globalText.text_id}
        source="userId"
        validate={[required()]}
      />
      <TextInput
        disabled
        label={globalText.text_email}
        source="email"
        validate={[required()]}
      />
      <TextInput
        label={globalText.text_username}
        source="username"
        validate={[required()]}
      />
      <TextInput
        label={globalText.text_nickname}
        source="nickname"
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
      <TextInput label={globalText.text_address} source="address" />
      <TextInput label={globalText.text_secret} source="loginSecret" />
      <BooleanInput
        label={globalText.text_is_agree}
        source="isAgree"
        validate={[required()]}
      />
    </SimpleForm>
  </Edit>
);
