var React = require('react');
var Cart = require('./components/Cart');

var serverActions = require('./actions/cartServerActions');
var items = require('./cartItems');

serverActions.receiveAllItems(items);

React.render(<Cart />, document.getElementById('root'));
