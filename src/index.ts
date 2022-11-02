import express, { Express } from "express";
import helmet from "helmet";
import cors from "cors";

const app: Express = express();
import routes from "./routes";
import connect from "./utils/connect";

app.use(helmet());

app.use(cors());
app.options("*", cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = "mongodb://127.0.0.1:27017/dbnote";
connect({ db });

app.use("/api", routes);

app.listen(2000, () => {
  console.log(`Server is running at http://localhost:2000`);
});
