from app import db, managers

class Instrument(db.Model, managers.ModelManager):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    instrument = db.Column(db.String(255), index=True, unique=False)
    displayName = db.Column(db.String(255), index=True, unique=False)
    maxTradeUnits = db.Column(db.Integer, default=False)
    pip = db.Column(db.Float, default=False)

    def __init__(self, instrument_obj):
        self.pip = instrument_obj[0][1]
        self.instrument = instrument_obj[1][1]
        self.maxTradeUnits = instrument_obj[2][1]
        self.displayName = instrument_obj[3][1]
            
            

    @property
    def as_json(self):
        return {
            'instrument': self.instrument,
            'displayName': self.displayName,
            'maxTradeUnits': self.maxTradeUnits,
            'pip': self.pip,
            'id': self.id
        }

    def __repr__(self):
        return 'Instrument: %s)' % (self.instrument)