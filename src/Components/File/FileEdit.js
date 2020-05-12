import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  required,
} from "react-admin";
import { dateOptions } from "../../Utils";
import { globalText } from "../../GlobalText";
import FileTitle from "./FileTitle";

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
    } else if (record.room) {
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
    } else if (record.event) {
      return (
        <ReferenceInput
          label={globalText.text_room}
          source="event.id"
          reference="Event"
          allowEmpty
        >
          <SelectInput optionText="title" />
        </ReferenceInput>
      );
    } else if (record.popup) {
      return (
        <ReferenceInput
          label={globalText.text_room}
          source="popup.id"
          reference="Popup"
          allowEmpty
        >
          <SelectInput optionText="id" />
        </ReferenceInput>
      );
    }
  }
};

export default (props) => (
  <Edit title={<FileTitle />} {...props}>
    <SimpleForm>
      <TextInput
        disabled
        label={`${globalText.text_file} ID`}
        source="id"
        validate={[required()]}
      />
      <TextInput
        label={globalText.text_url}
        source="url"
        validate={[required()]}
      />
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
