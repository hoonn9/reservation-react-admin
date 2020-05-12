import React from "react";
import {
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  Create,
  Labeled,
  required,
  NumberInput,
  DateTimeInput,
} from "react-admin";
import { globalText } from "../../GlobalText";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label={`${globalText.text_member} ID`} source="user.id" />
        <Labeled label="or" />
        <TextInput
          label={`${globalText.text_no_member} ID`}
          source="noUser.id"
        />
        <TextInput
          label={`${globalText.text_guest} ID`}
          source="guest.id"
          validate={[required()]}
        />
        <ReferenceInput
          label={globalText.text_room}
          source="room.id"
          reference="Room"
          validate={[required()]}
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput
          label={globalText.text_pack}
          source="pack.id"
          reference="Pack"
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
        <NumberInput
          label={`${globalText.text_room} (${globalText.text_count})`}
          source="count"
          validate={[required()]}
        />
        <NumberInput
          label={globalText.text_adult}
          source="adult"
          validate={[required()]}
        />
        <NumberInput
          label={globalText.text_child}
          source="child"
          validate={[required()]}
        />
        <TextInput
          label={globalText.text_option_request}
          source="needs"
          defaultValue=""
        />
        <NumberInput
          label={`${globalText.text_payment} ${globalText.text_price}`}
          source="price"
          validate={[required()]}
        />
        <DateTimeInput
          label={globalText.text_option_expect_check_in}
          source="checkIn"
          validate={[required()]}
        />
        <DateTimeInput
          label={globalText.text_option_expect_check_out}
          source="checkOut"
          validate={[required()]}
        />
      </SimpleForm>
    </Create>
  );
};
