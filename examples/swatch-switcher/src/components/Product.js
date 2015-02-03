var React = require('react');

var MIN_SHOWING = 3;

/**
 * Exercise:
 *
 * Implement a show more/less button to restrict the amount of varients that
 * are shown when the product is rendered.
 */
var Product = React.createClass({
    getInitialState: function () {
        return {
            showing: MIN_SHOWING,
            active: this.props.variants[0].source
        };
    },

    _switch: function (event) {
        this.setState({
            active: event.target.src
        });
    },

    _toggleShowing: function () {
        var variants = this.props.variants;
        var showingAll = this.state.showing === variants.length;

        this.setState({
            showing: showingAll ? MIN_SHOWING : variants.length
        });
    },

    render: function () {
        var variants = this.props.variants;
        var showingAll = this.state.showing === variants.length;

        var variants = variants.slice(0, this.state.showing)
            .map(function (variant, index) {
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
                <button onClick={this._toggleShowing}>
                    {showingAll ? 'less' : 'more'}
                </button>
            </li>
        );
    }
});

module.exports = Product;
