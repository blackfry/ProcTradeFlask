from app import db

class ModelManager(object):

    def save(self, commit=True):
        db.session.add(self)
        if commit:
            db.session.commit()
        else:
            return self

    def update(self, data):
        for attr, value in data.iteritems():
            if hasattr(self, attr):
                setattr(self, attr, value)
        self.save()

    def delete(self, commit=True):
        db.session.delete(self)
        if commit:
            db.session.commit()
