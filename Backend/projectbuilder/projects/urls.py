from rest_framework.routers import DefaultRouter
from projectbuilder.views import ProjectViewset

router = DefaultRouter()
router.register(r'', ProjectViewset, basename='projects')

urlpatterns = router.urls
