import * as neo4j from "neo4j-driver";

export const driver = (
  neo4jURI = process.env.NEO4J_URI,
  neo4jUser = process.env.NEO4J_USER,
  neo4jPassword = process.env.NEO4J_PASSWORD,
  neo4jEncryptedConnection = process.env.NEO4J_ENCRYPTED
) => {
  const isEncrypted =
    !!neo4jEncryptedConnection && neo4jEncryptedConnection != "false";

  return neo4j.driver(neo4jURI, neo4j.auth.basic(neo4jUser, neo4jPassword), {
    encrypted: isEncrypted ? "ENCRYPTION_ON" : "ENCRYPTION_OFF",
  });
};
