import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  DateTimeInput,
  required,
} from "react-admin";
import { dateOptions } from "../../Utils";
import { globalText } from "../../GlobalText";
import RoomTitle from "./RoomTitle";

export default (props) => (
  <Edit title={<RoomTitle />} {...props}>
    <SimpleForm>
      <TextInput
        disabled
        label={`${globalText.text_room} ID`}
        source="id"
        validate={[required()]}
      />
      <TextInput
        label={globalText.text_room}
        source="name"
        validate={[required()]}
      />
      <NumberInput
        label={globalText.text_count}
        source="count"
        validate={[required()]}
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
