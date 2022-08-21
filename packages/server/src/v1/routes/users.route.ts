import prisma from "../db/prisma.client.db";

import { Router } from "express";

const usersRouter = Router();

usersRouter.get("/", async (req, res) => {
  const users = await prisma.users.findMany();

  return res.status(200).json({ message: "Success", users });
});

usersRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  const user = await prisma.users.findFirst({
    where: { id },
  });

  return res.status(200).json({ message: "Success", user });
});

export default usersRouter;
