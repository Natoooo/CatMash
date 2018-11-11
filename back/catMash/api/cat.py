from catMash import app
from catMash.models import *
from flask import jsonify, request
import random

@app.route("/cats", methods=["GET"])
def get_cats():
    cats = Cat.query
    cats = cats.limit(int(request.args.get("page_size", 10)))
    cats = cats.offset(int(request.args.get("page_size", 10)) * int(request.args.get("page", 0)))
    return cats_schema.jsonify(cats)

@app.route("/cats/<id>", methods=["GET"])
def get_cat(id):
    cat = Cat.query.filter(Cat.id == id).first()
    return cat_schema.jsonify(cat)

@app.route("/match", methods=["GET"])
def get_match():
    cats = Cat.query.all()
    left_cat = random.choice(cats)
    right_cat = None

    while True:
        rand_cat = random.choice(cats)

        if not (rand_cat == left_cat):
            right_cat = rand_cat
            break

    return cats_schema.jsonify([left_cat, right_cat])

@app.route("/vote", methods=["POST"])
def create_vote():
    vote = Vote(**request.json)
    db.session.add(vote)
    db.session.commit()
    return ""
