from rest_framework import viewsets
from Alunos.api import serializers
from Alunos import models


class AlunosViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.AlunosSerializer
    queryset = models.Alunos.objects.all()
