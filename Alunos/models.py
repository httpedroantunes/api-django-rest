from venv import create
from django.db import models
from uuid import uuid4

from django.forms import CharField

# Create your models here.


class Alunos (models.Model):
    nomeCurso = models.CharField(max_length=30)
    IDcurso = models.UUIDField(default=uuid4, editable=False)
    nomeAluno = models.CharField(max_length=35)
    idadeAluno = models.IntegerField()
    IDaluno = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    Turma = models.IntegerField()
    departamento = models.CharField(max_length=30)
    createRegister = models.DateField(auto_now_add=True)
