import {Injectable} from "@nestjs/common";

@Injectable()
export class AppService {
    sayHello(): string {
        return 'Hello, welcome to POorganizer!';
    }
}