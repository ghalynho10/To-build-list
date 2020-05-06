from rest_framework import serializers
from .models import Project, Todo, Bug, WeeklyTask

from users.models import User


class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value


class ProjectSerializer(serializers.ModelSerializer):
    user = StringSerializer(many=False)

    class Meta:
        model = Project
        fields = ('title', 'description', 'user')
