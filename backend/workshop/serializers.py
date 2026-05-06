from rest_framework import serializers
from .models import Furniture

class FurnitureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Furniture
        fields = '__all__' # 모든 칸(이름, 가격 등)을 다 보내겠다는 뜻