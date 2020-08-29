from rest_framework.views import APIView
from .serializers import TweetSerializer
from .models import Tweet
from rest_framework.response import Response
from django.http import JsonResponse
from follows.models import Follow
from rest_framework import viewsets
import random


class AddTweet(APIView):
    def post(self, request, *args, **kwargs):       
        request.data['user'] = self.request.user.id
        user =self.request.user.id
        request.data['user'] = user
        serializer_class = TweetSerializer(data =request.data)
        if serializer_class.is_valid():
            serializer_class.save()
            return Response(serializer_class.data , status = 201)
        else:
            return JsonResponse({'error':serializer_class.errors}, status = 400)


class TweetsViewset(APIView):
        
    def post(self, request,limit = None, *args, **kwargs):
        followings = Follow.objects.filter(follower_id = self.request.user.id)
        tweets = []
        passing= []
        counter =0
        try:
            user_tweets = Tweet.objects.filter(user=self.request.user).order_by('-id')
            for user_tweet in user_tweets:
                tweets.append(user_tweet)
        except BaseException as e:
            pass
        
        for following in followings:
            try:
                tweet = Tweet.objects.filter(user_id = following.user_id).order_by('-id')
                for t in tweet:
                    
                    tweets.append(t)
            except BaseException as e:
                pass  
       
        while counter < limit:
            passing.append(random.choice(tweets))
            counter+=1 
            
        serializer_class = TweetSerializer(passing, many=True)
        print(serializer_class.data)
        return Response(serializer_class.data)
            
    
    
    
class GetTweetDetails(APIView):
    def get(self, request, id=None, *args, **kwargs):
        try:
            tweet = Tweet.objects.get(id = id)
        except Tweet.DoesNotExist:
            return JsonResponse({'error':"tweet does not exits"}, status = 400)
        
        like_count = tweet.likes.count()
        comment_count = tweet.comments.count()
        return Response({
            'likes':like_count,
            'comments':comment_count
        }, status = 200)
        
class AddTweet(APIView):
    def post(self, request, *args, **kwargs):
        request.data['user']=self.request.user.id
        data = request.data
        serializer_class = TweetSerializer(data=data)
        if serializer_class.is_valid():
            serializer_class.save()
            return Response(serializer_class.data, status= 201)
        else:
            return Response(serializer_class.errors, status = 400)
    