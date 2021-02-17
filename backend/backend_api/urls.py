from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'angles', views.AngleViewSet)

# Wire API using automatic URL routing
# Additionally, include login URLs for the browsable API

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]