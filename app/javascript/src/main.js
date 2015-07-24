var React = require('react');
var Header = require('./header');
var Instruments = require('./instrument-list');

module.exports = React.createClass({
	render: function () {
		return (
			<div className="container-fluid">
				< Header />
				{this.content()}
			</div>
		)
	},
	content: function () {
		if(this.props.children) {
			return (
				this.props.children
			)
		} else {
			return <Instruments />
		}
	}
});