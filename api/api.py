from flask import Flask, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)

# In a real application, you'd use a database. For simplicity, we'll use a dictionary.
users = {}

@app.route('/register', methods=['POST'])
def register():
    username = request.json.get('username')
    password = request.json.get('password')

    if username in users:
        return jsonify({'message': 'User already exists'}), 400

    users[username] = generate_password_hash(password)
    return jsonify({'message': 'User created successfully'}), 201

@app.route('/login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')

    if username not in users or not check_password_hash(users[username], password):
        return jsonify({'message': 'Invalid username or password'}), 401

    return jsonify({'message': 'Logged in successfully'}), 200

if __name__ == '__main__':
    app.run(debug=True)