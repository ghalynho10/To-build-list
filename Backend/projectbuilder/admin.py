from django.contrib import admin
from . models import Project, Todo, Bug, WeeklyTask

# Register your models here.
admin.site.register(Project)
admin.site.register(WeeklyTask)
admin.site.register(Todo)
admin.site.register(Bug)
