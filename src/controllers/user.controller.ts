import { Request, Response, NextFunction } from "express";

function GetAllUsers(req: Request, res: Response, next: NextFunction) {
  try {
    res.status(200).send({
      message: "Get Users Success",
    });
  } catch (error) {
    next(error);
  }
}

function GetUserDetail(req: Request, res: Response, next: NextFunction) {
  try {
    const { uuid } = req.params;
    res.status(200).send({
      message: "Get Users Detail Success",
      data: uuid,
    });
  } catch (error) {
    next(error);
  }
}

export { GetAllUsers, GetUserDetail };
