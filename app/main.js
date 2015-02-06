
var React = require('react');

// We create a function that will lazy load modules based on the current hash
var resolveRoute = function () {

    // If no hash or hash is '#' we lazy load the Home component
    if (!location.hash || location.hash.length === 1) {
        require.ensure([], function () {
            var Home = require('./Home.js');
            React.render(Home(), document.getElementById('app'));
        });

        // Or if route is #admin we lazy load that
    } else if (location.hash === '#admin') {
        require.ensure([], function () {
            var Admin = require('./Admin.js');
            React.render(Admin(), document.getElementById('app'));
        });
    }

};

// Resolve route on hash change
window.onhashchange = resolveRoute;

console.log('Test');

// Resolve current route
resolveRoute();