import { IRouter } from "./Router";
import { Picture } from "../Database";
import { Request, Response } from "express";

export class FindByIdRouter implements IRouter {
    public AddRoute(route: any): void {
        route.get('/id/:id', async (request: Request, response: Response) => {
            try {
                const result = await Picture.findOne({ _id: request.params.id }, '-_id');
                response.send(result)
            } catch (err) {
                response.send(err)
            }

        });
    }
}