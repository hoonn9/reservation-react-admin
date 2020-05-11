import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@material-ui/core";
import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  SaveButton,
  required,
  useUpdate,
  useRedirect,
  useNotify,
  Toolbar,
} from "react-admin";
import EventTitle from "./EventTitle";
import axios from "axios";
import { print } from "graphql";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { globalText } from "../../GlobalText";
import { CONNECT_FILE } from "../../SharedQueries";
import { mobileEditorStyle, editorStyle } from "../../Utils";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EventEditToolbar = (props) => {
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
  const [update] = useUpdate("Event");
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
    <Edit title={<EventTitle />} {...props}>
      <SimpleForm
        toolbar={
          <EventEditToolbar
            editorState={editorState}
            setEditorState={setEditorState}
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
          editorStyle={isSmall ? mobileEditorStyle : editorStyle}
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
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
    </Edit>
  );
};
