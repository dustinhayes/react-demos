var React = require('react');
var productData = require('./productData');
var ProductList = require('./components/ProductList');

React.render(<ProductList products={productData} />,
    document.getElementById('root'));
