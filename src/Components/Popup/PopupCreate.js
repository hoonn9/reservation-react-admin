import React, { useState } from "react";
import {
  SimpleForm,
  TextInput,
  Create,
  ImageField,
  ImageInput,
  required,
  Toolbar,
  useCreate,
  useRedirect,
  useNotify,
  SaveButton,
} from "react-admin";
import axios from "axios";
import { print } from "graphql";
import { CONNECT_FILE } from "../../SharedQueries";
import { globalText } from "../../GlobalText";

const PostCreateToolbar = (props) => {
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
  const [create] = useCreate("Popup");
  const redirectTo = useRedirect();
  const notify = useNotify();
  const { basePath } = props;
  const handleSave = (values, redirect) => {
    const formData = new FormData();
    formData.append("file", values.file.rawFile);
    axios
      .post(process.env.REACT_APP_PROD_URL + "api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        imageArray.push(res.data.location);
      })
      .catch((e) => {
        console.log(e);
      });
    create(
      {
        payload: {
          data: {
            ...values,
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
              typeName: "popup",
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
  const [imageArray] = useState([]);

  return (
    <Create {...props}>
      <SimpleForm toolbar={<PostCreateToolbar imageArray={imageArray} />}>
        <TextInput
          label={globalText.text_title}
          source="title"
          validate={[required()]}
        />
        <TextInput
          label={globalText.text_content}
          multiline
          source="content"
          validate={[required()]}
        />
        <ImageInput label={globalText.text_url} accept="image/*" source="file">
          <ImageField source="src" title="title" />
        </ImageInput>
      </SimpleForm>
    </Create>
  );
};
