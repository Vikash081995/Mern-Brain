import "express-async-errors";
import express, { Response, Request } from "express";
import * as dotenv from "dotenv";
const authRoute = require("./routes/authRoutes");
import todoRoutes from "./routes/todoRoutes";
import tasks from "./routes/tasksRoutes";
import notFound from "./middlewares/not-found";
import { validateTest } from "./middlewares/validation-middleware";
import userRouter from "./routes/userRoutes";
import { connectDB } from "./db/connect";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
//middlewares
// app.use(morgon("dev"));
app.use(express.static("../public"));
app.use(express.json());
app.use(notFound);
app.use("tiny");
// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use("express");
app.use(cookieParser(process.env.JWT_SECRET));

//routes
app.use("/api/v1/todos", todoRoutes);
app.use("/api/v1/tasks", tasks);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRouter);

app.post(
  "/api/v1/test",
  validateTest,

  (req: Request, res: Response) => {
    const { name } = req.body;
    res.json({ message: `Hello ${name}` });
  }
);

app.all("*", (req, res, next) => {
  res.status(404).send("<h1>resource not found</h1>");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI || "");
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
