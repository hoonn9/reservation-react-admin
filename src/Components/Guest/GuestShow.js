import React from "react";
import {
  TextField,
  Show,
  SimpleShowLayout,
  DateField,
  ReferenceField,
  ChipField,
} from "react-admin";
import { globalText } from "../../GlobalText";

export default (props) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label={`${globalText.text_no_member} ID`} source="id" />
        <TextField label={globalText.text_email} source="email" />
        <TextField label={globalText.text_username} source="username" />
        <TextField label={globalText.text_phone_num} source="phoneNum" />
        <TextField label={globalText.text_bio} source="bio" />
        <ReferenceField
          label={globalText.text_reserve}
          source="reservation.id"
          reference="Reservation"
        >
          <ChipField source="id" />
        </ReferenceField>
        <DateField
          showTime
          label={globalText.text_createdAt}
          source="createdAt"
        />
      </SimpleShowLayout>
    </Show>
  );
};
