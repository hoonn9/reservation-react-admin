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
import ReadEditor from "../ReadEditor";

export default (props) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label={`${globalText.text_post} ID`} source="id" />
        <ReferenceField
          label={globalText.text_writer}
          source="user.id"
          reference="User"
        >
          <TextField source="id" />
        </ReferenceField>
        <TextField label={globalText.text_title} source="title" />
        <TextField label={globalText.text_type} source="postType" />
        <TextField label={globalText.text_views} source="views" />
        <ReferenceField
          label={globalText.text_board}
          source="board.id"
          reference="Board"
        >
          <TextField source="name" />
        </ReferenceField>
        <ReferenceManyField
          label={globalText.text_comment}
          target="post.id"
          reference="Comment"
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
