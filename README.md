# CURSO TÉCNICO #5: INTEGRADOR

[![places.png](https://i.postimg.cc/mghtqzpx/places.png)](https://postimg.cc/VJQf06c4)   
# API Turisr Place LR

## Open API Spec
You can check this API Spec on [SwaggerHub.]()


# Getting started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- `npm run dev` to start the local server
- `npm test` to run tests


# Code Overview

## Enviroment Variables
You will need the following enviroment variable setted in an .env file or within your current terminal:
```
Mongo_User="your Mongo User"
Mongo_Pass="your Mongo Password"

```
To get your credential in Mongo please sign up to their service [here.](https://www.mongodb.com/es/basics/create-database)

## Application Structure

- `app.js` - The entry point to our application. This file defines our express server. It also requires the routes and models we'll be using in the application.
- `config/` - This folder contains configuration for the api services.
- `src/routes/` - This folder contains the route definitions for our API.
- `src/controllers/` - This folder contains the controller definitions.
- `src/services/` - This folder contains the services that will be used across the controllers.
- `db/` - This folder contains the database configuration and connections
- `test/` - This folder contains the test of the api service

## API Turist Places LR ENDPOINTS

-   GET :: /places/ ---> Get an array with all places-
    
-   GET :: /places/:placeId ---> Get a place with the specified id.
    
-   POST :: /places/ ---> Create a single placer to the database. Receive data by body.
    
-   DELETE :: /places/:placeId ---> Delete an item from the database.
    
-   PATCH :: /places/:placeId ---> Edit a place with the data sent in body.


