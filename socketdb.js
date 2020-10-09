// 資料庫 加 moment
const Messages = require('./database/mongoose');
const moment = require('moment');

class SocketHander {
    constructor() {
        this.db;
    }
    connect() {
        this.db = require('mongoose').connect('mongodb://localhost:27017/chat');
        
    }

    getMessages() {
        return Messages.find();
    }

    storeMessages(data) {

        console.log(data);
        const newMessages = new Messages({
            name: data.name,
            msg: data.msg,
            time: moment().valueOf(),
        });

        const doc = newMessages.save();
    }
}

module.exports = SocketHander;
