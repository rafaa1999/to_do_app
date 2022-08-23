# TODO_APP using React,Postgres and Nodejs focus on REST API

## Description
a fully functional example project written in javascript showing how to :
.Create a REST API using Nodjs 
.build the frontend with Reactjs 
.Manage the data using Postgres as a Databse

##The diagram that I use
![todo_app drawio](https://user-images.githubusercontent.com/76825219/186231917-64f21bde-87f4-437d-8f31-c3199b5cbba9.png)

##Installation
```
npm install
```


##Running the app
right here we can open two terminal to run the backend using ``` node index.js``` and run the frontend using ``` npm start ``` to run the whole application
or we can run them both using one command but we need to install npm packege names concurrently
```
npm concurrently
```
We need now to do some modification in the package.json:
```
"scripts": {
    "server":"nodemon index.js" ,
    "test": "echo \"Error: no test specified\" && exit 1",
    "client":"cd ../client && npm start",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },
```
## License

[MIT](https://choosealicense.com/licenses/mit/)
