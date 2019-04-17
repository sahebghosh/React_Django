from django.db import models

class Menu(models.Model):
    name = models.CharField(max_length = 50)
    price = models.DecimalField(decimal_places=2, max_digits=100)

    def __str__(self):
        return self.name