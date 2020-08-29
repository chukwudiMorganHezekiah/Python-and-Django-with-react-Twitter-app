from rest_framework.views import APIView
from .serializers import UserSerializer
from rest_framework import permissions
from .models import users
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import viewsets
from profiles.models import profile
from profiles.serializers import ProfileSerializer
from follows.models import Follow


class GetDefaultUsers(APIView):
    permission_classes =[
        permissions.IsAuthenticated
    ]
    
    def post(self,request, *args, **kwargs):
        user = self.request.user
        userers = users.objects.all()[:5]
        users_to_pass = []
        for user_now in userers:
            user_id = user.id
            check_if_already_followed = Follow.objects.filter(user_id = user_now.id).filter(follower_id = user.id)
            if len(check_if_already_followed) == 0:
                users_to_pass.append(user_now)
            
        serilizer_class_many = UserSerializer(users_to_pass, many=True)
        serilizer_class = UserSerializer(user)
        return Response({
            'users':serilizer_class_many.data,
            "user":serilizer_class.data
        })
    
class GetSpecificUser(APIView):
    permission_classes =[
        permissions.IsAuthenticated
    ]
    def post(self, request,id=None, *args, **kwargs):
        try:
            queryset = users.objects.get(id=id)
        except user.DoesNotExist:
            return JsonResponse({'error':"user does not exits"}, status = 400)
        try:
            profile_queryset = profile.objects.get(user = queryset)
        except profile.DoesNotExist:
            return JsonResponse({'error':"user does not have a profile"}, status = 400)
            
        serializer_class = UserSerializer(queryset)
        serializer_class_profile = ProfileSerializer(profile_queryset)
        
        return Response(
            {'user':serializer_class.data,
             'profile':serializer_class_profile.data 
            },
            status=200)
        
    