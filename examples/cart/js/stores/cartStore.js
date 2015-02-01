var EventEmitter = require('events').EventEmitter;

var _items = [];

var cartStore = Object.create(EventEmitter.prototype, {
    items: {
        get: function () {
            return _items;
        }
    },

    total: {
        get: function () {
            return _items.reduce(function (base, curr) {
                return base + (curr.price * curr.quanity);
            }, 0);
        }
    }
});

var dispatcher = require('../dispatcher/dispatcher');

dispatcher.on('RECEIVE_ALL_ITEMS', function (items) {
    _items = items;
    cartStore.emit('CHANGE');
});

function removeItem(id) {
    delete _items[id];
}
dispatcher.on('REMOVE_ITEM', function (id) {
    removeItem(id);
    cartStore.emit('CHANGE');
});

function changeQuanity(id, quanity) {
    _items[id].quanity = quanity;
    cartStore.emit('CHANGE');
}
dispatcher.on('CHANGE_QUANITY', function (id, quanity) {
    changeQuanity(id, quanity);
    cartStore.emit('CHANGE');
});

module.exports = cartStore;
