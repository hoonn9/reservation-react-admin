import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
  required,
} from "react-admin";
import { dateOptions } from "../../Utils";
import { globalText } from "../../GlobalText";
import PackTitle from "./PackTitle";

export default (props) => (
  <Edit title={<PackTitle />} {...props}>
    <SimpleForm>
      <TextInput
        disabled
        label={`${globalText.text_pack} ID`}
        source="id"
        validate={[required()]}
      />
      <ReferenceInput
        label={globalText.text_room}
        source="room.id"
        reference="Room"
      >
        <SelectInput optionText="name" validate={[required()]} />
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
