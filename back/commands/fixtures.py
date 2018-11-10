from flask_script import Command, Option
from catMash import db, app
from catMash.models import *
import json

class FixturesCommand(Command):

    option_list = [
        Option("--path", "-p", dest="path")
    ]

    def run(self, path):
        with app.app_context():
            with open(path) as f:
                content = f.read()
                data = json.loads(content)

                for image in data.get('images', []):
                    cat = Cat(id=image['id'] ,url=image['url'])
                    db.session.add(cat)

                db.session.commit()
