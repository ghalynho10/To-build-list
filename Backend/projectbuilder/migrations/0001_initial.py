# Generated by Django 2.2.7 on 2020-05-03 22:28

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Bug',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('description_img', models.ImageField(upload_to='')),
                ('solution', models.TextField()),
                ('solution_img', models.ImageField(upload_to='')),
                ('source', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.CharField(max_length=255)),
                ('isActive', models.BooleanField(default=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('completed', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='WeeklyTask',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('objective', models.CharField(max_length=500)),
                ('week', models.SmallIntegerField()),
                ('bug', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='projectbuilder.Bug')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='projectbuilder.Project')),
                ('todo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='projectbuilder.Todo')),
            ],
        ),
    ]
