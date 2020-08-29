from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save



class users(AbstractUser):
    email = models.EmailField(max_length= 200, null=False, blank = False, unique=True)
    phone = models.CharField(max_length= 300)
    USERNAME_FIELD = 'email'
    
    REQUIRED_FIELDS =[
        'phone','username','password'
    ]
    def get_username(self):
        return self.email
    
    
