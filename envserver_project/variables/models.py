from django.db import models
from django.conf import settings

from environments.models import Environment


class Variable(models.Model):
    """
    Env variables setting.
    """
    user = models.ForeignKey(settings.AUTH_USER_MODEL)
    environment = models.ForeignKey(Environment)
    name = models.CharField(max_length=240)
    value = models.CharField(max_length=240, default='', blank=True)

    def __str__(self):
        return "Var = {}".format(self.name)
