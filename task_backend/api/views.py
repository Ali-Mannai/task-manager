
from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer
from rest_framework.response import Response

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all().order_by('-created_at')
    serializer_class = TaskSerializer


class HelloWorldViewSet(viewsets.ViewSet):
    def hello(self, request):
        return Response({"message": "Hello, World!"})