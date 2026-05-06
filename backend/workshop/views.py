from rest_framework import viewsets
from .models import Furniture
from .serializers import FurnitureSerializer

class FurnitureViewSet(viewsets.ModelViewSet):
    queryset = Furniture.objects.all()
    serializer_class = FurnitureSerializer