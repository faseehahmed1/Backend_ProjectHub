// Import express, morgan, cors
import express from "express";
import morgan from "morgan";
// import cors from "cors";

// Import the routes
import postRouter from "./routes/posts.js";
// import usersRouter from "./routes/users.js";
import commentsRouter from "./routes/comments.js";

// Initialize our express app
const app = express();
// app.use(cors());

// Use morgan (third party middle)
app.use(morgan("dev"));

// Tell express to serve static files
app.use(express.static("public"));
app.use(express.json());

app.use("/api/posts", postRouter);
// app.use("/api/users", usersRouter);
app.use("/api/comments", commentsRouter);

const PORT = process.env.PORT;
app.listen(PORT, function () {
  console.log(`Server is listening on port ${PORT}`);
});

export default app;