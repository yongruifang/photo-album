import { RoutingEngine } from "./Routing/RoutingEngine";
import { AddPictureRouter } from "./Routing/AddRouter";
import { GetPicturesRouter } from "./Routing/GetPicturesRouter";
import { FindByIdRouter } from "./Routing/FindByIdRouter";
import { HelloRouter } from "./Routing/HelloRouter";
import { Server } from "./server";
export class PhotoAlbumServer extends Server {
    protected AddRouting(routingEngine: RoutingEngine, router: any): void {
        routingEngine.Add(AddPictureRouter, router);
        routingEngine.Add(GetPicturesRouter, router);
        routingEngine.Add(FindByIdRouter, router);
        routingEngine.Add(HelloRouter, router);
    }
}

new PhotoAlbumServer(8888).WithCorsSupport().Start();