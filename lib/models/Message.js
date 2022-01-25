const pool = required('../utils/pool');

module.exports = class Message {
  id;
  message_text;

  constructor(row) {
    this.id = row.id;
    this.message_text = row.message_text;
  }

  static async insert({ message }) {
    const { rows } = await pool.query(
      'INSERT INTO messages(message_text) VALUES ($1) RETURNING *;',
      [message]
    );
    return new Message(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM messages');
    return rows.map((row) => new Message(row));
  }
};
