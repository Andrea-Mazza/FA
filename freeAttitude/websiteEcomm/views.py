from django.shortcuts import render
from .models import *

# Create your views here.
allTemplates = AllTemplates.objects.all()
landingPage = AllTemplates.objects.filter(category='landing-page')

context = {'allTemplates': allTemplates, 'landingPage': landingPage}


def home(request):
    return render(request, 'websiteEcomm/home.html', context)


def landingPage(request):
    return render(request, 'websiteEcomm/landingPage.html', context)


def preview(request, siteTitle):
    siteTitle = AllTemplates.objects.get(name=siteTitle)

    previewContext = {'siteTitle': siteTitle}
    return render(request, 'websiteEcomm/preview-templates/base.html', previewContext)
