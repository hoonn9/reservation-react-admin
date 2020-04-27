import React from "react";
import { getSafe } from "../Utils";

export default (params, resourceName, fetchType) => {
  const convertParams = params;
  if (resourceName === "User") {
    if (fetchType === "UPDATE") {
      const {
        data: {
          id,
          username,
          nickname,
          phoneNum,
          bio,
          address,
          loginSecret,
          isAgree,
        },
      } = params;

      convertParams.data = {
        id,
        username,
        nickname,
        phoneNum,
        bio,
        address,
        loginSecret,
        isAgree,
      };
    }
  } else if (resourceName === "Reservation") {
    if (fetchType === "UPDATE") {
      const {
        data: { id, checkIn, checkOut, count, needs, adult, child, price },
      } = params;

      convertParams.data = {
        id,
        checkIn,
        checkOut,
        count,
        needs,
        adult,
        child,
        price,
      };
    }
  } else if (resourceName === "Post") {
    if (fetchType === "CREATE") {
      const {
        data: {
          board: { id },
          title,
          content,
          postType,
        },
      } = params;

      convertParams.data = {
        board: { id },
        title,
        content,
        postType,
      };
    }
  } else if (resourceName === "File") {
    if (fetchType === "UPDATE") {
      console.log(params.data);
      let postId = getSafe(params, "params.data.post.id");
      let roomId = getSafe(params, "params.data.room.id");
      const {
        data: { id, url },
      } = params;
      if (postId) {
        convertParams.data = {
          id,
          post: { id: postId },
          url,
        };
      }
      if (roomId) {
        convertParams.data = {
          id,
          room: { id: roomId },
          url,
        };
      }
    }
  } else if (resourceName === "Room") {
    if (fetchType === "UPDATE") {
      const {
        data: { id, name, count, price },
      } = params;
      convertParams.data = {
        id,
        name,
        count,
        price,
      };
    }
  }
  return convertParams;
};
