import React from "react";
import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  ShowButton,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  Create,
  Filter,
  FunctionField,
  Labeled,
  Show,
  SimpleShowLayout,
  RichTextField,
  NumberInput,
  DateTimeInput,
  DateField,
  useMutation,
  Button,
  Form,
  TopToolbar,
  SaveButton,
} from "react-admin";
import styled from "styled-components";
import { dateOptions } from "../../Utils";
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
        <TextInput disabled source="id" />
      </ReferenceInput>
    ) : (
      <ReferenceInput
        {...props}
        label={`${globalText.text_no_member} ID`}
        source="noUser.id"
        reference="NoUser"
      >
        <TextInput disabled source="id" />
      </ReferenceInput>
    );
  }
};

const EditActions = ({ basePath, data, resource }) => (
  <TopToolbar>
    <ShowButton basePath={basePath} record={data} />
    {/* Add your custom actions */}
    <SaveButton
      onSave={(event) => {
        console.log("event");
      }}
    />
  </TopToolbar>
);

const ApproveButton = ({ record }) => {
  const [approve, { loading }] = useMutation({
    type: "update",
    resource: "comments",
    payload: { id: record.id, data: { isApproved: true } },
  });
  return <Button label="Approve" onClick={approve} disabled={loading} />;
};

export default (props) => (
  <Edit title={<ReservationTitle />} {...props}>
    <SimpleForm>
      <TextInput label={`${globalText.text_reserve} ID`} disabled source="id" />
      <UserInput props={props} record={props.record} />
      <ReferenceInput
        label={`${globalText.text_guest} ID`}
        source="guest.id"
        reference="Guest"
      >
        <TextInput disabled source="id" />
      </ReferenceInput>
      <NumberInput label="객실 수" source="count" />
      <NumberInput label="성인" source="adult" />
      <NumberInput label="소아" source="child" />
      <TextInput label="요구사항" source="needs" />
      <NumberInput label="결제 금액" source="price" />
      <DateTimeInput label="체크인 예정" source="checkIn" />
      <DateTimeInput label="체크아웃 예정" source="checkOut" />
    </SimpleForm>
  </Edit>
);
