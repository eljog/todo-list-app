import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { TodoItem } from '@todo-app/common'
import { getServer } from "./apis";
import cors from 'cors'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const server = getServer()

// var whitelist = [
//   'https://musical-barnacle-r4wxw4v4wrvc5rqj-3000.app.github.dev',
// ];
// var corsOptions: cors.CorsOptions = {
//   origin: function(origin, callback){
//       var originIsWhitelisted = whitelist.indexOf(origin ?? '') !== -1;
//       callback(null, originIsWhitelisted);
//   },
//   credentials: true
// };
// app.use(cors(corsOptions));
app.use(cors())

app.use(express.json())

app.get("/", async (_req: Request, res: Response) => {
  res.send(await server.fetchAll());
});

app.post("/", async (req: Request, res: Response) => {
  console.log(`Body: ${req.body}`)
  const { title } = req.body
  if (!title) {
    return res.status(400).send("Title is required")
  }

  const item = await server.create(title)
  return res.send(item)
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});