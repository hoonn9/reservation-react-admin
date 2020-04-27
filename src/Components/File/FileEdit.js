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
  useMutation,
  Button,
  Form,
  TopToolbar,
  SaveButton,
  ReferenceManyField,
  SingleFieldList,
  ChipField,
} from "react-admin";
import styled from "styled-components";
import { dateOptions } from "../../Utils";
import { globalText } from "../../GlobalText";
import FileTitle from "./FileTitle";

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

const InputConvert = ({ record }) => {
  if (record) {
    if (record.post) {
      return (
        <ReferenceInput
          label={`${globalText.text_post} ID`}
          source="post.id"
          reference="Post"
        >
          <TextInput source="id" />
        </ReferenceInput>
      );
    } else {
      return (
        <ReferenceInput
          label={globalText.text_room}
          source="room.id"
          reference="Room"
          allowEmpty
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
      );
    }
  }
};

export default (props) => (
  <Edit title={<FileTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled label={`${globalText.text_file} ID`} source="id" />
      <TextInput label={globalText.text_url} source="url" />
      <InputConvert {...props} record={props.record} />
      <DateTimeInput
        disabled
        label={globalText.text_createdAt}
        options={dateOptions}
        source="createdAt"
      />
    </SimpleForm>
  </Edit>
);
