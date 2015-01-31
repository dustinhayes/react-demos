var React = require('react');
var Product = require('./Product');

var ProductList = React.createClass({
    render: function () {
        var products = this.props.products.map(function (product) {
            return (
                <Product 
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    variants={product.variants} />
            );
        }, this);

        return (
            <ul>
                {products}
            </ul>
        );
    }
});

module.exports = ProductList;
