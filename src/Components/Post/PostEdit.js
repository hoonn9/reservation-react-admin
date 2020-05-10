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
import PostTitle from "./PostTitle";

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
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled label={`${globalText.text_post} ID`} source="id" />
      <TextInput label={`${globalText.text_member} ID`} source={"user.id"} />
      <ReferenceInput
        label={`${globalText.text_board} ID`}
        source="board.id"
        reference="Board"
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput label={globalText.text_title} source="title" />
      <TextInput multiline label={globalText.text_content} source="content" />
      <TextInput
        label={`${globalText.text_post} ${globalText.text_type}`}
        source="postType"
      />
      <NumberInput label={globalText.text_views} source="views" />
      <ReferenceManyField
        label={globalText.text_files}
        target="post.id"
        reference="File"
      >
        <SingleFieldList>
          <ChipField source="url" />
        </SingleFieldList>
      </ReferenceManyField>
      <ReferenceManyField
        label={globalText.text_comment}
        target="post.id"
        reference="Comment"
      >
        <SingleFieldList>
          <ChipField source="text" />
        </SingleFieldList>
      </ReferenceManyField>
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
