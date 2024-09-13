from django.urls import path
from .views import RoomView

#main urls
urlpatterns = [
    path('room', RoomView.as_view())
]
