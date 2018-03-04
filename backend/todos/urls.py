from django.urls import path

from . import views

urlpatterns = [
    path('todos/', views.ListTodo.as_view()),
    path('todos/<int:pk>/', views.DetailTodo.as_view()),
]