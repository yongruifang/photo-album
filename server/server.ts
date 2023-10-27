import express from "express";
import cors from "cors";

export class Server {
    constructor(private port: number = 3000, private app: any = express()) {

    }
    public WithCorsSupport(): Server {
        this.app.use(cors());
        return this;
    }
    protected OnStart(): void {
        this.app.get(`/`, (request: any, response: any) => response.send(`Hello from the express`))
    }
    public Start(): void {
        // 因为图片可能占据很大空间，默认情况的请求体解析器上限100KB，提高为100MB
        this.app.use(express.json({ limit: "100mb" }));
        this.app.use(express.urlencoded({ limit: "100mb", extended: true }));
        this.OnStart();
        this.app.listen(this.port, () => console.log(`Server is running on port ${this.port}`));
    }
}

new Server(3000).Start()