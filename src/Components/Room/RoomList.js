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
  ReferenceManyField,
  SingleFieldList,
  ChipField,
} from "react-admin";
import { dateOptions } from "../../Utils";
import { globalText } from "../../GlobalText";

const SimpleRoomList = (props) => (
  <List {...props}>
    <SimpleList
      primaryText={(record) => record.title}
      secondaryText={(record) => `${record.views} views`}
      tertiaryText={(record) => new Date(record.createdAt).toLocaleDateString()}
    />
  </List>
);

export default (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List {...props}>
      {isSmall ? (
        <SimpleRoomList {...props} />
      ) : (
        <Datagrid>
          <TextField label={`${globalText.text_room} ID`} source="id" />
          <TextField label={globalText.text_room} source="name" />
          <TextField label={globalText.text_count} source="count" />
          <TextField label={globalText.text_price} source="price" />

          <ReferenceManyField
            label={`${globalText.text_room} ${globalText.text_number}`}
            target="room.id"
            reference="Reservation"
          >
            <SingleFieldList>
              <ChipField source="id" />
            </SingleFieldList>
          </ReferenceManyField>
          <DateField
            showTime
            label={globalText.text_createdAt}
            source="createdAt"
          />
          <EditButton />
          <ShowButton />
        </Datagrid>
      )}
    </List>
  );
};
