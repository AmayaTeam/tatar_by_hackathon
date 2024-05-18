# Generated by Django 5.0.6 on 2024-05-18 08:28

import ckeditor_uploader.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="course",
            name="image",
            field=models.ImageField(upload_to="images/courses/"),
        ),
        migrations.AlterField(
            model_name="module",
            name="content",
            field=ckeditor_uploader.fields.RichTextUploadingField(
                verbose_name=models.Model
            ),
        ),
        migrations.AlterField(
            model_name="task",
            name="content",
            field=ckeditor_uploader.fields.RichTextUploadingField(
                verbose_name=models.Model
            ),
        ),
    ]
