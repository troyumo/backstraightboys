from rest_framework import serializers

from .models import Angle, User


class AngleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Angle
        fields = ('id', 'user', 'A_x_upper', 'A_z_upper', 'G_y_upper',
                  'A_x_lower', 'A_z_lower', 'G_y_lower', 'time')


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'name', 'device']
