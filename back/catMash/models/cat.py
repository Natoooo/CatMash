from catMash import db, ma

class Cat(db.Model):
    __tablename__ = "cat"

    id = db.Column(db.Text, primary_key=True)
    url = db.Column(db.Text, nullable=False)

class CatSchema(ma.ModelSchema):
    class Meta:
        model = Cat

cat_schema = CatSchema()
cats_schema = CatSchema(many=True)
