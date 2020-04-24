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
        <TextField label="예약 ID" source="id" />
        <Labeled label="예약자">
          <UserField props={props} record={props.record} />
        </Labeled>
        <Labeled label="게스트">
          <GuestField props={props} record={props.record} />
        </Labeled>
        <TextField label="객실 수" source="count" />
        <TextField label="성인" source="adult" />
        <TextField label="소아" source="child" />
        <RichTextField label="요구사항" source="needs" />
        <RichTextField label="결제 금액" source="price" />
        <DateField showTime label="체크인 예정" source="checkIn" />
        <DateField showTime label="체크아웃 예정" source="checkOut" />
        <DateField showTime label="예약 시간" source="createdAt" />
      </SimpleShowLayout>
    </Show>
  );
};
