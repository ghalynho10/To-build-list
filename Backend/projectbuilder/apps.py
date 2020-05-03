from django.apps import AppConfig


class ProjectbuilderConfig(AppConfig):
    name = 'projectbuilder'

    def ready(self):
        import projectbuilder.signals
