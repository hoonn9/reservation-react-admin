import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  ShowButton,
  DateField,
  Filter,
  TextInput,
  SelectInput,
  ReferenceInput,
  SimpleList,
} from "react-admin";
import { useMediaQuery } from "@material-ui/core";
import { dateOptions, dateDetailConverter } from "../../Utils";
import { globalText } from "../../GlobalText";

const ReservationFilter = (props) => (
  <Filter {...props}>
    <TextInput label="ID" source="id" alwaysOn />
    <ReferenceInput
      label={globalText.text_room}
      source="room.id"
      reference="Room"
      alwaysOn
    >
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export default (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List {...props} filters={<ReservationFilter />}>
      {isSmall ? (
        <SimpleList
          {...props}
          primaryText={(record) => record.id}
          secondaryText={(record) => dateDetailConverter(record.checkIn)}
          tertiaryText={(record) => record.room.name}
        />
      ) : (
        <Datagrid>
          <ReferenceField
            label={`${globalText.text_room} ${globalText.text_type}`}
            source="room.id"
            reference="Room"
          >
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
          <ReferenceField
            label={`${globalText.text_guest} (${globalText.text_no_member})`}
            source="guest.id"
            reference="Guest"
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
      )}
    </List>
  );
};
