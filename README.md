# express-redis-example

A simple key-value storing database powered by express and redis.

> 🙆‍♂️ Info
> 
> This repo is for my practice to be familiar with redis.

## v2-BetterFolderStructure
```
express-redis-example
|-- config
|  |-- redisConfig.js   // 1.
|-- controllers
|  |-- redisController.js  // 3.
|-- routes
|  |-- redisRoutes.js     // 4.
|-- services
|  |-- redisServices.js   // 2. 
|-- app.js  // 5.
```
1. [config] setup redis connection
2. [service] define redis services
3. [controller] create functions for express-redis interaction
4. [routes] create APIs by connecting functions and routes
5. [app] set API routes to our main server 

It's more structural when we use our defined function rather than directly touch the redis server functions.

## Why Redis?
Redis can be a "cache" system for our SQL server by storing "request" and "response" key-value pair. Each time same request come in then we can return the response by Redis rather than re-trigger the SQL server.


## How to Start
### Install Redis
1. use docker to pull redis
2. start the container (set the port to 6379)
### Install the dependencies
```
npm i express ioredis
```
### start the app
```
nodemon app.js
```
### test with postman
https://www.postman.com/cryosat-geologist-48085018/workspace/formygithub/collection/25131724-e23706ee-be22-4e35-a44f-56b3b84ca315?action=share&creator=25131724


---
@20230929 Agwurn Lu