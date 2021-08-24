# MySQL Music Library 🎼

This project aims to create an app for managing a music library, implementing SQL, databases and express.js.

An API was created to perform CRUD operations on a database. This will take JSON GET, POST, PATCH, PUT and DELETE requests to add, read, update or delete artists from a music database.

### Install
- Fork this repository    

```
    git clone https://github.com/erkemp3/musicLibrary.git
    
    cd music-library
    
    npm install
```

### Running the Tests
This setup assumes that you are running `MySql` on in Docker.

## Setting up the database

This project requires a running MySQL database. To set one up with Docker, run:

```
docker run -d -p 3306:3306 --name music_library_mysql -e MYSQL_ROOT_PASSWORD=<PASSWORD> mysql
```
The `create-database` and `drop-database` scripts will run automatically before and after your tests to handle databese setup/teardown/

Create a new file in the project root called `.env.test` and add the database connection details as set out in `.env.example`.


- `npm test` uses [Mocha](https://mochajs.org/) and [Supertest](https://www.npmjs.com/package/supertest) to run e2e tests defined in `tests` directory

### Running the API

Create a new file in the project root called `.env` and add your environment variables, as set out in `.env.example`.

You can then fire up the API with `npm start`.

## Authors

**Ellie Kemp** 

## Acknowledgments

Manchester Codes.
