from django.db import models
from django.contrib.auth.models import User


class UserItems(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    body = models.TextField()
    label = models.CharField(max_length=50)
