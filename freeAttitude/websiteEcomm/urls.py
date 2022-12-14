from django.urls import path
from . import views

app_name = 'websiteEcomm'
urlpatterns = [
    path('', views.home, name='home'),
    path('landing-page/', views.landingPage, name='landing-page'),
    path('preview/<str:siteTitle>/', views.preview, name='preview'),
]
