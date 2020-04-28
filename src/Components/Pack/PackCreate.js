import React from "react";
import {
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  Create,
  required,
  NumberInput,
} from "react-admin";
import { globalText } from "../../GlobalText";

export default (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput
        label={globalText.text_room}
        source="room.id"
        reference="Room"
        validate={[required()]}
      >
        <SelectInput optionText="name" />
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
    </SimpleForm>
  </Create>
);
