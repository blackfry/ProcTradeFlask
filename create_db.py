from app import db
from app.models import Instrument

db.create_all()

#setup
instruments = [
            		{
						      "instrument": "AU200_AUD",
						      "displayName": "Australia 200",
						      "pip": "1.0",
						      "maxTradeUnits": 200
						    },
						    {
						      "instrument": "AUD_CAD",
						      "displayName": "AUD\\/CAD",
						      "pip": "0.0001",
						      "maxTradeUnits": 10000000
						    },
						    {
						      "instrument": "AUD_CHF",
						      "displayName": "AUD\\/CHF",
						      "pip": "0.0001",
						      "maxTradeUnits": 10000000
						    }
        ]

for instrument in instruments:
	entry = Instrument(zip(instrument.keys(), instrument.values()))
	db.session.add(entry)

db.session.commit()

if len(Instrument.query.all()) == 3:
    print "3 Instruments saved to db"