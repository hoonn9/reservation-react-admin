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
  DateField,
} from "react-admin";
import styled from "styled-components";

export const ReservationList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <ReferenceField source="room.id" reference="Room">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="checkIn" />
        <TextField source="checkOut" />
        <TextField source="count" />
        <TextField source="needs" />
        <TextField source="adult" />
        <TextField source="child" />
        <TextField source="createdAt" />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

const UserField = ({ source, record }) => {
  console.log(record);
  return record.user ? (
    <ReferenceField source="user.id" reference="User">
      <TextField source="username" />
    </ReferenceField>
  ) : (
    <ReferenceField source="noUser.id" reference="NoUser">
      <TextField source="username" />
    </ReferenceField>
  );
};

export const ReservationShow = (props) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <UserField record={props.record} />
        <TextField source="title" />
        <TextField source="teaser" />
        <RichTextField source="body" />
        <DateField label="Publication date" source="created_at" />
      </SimpleShowLayout>
    </Show>
  );
};

const Wrapper = styled.div``;
const Row = styled.div``;
const Title = styled.div``;
const Content = styled.div``;
const PersonField = ({ person: { id, username, bio, phoneNum, email } }) => {
  return (
    <Wrapper>
      <Row>
        <Title>{"ID"}</Title>
        <Content>{id}</Content>
      </Row>
      <Row>
        <Title>{"성명"}</Title>
        <Content>{username}</Content>
      </Row>
      <Row>
        <Title>{"성별"}</Title>
        <Content>{bio}</Content>
      </Row>
      <Row>
        <Title>{"휴대폰 번호"}</Title>
        <Content>{phoneNum}</Content>
      </Row>
      <Row>
        <Title>{"이메일"}</Title>
        <Content>{email}</Content>
      </Row>
    </Wrapper>
  );
};
