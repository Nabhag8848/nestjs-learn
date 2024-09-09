import { Controller, Get } from "@nestjs/common";

@Controller("app")
export class AppController {
  @Get("root")
  getRootRoute() {
    return {
      message: "Hey there !",
    };
  }
  @Get("bye")
  getByeThere() {
    return {
      message: "Bye there !",
    };
  }
}
