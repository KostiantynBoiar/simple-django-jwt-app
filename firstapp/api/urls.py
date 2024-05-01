from django.urls import path
from . import views
from .views import MyTokenObtainPairView

from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path('', views.getRoutes, name='index'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain'),
]