import { GET_LIST, GET_ONE, GET_MANY, GET_MANY_REFERENCE } from "react-admin";
import gql from "graphql-tag";

export default {
  Post: {
    [GET_LIST]: gql`
      fragment post on Post {
        id
        title
        content
        postType
        views
        user {
          id
          nickname
        }
        board {
          id
          name
        }
        createdAt
      }
    `,
    [GET_ONE]: gql`
      fragment post on Post {
        id
        title
        content
        postType
        views
        user {
          id
        }
        board {
          id
        }
        files {
          id
          url
        }
        comments {
          id
          text
        }
        createdAt
        updatedAt
      }
    `,
    [GET_MANY]: gql`
      fragment post on Post {
        id
        title
        content
        postType
        views
        user {
          id
        }
        board {
          id
        }
        files {
          id
          url
        }
        comments {
          id
          text
        }
        createdAt
        updatedAt
      }
    `,
    [GET_MANY_REFERENCE]: gql`
      fragment post on Post {
        id
        title
        content
        postType
        views
        user {
          id
        }
        board {
          id
        }
        files {
          id
          url
        }
        comments {
          id
          text
        }
        createdAt
        updatedAt
      }
    `,
  },
  Board: {
    [GET_ONE]: gql`
      fragment board on Board {
        id
        name
        posts {
          id
        }
        createdAt
      }
    `,
  },
  User: {
    [GET_LIST]: gql`
      fragment user on User {
        id
        userId
        username
        email
        nickname
        phoneNum
        bio
        address
        reservations {
          id
        }
        createdAt
      }
    `,
  },
  Reservation: {
    [GET_LIST]: gql`
      fragment reservation on Reservation {
        id
        user {
          id
          userId
          username
          bio
          phoneNum
          email
        }
        noUser {
          id
          username
          bio
          phoneNum
          email
        }
        guest {
          id
          username
          bio
          phoneNum
          email
        }
        room {
          id
          name
          price
        }
        checkIn
        checkOut
        count
        needs
        adult
        child
        price
        createdAt
      }
    `,
    [GET_ONE]: gql`
      fragment reservation on Reservation {
        id
        user {
          id
          username
          bio
          phoneNum
          email
        }
        noUser {
          id
          username
          bio
          phoneNum
          email
        }
        guest {
          id
          username
          bio
          phoneNum
          email
        }
        room {
          id
          name
          price
        }
        checkIn
        checkOut
        count
        needs
        adult
        child
        price
        createdAt
      }
    `,
  },
  NoUser: {
    [GET_LIST]: gql`
      fragment noUser on NoUser {
        id
        username
        email
        phoneNum
        bio
        reservations {
          id
        }
        createdAt
      }
    `,
  },
  Guest: {
    [GET_LIST]: gql`
      fragment guest on Guest {
        id
        username
        email
        phoneNum
        bio
        reservation {
          id
        }
        createdAt
      }
    `,
  },
  Popup: {
    [GET_LIST]: gql`
      fragment popup on Popup {
        id
        title
        content
        files {
          id
        }
        createdAt
      }
    `,
  },
};
