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
import EventTitle from "./EventTitle";

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
  <Edit title={<EventTitle />} {...props}>
    <SimpleForm>
      <SelectInput
        label={`${globalText.text_event} ${globalText.text_type}`}
        source="eventType"
        choices={[
          { id: "숙박", name: "숙박" },
          { id: "레스토랑", name: "레스토랑" },
          { id: "레저", name: "레저" },
        ]}
        validate={[required()]}
      />
      <TextInput
        label={globalText.text_title}
        source="title"
        validate={[required()]}
      />
      <TextInput label={globalText.text_subTitle} source="subTitle" />
      <TextInput
        label={globalText.text_content}
        multiline
        source="content"
        validate={[required()]}
      />
      <TextInput
        label={globalText.text_period}
        source="period"
        validate={[required()]}
      />
      <TextInput
        label={globalText.text_thumbnail}
        source="thumbnail"
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
