import React from "react";
import {
  TextField,
  ReferenceField,
  Labeled,
  Show,
  SimpleShowLayout,
  RichTextField,
  DateField,
} from "react-admin";
import { globalText } from "../../GlobalText";

const UserField = ({ props, record }) => {
  if (record) {
    return record.user ? (
      <Show {...props}>
        <SimpleShowLayout>
          <ReferenceField
            label={`${globalText.text_member} ID`}
            source="user.id"
            reference="User"
          >
            <TextField source="id" />
          </ReferenceField>
          <TextField label={globalText.text_username} source="user.username" />
          <TextField label={globalText.text_email} source="user.email" />
          <TextField label={globalText.text_bio} source="user.bio" />
          <TextField label={globalText.text_phone_num} source="user.phoneNum" />
        </SimpleShowLayout>
      </Show>
    ) : (
      <Show {...props}>
        <SimpleShowLayout>
          <ReferenceField
            label={`${globalText.text_no_member} ID`}
            source="noUser.id"
            reference="NoUser"
          >
            <TextField source="id" />
          </ReferenceField>
          <TextField
            label={globalText.text_username}
            source="noUser.username"
          />
          <TextField label={globalText.text_email} source="noUser.email" />
          <TextField label={globalText.text_bio} source="noUser.bio" />
          <TextField
            label={globalText.text_phone_num}
            source="noUser.phoneNum"
          />
        </SimpleShowLayout>
      </Show>
    );
  }
};

const GuestField = ({ props, record }) => {
  if (record) {
    return (
      <Show {...props}>
        <SimpleShowLayout>
          <ReferenceField
            label={`${globalText.text_guest} ID`}
            source="guest.id"
            reference="Guest"
          >
            <TextField source="id" />
          </ReferenceField>
          <TextField label={globalText.text_username} source="guest.username" />
          <TextField label={globalText.text_email} source="guest.email" />
          <TextField label={globalText.text_bio} source="guest.bio" />
          <TextField
            label={globalText.text_phone_num}
            source="guest.phoneNum"
          />
        </SimpleShowLayout>
      </Show>
    );
  }
};

export default (props) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label={`${globalText.text_reserve} ID`} source="id" />
        <Labeled label={globalText.text_reserve_user}>
          <UserField props={props} record={props.record} />
        </Labeled>
        <Labeled label={globalText.text_guest}>
          <GuestField props={props} record={props.record} />
        </Labeled>
        <TextField
          label={`${globalText.text_room} ${globalText.text_number}`}
          source="count"
        />
        <TextField label={globalText.text_adult} source="adult" />
        <TextField label={globalText.text_child} source="child" />
        <RichTextField label={globalText.text_option_request} source="needs" />
        <RichTextField
          label={`${globalText.text_payment} ${globalText.text_price}`}
          source="price"
        />
        <DateField
          showTime
          label={globalText.text_option_expect_check_in}
          source="checkIn"
        />
        <DateField
          showTime
          label={globalText.text_option_expect_check_out}
          source="checkOut"
        />
        <DateField
          showTime
          label={`${globalText.text_reserve} ${globalText.text_time}`}
          source="createdAt"
        />
      </SimpleShowLayout>
    </Show>
  );
};
