require('dotenv').config();
const {Mongo_User,Mongo_Pass}=process.env
module.exports = {
    databases: {
        mongodb: {
            strConnection: `mongodb+srv://${Mongo_User}:${Mongo_Pass}@turist.lx9dczo.mongodb.net/?retryWrites=true&w=majority`,
        }
    }
}