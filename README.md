# MDP

Crud of users

Before installing the system, it is necessary to have some global dependencies.

- yarn

```bash
$ npm install -g yarn
```

- expo

```bash
$ npm install -g expo
$ yarn global add expo-cli
$ npx expo install react-native-web@~0.18.7@expo/webpack-config@^0.17.0
$ npm install -g sharp-cli

```

- Typescript

```bash
$ npm install -g typescript

```

INSTALL DEPENDENCIES

```bash
$ yarn

```

This is a monorepo containing the packages

- Frontend: App web created by React.js + Typescript + Vite.js

  > Run:

  ```bash
  $ cd packages/frontend && yarn dev
  ```

  > App Estructure:

  - Interceptors :
    - Created for manage states, validations Before of after for the services implementation.
  - Models:
    - Created for manage models, interfaces for the generals typescript.
  - Pages:
    - Created for manage pages.
  - Routes:
    - Created for manage routes for React Router dom
  - Services:
    - Created for manage services with axios with in order to remove the ui from knowing with which data is requested from the server.
  - Styled Components:
    - Created for manage styled components (Library)
  - Utils:
    - Created for manage utilities throughout the project.

- Mobile: App web created by React Native + Expo CLI if create users

  > Run:

  ```bash
  $ cd packages/mobile && expo start --localhost --android
  ```

  > Mobile structure:

- Server: App web created by Node.js + Typescript + Prisma

  > Run:

  ```bash
  $ cd packages/server && yarn start
  ```

  > Server structure:

  - prisma
    - All migrations for the database.
    - src:
      - main.ts: Execute the server.
      - v1: Version 1.0 of the API
      - db: Client connection to the database (Prisma Client).
      - routes: All routes to the API.
        - AVG: Calculate the average.
        - User: Create a new user.
        - Users: Get all users & find user with ID.

### Deploy:

- App deployed of AWS

### Tecnologies

☁ Cloud

<img src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white">

⚡ Database

<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white">

⚙️ ORM

<img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white">

🚀 Languages

<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">

📱 Mobile Framework

<img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">

👩‍💻 IDE

<img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white">

### 📱 Contact

<a href="
https://wa.link/r91kkr" target="_blank"><img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"></a>
<a href="https://www.facebook.com/AndySantisteban1607/" target="_blank">
<img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white">
</a>
<a href="https://www.linkedin.com/in/andy-santisteban/" target="_blank">
<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
<a href="https://twitter.com/SantistebanAndy" target="_blank">
<img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white">
</a>
