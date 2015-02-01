var React = require('react');
var CartItem = require('./CartItem');
var cartStore = require('../stores/cartStore');

function getState() {
    return {
        total: cartStore.total,
        items: cartStore.items
    }
}

var Cart = React.createClass({
    getInitialState: function () {
        return getState();
    },

    componentDidMount: function () {
        cartStore.on('CHANGE', function () {
            this.setState(getState());
        }.bind(this));
    },

    render: function () {
        var items = this.state.items.map(function (item) {
            return (
                <CartItem
                    key={item.id}
                    details={item} />
            );
        });

        return (
            <div>
                <ul>
                    {items}
                </ul>
                <p>Total: ${this.state.total}</p>
            </div>
        );
    }
});

module.exports = Cart;
