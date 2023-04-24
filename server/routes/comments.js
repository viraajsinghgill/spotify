import express from "express";
import {
  addComment,
  deleteComment,
  getComments,
} from "../controllers/comment.js";
import {verifyToken} from "../verifyToken.js";
const router = express.Router();

router.post("/", verifyToken, addComment);
router.post("/:Id", verifyToken, deleteComment);
router.post("/:VideoId", verifyToken, getComments);

export default router;
