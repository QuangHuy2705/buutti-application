import mongoose from 'mongoose'

mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://192.168.99.100:27017/buutti", {
	keepAlive: true,
}, () => {
	console.log("Mongo connected")
});

export { default as Event } from './event'