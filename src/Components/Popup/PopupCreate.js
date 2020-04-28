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
  required,
} from "react-admin";
import styled from "styled-components";
import { dateOptions } from "../../Utils";
import { globalText } from "../../GlobalText";

export default (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput
        label={globalText.text_title}
        source="title"
        validate={[required()]}
      />
      <TextInput
        label={globalText.text_content}
        multiline
        source="content"
        validate={[required()]}
      />
      <TextInput label={globalText.text_url} source="url" />
    </SimpleForm>
  </Create>
);
