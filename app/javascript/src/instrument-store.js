var Reflux = require('reflux');
var the_api = require('./api');
var Actions = require('./actions');

module.exports = Reflux.createStore({
	listenables: [Actions],
	getInstruments: function () {
		return (
			the_api.get('/v1/instruments')
			.then(function (json) {
				this.instruments = json.instruments;
				this.triggerChange();
			}.bind(this))
		)
	},
	triggerChange: function () {
		this.trigger('change', this.instruments);
	}
});