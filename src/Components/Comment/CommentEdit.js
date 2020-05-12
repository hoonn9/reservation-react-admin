import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DateTimeInput,
  required,
} from "react-admin";
import { dateOptions } from "../../Utils";
import { globalText } from "../../GlobalText";
import CommentTitle from "./CommentTitle";

export default (props) => (
  <Edit title={<CommentTitle />} {...props}>
    <SimpleForm>
      <TextInput
        disabled
        label={`${globalText.text_comment} ID`}
        source="id"
        validate={[required()]}
      />
      <TextInput
        label={`${globalText.text_member} ID`}
        source="user.id"
        validate={[required()]}
      />
      <TextInput
        label={`${globalText.text_post} ID`}
        source="post.id"
        validate={[required()]}
      />
      <TextInput
        multiline
        label={globalText.text_content}
        source="text"
        validate={[required()]}
      />
      <DateTimeInput
        disabled
        label={globalText.text_createdAt}
        options={dateOptions}
        source="createdAt"
      />
    </SimpleForm>
  </Edit>
);
