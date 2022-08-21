import prisma from "../db/prisma.client.db";

import { Router } from "express";

const avgRouter = Router();

avgRouter.get("/", async (req, res) => {
  const users = await prisma.users.findMany();
  const arrayForAge = users
    .map((user) => user.date)
    .map((date) => new Date(date));

  const ages: number[] = arrayForAge?.map((age) => {
    let timeDiff = Math.abs(Date.now() - age.getTime());
    let saveAge = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    return saveAge;
  }) as number[];

  const avgAge =
    ages?.reduce((acc, curr) => {
      return acc + curr;
    }, 0) / ages?.length;

  res.json({
    data: {
      message: "Success",
      avgAge: avgAge,
    },
  });

  return res.status(200).json({ message: "Success" });
});

export default avgRouter;
