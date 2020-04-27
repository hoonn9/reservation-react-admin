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

export default (props) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label={`${globalText.text_room} ID`} source="id" />
        <TextField label={globalText.text_title} source="name" />
        <TextField label={globalText.text_type} source="count" />
        <TextField label={globalText.text_content} source="price" />
        <ReferenceManyField
          label={globalText.text_pack}
          target="room.id"
          reference="Pack"
        >
          <SingleFieldList>
            <ChipField source="id" />
          </SingleFieldList>
        </ReferenceManyField>
        <ReferenceManyField
          label={globalText.text_reserve}
          target="room.id"
          reference="Reservation"
        >
          <SingleFieldList>
            <ChipField source="id" />
          </SingleFieldList>
        </ReferenceManyField>
        <ReferenceManyField
          label={globalText.text_files}
          target="room.id"
          reference="File"
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
      </SimpleShowLayout>
    </Show>
  );
};
