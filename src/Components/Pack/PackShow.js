import React from "react";
import {
  TextField,
  ReferenceField,
  Labeled,
  Show,
  SimpleShowLayout,
  RichTextField,
  DateField,
  ReferenceManyField,
  SingleFieldList,
  ChipField,
} from "react-admin";
import { dateOptions } from "../../Utils";
import { globalText } from "../../GlobalText";
import PackTitle from "./PackTitle";

export default (props) => {
  return (
    <Show {...props} title={<PackTitle />}>
      <SimpleShowLayout>
        <TextField label={`${globalText.text_pack} ID`} source="id" />
        <ReferenceField
          label={globalText.text_room}
          source="room.id"
          reference="Room"
        >
          <TextField source="name" />
        </ReferenceField>
        <TextField label={globalText.text_name} source="name" />
        <TextField label={globalText.text_price} source="price" />
        <TextField
          multiline
          label={globalText.text_description}
          source="description"
        />
        <DateField
          showTime
          label={globalText.text_createdAt}
          source="createdAt"
        />
        <DateField
          showTime
          label={globalText.text_updatedAt}
          source="updatedAt"
        />
      </SimpleShowLayout>
    </Show>
  );
};
