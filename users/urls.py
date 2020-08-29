from .api import GetDefaultUsers, GetSpecificUser
from django.urls import path
from rest_framework import routers


urlpatterns = [
    path('api/get_users/',GetDefaultUsers.as_view()),
    path('api/get_user/<int:id>/',GetSpecificUser.as_view())
]
    