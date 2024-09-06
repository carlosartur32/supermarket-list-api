## Supermarket List API

API in Node.js using Express and mongoose to connect a MongoDB Database.
The main objective of the application is to make users' lives easier when creating a supermarket shopping list.

### Technologies Used

- Node.js;
- Express;
- Mongoose;
- MongoDB;
- Nodemon.

### Required Technologies

- Node.js installed: https://nodejs.org/en
- MongoDB instance running:
  Ex: Running with docker

  ```
  docker run --name supermarket-list -p 27017:27017 -d mongo
  ```

### Steps to run the project

1. Clone the repo:

```
git clone https://github.com/carlosartur32/supermarket-list-api
```

2. Navigate to the repo:

```
cd supermarketi-list-api
```

3. Install the dependencies:

```
npm instal
```

4. Run the API:

```
npm run start:dev
```

### Available Endpoints:

- [GET]/list-item
- [POST]/list-item
- [DELETE]/list-item/:id
- [PUT]/list-item/:id
