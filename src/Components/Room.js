import React from "react";
import { useMediaQuery } from "@material-ui/core";
import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  ArrayField,
  ReferenceField,
  ChipField,
  ReferenceArrayField,
  ReferenceManyField,
  SingleFieldList,
  EditButton,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  Create,
  Filter,
} from "react-admin";

export const RoomList = (props) => {
  console.log(props);
  //const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField label="상호명" source="name" />
        <TextField label="방 수" source="count" />
        <TextField label="가격" source="price" />
        <TextField label="등록일" source="createdAt" />
        <ReferenceManyField
          label="예약 리스트"
          target="room.id"
          reference="Reservation"
        >
          <SingleFieldList>
            <ChipField source="id" />
          </SingleFieldList>
        </ReferenceManyField>
        <EditButton />
      </Datagrid>
    </List>
  );
};
