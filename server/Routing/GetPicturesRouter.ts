import { IRouter } from "./Router";
import { Picture } from "../Database";
import { Response } from "express";
export class GetPicturesRouter implements IRouter {
    public AddRoute(route: any): void {
        route.get('/get/', async (request: Request, response: Response) => {
            // Picture.distinct("_id", (err: any, picture: any) => {
            //     if (err) {
            //         response.send(err);
            //     }
            //     response.send(picture);
            // });
            try {
                const result = await Picture.distinct("_id")
                response.send(result)
            } catch (err) {
                response.send(err)
            }
        });
    }
}