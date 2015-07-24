var React = require('react');
var the_api = require('./api');
var Reflux = require('reflux');
var InstrumentStore = require('./instrument-store');
var Actions = require('./actions');
//var ReactRouter = require('react-router');
//var Link = ReactRouter.Link;

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(InstrumentStore, 'onChange')
	],
	getInitialState: function () {
		return {
			instruments: []
		}
	},
	componentWillMount: function () {
		Actions.getInstruments();
	},
	render: function () {
		return (
			<div className="List-group">
				Instruments
				{this.renderInstruments()}
			</div>
		)
	},
	renderInstruments: function () {
		return (
			this.state.instruments.slice(0, 10).map(function (instrument) {
				return (
					<div className="list-group-item" key={instrument.displayName}>
						<h4>{instrument.displayName}</h4>
						<ul>
							<p>Instrument:  {instrument.instrument}</p>
							<p>Pip Value: {instrument.pip}</p>
							<p>Maximum Trade Unit: {instrument.maxTradeUnits}</p>
						</ul>
					</div>
				)
			})
		)
	},
	onChange: function (event, instruments) {
		this.setState({instruments: instruments});
	}
});