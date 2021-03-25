from django.db import models
from django.utils.timezone import now


class Angle(models.Model):
    user = models.CharField(max_length=20)
    # does data need to be a float or an int?
    A_x_upper = models.FloatField()
    A_z_upper = models.FloatField()
    G_y_upper = models.FloatField()
    A_x_lower = models.FloatField()
    A_z_lower = models.FloatField()
    G_y_lower = models.FloatField()
    time = models.DateTimeField(default=now, null=False)

    def __str__(self):
        return str(self.time)

class User(models.Model):
    username = models.CharField(max_length=20)