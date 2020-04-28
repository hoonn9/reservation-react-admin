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
  UrlField,
} from "react-admin";
import { dateOptions } from "../../Utils";
import { globalText } from "../../GlobalText";
import PopupTitle from "./PopupTitle";

export default (props) => {
  return (
    <Show {...props} title={<PopupTitle />}>
      <SimpleShowLayout>
        <TextField label={`${globalText.text_post} ID`} source="id" />
        <TextField label={globalText.text_title} source="title" />
        <TextField label={globalText.text_content} source="content" />
        <UrlField source="url" />
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
