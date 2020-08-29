from django.db import models
from users.models import users
from django.utils import timezone

class Follow(models.Model):
    user_id = models.IntegerField()
    followed_on = models.DateTimeField(default =timezone.now)
    follower = models.ForeignKey(users, related_name="follower", on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.follower} is following {self.user_id}"