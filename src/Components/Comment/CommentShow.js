import React from "react";
import {
  TextField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  DateField,
} from "react-admin";
import { globalText } from "../../GlobalText";

export default (props) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label={globalText.text_content} source="text" />
        <DateField
          showTime
          label={globalText.text_createdAt}
          source="createdAt"
        />
      </SimpleShowLayout>
    </Show>
  );
};
