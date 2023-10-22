from flask import Flask, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
import openai
import os
from pymongo import MongoClient
from pymongo.server_api import ServerApi
from urllib.parse import quote_plus
import json
from bson import json_util
from flask_cors import CORS

app = Flask(__name__)

CORS(app)


username = os.getenv("MONGO_USERNAME")
password = os.getenv("MONGO_PASSWORD")

username = quote_plus(username)
password = quote_plus(password)

connection_string = f"mongodb+srv://{username}:{password}@hh23.oxb5jub.mongodb.net/?retryWrites=true&w=majority"

client = MongoClient(connection_string, server_api=ServerApi('1'))

db = client['hh23']
collection = db['AIvisor']

users = {}
form_data = {}

@app.route('/register', methods=['POST'])
def register():
    username = request.json.get('username')
    password = request.json.get('password')

    if username in users:
        return jsonify({'message': 'User already exists'}), 400

    users[username] = generate_password_hash(password)
    return jsonify({'message': 'User created successfully'}), 200

@app.route('/login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')

    if username not in users or not check_password_hash(users[username], password):
        return jsonify({'message': 'Invalid username or password'}), 401

    return jsonify({'message': 'Logged in successfully'}), 200

@app.route('/form1', methods=['POST'])
def form1():
    collection.insert_one(request.form.to_dict())
    return jsonify({'message': 'Form 1 data stored successfully'}), 200

@app.route('/form2', methods=['POST'])
def form2():
    collection.insert_one(request.form.to_dict())
    return jsonify({'message': 'Form 2 data stored successfully'}), 200

@app.route('/form3', methods=['POST'])
def form3():
    collection.insert_one(request.form.to_dict())
    return jsonify({'message': 'Form 3 data stored successfully'}), 200

@app.route('/form4', methods=['POST'])
def form4():
    collection.insert_one(request.form.to_dict())
    return jsonify({'message': 'Form 4 data stored successfully'}), 200

@app.route('/read-mongo', methods=['GET'])
def read_mongodb():
    csv_files = collection.find()
    dfs = {}
    for file in csv_files:
        del file['_id']
        dfs |= file

    return jsonify(dfs), 200

@app.route('/openai', methods=['POST'])
def gpt_call():
    openai.api_key = os.getenv("OPENAI_API_KEY")

    # Example of calling the GPT-3 API
    response = openai.Completion.create(
        engine="gpt-3.5-turbo-instruct",
        prompt=request.json.get('prompt'),
        max_tokens = 3500
    )

    output = response.choices[0].text
    return jsonify({'output': output}), 200

if __name__ == '__main__':
    app.run(port=8000,debug=True)