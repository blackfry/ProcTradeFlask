from flask import render_template, jsonify, request, Response
from sqlalchemy import desc

from app import app, db

from models import Instrument

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')


#@app.route('/instruments/', methods=['GET'])
#def get_instruments():
#    instruments = Instrument.query.order_by(desc(instrument.instrument))
#   instruments_as_json = []
#
#    for instrument in instruments:
#        instruments_as_json.append({
#                'instrument': instrument.instrument,
#                'displayName': instrument.displayName,
#                'maxTradeUnits': instrument.maxTradeUnits,
#                'pip': instrument.pip,
#                'key': instrument.id
#            })
#    return jsonify(instruments=instruments_as_json)
