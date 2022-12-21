import query from "../db/index.js";

export async function getAllPosts() {
  //Query the database to get all posts
  const result = await query(`SELECT * FROM posts ORDER BY id DESC`);
  return result.rows;
}

export async function newPost(body) {
  //Query database to create a new post
  const { user_id, post_text, post_language, post_duration } = body;
  const result = await query(
    `INSERT INTO posts (user_id, post_text, post_language, post_duration) VALUES ($1, $2, $3, $4) RETURNING *`,
    [user_id, post_text, post_language, post_duration]
  );
  return result.rows;
}

export async function patchPost(body, id) {
  //Query database to patch a post
  const { post_text, post_language, post_duration } = body;
  const result = await query(
    `UPDATE posts SET user_id=user_id, post_text=$1, post_language=$2, post_duration=$3 WHERE id=$4 RETURNING *`,
    [post_text, post_language, post_duration, id]
  );
  return result.rows;
}

export async function deletePost(id) {
  //Query database to delete a post
  const result = await query(`DELETE FROM posts WHERE id=$1 RETURNING *`, [id]);
  return result.rows;
}
