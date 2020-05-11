import React from "react";
import {
  TextField,
  Labeled,
  Show,
  SimpleShowLayout,
  DateField,
  ReferenceManyField,
  SingleFieldList,
  ChipField,
} from "react-admin";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { globalText } from "../../GlobalText";
import EventTitle from "./EventTitle";
import ReadEditor from "../ReadEditor";

export default (props) => {
  return (
    <Show {...props} title={<EventTitle />}>
      <SimpleShowLayout>
        <TextField label={`${globalText.text_event} ID`} source="id" />
        <TextField
          label={`${globalText.text_event} ${globalText.text_type}`}
          source="eventType"
        />
        <TextField label={globalText.text_title} source="title" />
        <TextField label={globalText.text_subTitle} source="subTitle" />
        <TextField label={globalText.text_period} source="period" />
        <ReferenceManyField
          label={globalText.text_comment}
          target="event.id"
          reference="Comment"
        >
          <SingleFieldList>
            <ChipField source="id" />
          </SingleFieldList>
        </ReferenceManyField>
        <ReferenceManyField
          label={globalText.text_file}
          target="event.id"
          reference="File"
        >
          <SingleFieldList>
            <ChipField source="id" />
          </SingleFieldList>
        </ReferenceManyField>
        <Labeled label={globalText.text_content} />
        <ReadEditor record={props.record} />
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
