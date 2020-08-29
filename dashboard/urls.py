from django.urls import path ,include
from dashboard.views import home

urlpatterns = [
    path('',home , name="home")
]
