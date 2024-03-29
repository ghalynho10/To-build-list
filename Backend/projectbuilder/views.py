from django.shortcuts import render
from . serializers import ProjectSerializer
from rest_framework import viewsets
from . models import Project
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST


# Create your views here.


class ProjectViewset(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        queryset = Project.objects.all()
        user = self.request.user
        queryset = queryset.filter(user=user)
        return queryset

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
