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
        <TextField label={`${globalText.text_board} ID`} source="id" />
        <TextField
          label={`${globalText.text_board} ${globalText.text_type}`}
          source="name"
        />
        <ReferenceManyField
          label={globalText.text_post}
          target="board.id"
          reference="Post"
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
