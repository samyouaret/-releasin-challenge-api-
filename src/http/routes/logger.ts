import type Application from '../../Application'
import morgan from "morgan"
import type HttpServerGateway from '../HttpServerGateway';

export default function logger(app: Application): void {
    let server = (app.getAppGateway() as HttpServerGateway).getServer();
    server.use(morgan("combined"));
}