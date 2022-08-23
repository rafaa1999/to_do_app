# TODO_APP using React,Postgres and Nodejs focus on REST API

## Description
a fully functional example project written in javascript showing how to :
*Create a REST API using Nodjs 
*build the frontend with Reactjs 
*Manage the data using Postgres as a Databse

##The diagram that I use
![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)

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
