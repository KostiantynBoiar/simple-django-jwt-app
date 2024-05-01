from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from firstapp.api.serializers import ItemsSerializer
from firstapp.models import UserItems


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['username'] = user.username

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getRoutes(request):
    routes = [
        '/api/v1/routes/',
        '/api/v1/routes/<int:route_id>',
    ]
    return Response(routes)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getItems(request):
    items = UserItems.objects.all()
    serializer = ItemsSerializer(items, many=True)
    return Response(serializer.data)