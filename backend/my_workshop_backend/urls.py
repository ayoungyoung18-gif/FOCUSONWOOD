from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.view_config_admin_site_urls if hasattr(admin.site, 'view_config_admin_site_urls') else admin.site.urls),
    path('api/', include('workshop.urls')),  # 'api/' 주소로 들어오면 workshop 앱의 주소로 연결
]