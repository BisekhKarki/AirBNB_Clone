from django.http import JsonResponse

from rest_framework.decorators import api_view,authentication_classes,permission_classes

from .models import Property
from .serializers import PropertiesListSerializer, PropertiesDetailSerializer
from .forms import PropertyForm



@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def properties_list(request):
    properties = Property.objects.all()
    serializers = PropertiesListSerializer(properties,many=True)

    return JsonResponse({
        'data': serializers.data
    })


@api_view(['POST','FILES'])
def create_property(request):
    form = PropertyForm(request.data, request.FILES)
    if form.is_valid():
        property = form.save(commit=False)
        property.landlord = request.user
        property.save()

        return JsonResponse({
            'success':True
        })
    else:
        print('error',form.errors, form.non_field_errors)
        return JsonResponse({
            'erros':form.errors.as_json()
        }, status=400)
    
@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def properties_detail(request,pk):
    property = Property.objects.get(pk=pk)
    serizaliers = PropertiesDetailSerializer(property)

    return JsonResponse(serizaliers.data)