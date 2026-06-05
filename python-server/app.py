from flask import Flask, jsonify
import datetime
import os

app = Flask(__name__)
PORT = os.environ.get('PORT', 3002)

@app.route('/')
def hello():
    return jsonify({
        'message': 'Hello from Python Server!',
        'timestamp': datetime.datetime.now().isoformat(),
        'server': 'python-server',
        'status': 'running'
    })

@app.route('/health')
def health():
    return jsonify({
        'status': 'healthy',
        'server': 'python-server'
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(PORT), debug=False)
