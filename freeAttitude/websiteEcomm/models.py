from django.db import models

# Create your models here.


class AllTemplates(models.Model):
    categories = [
        ('landing-page', 'landing-page')
    ]
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    image = models.ImageField(null=True, blank=True)
    category = models.CharField(
        max_length=200, choices=categories, default='landing-page')
    url = models.CharField(max_length=500, null=True)

    def __str__(self):
        return self.name

    @property
    def templateNumber(self):
        try:
            number = self.id
        except:
            number = ''
        return number

    @property
    def templateTitle(self):
        try:
            title = self.name
        except:
            title = ''
        return title

    @property
    def imageURL(self):
        try:
            url = self.image.url
        except:
            url = ''
        return url

    @property
    def gitUrl(self):
        try:
            gitPath = self.url
        except:
            gitPath = ''
        return gitPath

    @property
    def getCategory(self):
        try:
            category = self.category
        except:
            category = ''
        return category
