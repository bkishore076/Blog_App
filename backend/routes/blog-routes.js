import express from "express";
import { getAllBlogs } from "../controllers/blog";
const blogRouter = express.Router();
blogRouter.get("/", getAllBlogs);

export default blogRouter;
