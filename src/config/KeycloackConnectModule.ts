import { ConfigService } from "@nestjs/config";
import { KeycloakConnectModuleAsyncOptions } from "nest-keycloak-connect";

export const KeycloakConnectConfig: KeycloakConnectModuleAsyncOptions = {
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    authServerUrl: configService.get<string>("KEYCLOAK_AUTH_SERVER_URL"),
    realm: configService.get<string>("KEYCLOAK_REALM"),
    clientId: configService.get<string>("KEYCLOAK_CLIENT_ID"),
    secret: configService.get<string>("KEYCLOAK_CLIENT_SECRET"),
  }),
};
