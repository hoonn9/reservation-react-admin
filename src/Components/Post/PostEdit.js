import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@material-ui/core";
import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
  SaveButton,
  ReferenceManyField,
  SingleFieldList,
  ChipField,
  useUpdate,
  useRedirect,
  useNotify,
  Toolbar,
  required,
} from "react-admin";
import { dateOptions } from "../../Utils";
import { globalText } from "../../GlobalText";
import PostTitle from "./PostTitle";
import axios from "axios";
import { print } from "graphql";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { CONNECT_FILE } from "../../SharedQueries";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { mobileEditorStyle, editorStyle } from "../../Utils";

const PostEditToolbar = (props) => {
  const { editorState, setEditorState, imageArray, ...rest } = props;

  useEffect(() => {
    if (props.record) {
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(JSON.parse(props.record.content))
        )
      );
    }
  }, [props.record]);

  return (
    <Toolbar {...rest}>
      <SaveWithNoteButton
        label="SAVE"
        redirect="show"
        submitOnEnter={true}
        {...props}
      />
    </Toolbar>
  );
};

const SaveWithNoteButton = (props) => {
  const { editorState, setEditorState, imageArray, ...rest } = props;
  const [update] = useUpdate("Post");
  const redirectTo = useRedirect();
  const notify = useNotify();
  const { basePath } = props;
  const handleSave = (values, redirect) => {
    update(
      {
        payload: {
          data: {
            ...values,
            content: JSON.stringify(
              convertToRaw(editorState.getCurrentContent())
            ),
          },
        },
      },
      {
        onSuccess: ({ data: newRecord }) => {
          notify("ra.notification.created", "info", {
            smart_count: 1,
          });
          axios.post(process.env.REACT_APP_PROD_URL, {
            query: print(CONNECT_FILE),
            variables: {
              files: imageArray,
              connectId: newRecord.id,
              typeName: "event",
            },
          });
          redirectTo(redirect, basePath, newRecord.id, newRecord);
        },
      }
    );
  };

  // set onSave props instead of handleSubmitWithRedirect
  return <SaveButton {...rest} onSave={handleSave} />;
};

export default (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [imageArray] = useState([]);

  const uploadCallback = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    return new Promise((resolve, reject) => {
      axios
        .post(process.env.REACT_APP_PROD_URL + "api/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          resolve({ data: { link: res.data.location } });
          imageArray.push(res.data.location);
        })
        .catch((e) => {
          console.log(e);
          reject(e.toString());
        });
    });
  };
  const onEditorStateChange = (editorState) => setEditorState(editorState);

  return (
    <Edit title={<PostTitle />} {...props}>
      <SimpleForm
        toolbar={
          <PostEditToolbar
            editorState={editorState}
            setEditorState={setEditorState}
            imageArray={imageArray}
          />
        }
      >
        <TextInput
          disabled
          label={`${globalText.text_post} ID`}
          source="id"
          validate={[required()]}
        />
        <TextInput
          label={`${globalText.text_member} ID`}
          source={"user.id"}
          validate={[required()]}
        />
        <ReferenceInput
          label={`${globalText.text_board} ID`}
          source="board.id"
          reference="Board"
        >
          <SelectInput optionText="name" validate={[required()]} />
        </ReferenceInput>
        <TextInput
          label={`${globalText.text_post} ${globalText.text_type}`}
          source="postType"
        />
        <TextInput
          label={globalText.text_title}
          source="title"
          validate={[required()]}
        />
        <Editor
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          toolbar={{
            image: {
              urlEnabled: true,
              uploadEnabled: true,
              uploadCallback: uploadCallback,
              previewImage: true,
              defaultSize: { width: "100%", height: "auto" },
            },
          }}
          editorStyle={isSmall ? mobileEditorStyle : editorStyle}
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          localization={{
            locale: "ko",
          }}
        />

        <NumberInput
          label={globalText.text_views}
          source="views"
          validate={[required()]}
        />
        <ReferenceManyField
          label={globalText.text_files}
          target="post.id"
          reference="File"
        >
          <SingleFieldList>
            <ChipField source="url" />
          </SingleFieldList>
        </ReferenceManyField>
        <ReferenceManyField
          label={globalText.text_comment}
          target="post.id"
          reference="Comment"
        >
          <SingleFieldList>
            <ChipField source="text" />
          </SingleFieldList>
        </ReferenceManyField>
        <DateTimeInput
          disabled
          label={globalText.text_createdAt}
          options={dateOptions}
          source="createdAt"
        />
        <DateTimeInput
          disabled
          label={globalText.text_updatedAt}
          options={dateOptions}
          source="updatedAt"
        />
      </SimpleForm>
    </Edit>
  );
};
