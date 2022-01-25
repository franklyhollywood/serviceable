-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    message_text TEXT NOT NULL
);