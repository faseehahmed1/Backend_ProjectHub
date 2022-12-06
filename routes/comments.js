import express from "express";
const router = express.Router();

import {
  getAllComments,
  patchComment,
  newComment,
  deleteComment,
} from "../models/comments.js";

// GET all comments
router.get("/", async function (req, res) {
  const comments = await getAllComments();
  res.json({ success: true, payload: comments });
});

//Post a comment
router.post('/', async function (req, res) {
    const comments = await newComment(req.body);
    res.json({success: true, payload: comments})
})

//PATCH a comment
router.patch('/:id', async function (req, res) {
    const comments = await patchComment(req.body, req.params.id);
    res.json({success: true, payload:comments })
})

//Delete a comment
router.delete('/:id', async function (req, res) {
    const comments = await deleteComment(req.params.id);
    res.json({success: true, payload: comments})
})
export default router;
