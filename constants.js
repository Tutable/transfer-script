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

export const mongoConnectionString = `mongodb://${host}:${port}/${db}`;