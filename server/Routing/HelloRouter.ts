import { IRouter } from "./Router";
import { Response } from "express";
export class HelloRouter implements IRouter {
    public AddRoute(route: any): void {
        route.get('/hello', async (request: Request, response: Response) => {
            response.send("hello world");
        });
    }
}