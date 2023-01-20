const mongoose = require('mongoose');
const config = require('config');

const {strConnection}=config.get('databases.mongodb');
  async function connectMongoDb() {
    return mongoose.connect(strConnection);
   }

module.exports = {connectMongoDb};