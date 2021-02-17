# Generated by Django 3.1.6 on 2021-02-13 02:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Angle',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('U_x', models.FloatField()),
                ('U_y', models.FloatField()),
                ('U_z', models.FloatField()),
                ('L_x', models.FloatField()),
                ('L_y', models.FloatField()),
                ('L_z', models.FloatField()),
                ('time', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]