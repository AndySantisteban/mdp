import prisma from "../db/prisma.client.db";

import { Router } from "express";

const userRouter = Router();

userRouter.post("/", async (req, res) => {
  const { name, surname, date } = req.body;

  if (!name || name === "") {
    return res.status(400).json({ message: "Missing name" });
  }

  if (!surname || surname === "") {
    return res.status(400).json({ message: "Missing surname" });
  }
  if (!date || date === "") {
    return res.status(400).json({ message: "Missing date" });
  }

  const user = await prisma.users.create({
    data: {
      name: name,
      surname: surname,
      date: new Date(date),
    },
  });

  return res.status(200).json({ message: "Success", user });
});

export default userRouter;
