from flask import Flask, jsonify, render_template, request
from joblib import load
import numpy as np
import sqlite3
from sqlalchemy import create_engine
import pandas as pd

app = Flask(__name__)


engine = create_engine('sqlite:///pitching.sqlite', echo=False)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/home")
def home2():
    return render_template("index.html")


# @app.route("/hitting")
# def hitting():
#     return render_template('hitting.html')


@app.route("/prediction")
def prediction():
    return render_template('prediction.html')




@app.route("/submit", methods=["POST"])

def submit():

    # read data, do for each question, make sure the features are in correct order
    SO = float(request.form['SO'])
    BAOpp = float(request.form['BAOpp'])
    ERA = float(request.form['ERA'])

    # user input list
    features = np.array([[SO,BAOpp,ERA]])
  

    # load model
    model = load("pitcher_model_10_starts.joblib")
    prediction = model.predict(features)[0]
    print(prediction)
    return render_template('prediction.html', prediction = prediction)



@app.route("/data")
def data():

    new_df = pd.read_sql('pitching_stats', engine)
    result = new_df.to_json(orient='records')


    return result




if __name__ == "__main__":
    app.run(debug=True)
