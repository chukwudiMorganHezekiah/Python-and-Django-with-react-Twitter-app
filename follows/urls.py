from .apis import FollowUser
from django.urls import path

urlpatterns = [
    path('api/followe_user/<int:id>/',FollowUser.as_view())
]
