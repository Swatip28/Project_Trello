## project-trello

To learn easiest way to configure an application with Apollo-server, GraphQL, Prisma.
(https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql) Follow the instructions in prisma github repository.


## Initializing Database

Project_Trello uitilizes Postgresql as db and leverages pgAdmin to setup the database. Prisma Client is being used 
to connect the database to the project.

To configure Postgresql follow the instructions (https://www.postgresql.org/download/)
To configure pgAdmin follow the instructions (https://docs.bitnami.com/aws/apps/noalyss/administration/configure-pgadmin/)

## Steps to initialize project

Make sure node is installed on your machine. If not please follow the instructions to configure node (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Connect git repo locally by using any IDE(ex - VSCode,Sublime etc)

Intialize node using command -- npm i

## Starting Server

Run the development server:

```bash
npm start
```

Install graphiQL cli or run application at http://localhost:3023/graphql in browser to call graphQL apis.

## Learn More

Some useful resources:

Configuring webpack: https://webpack.js.org/configuration/
Command to add web config:
npx tsc --init --rootDir src --outDir dist --lib dom,es6 --module commonjs --removeComments

Configuring typescript in tsconfig: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

Configuring Prisma: https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql .Follow the instructions in prisma github repository.
