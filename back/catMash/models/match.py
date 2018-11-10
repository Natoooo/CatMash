from catMash import db, ma
from datetime import datetime

class Match(db.Model):
    __tablename__ = "match"

    id = db.Column(db.Integer, primary_key=True)
    loser_id = db.Column(db.Text, db.ForeignKey('cat.id'), nullable=False)
    winner_id = db.Column(db.Text, db.ForeignKey('cat.id'), nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow(), nullable=False)

class MatchSchema(ma.ModelSchema):
    class Meta:
        model = Match
        include_fk = True

match_schema = MatchSchema()
matches_schema = MatchSchema(many=True)
