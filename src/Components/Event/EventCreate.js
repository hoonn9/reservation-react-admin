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
    </SimpleForm>
  </Create>
);
