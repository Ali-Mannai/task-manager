
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TaskViewSet, HelloWorldViewSet


# router= DefaultRouter()
# router.register(r'tasks', TaskViewSet)

urlpatterns = [
    # path('', include(router.urls)),
    path('hello/', HelloWorldViewSet.as_view({'get': 'hello'})),
    path('tasks/', TaskViewSet.as_view({'get': 'list', 'post': 'create'})),
    path('tasks/<int:pk>/', TaskViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'})),
]