import React, { useState } from "react";
import {
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  Create,
  required,
  useCreate,
  useRedirect,
  useNotify,
  SaveButton,
  Toolbar,
  ImageField,
  ImageInput,
} from "react-admin";
import axios from "axios";
import { globalText } from "../../GlobalText";

const FileCreateToolbar = (props) => {
  const { imageArray, ...rest } = props;
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
  const { imageArray, ...rest } = props;
  const [create] = useCreate("File");
  const redirectTo = useRedirect();
  const notify = useNotify();
  const { basePath } = props;
  const handleSave = async (values, redirect) => {
    let url;

    const formData = new FormData();
    formData.append("file", values.file.rawFile);
    await axios
      .post(process.env.REACT_APP_PROD_URL + "api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        url = res.data.location;
      })
      .catch((e) => {
        console.log(e);
      });
    create(
      {
        payload: {
          data: {
            ...values,
            url,
          },
        },
      },
      {
        onSuccess: ({ data: newRecord }) => {
          notify("ra.notification.created", "info", {
            smart_count: 1,
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
  const [imageArray] = useState([]);

  return (
    <Create {...props}>
      <SimpleForm toolbar={<FileCreateToolbar imageArray={imageArray} />}>
        <TextInput label={`${globalText.text_post} ID`} source="post.id" />
        <ReferenceInput
          label={globalText.text_room}
          source="room.id"
          reference="Room"
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput
          label={globalText.text_event}
          source="event.id"
          reference="Event"
        >
          <SelectInput optionText="title" />
        </ReferenceInput>
        <ReferenceInput
          label={globalText.text_popup}
          source="popup.id"
          reference="Popup"
        >
          <SelectInput optionText="id" />
        </ReferenceInput>
        <ImageInput
          label={globalText.text_url}
          accept="image/*"
          source="file"
          validate={[required()]}
        >
          <ImageField source="src" title="title" />
        </ImageInput>
      </SimpleForm>
    </Create>
  );
};
