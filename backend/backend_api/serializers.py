from rest_framework import serializers

from .models import Angle


class AngleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Angle
        fields = ('id', 'U_x', 'U_y', 'U_z', 'L_x', 'L_y', 'L_z', 'time')
