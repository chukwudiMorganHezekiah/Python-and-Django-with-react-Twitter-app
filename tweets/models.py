from django.db import models
from users.models import users
from django.utils import timezone


class Tweet(models.Model):
    tweet = models.TextField()
    user = models.ForeignKey(users, related_name='tweet', on_delete=models.CASCADE)
    date_tweeted = models.DateTimeField(default = timezone.now)
    
    def __str__(self):
        return self.tweet
    
    
class Like(models.Model):
    tweet = models.ForeignKey(Tweet, related_name='likes', on_delete=models.CASCADE)
    user = models.ForeignKey(users, related_name='liked', on_delete=models.CASCADE)
    date_liked = models.DateTimeField(default = timezone.now)
    
class Comment(models.Model):
    tweet = models.ForeignKey(Tweet, related_name='comments', on_delete=models.CASCADE)
    user = models.ForeignKey(users, related_name='commented', on_delete=models.CASCADE)
    comment =models.TextField(blank=True, null=True)
    date_commented = models.DateTimeField(default = timezone.now)
