var React = require('react');
var cartClientActions = require('../actions/cartClientActions');

/**
 * Exercise:
 *
 * Implement a feature so when the user sets the quanity to 0 and looses focus
 * on the input the item is removed.
 *
 * Hint: This can all be accomplished in this file.
 */
var CartItem = React.createClass({
    _removeItem: function () {
        cartClientActions.removeItem(this.props.details.id);
    },

    _onZeroQuanity: function (event) {
        var quanity = Number(event.target.value);

        if (quanity <= 0) {
            this._removeItem();
        }
    },

    _changeQuanity: function (event) {
        var quanity = Number(event.target.value);

        cartClientActions.changeQuanity(this.props.details.id, quanity);
    },

    render: function () {
        var details = this.props.details;

        return (
            <li>
                <div>
                    <img width='40' src={details.image} />
                    <p>{details.name}</p>
                    <p>{details.status}</p>
                    <p>Size: {details.options.size}</p>
                    <p>Color: {details.options.color}</p>
                    <p>Price: ${details.price}</p>
                    <p>Total: ${details.price * details.quanity}</p>
                    <label>
                        Quanity:
                        <input
                            min='0'
                            type='number'
                            defaultValue='1'
                            onBlur={this._onZeroQuanity}
                            onChange={this._changeQuanity} />
                    </label>
                    <button onClick={this._removeItem}>Remove</button>
                </div>
            </li>
        );
    }
});

module.exports = CartItem;
