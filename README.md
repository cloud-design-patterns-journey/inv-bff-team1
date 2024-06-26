# Graphql/Typescript Code Pattern

This is a template repository for a Typescript-based Graphql micro-service.

This app contains an opinionated set of components for modern web development, including:


## Getting started

1. Click the 'Use this template' button above or [this link](./generate) to generate a new repository
   from this template.
2. Clone the newly created template to your computer
3. Update the project name in the `project.json` file and update the README with the following steps,
   run from the root of your project directory:
```bash
mv README.md STARTER-KIT.md
echo "# {project name}" > README.md
```
4. Add and commit the changes to your repo.

## Features

The starter kit provides the following features:

* Graphql server from [apollo-server-express](https://github.com/apollographql/apollo-server/tree/main/packages/apollo-server-express)
* Graphql decorators from [type-graphql](https://www.npmjs.com/package/type-graphql)
* Dependency injection using [typescript-ioc](https://www.npmjs.com/package/typescript-ioc) decorators
- Logging using [pino](hhttps://getpino.io/)
- TDD environment with [jest](https://jestjs.io/)
- Pact testing [Pact.io](https://docs.pact.io/)
- DevOps pipeline

### Deploying

After you have created a new git repo from this git template, remember to rename the project.
Edit `package.json` and change the default name to the name you used to create the template.

Make sure you are logged into the IBM Cloud using the IBM Cloud CLI and have access
to you development cluster. If you are using OpenShift make sure you have logged into OpenShift CLI on the command line.

```$bash
npm i -g @ibmgaragecloud/cloud-native-toolkit-cli
```

Use the IBM Garage for Cloud CLI to register the GIT Repo with Jenkins
```$bash
igc pipeline
```

### Building Locally

To get started building this application locally, you can either run the application natively or use the [IBM Cloud Developer Tools](https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started) for containerization and easy deployment to IBM Cloud.

### Configure Environment Variables

The application uses environment variables to configure the application. The following environment variables are used:

```bash
SERVICE_URL=http://localhost:8080
KEYCLOAK_AUTH_SERVER_URL=http://localhost:8000
KEYCLOAK_REALM=patterns
KEYCLOAK_CLIENT_ID=bff
KEYCLOAK_CLIENT_SECRET=<secret>
```
#### Native Application Development

Install the latest [Node.js](https://nodejs.org/en/download/) 6+ LTS version.

Once the Node toolchain has been installed, you can download the project dependencies with:

```bash
npm install
cd client; npm install; cd ..
npm run build
npm run start
```

To run your application locally:
```bash
npm run start
```

Your application will be running at `http://localhost:3000`.  You can access the `/health` and `/appmetrics-dash` endpoints at the host.

## Next Steps

* Learn more about augmenting your Node.js applications on IBM Cloud with the [Node Programming Guide](https://cloud.ibm.com/docs/node?topic=nodejs-getting-started).
* Explore other [sample applications](https://cloud.ibm.com/developer/appservice/starter-kits) on IBM Cloud.

## License

This sample application is licensed under the Apache License, Version 2. Separate third-party code objects invoked within this code pattern are licensed by their respective providers pursuant to their own separate licenses. Contributions are subject to the [Developer Certificate of Origin, Version 1.1](https://developercertificate.org/) and the [Apache License, Version 2](https://www.apache.org/licenses/LICENSE-2.0.txt).

[Apache License FAQ](https://www.apache.org/foundation/license-faq.html#WhatDoesItMEAN)
