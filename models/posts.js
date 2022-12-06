import query from "../db/index.js";

export async function getAllPosts() {
  //Query the database to get all posts
  const result = await query(`SELECT * FROM posts`);
  return result.rows;
}

export async function newPost(body) {
  //Query database to create a new post
  const { user_id, post_text, post_topic, post_week } = body;
  const result = await query(
    `INSERT INTO posts (user_id, post_text, post_topic, post_week) VALUES ($1, $2, $3, $4) RETURNING *`,
    [user_id, post_text, post_topic, post_week]
  );
  return result.rows;
}

export async function patchPost(body, id) {
  //Query database to patch a post
  const { user_id, post_text, post_topic, post_week } = body;
  const result = await query(
    `UPDATE posts SET user_id=$1, post_text=$2, post_topic=$3, post_week=$4 WHERE id=$5 RETURNING *`,
    [user_id, post_text, post_topic, post_week, id]
  );
  return result.rows;
}

export async function deletePost(id) {
  //Query database to delete a post
    const result = await query(
        `DELETE FROM posts WHERE id=$1 RETURNING *`, [id]
    );
    return result.rows;
}
