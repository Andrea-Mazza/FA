# Generated by Django 4.1.4 on 2022-12-11 09:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('websiteEcomm', '0006_alltemplates_category_alltemplates_image_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='alltemplates',
            name='url',
            field=models.CharField(max_length=500, null=True),
        ),
    ]
