from rest_framework.generics import ListAPIView
from menu.models import Menu
from .serializers import MenuSerializer


class MenuListView(ListAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer

