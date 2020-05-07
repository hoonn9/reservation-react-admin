import React, { useState, useEffect } from "react";
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
import { EditorState, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { globalText } from "../../GlobalText";
import EventTitle from "./EventTitle";

const editorStyle = {
  padding: "0px 32px",
  borderRadius: "2px",
  height: "480px",
  width: "100%",
};
const mobileEditorStyle = {
  padding: "0px 16px",
  borderRadius: "2px",
  height: "300px",
  width: "100%",
};

const ReadEditor = ({ record }) => {
  const [editorState, setEditorState] = useState(
    record
      ? EditorState.createWithContent(
          convertFromRaw(JSON.parse(record.content))
        )
      : EditorState.createEmpty()
  );
  return (
    <Editor
      toolbarHidden
      editorState={editorState}
      readOnly={true}
      editorStyle={editorStyle}
    />
  );
};

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
        <UrlField source="thumbnail" />
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
        <Labeled label="내용" />
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
