import cors from "cors";
import express from "express";
import router from "./routes";
import validateEnv from "./utils/validateEnv.utilities";
require("dotenv").config();
validateEnv();

const app = express();
app.use(express.json());

app.use(cors());

function Bootstrap() {
  const port = 4000;
  app.use("/v1", router);
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

export default Bootstrap;
