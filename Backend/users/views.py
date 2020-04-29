from django.shortcuts import render
from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer
from . import permissions
from rest_framework.permissions import IsAuthenticated

# Create your views here.


class UserViewsets(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = (permissions.UpdateOwnProfile, IsAuthenticated,)
