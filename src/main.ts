import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log("Starting server...");
  await app.listen(4500);
}
bootstrap().catch((err) => console.error(err));
