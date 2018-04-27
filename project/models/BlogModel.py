from project import db
from datetime import datetime

class BlogModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String(64), unique=False, nullable=False)
    tag = db.Column(db.String(64), unique=False, nullable=True)
    text = db.Column(db.String(1024), unique=False, nullable=True)
    last_update = db.Column(db.DateTime, nullable=False,
            default=datetime.utcnow)

    def __repr__(self):
        return '<Blog {} @ {}>'.format(self.title, self.last_update)