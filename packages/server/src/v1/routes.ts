import { Router } from "express";
import avgRouter from "./routes/avg.route";
import userRouter from "./routes/user.route";
import usersRouter from "./routes/users.route";

const router = Router();

router.use("/user", userRouter);
router.use("/users", usersRouter);
router.use("/avg", avgRouter);

export default router;
