from rest_framework import serializers
from ..models import UserItems

class ItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserItems
        fields = '__all__'

