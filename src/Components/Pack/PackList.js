import React from "react";
import { useMediaQuery } from "@material-ui/core";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  ShowButton,
  DateField,
  SimpleList,
  Filter,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { dateOptions } from "../../Utils";
import { globalText } from "../../GlobalText";
import PackTitle from "./PackTitle";

const SimpleCustomList = (props) => (
  <List {...props}>
    <SimpleList
      primaryText={(record) => record.title}
      secondaryText={(record) => `${record.views} views`}
      tertiaryText={(record) => new Date(record.createdAt).toLocaleDateString()}
    />
  </List>
);

const CustomFilter = (props) => (
  <Filter {...props}>
    <TextInput label="ID" source="pack.id" alwaysOn />
    <ReferenceInput
      label={globalText.text_room}
      source="room.id"
      reference="Room"
      alwaysOn
      allowEmpty
    >
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export default (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List {...props} title={<PackTitle />} filters={<CustomFilter />}>
      {isSmall ? (
        <SimpleCustomList {...props} />
      ) : (
        <Datagrid>
          <TextField label={`${globalText.text_pack} ID`} source="id" />
          <ReferenceField
            label={globalText.text_room}
            source="room.id"
            reference="Room"
          >
            <TextField source="name" />
          </ReferenceField>
          <TextField label={globalText.text_name} source="name" />
          <TextField label={globalText.text_price} source="price" />
          <DateField
            label={globalText.text_createdAt}
            options={dateOptions}
            source="createdAt"
          />
          <EditButton />
          <ShowButton />
        </Datagrid>
      )}
    </List>
  );
};
