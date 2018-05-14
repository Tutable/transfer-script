/**
* This is the tutable-app contant file
* @author gaurav sharma
* @since Monday, April 23, 2018 10:47 AM
*/
// const host = 'ec2-13-59-33-113.us-east-2.compute.amazonaws.com';
// const db = 'tutable-development';
const host = process.env.MONGO_HOST || 'localhost';
const db = process.env.MONGO_DB || 'tutable-app';
const port = 27017;

const ATLAS_USER='tutable-admin';
const ATLAS_PASSWORD='X8X7z6IN3Gap7Vzw';
const CLUSTER1='tutable-app-shard-00-00-jazw4.mongodb.net:27017';
const CLUSTER2='tutable-app-shard-00-01-jazw4.mongodb.net:27017';
const CLUSTER3='tutable-app-shard-00-02-jazw4.mongodb.net:27017';

export const mongoConnectionString = `mongodb://${ATLAS_USER}:${ATLAS_PASSWORD}@${CLUSTER1},${CLUSTER2},${CLUSTER3}/${db}?ssl=true&replicaSet=tutable-app-shard-0&authSource=admin&retryWrites=true`;

// export const mongoConnectionString = `mongodb://${host}:${port}/${db}`;