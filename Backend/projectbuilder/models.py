from django.db import models

# Create your models here.


class Project(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    isActive = models.BooleanField(default=True)

    def __str__(self):
        return self.title


class Todo(models.Model):
    title = models.CharField(max_length=255)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class Bug(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    description_img = models.ImageField()
    solution = models.TextField()
    solution_img = models.ImageField()
    source = models.TextField()

    def __str__(self):
        return self.title


class WeeklyTask(models.Model):
    objective = models.CharField(max_length=500)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    todo = models.ForeignKey(Todo, on_delete=models.CASCADE)
    bug = models.ForeignKey(Bug, on_delete=models.CASCADE)
    week = models.SmallIntegerField()

    def __str__(self):
        return self.objective
