from catMash import app
from catMash.models import *
from flask import jsonify, request
from sqlalchemy import desc
import random

@app.route("/cats", methods=["GET"])
def get_cats():
    q = Cat.query
    q = q.order_by(desc(request.args.get('order_by', 'score')))
    q = q.limit(int(request.args.get("page_size", 9)))
    q = q.offset(int(request.args.get("page_size", 9)) * int(request.args.get("page", 0)))
    return cats_schema.jsonify(q.all())

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
    cat = Cat.query.filter(Cat.id == request.json.get('winner_id')).first()
    cat.score += 1
    db.session.commit()
    return ""
