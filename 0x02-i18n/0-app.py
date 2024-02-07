#!/usr/bin/env python3
"""This is the starting point of the flask app"""

from flask import Flask
from flask import render_template
from typing import Text


app = Flask(__name__)


@app.route('/')
def home() -> Text:
    return render_template('0-index.html')


if __name__ == "__main__":
    app.run("0.0.0.0", 5000, debug=True)
