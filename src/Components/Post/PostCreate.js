import React, { useState } from "react";
import { useMediaQuery } from "@material-ui/core";
import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  ShowButton,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  Create,
  Filter,
  FunctionField,
  Labeled,
  Show,
  SimpleShowLayout,
  RichTextField,
  DateField,
  Toolbar,
  required,
  useCreate,
  useRedirect,
  useNotify,
  SaveButton,
} from "react-admin";
import axios from "axios";
import { print } from "graphql";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import { globalText } from "../../GlobalText";
import { CONNECT_FILE } from "../../SharedQueries";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { mobileEditorStyle, editorStyle } from "../../Utils";

const PostCreateToolbar = (props) => {
  const { editorState, imageArray, ...rest } = props;
  return (
    <Toolbar {...rest}>
      <SaveWithNoteButton
        label="SAVE"
        redirect="show"
        {...props}
        submitOnEnter={true}
      />
    </Toolbar>
  );
};

const SaveWithNoteButton = (props) => {
  const { editorState, imageArray, ...rest } = props;
  const [create] = useCreate("Post");
  const redirectTo = useRedirect();
  const notify = useNotify();
  const { basePath } = props;
  const handleSave = (values, redirect) => {
    create(
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
              typeName: "post",
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

  return (
    <Create {...props}>
      <SimpleForm
        toolbar={
          <PostCreateToolbar
            editorState={editorState}
            imageArray={imageArray}
          />
        }
      >
        <ReferenceInput
          label={globalText.text_board}
          source="board.id"
          reference="Board"
          validate={[required()]}
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
        <SelectInput
          label={`${globalText.text_post} ${globalText.text_type}`}
          source="postType"
          choices={[
            { id: "free", name: "free" },
            { id: "notice", name: "notice" },
          ]}
          validate={[required()]}
        />
        <TextInput
          label={`${globalText.text_member} ID`}
          source={"user.id"}
          validate={[required()]}
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
          onEditorStateChange={(editorState) => setEditorState(editorState)}
          localization={{
            locale: "ko",
          }}
        />
      </SimpleForm>
    </Create>
  );
};
