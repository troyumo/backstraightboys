from django.db import models
from django.utils.timezone import now


class User(models.Model):
    username = models.CharField(max_length=20)

    def __str__(self):
        return self.username


class Angle(models.Model):
    user = models.ForeignKey(User, related_name='angles', on_delete=models.CASCADE, null=True)
    # does data need to be a float or an int?
    A_x_upper = models.FloatField()
    A_z_upper = models.FloatField()
    G_y_upper = models.FloatField()
    A_x_lower = models.FloatField()
    A_z_lower = models.FloatField()
    G_y_lower = models.FloatField()
    time = models.DateTimeField(default=now, null=False)
    calibration = models.BooleanField(default=False)

    def __str__(self):
        return str(self.time)


class Settings(models.Model):
    user = models.ForeignKey(User, related_name='settings', on_delete=models.CASCADE, null=True)
    sensitivity = models.CharField(max_length=6)
    duration = models.CharField(max_length=6)
    frequency = models.CharField(max_length=6)
    strength = models.CharField(max_length=6)
    position = models.CharField(max_length=8)
    operationMode = models.CharField(max_length=8)
    silentMode = models.BooleanField(default=False)


class Notifications(models.Model):
    user = models.ForeignKey(User, related_name='notifications', on_delete=models.CASCADE, null=True)
    message = models.CharField(max_length=128)
    time = models.DateTimeField(default=now, null=False)
