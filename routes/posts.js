import express from "express";
const router = express.Router();

import {
  getAllPosts,
  newPost,
  patchPost,
  deletePost,
} from "../models/posts.js";

//GET all posts
router.get("/", async function (req, res) {
  const posts = await getAllPosts();
  res.json({ success: true, payload: posts });
});

//POST new post
router.post("/", async function (req, res) {
  const posts = await newPost(req.body);
  res.json({ success: true, payload: posts });
});

//PATCH a post
router.patch("/:id", async function (req, res) {
  const posts = await patchPost(req.body, req.params.id);
  res.json({ success: true, payload: posts });
});

//DELETE a post
router.delete("/:id", async function (req, res) {
  const posts = await deletePost(req.params.id);
  res.json({ success: true, payload: posts });
});

export default router;
