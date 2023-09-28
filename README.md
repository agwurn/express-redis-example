# express-redis-example

A simple key-value storing database powered by express and redis.

> 🙆‍♂️ Info
> 
> This repo is for my practice to be familiar with redis.

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



---
@20230928 Agwurn Lu