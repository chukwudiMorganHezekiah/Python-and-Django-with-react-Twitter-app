
from django.contrib import admin
from django.urls import path, include, re_path
from dashboard.views import home
from django.conf import settings
from django.conf.urls.static import static

frontEndPaths=['login/','signup/','home/','dashboard/','edit_profile/','logout/']


urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('accounts.urls')),
    path('',home),
    path('profile/', include('profiles.urls')),
    path('users/', include('users.urls')),
    path('follow/', include('follows.urls')),
    path('tweet/', include('tweets.urls'))
    
    
]
for frontendPath in frontEndPaths:
    urlpatterns.append(path(frontendPath, home))
    

if settings.DEBUG:
    urlpatterns +=static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
    