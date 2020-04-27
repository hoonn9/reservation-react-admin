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
import RoomTitle from "./RoomTitle";

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
  <Edit title={<RoomTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled label={`${globalText.text_room} ID`} source="id" />
      <TextInput label={globalText.text_room} source="name" />
      <NumberInput label={globalText.text_count} source="count" />
      <NumberInput label={globalText.text_price} source="price" />
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
