from rest_framework import viewsets

from .serializers import VariableSerializer
from .models import Variable


class VariableViewSet(viewsets.ModelViewSet):
    queryset = Variable.objects.all()
    serializer_class = VariableSerializer

    def get_queryset(self):
        env = self.request.GET.get('env')
        return Variable.objects.filter(user=self.request.user
                ).filter(environment__name=env)
