import json

def get_json(object):
    return json.dumps(object.__dict__)