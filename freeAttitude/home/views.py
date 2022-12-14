from django.shortcuts import render

from websiteEcomm.models import AllTemplates

# Create your views here.


def home(request):
    allTemplates = AllTemplates.objects.all()
    context = {'allTemplates': allTemplates}
    return render(request, 'home/index.html', context)
