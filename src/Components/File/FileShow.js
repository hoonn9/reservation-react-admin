import React from "react";
import {
  TextField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  DateField,
  UrlField,
} from "react-admin";
import { globalText } from "../../GlobalText";

export default (props) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label={`${globalText.text_post} ID`} source="id" />
        <UrlField label={globalText.text_url} source="url" />
        <ReferenceField
          label={globalText.text_post}
          source="post.id"
          reference="Post"
        >
          <TextField source="id" />
        </ReferenceField>
        <ReferenceField
          label={globalText.text_room}
          source="room.id"
          reference="Room"
        >
          <TextField source="name" />
        </ReferenceField>

        <ReferenceField
          label={globalText.text_event}
          source="event.id"
          reference="Event"
        >
          <TextField source="title" />
        </ReferenceField>

        <ReferenceField
          label={globalText.text_event}
          source="popup.id"
          reference="Popup"
        >
          <TextField source="id" />
        </ReferenceField>
        <DateField
          showTime
          label={globalText.text_createdAt}
          source="createdAt"
        />
      </SimpleShowLayout>
    </Show>
  );
};
