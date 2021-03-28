from rest_framework import viewsets

from .serializers import AngleSerializer, UserSerializer, SettingsSerializer, NotificationsSerializer
from .models import Angle, User, Settings, Notifications


class AngleViewSet(viewsets.ModelViewSet):
    queryset = Angle.objects.all().order_by('time')
    serializer_class = AngleSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('username')
    serializer_class = UserSerializer


class SettingsViewSet(viewsets.ModelViewSet):
    queryset = Settings.objects.all().order_by('user')
    serializer_class = SettingsSerializer


class NotificationsViewSet(viewsets.ModelViewSet):
    queryset = Notifications.objects.all().order_by('time')
    serializer_class = NotificationsSerializer

