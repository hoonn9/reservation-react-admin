import gql from "graphql-tag";

export const CONNECT_FILE = gql`
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
