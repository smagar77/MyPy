from api import api
from .views.Home import Home
from .services.Users import User
api.add_resource(Home, '/', methods=['GET'])

user_api = [
    '/users/',
    '/users/add_user/',
    '/users/user/<int:id>/',
]

api.add_resource(User, *user_api, methods=["GET", "POST","DELETE"])