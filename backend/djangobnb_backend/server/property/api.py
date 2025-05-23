from django.http import JsonResponse

from rest_framework.decorators import api_view,authentication_classes,permission_classes

from .models import Property, Reservation
from .serializers import PropertiesListSerializer, PropertiesDetailSerializer, ReservationListSerializer
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



@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def property_reservations(request,pk):
    property = Property.objects.get(pk=pk)
    reservations = property.reservations.all()
    serizaliers = ReservationListSerializer(reservations,many=True)

    return JsonResponse(serizaliers.data,safe=False)

@api_view(['POST'])
def book_property(request,pk):
    try:
        start_date = request.data.get('start_date','')
        end_date = request.data.get('end_date','')
        number_of_nights = request.data.get('number_of_nights','')
        total_price = request.data.get('total_price','')
        guests = request.data.get('guests','')

        property = Property.objects.get(pk=pk)
        Reservation.objects.create(
            property= property,
            start_date=start_date,
            end_date =end_date,
            number_of_nights=number_of_nights,
            total_price=total_price,
            guests=guests,
            created_by = request.user
        )
        return JsonResponse({
            "success":True
        })
        
    except Exception as e:
        print('Error',e)
        return JsonResponse({
            'success':False
        })