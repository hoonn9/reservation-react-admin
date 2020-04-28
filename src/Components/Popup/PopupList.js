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
import PopupTitle from "./PopupTitle";
import MyUrlField from "../MyUrlField";

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
    <TextInput label="ID" source="popup.id" alwaysOn />
  </Filter>
);

export default (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List {...props} title={<PopupTitle />} filters={<CustomFilter />}>
      {isSmall ? (
        <SimpleCustomList {...props} />
      ) : (
        <Datagrid>
          <TextField label={`${globalText.text_post} ID`} source="id" />
          <TextField label={globalText.text_title} source="title" />
          <TextField label={globalText.text_content} source="content" />
          <MyUrlField source="url" />
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
