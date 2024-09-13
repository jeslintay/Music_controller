from django.urls import path
from .views import index

#main urls
urlpatterns = [
    path('', index)
]
