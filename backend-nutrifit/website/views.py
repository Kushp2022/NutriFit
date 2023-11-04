from flask import Blueprint, send_from_directory

views = Blueprint('views', __name__)

@views.route('/frontend-nutrifit/main.jsx')
def home():
    return send_from_directory('../frontend-nutrifit/src', 'main.jsx')
