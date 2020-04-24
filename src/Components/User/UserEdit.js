import React from "react";
import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  ShowButton,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  Create,
  Filter,
  FunctionField,
  Labeled,
  Show,
  SimpleShowLayout,
  RichTextField,
  NumberInput,
  DateTimeInput,
  DateField,
  BooleanInput,
  useMutation,
  Button,
  Form,
  TopToolbar,
  SaveButton,
} from "react-admin";
import styled from "styled-components";
import UserTitle from "./UserTitle";
import { dateOptions } from "../../Utils";
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

const EditActions = ({ basePath, data, resource }) => (
  <TopToolbar>
    <ShowButton basePath={basePath} record={data} />
    {/* Add your custom actions */}
    <SaveButton
      onSave={(event) => {
        console.log("event");
      }}
    />
  </TopToolbar>
);

const ApproveButton = ({ record }) => {
  const [approve, { loading }] = useMutation({
    type: "update",
    resource: "comments",
    payload: { id: record.id, data: { isApproved: true } },
  });
  return <Button label="Approve" onClick={approve} disabled={loading} />;
};

export default (props) => (
  <Edit title={<UserTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled label={`${globalText.text_member} ID`} source="id" />
      <TextInput disabled label={globalText.text_id} source="userId" />
      <TextInput disabled label={globalText.text_email} source="email" />
      <TextInput label={globalText.text_username} source="username" />
      <TextInput label={globalText.text_nickname} source="nickname" />
      <TextInput label={globalText.text_phone_num} source="phoneNum" />
      <TextInput label={globalText.text_bio} source="bio" />
      <TextInput label={globalText.text_address} source="address" />
      <TextInput label={globalText.text_secret} source="loginSecret" />
      <BooleanInput label={globalText.text_is_agree} source="isAgree" />
    </SimpleForm>
  </Edit>
);
