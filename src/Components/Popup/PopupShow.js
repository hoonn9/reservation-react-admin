import React from "react";
import {
  TextField,
  Show,
  SimpleShowLayout,
  DateField,
  ReferenceManyField,
  SingleFieldList,
  ImageField,
} from "react-admin";
import { globalText } from "../../GlobalText";
import PopupTitle from "./PopupTitle";

export default (props) => {
  return (
    <Show {...props} title={<PopupTitle />}>
      <SimpleShowLayout>
        <TextField label={`${globalText.text_post} ID`} source="id" />
        <TextField label={globalText.text_title} source="title" />
        <TextField label={globalText.text_content} source="content" />
        <ReferenceManyField
          label={globalText.text_file}
          target="popup.id"
          reference="File"
        >
          <SingleFieldList>
            <ImageField source="url" />
          </SingleFieldList>
        </ReferenceManyField>
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
