import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const app = express();

app.get("/", async (req: Request, res: Response) => {

  const user = await prisma.user.create({
    data: {
      name: "arduino",
      modelo: "unopsx",
    },
  });

  res.json(user);
});

app.listen(3000, () => {
  console.log("Servidor corriendo");
});
const user = await prisma.user.create({
  data: {
    name: "arduino",
    modelo: "unopsx3",
  },
});
  const users = await prisma.user.findMany();
console.log(user);