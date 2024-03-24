from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('core/', include('djoser.urls')),
    path('core/', include('users.urls')),
]
