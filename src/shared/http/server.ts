import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import cors from "cors";
import { errors } from "celebrate";
import routes from "./routes";
import AppError from "../errors/AppError";
import "../../shared/typeorm";
import uploadConfig from "@config/upload";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/files", express.static(uploadConfig.directory));
app.use(routes);
app.use(errors());

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
    }
    return response
      .status(500)
      .json({ status: "error", message: "Internal server error" });
  }
);

app.listen(3333, () => {
  console.log("server starter on port 3333!");
});

// update orm version
// import "reflect-metadata";
// import { app } from "./app";
// import { dataSource } from "../typeorm";

// dataSource.initialize().then(() => {
//   const server = app.listen(3333, () => {
//     console.log("server starter on port 3333!🏆");
//   });
// });
