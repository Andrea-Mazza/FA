# Generated by Django 4.1.4 on 2022-12-10 17:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('websiteEcomm', '0002_alter_alltemplates_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='LandingPage',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='websiteEcomm.alltemplates')),
            ],
        ),
    ]
