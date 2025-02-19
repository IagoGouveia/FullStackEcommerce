import { json, urlencoded, Request, Response } from "express";
import productsRouters from "./routes/products";

const express = require("express");
const app = express();
const port = 3000;

app.use(urlencoded({ extended: false }));
app.use(json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/products", productsRouters);

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`);
});
