from django.shortcuts import render, HttpResponse

def home(request):
    return HttpResponse(200)

def application(request):
    return render(request, "home.html")