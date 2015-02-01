var dispatcher = require('../dispatcher/dispatcher');

module.exports = window.cartClientActions = {
    removeItem: function (id) {
        dispatcher.emit('REMOVE_ITEM', id);
    },

    changeQuanity: function (id, quanity) {
        dispatcher.emit('CHANGE_QUANITY', id, quanity);
    }
};
