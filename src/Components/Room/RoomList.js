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
  ReferenceManyField,
  SingleFieldList,
  ChipField,
} from "react-admin";
import { globalText } from "../../GlobalText";

export default (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.name}
          tertiaryText={(record) => record.price}
        />
      ) : (
        <Datagrid>
          <TextField label={`${globalText.text_room} ID`} source="id" />
          <TextField label={globalText.text_room} source="name" />
          <TextField label={globalText.text_number} source="count" />
          <TextField label={globalText.text_price} source="price" />

          <ReferenceManyField
            label={globalText.text_reserve}
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
