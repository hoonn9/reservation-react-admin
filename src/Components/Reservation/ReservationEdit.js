import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  NumberInput,
  DateTimeInput,
  SelectInput,
  required,
} from "react-admin";
import { globalText } from "../../GlobalText";
import ReservationTitle from "./ReservationTitle";

const UserInput = ({ props, record }) => {
  if (record) {
    return record.user ? (
      <ReferenceInput
        {...props}
        label={`${globalText.text_member} ID`}
        source="user.id"
        reference="User"
      >
        <TextInput disabled source="id" validate={[required()]} />
      </ReferenceInput>
    ) : (
      <ReferenceInput
        {...props}
        label={`${globalText.text_no_member} ID`}
        source="noUser.id"
        reference="NoUser"
      >
        <TextInput disabled source="id" validate={[required()]} />
      </ReferenceInput>
    );
  }
};

export default (props) => (
  <Edit title={<ReservationTitle />} {...props}>
    <SimpleForm>
      <TextInput
        label={`${globalText.text_reserve} ID`}
        disabled
        source="id"
        validate={[required()]}
      />
      <UserInput props={props} record={props.record} />
      <ReferenceInput
        label={`${globalText.text_guest} ID`}
        source="guest.id"
        reference="Guest"
      >
        <TextInput disabled source="id" validate={[required()]} />
      </ReferenceInput>
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
      <TextInput label={globalText.text_option_request} source="needs" />
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
  </Edit>
);
