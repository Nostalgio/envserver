from django.shortcuts import render

from django.views import generic

from .models import Variable
from environments.models import Environment

class VariableListView(generic.ListView):
    model = Variable
    template_name = 'variables/variable_list.html'

    def get_context_data(self, **kwargs):
        context = super(VariableListView, self).get_context_data(**kwargs)
        env = kwargs.get('env', 'prod')
        print(env)
        environment = Environment.objects.get(name=env)
        context['environment'] = environment
        context['variables'] = Variable.objects.filter(environment__name=env)
        return context


class VariableCreateView(generic.CreateView):
    model = Variable
    template_name = 'variables/variable_form.html'
    fields = ['environment', 'name', 'value']

    def form_valid(self, form):
        """
        If the form is valid, save the associated model.
        """
        form.instance.user = self.request.user
        self.object = form.save()
        return super(VariableCreateView, self).form_valid(form)

    def get_success_url(self):
        return '/variables/list/prod/'

class VariableUpdateView(generic.UpdateView):
    model = Variable
    template_name = 'variables/variable_form.html'
    fields = ['environment', 'name', 'value']

    def form_valid(self, form):
        """
        If the form is valid, save the associated model.
        """
        form.instance.user = self.request.user
        self.object = form.save()
        return super(VariableUpdateView, self).form_valid(form)

    def get_success_url(self):
        return '/variables/list/prod/'
