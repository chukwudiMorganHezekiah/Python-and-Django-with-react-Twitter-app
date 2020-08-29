from djoser.serializers import UserCreateSerializer,UserSerializer
from rest_framework import serializers
from .models import users


class UserCreationsSerilizer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = users
        fields ="__all__"

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = users
        fields = ('id','phone','username','email')