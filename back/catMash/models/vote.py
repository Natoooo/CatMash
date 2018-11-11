from catMash import db, ma
from datetime import datetime

class Vote(db.Model):
    __tablename__ = "vote"

    id = db.Column(db.Integer, primary_key=True)
    loser_id = db.Column(db.Text, db.ForeignKey('cat.id'), nullable=False)
    winner_id = db.Column(db.Text, db.ForeignKey('cat.id'), nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow(), nullable=False)

class VoteSchema(ma.ModelSchema):
    class Meta:
        model = Vote
        include_fk = True

vote_schema = VoteSchema()
votes_schema = VoteSchema(many=True)
