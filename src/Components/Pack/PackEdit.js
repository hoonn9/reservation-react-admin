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
  required,
} from "react-admin";
import styled from "styled-components";
import { dateOptions } from "../../Utils";
import { globalText } from "../../GlobalText";
import PackTitle from "./PackTitle";

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
  <Edit title={<PackTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled label={`${globalText.text_pack} ID`} source="id" />
      <ReferenceInput
        label={globalText.text_room}
        source="room.id"
        reference="Room"
        validate={[required()]}
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput
        label={globalText.text_name}
        source="name"
        validate={[required()]}
      />
      <TextInput
        multiline
        label={globalText.text_description}
        source="description"
      />
      <NumberInput
        label={globalText.text_price}
        source="price"
        validate={[required()]}
      />
      <DateTimeInput
        disabled
        label={globalText.text_createdAt}
        options={dateOptions}
        source="createdAt"
      />
      <DateTimeInput
        disabled
        label={globalText.text_updatedAt}
        options={dateOptions}
        source="updatedAt"
      />
    </SimpleForm>
  </Edit>
);
