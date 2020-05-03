from rest_framework import serializers
from .models import Project, Todo, Bug, WeeklyTask

from users.models import User


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('__all__')
