from django.contrib import admin
from .models import Variable


class VariableAdmin(admin.ModelAdmin):
    pass


admin.site.register(Variable, VariableAdmin)
