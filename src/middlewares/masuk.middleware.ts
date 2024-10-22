import { Request, Response, NextFunction } from "express";

function masukMiddleWare(req: Request, res: Response, next: NextFunction) {
  try {
    const { user } = req.query;

    if (!user) res.status(400).send("Unauthorized");

    console.log("Masuk Middleware", user);

    next();
  } catch (error) {
    next(error);
  }
}

export default masukMiddleWare;
