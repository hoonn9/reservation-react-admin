import React from "react";
import { useMediaQuery } from "@material-ui/core";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
  DateField,
  SimpleList,
  Filter,
  TextInput,
} from "react-admin";
import { dateOptions } from "../../Utils";
import { globalText } from "../../GlobalText";
import PopupTitle from "./PopupTitle";

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
        <SimpleList
          primaryText={(record) => record.title}
          secondaryText={(record) => record.content}
          tertiaryText={(record) => ""}
        />
      ) : (
        <Datagrid>
          <TextField label={`${globalText.text_post} ID`} source="id" />
          <TextField label={globalText.text_title} source="title" />
          <TextField label={globalText.text_content} source="content" />
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
