$ = jQuery = require("jquery");
var React = require("react");
var Home = require("./components/homePage.jsx");
var Authors = require("./components/authors/authorPage.jsx");
var About = require("./components/about/aboutPage.jsx");
var Header = require("./components/common/header.jsx");

(function(win) {
    "use strict";
    var App = React.createClass({
        render: function() {
            var Child;
    
            switch(this.props.route) {
                case "about":
                    Child = About;
                    break;
                case "authors":
                    Child = Authors;
                    break;
                default:
                    Child = Home;
            }
    
            return (
                <div>
                    <Header />
                    <Child />
                </div>
            );
        }
    });
    
    function render() {
        var route = win.location.hash.substr(1);
        React.render(<App route={route} />, 
                document.getElementById("app"));
    }
    
    win.addEventListener("hashchange", render);
    
    render();
    
})(window);
