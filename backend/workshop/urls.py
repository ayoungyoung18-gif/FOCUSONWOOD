from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FurnitureViewSet

router = DefaultRouter()
# 여기서 'furnitures'라는 이름으로 등록했기 때문에 주소 뒤에 이게 붙습니다.
router.register(r'furnitures', FurnitureViewSet, basename='furniture')

urlpatterns = [
    path('', include(router.urls)),
]
