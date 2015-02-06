var React = require('react');
var Shared = require('./Shared.js');

module.exports = React.createClass({
    render: function () {
        return (
            <h1>Hello from Admin!<Shared></Shared></h1>

        );
    }
});