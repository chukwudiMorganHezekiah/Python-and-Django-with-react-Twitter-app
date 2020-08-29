from rest_framework.views import APIView
from .serializers import FollowSerializer
from rest_framework import permissions
from users.models import users
from .models import Follow
from rest_framework.response import Response
from django.http import JsonResponse

class FollowUser(APIView):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    def post(self,request, id=None, *args, **kwargs):
        try:
            user = users.objects.get(id=id)
            
        except users.DoesNotExist:
            return JsonResponse({'error':'user does not exist'}, status = 400)
        
            
        follower = self.request.user
        check_if_already_followed= Follow.objects.filter(user_id =user.id).filter(follower_id=follower.pk)
        
        if len(check_if_already_followed) > 0:   
            return JsonResponse({'error':'user is already followed'}, status = 400)

            
        data = {"user_id":user.id, "follower":follower.pk}
        serializer = FollowSerializer(data =data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = 201)
        else:
            return Response({'error':serializer.errors},  status = 400)
        
            