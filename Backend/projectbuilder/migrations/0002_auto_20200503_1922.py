# Generated by Django 2.2.7 on 2020-05-03 23:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('projectbuilder', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='weeklytask',
            name='todo',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='projectbuilder.Todo'),
        ),
    ]
