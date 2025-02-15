import {
  BadRequest
} from "./chunk-UX6HP52O.mjs";

// src/errorHandler.ts
import { ZodError } from "zod";
var errorHandler = (error, req, res) => {
  if (error instanceof ZodError) {
    return res.status(400).send({
      message: "Error during validation",
      errors: error.flatten().fieldErrors
    });
  }
  if (error instanceof BadRequest) {
    return res.status(400).send({ message: error.message });
  }
  return res.status(500).send({ message: "Internal Server Error" });
};

export {
  errorHandler
};
