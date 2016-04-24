from django.conf.urls import url, include

from . import views

urlpatterns = [
    url(r'^list/(?P<env>\w+)/$', views.VariableListView.as_view(), name="var_list"),
    url(r'^add_var/$', views.VariableCreateView.as_view(), name="add_var"),
    url(r'^update_var/(?P<pk>\d+)/$', views.VariableUpdateView.as_view(), name="update_var"),
]
