const {Client} = require("pg");
const {DATABASE_URL} = require("../utils/environment");

const SQL = `
    DROP TABLE IF EXISTS users, messages CASCADE;

    CREATE TABLE users (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        first_name VARCHAR(255),
        last_name VARCHAR(255),
        email VARCHAR(255),
        password VARCHAR(255),
        membership_status VARCHAR(255)
    );

    CREATE TABLE messages (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        title VARCHAR(255),
        poster INT REFERENCES users(id),
        time TIMESTAMP,
        description TEXT
    );

    INSERT INTO users (first_name, last_name, email, password, membership_status) VALUES
    ('Bob', 'Jackson', 'bobjackson@gmail.com', '1234', 'admin');

    INSERT INTO messages (title, poster, time, description) VALUES
    ('How my day went.', 1, '2025-01-12 15:30:45', 'I climbed a mountain.');
`

const populatedb = async () => {
    console.log("Seeding SQL with schema...")

    const client = new Client({
        connectionString: DATABASE_URL,
    });

    await client.connect();
    await client.query(SQL);
    await client.end();
}

module.exports = populatedb;