import React, { useState, useCallback } from "react";
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
  SaveButton,
  Toolbar,
  required,
  useCreate,
  useRedirect,
  useNotify,
} from "react-admin";
import axios from "axios";
import { print } from "graphql";
import gql from "graphql-tag";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import { dateOptions } from "../../Utils";
import { globalText } from "../../GlobalText";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

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

const CONNECT_FILE = gql`
  mutation createFile(
    $files: [String!]!
    $connectId: String!
    $typeName: String!
  ) {
    createFile(files: $files, connectId: $connectId, typeName: $typeName) {
      id
    }
  }
`;

const EventCreateToolbar = (props) => {
  return (
    <Toolbar {...props}>
      <SaveWithNoteButton
        label="SAVE"
        redirect="show"
        props={props}
        submitOnEnter={true}
        editorState={props.editorState}
        imageArray={props.imageArray}
      />
    </Toolbar>
  );
};

const SaveWithNoteButton = (props) => {
  const [create] = useCreate("Event");
  const redirectTo = useRedirect();
  const notify = useNotify();
  const { basePath } = props;
  const handleSave = (values, redirect) => {
    console.log(values);
    console.log(
      JSON.stringify(convertToRaw(props.editorState.getCurrentContent()))
    );
    create(
      {
        payload: {
          data: {
            ...values,
            files: { create: [{ url: props.imageArray[0] }] },
            content: JSON.stringify(
              convertToRaw(props.editorState.getCurrentContent())
            ),
          },
        },
      },
      {
        onSuccess: ({ data: newRecord }) => {
          notify("ra.notification.created", "info", {
            smart_count: 1,
          });
          console.log(newRecord);
          axios.post(process.env.REACT_APP_PROD_URL, {
            query: print(CONNECT_FILE),
            variables: {
              files: props.imageArray,
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
  return <SaveButton {...props} onSave={handleSave} />;
};

export default (props) => {
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
          <EventCreateToolbar
            editorState={editorState}
            imageArray={imageArray}
          />
        }
      >
        <SelectInput
          label={`${globalText.text_event} ${globalText.text_type}`}
          source="eventType"
          choices={[
            { id: "숙박", name: "숙박" },
            { id: "레스토랑", name: "레스토랑" },
            { id: "레저", name: "레저" },
          ]}
          validate={[required()]}
        />
        <TextInput
          label={globalText.text_title}
          source="title"
          validate={[required()]}
        />
        <TextInput label={globalText.text_subTitle} source="subTitle" />
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
          editorStyle={editorStyle}
          editorState={editorState}
          onEditorStateChange={(editorState) => setEditorState(editorState)}
          localization={{
            locale: "ko",
          }}
        />
        <TextInput
          label={globalText.text_period}
          source="period"
          validate={[required()]}
        />
      </SimpleForm>
    </Create>
  );
};
