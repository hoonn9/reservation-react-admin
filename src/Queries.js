import { GET_LIST } from "react-admin";
import gql from "graphql-tag";

export const listQueries = {
  user: `{
      users {
        id
        userId
        username
        email
        nickname
        phoneNum
        bio
        address
        createdAt
      }
    }`,
  post: `{
      posts {
        id
        title
        views
        user {
            id
        }
        createdAt
      }
    }`,
};

export const oneQueries = {
  user: (id) => `
    {
        user(where: { id: "${id}" }) {
          id
          userId
          username
          email
          nickname
          phoneNum
          bio
          address
          createdAt
        }
      }
      
    `,
  post: (id) => `
    {
        post(where: { id: "${id}" }) {
          id
          title
          content
          user {
            id
          }
          files {
            id
          }
          createdAt
        }
      }
      
      
    `,
};

export const updateQueries = {
  user: (id, username, address) => `mutation {
        updateUser(data:{username: ${username}, address: ${address}}, where: {id: ${id} }) {
          username
        }
      }`,
};

export default {
  Post: {
    [GET_LIST]: gql`
      fragment post on Post {
        id
        title
        views
        user {
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
        createdAt
      }
    `,
  },
};
