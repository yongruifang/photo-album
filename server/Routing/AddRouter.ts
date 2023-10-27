import { IRouter } from "./Router";
import { Picture } from "../Database";
import { Response } from "express";

export class AddPictureRouter implements IRouter {
    public AddRoute(route: any): void {
        route.post('/add/', async (request: Request, response: Response) => {
            try {
                const picture = new Picture(request.body);
                const savedPicture = await picture.save();
                response.json(savedPicture);
            } catch (err) {
                response.status(500).json({ error: "An error occurred." });
            }
        });
    }
}