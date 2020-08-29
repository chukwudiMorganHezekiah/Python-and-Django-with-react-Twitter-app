from .serializers import ProfileSerializer
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response
from .models import profile
from django.http import JsonResponse

class ProfileId(APIView):
    permission_classes =[
        permissions.IsAuthenticated
    ]
    def post(self,request, *args, **kwargs):
        user =self.request.user.id
        request.data['user'] = user
        serializer = ProfileSerializer(data =request.data)     
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status =201)
        else:
            return Response(serializer.errors,status =400) 

    
class GetUserProfile(APIView):
    permission_classes =[
        permissions.IsAuthenticated
    ]
    def getuser(self,user):
        try:
            user_profile =profile.objects.get(user = user)
            return user_profile
        except profile.DoesNotExist as no_user_profile:
            return JsonResponse({'error':'user doest not have a profile yet'}, status=401)
    
    def get(self, request, *args, **kwargs):
        user = self.request.user
        try:
            user_profile =profile.objects.get(user = user)
            serilizer = ProfileSerializer(user_profile)
            return Response(serilizer.data)
        except profile.DoesNotExist as no_user_profile:
            return JsonResponse({'error':'user doest not have a profile yet'}, status=401)
        