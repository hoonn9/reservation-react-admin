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
  } else if (resourceName === "NoUser") {
    if (fetchType === "UPDATE") {
      const {
        data: { id, username, bio, phoneNum, email, loginSecret },
      } = params;

      convertParams.data = {
        id,
        username,
        bio,
        phoneNum,
        email,
        loginSecret,
      };
    }
  } else if (resourceName === "Guest") {
    if (fetchType === "UPDATE") {
      const {
        data: { id, username, bio, phoneNum, email },
      } = params;

      convertParams.data = {
        id,
        username,
        bio,
        phoneNum,
        email,
      };
    }
  } else if (resourceName === "Reservation") {
    if (fetchType === "CREATE") {
      const userId = getSafe(params, "params.data.user.id");
      const noUserId = getSafe(params, "params.data.noUser.id");
      const packId = getSafe(params, "params.data.pack.id");
      const {
        data: {
          guest: { id: guestId },
          room: { id: roomId },
          count,
          adult,
          child,
          needs,
          price,
          checkIn,
          checkOut,
        },
      } = params;

      convertParams.data = {
        user: { id: userId },
        noUser: { id: noUserId },
        pack: { id: packId },
        guest: { id: guestId },
        room: { id: roomId },
        count,
        adult,
        child,
        needs,
        price,
        checkIn: checkIn.toISOString(),
        checkOut: checkOut.toISOString(),
      };

      if (!userId) {
        delete convertParams.data["user"];
      }
      if (!noUserId) {
        delete convertParams.data["noUser"];
      }
      if (!packId) {
        delete convertParams.data["pack"];
      }
    } else if (fetchType === "UPDATE") {
      const packId = getSafe(params, "params.data.pack.id");
      const {
        data: {
          id,
          room: { id: roomId },
          count,
          adult,
          child,
          needs,
          price,
          checkIn,
          checkOut,
        },
      } = params;
      if (packId) {
        convertParams.data = {
          id,
          room: { id: roomId },
          pack: { id: packId },
          count,
          adult,
          child,
          needs,
          price,
          checkIn: checkIn.toISOString(),
          checkOut: checkOut.toISOString(),
        };
      } else {
        convertParams.data = {
          id,
          room: { id: roomId },
          count,
          adult,
          child,
          needs,
          price,
          checkIn: checkIn.toISOString(),
          checkOut: checkOut.toISOString(),
        };
      }
    }
  } else if (resourceName === "Post") {
    if (fetchType === "CREATE") {
      const {
        data: {
          user: { id: userId },
          board: { id: boardId },
          title,
          content,
          postType,
        },
      } = params;

      convertParams.data = {
        user: { id: userId },
        board: { id: boardId },
        title,
        content,
        postType,
      };
    } else if (fetchType === "UPDATE") {
      const {
        data: {
          id,
          user: { id: userId },
          board: { id: boardId },
          views,
          title,
          content,
          postType,
        },
      } = params;

      convertParams.data = {
        id,
        user: { id: userId },
        board: { id: boardId },
        views,
        title,
        content,
        postType,
      };
    }
  } else if (resourceName === "File") {
    if (fetchType === "CREATE") {
      let postId = getSafe(params, "params.data.post.id");
      let roomId = getSafe(params, "params.data.room.id");
      let eventId = getSafe(params, "params.data.event.id");
      let popupId = getSafe(params, "params.data.popup.id");
      const {
        data: { url },
      } = params;
      if (postId) {
        convertParams.data = {
          post: { id: postId },
          url,
        };
      }
      if (roomId) {
        convertParams.data = {
          room: { id: roomId },
          url,
        };
      }
      if (eventId) {
        convertParams.data = {
          event: { id: eventId },
          url,
        };
      }
      if (popupId) {
        convertParams.data = {
          popup: { id: popupId },
          url,
        };
      }
    } else if (fetchType === "UPDATE") {
      console.log(params.data);
      let postId = getSafe(params, "params.data.post.id");
      let roomId = getSafe(params, "params.data.room.id");
      let eventId = getSafe(params, "params.data.event.id");
      let popupId = getSafe(params, "params.data.popup.id");
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
      if (eventId) {
        convertParams.data = {
          id,
          event: { id: eventId },
          url,
        };
      }
      if (popupId) {
        convertParams.data = {
          id,
          popup: { id: popupId },
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
  } else if (resourceName === "Board") {
    if (fetchType === "UPDATE") {
      const {
        data: { id, name },
      } = params;

      convertParams.data = {
        id,
        name,
      };
    }
  } else if (resourceName === "Event") {
    if (fetchType === "UPDATE") {
      const {
        data: { id, eventType, title, subTitle, content, period },
      } = params;

      convertParams.data = {
        id,
        eventType,
        title,
        subTitle,
        content,
        period,
      };
    }
  } else if (resourceName === "Pack") {
    if (fetchType === "UPDATE") {
      const {
        data: {
          id,
          room: { id: roomId },
          name,
          description,
          price,
        },
      } = params;

      convertParams.data = {
        id,
        room: { id: roomId },
        name,
        description,
        price,
      };
    }
  } else if (resourceName === "Popup") {
    if (fetchType === "CREATE") {
      console.log(params);

      const {
        data: { title, content },
      } = params;

      convertParams.data = {
        title,
        content,
      };
    } else if (fetchType === "UPDATE") {
      const {
        data: { id, title, content, url },
      } = params;

      convertParams.data = {
        id,
        title,
        content,
        url,
      };
    }
  } else if (resourceName === "Comment") {
    if (fetchType === "UPDATE") {
      const {
        data: {
          id,
          user: { id: userId },
          post: { id: postId },
          text,
        },
      } = params;

      convertParams.data = {
        id,
        user: { id: userId },
        post: { id: postId },
        text,
      };
    }
  }

  return convertParams;
};
