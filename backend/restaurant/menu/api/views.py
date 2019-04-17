from rest_framework import viewsets 
from menu.models import Menu
from .serializers import MenuSerializer


class MenuView(viewsets.ModelViewSet):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer

