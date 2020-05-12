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
} from "react-admin";
import { dateOptions } from "../../Utils";
import { globalText } from "../../GlobalText";

const CommentFilter = (props) => (
  <Filter {...props}>
    <TextInput label={`${globalText.text_post} ID`} source="post.id" alwaysOn />
    <TextInput
      label={`${globalText.text_member} ID`}
      source="user.id"
      alwaysOn
    />
  </Filter>
);

export default (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List {...props} filters={<CommentFilter />}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.text}
          secondaryText={(record) =>
            new Date(record.createdAt).toLocaleDateString()
          }
          tertiaryText={(record) => record.user.id}
        />
      ) : (
        <Datagrid>
          <TextField label={`${globalText.text_comment} ID`} source="id" />
          <ReferenceField
            label={globalText.text_post}
            source="post.id"
            reference="Post"
          >
            <TextField source="id" />
          </ReferenceField>
          <ReferenceField
            label={globalText.text_member}
            source="user.id"
            reference="User"
          >
            <TextField source="userId" />
          </ReferenceField>
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
