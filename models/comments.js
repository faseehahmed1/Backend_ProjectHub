import query from "../db/index.js";

export async function getAllComments() {
  // Query the database and return all comments
  const result = await query(`SELECT * FROM comments ORDER BY id ASC`);
  return result.rows;
}

export async function newComment(body) {
  // Query the database and post a comment
  const result = await query(
    `INSERT INTO comments (user_id, post_id, comment_text) VALUES ($1, $2, $3) RETURNING *`,
    [body.user_id, body.post_id, body.comment_text]
  );
  return result.rows[0];
}

export async function patchComment(body, id) {
  // Query the database and patches a comment
  const result = await query(
    `UPDATE comments SET user_id=user_id, post_id=post_id, comment_text=$1 WHERE id=$2 RETURNING *`,
    [body.comment_text, id]
  );
  return result.rows[0];
}

export async function deleteComment(id) {
  // Query the database and deletes a comment
  const result = await query(`DELETE FROM comments WHERE id=$1 RETURNING *`, [
    id,
  ]);
  return result.rows[0];
}
