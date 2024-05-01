from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/v1/routes/',
        '/api/v1/routes/<int:route_id>',
    ]
    return Response(routes)

