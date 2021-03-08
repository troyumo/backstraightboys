from rest_framework import viewsets

from .serializers import AngleSerializer
from .models import Angle


class AngleViewSet(viewsets.ModelViewSet):
    queryset = Angle.objects.all().order_by('time')
    serializer_class = AngleSerializer
