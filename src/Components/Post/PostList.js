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

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="ID" source="user.id" alwaysOn />
    <TextInput
      label={globalText.text_nickname}
      source="user.nickname"
      alwaysOn
    />
    <ReferenceInput
      label={globalText.text_board}
      source="board.id"
      reference="Board"
      allowEmpty
    >
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export default (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List {...props} filters={<PostFilter />}>
      {isSmall ? (
        <SimpleList
          {...props}
          primaryText={(record) => record.title}
          secondaryText={(record) =>
            new Date(record.createdAt).toLocaleDateString()
          }
          tertiaryText={(record) => record.user.id}
        />
      ) : (
        <Datagrid>
          <TextField label={`${globalText.text_post} ID`} source="id" />
          <ReferenceField
            label={globalText.text_writer}
            source="user.id"
            reference="User"
          >
            <TextField source="userId" />
          </ReferenceField>
          <TextField label={globalText.text_title} source="title" />
          <ReferenceField
            label={globalText.text_board}
            source="board.id"
            reference="Board"
          >
            <TextField source="name" />
          </ReferenceField>
          <TextField
            label={`${globalText.text_post} ${globalText.text_type}`}
            source="postType"
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
