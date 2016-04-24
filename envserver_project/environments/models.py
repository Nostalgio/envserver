from django.db import models
from django.conf import settings


class Environment(models.Model):
    """
    Server environments
    """
    user = models.ForeignKey(settings.AUTH_USER_MODEL)
    name = models.CharField(max_length=120)

    def __str__(self):
        return "Env = {}".format(self.name)
