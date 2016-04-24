from rest_framework import viewsets

from .serializers import VariableSerializer
from .models import Variable


class VariableViewSet(viewsets.ModelViewSet):
    queryset = Variable.objects.all()
    serializer_class = VariableSerializer

    def get_queryset(self):
        return Variable.objects.filter(user=self.request.user)
