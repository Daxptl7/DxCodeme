from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SkillViewSet, ProjectViewSet, ExperienceViewSet, ContactMessageViewSet

router = DefaultRouter()
router.register(r'skills', SkillViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'experience', ExperienceViewSet)
router.register(r'contact', ContactMessageViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
