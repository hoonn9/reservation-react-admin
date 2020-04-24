import React from "react";
import {
  TextField,
  ReferenceField,
  Labeled,
  Show,
  SimpleShowLayout,
  RichTextField,
  DateField,
  ReferenceManyField,
  SingleFieldList,
  ChipField,
} from "react-admin";
import { dateOptions } from "../../Utils";
import { globalText } from "../../GlobalText";

const UserField = ({ props, record }) => {
  if (record) {
    return record.user ? (
      <Show {...props}>
        <SimpleShowLayout>
          <ReferenceField label="회원 ID" source="user.id" reference="User">
            <TextField source="id" />
          </ReferenceField>
          <TextField label="성명" source="user.username" />
          <TextField label="이메일" source="user.email" />
          <TextField label="성별" source="user.bio" />
          <TextField label="휴대폰 번호" source="user.phoneNum" />
        </SimpleShowLayout>
      </Show>
    ) : (
      <Show {...props}>
        <SimpleShowLayout>
          <ReferenceField
            label="비회원 ID"
            source="noUser.id"
            reference="NoUser"
          >
            <TextField source="id" />
          </ReferenceField>
          <TextField label="성명" source="noUser.username" />
          <TextField label="이메일" source="noUser.email" />
          <TextField label="성별" source="noUser.bio" />
          <TextField label="휴대폰 번호" source="noUser.phoneNum" />
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
          <ReferenceField label="게스트 ID" source="guest.id" reference="Guest">
            <TextField source="id" />
          </ReferenceField>
          <TextField label="성명" source="guest.username" />
          <TextField label="이메일" source="guest.email" />
          <TextField label="성별" source="guest.bio" />
          <TextField label="휴대폰 번호" source="guest.phoneNum" />
        </SimpleShowLayout>
      </Show>
    );
  }
};

export default (props) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label={`${globalText.text_member} ID`} source="id" />
        <TextField label={globalText.text_id} source="userId" />
        <TextField label={globalText.text_email} source="email" />
        <TextField label={globalText.text_username} source="username" />
        <TextField label={globalText.text_nickname} source="nickname" />
        <TextField label={globalText.text_phone_num} source="phoneNum" />
        <TextField label={globalText.text_bio} source="bio" />
        <TextField label={globalText.text_address} source="address" />
        <TextField label={globalText.text_secret} source="loginSecret" />
        <TextField label={globalText.text_is_agree} source="isAgree" />
        <ReferenceManyField
          label="예약 리스트"
          target="user.id"
          reference="Reservation"
        >
          <SingleFieldList>
            <ChipField source="id" />
          </SingleFieldList>
        </ReferenceManyField>
        <DateField
          showTime
          label={globalText.text_user_createdAt}
          source="createdAt"
        />
      </SimpleShowLayout>
    </Show>
  );
};
