from catMash import db, ma
from sqlalchemy import select, func

class Cat(db.Model):
    __tablename__ = "cat"

    id = db.Column(db.Text, primary_key=True)
    url = db.Column(db.Text, nullable=False)
    score = db.Column(db.Integer, nullable=False, default=0)

class CatSchema(ma.ModelSchema):
    class Meta:
        model = Cat

cat_schema = CatSchema()
cats_schema = CatSchema(many=True)
