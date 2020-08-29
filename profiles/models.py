from django.db import models
from users.models import users 


class profile(models.Model):
    profile_image = models.ImageField(default="no_image.jpg", upload_to='profile_images/')
    user = models.OneToOneField(users, on_delete=models.CASCADE, related_name='profile')
    
    def __str__(self):
        return self.user.email
    
    def get_image_url(self):
        return self.profile_image.url
