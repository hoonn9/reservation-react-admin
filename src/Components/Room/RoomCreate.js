import React from "react";
import {
  SimpleForm,
  TextInput,
  Create,
  NumberInput,
  required,
} from "react-admin";
import { globalText } from "../../GlobalText";

export default (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput
        label={`${globalText.text_room} ${globalText.text_name}`}
        source="name"
        validate={[required()]}
      />
      <NumberInput
        label={globalText.text_price}
        source="price"
        validate={[required()]}
      />
      <NumberInput
        label={`${globalText.text_room} ${globalText.text_number}`}
        source="count"
        validate={[required()]}
      />
    </SimpleForm>
  </Create>
);
