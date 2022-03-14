import json
from django.http import JsonResponse
from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from rest_framework import viewsets

from .models import Product
from .serializers import ProductSerializer
# Create your views here.

class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
