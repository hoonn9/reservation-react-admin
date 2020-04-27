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
  DateField,
} from "react-admin";
import styled from "styled-components";
import { dateOptions } from "../../Utils";
import { globalText } from "../../GlobalText";

export default (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput
        label={globalText.text_board}
        source="board.id"
        reference="Board"
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput
        label={`${globalText.text_post} ${globalText.text_type}`}
        source="postType"
      />
      <TextInput label={globalText.text_title} source="title" />
      <TextInput label={globalText.text_content} multiline source="content" />
    </SimpleForm>
  </Create>
);
