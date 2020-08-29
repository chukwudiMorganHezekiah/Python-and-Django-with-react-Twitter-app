from django.urls import path
from .api import ProfileId, GetUserProfile

urlpatterns = [
    path('api/',ProfileId.as_view(), name="profile_create"),
    path('api/get_user_profile/',GetUserProfile.as_view(), name="get_user_profile")
]
