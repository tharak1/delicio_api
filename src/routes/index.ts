import { NextFunction, Request, Response, Router } from "express";

const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    res.send("You have reached api");
})

module.exports = router;