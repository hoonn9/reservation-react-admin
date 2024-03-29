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
} from "react-admin";
import { dateOptions } from "../../Utils";
import { globalText } from "../../GlobalText";

export default (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List {...props}>
      {isSmall ? (
        <SimpleList
          {...props}
          primaryText={(record) => record.id}
          secondaryText={(record) => record.name}
          tertiaryText={(record) =>
            new Date(record.createdAt).toLocaleDateString()
          }
        />
      ) : (
        <Datagrid>
          <TextField label={`${globalText.text_board} ID`} source="id" />
          <TextField
            label={`${globalText.text_board} ${globalText.text_type}`}
            source="name"
          />
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
