import Startable from "./Startable";

export default interface ServiceContract extends Startable {
    init?: (context?: any) => Promise<any>
}
