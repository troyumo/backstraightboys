from django.db import models
from django.utils.timezone import now


class Angle(models.Model):
    # does data need to be a float or an int?
    U_x = models.FloatField()
    U_y = models.FloatField()
    U_z = models.FloatField()
    L_x = models.FloatField()
    L_y = models.FloatField()
    L_z = models.FloatField()
    time = models.DateTimeField(default=now, null=False)

    def __str__(self):
        return str(self.time)
