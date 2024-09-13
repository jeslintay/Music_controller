from django.shortcuts import render
from rest_framework import generics
from .serializers import RoomSerializer
from .models import Room


# Create your views here.

class RoomView(generics.ListAPIView): #ListAPIView to view only; CreateAPIView to have input fields
    queryset = Room.objects.all()
    serializer_class = RoomSerializer #to return as some format

