from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend

from .serializers import AngleSerializer, UserSerializer, SettingsSerializer, NotificationsSerializer
from .models import Angle, User, Settings, Notifications


class AngleViewSet(viewsets.ModelViewSet):
    queryset = Angle.objects.all().order_by('-date', '-time')
    serializer_class = AngleSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ['user', 'calibration', 'date']


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('id')
    serializer_class = UserSerializer


class SettingsViewSet(viewsets.ModelViewSet):
    queryset = Settings.objects.all().order_by('user')
    serializer_class = SettingsSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ['user']


class NotificationsViewSet(viewsets.ModelViewSet):
    queryset = Notifications.objects.all().order_by('-date', '-time')
    serializer_class = NotificationsSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ['user']
