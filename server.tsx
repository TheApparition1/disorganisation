import express, { Request, Response } from "express";
import path from "path";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "../views"));

app.get("/", (req: Request, res: Response) => {
  res.render("index", {
    title: "Home"
  });
});

app.get("/about", (req: Request, res: Response) => {
  res.render("about", {
    title: "About"
  });
});

app.get("/services", (req: Request, res: Response) => {
  res.render("about", {
    title: "About"
  });
});
