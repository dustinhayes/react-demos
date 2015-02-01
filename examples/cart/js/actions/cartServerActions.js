var dispatcher = require('../dispatcher/dispatcher');

module.exports = {
    receiveAllItems: function (items) {
        dispatcher.emit('RECEIVE_ALL_ITEMS', items);
    }
};
