from django.urls import path

from . import api

urlpatterns = [
    path('',api.properties_list,name='api_properties_list'),
    path('create/',api.create_property, name='create_property'),
    path('<uuid:pk>/',api.properties_detail, name='properties_detail'),
    path('<uuid:pk>/book/',api.book_property, name='book_property'),
    path('<uuid:pk>/reservations/',api.property_reservations, name='property_reservations'),
]   