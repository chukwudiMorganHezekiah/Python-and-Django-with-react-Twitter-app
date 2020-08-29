from .apis import AddTweet,  TweetsViewset , GetTweetDetails, AddTweet
from django.urls import path
# from rest_framework import routers

# route = routers.DefaultRouter()
# route.register('api/get_tweets_from_other_users',TweetsViewset)
# urlpatterns = route.urls


urlpatterns = [
    path('api/create/tweet', AddTweet.as_view()),
    path('api/get_tweets_from_other_users/<int:limit>/',TweetsViewset.as_view()),
    path('api/get_tweet_details/<int:id>/', GetTweetDetails.as_view()),
    path('api/add_tweet/', AddTweet.as_view())
]