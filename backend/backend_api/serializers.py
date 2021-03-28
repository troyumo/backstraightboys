from rest_framework import serializers

from .models import Angle, User, Settings, Notifications


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']


class AngleSerializer(serializers.HyperlinkedModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Angle
        fields = ['id', 'A_x_upper', 'A_z_upper', 'G_y_upper',
                  'A_x_lower', 'A_z_lower', 'G_y_lower',
                  'time', 'calibration', 'user']


class SettingsSerializer(serializers.HyperlinkedModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Settings
        fields = ['id', 'user', 'sensitivity', 'duration', 'frequency',
                  'strength', 'position', 'operationMode', 'silentMode']


class NotificationsSerializer(serializers.HyperlinkedModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Notifications
        fields = ['id', 'user', 'message', 'time']
