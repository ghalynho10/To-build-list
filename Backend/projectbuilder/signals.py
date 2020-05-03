from django.db.models.signals import post_save
from .models import WeeklyTask, Todo
from django.dispatch import receiver


@receiver(post_save, sender=WeeklyTask)
def create_todo(sender, instance, created, **kwargs):
    if created:
        Todo.objects.create(weeklytask=instance)
        print('Todo created successfully')


@receiver(post_save, sender=WeeklyTask)
def save_todo(sender, instance, **kwargs):
    instance.todo.save()

