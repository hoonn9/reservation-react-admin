import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  ShowButton,
  DateField,
} from "react-admin";
import { dateOptions } from "../../Utils";
import { globalText } from "../../GlobalText";

export default (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <ReferenceField label="객실 종류" source="room.id" reference="Room">
          <TextField source="name" />
        </ReferenceField>
        <ReferenceField
          label={`${globalText.text_reserve_user} (${globalText.text_member})`}
          source="user.id"
          reference="User"
        >
          <TextField source="username" />
        </ReferenceField>
        <ReferenceField
          label={`${globalText.text_reserve_user} (${globalText.text_no_member})`}
          source="noUser.id"
          reference="NoUser"
        >
          <TextField source="username" />
        </ReferenceField>
        <DateField
          label={globalText.text_check_in}
          options={dateOptions}
          source="checkIn"
        />
        <DateField
          label={globalText.text_check_out}
          options={dateOptions}
          source="checkOut"
        />
        <TextField
          label={`${globalText.text_room} (${globalText.text_count})`}
          source="count"
        />
        <TextField label={globalText.text_adult} source="adult" />
        <TextField label={globalText.text_child} source="child" />
        <DateField
          label={globalText.text_reserve_createdAt}
          options={dateOptions}
          source="createdAt"
        />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
};
