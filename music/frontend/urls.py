from django.urls import path
from .views import index

#main urls
urlpatterns = [
    path('', index),
    path('join', index),
    path('create', index)
]
