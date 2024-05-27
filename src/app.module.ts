import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { KeycloakConnectModule } from "nest-keycloak-connect";
import { controllers } from "./controllers";
import { ServiceModule } from "./services";
import { ResolverModule } from "./resolvers";
import { KeycloakConnectConfig } from "./config/KeycloackConnectModule";
import { APP_GUARD } from "@nestjs/core";
import { AuthGuard } from "nest-keycloak-connect";
const imports = [
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: "schema.gql",
    sortSchema: true,
    subscriptions: {
      "graphql-ws": true,
    },
  }),
  ServiceModule,
  ResolverModule,
  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: [".env"],
  }),
  KeycloakConnectModule.registerAsync(KeycloakConnectConfig),
];

const providers = [
  {
    provide: APP_GUARD,
    useClass: AuthGuard,
  },
];
@Module({
  imports,
  controllers,
  providers,
})
export class AppModule {}
