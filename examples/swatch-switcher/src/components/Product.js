var React = require('react');

/**
 * Exercise:
 *
 * Implement a show more/less button to restrict the amount of varients that
 * are shown when the product is rendered.
 */
var Product = React.createClass({
    getInitialState: function () {
        return {
            active: this.props.variants[0].source
        };
    },

    render: function () {
        var variants = this.props.variants.map(function (variant, index) {
            return (
                <li key={index}>
                    <img
                        width="30"
                        src={variant.source}
                        onClick={this._switch} />
                </li>
            );
        }, this);

        return (
            <li>
                <img src={this.state.active} />
                <p>${this.props.price}</p>
                <p>{this.props.name}</p>
                <ul>
                    {variants}
                </ul>
            </li>
        );
    },

    _switch: function (event) {
        this.setState({
            active: event.target.src
        });
    }
});

module.exports = Product;
