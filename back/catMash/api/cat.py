from catMash import app
from catMash.models import *
from flask import jsonify

@app.route("/cats", methods=["GET"])
def get_cats():
    cats = Cat.query.all()
    return cats_schema.jsonify(cats)
