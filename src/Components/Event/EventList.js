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
import MyUrlField from "../MyUrlField";
import EventTitle from "./EventTitle";

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
    <TextInput label="ID" source="event.id" alwaysOn />
    <SelectInput
      allowEmpty
      alwaysOn
      label={`${globalText.text_event} ${globalText.text_type}`}
      source="eventType"
      choices={[
        { id: "숙박", name: "숙박" },
        { id: "레스토랑", name: "레스토랑" },
        { id: "레저", name: "레저" },
      ]}
    />
  </Filter>
);

export default (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List {...props} title={<EventTitle />} filters={<CustomFilter />}>
      {isSmall ? (
        <SimpleCustomList {...props} />
      ) : (
        <Datagrid>
          <TextField label={`${globalText.text_event} ID`} source="id" />
          <TextField
            label={`${globalText.text_event} ${globalText.text_type}`}
            source="eventType"
          />
          <TextField label={globalText.text_title} source="title" />
          <TextField label={globalText.text_subTitle} source="subTitle" />
          <TextField label={globalText.text_period} source="period" />
          <MyUrlField source="thumbnail" />
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
