from django.contrib import admin
from manager.models import Content,Slide,Logos,location

class locationStyle(admin.ModelAdmin):
	list_display = ('title','lat','log','order')
	list_editable = ('lat','log','order')

class contentStyle(admin.ModelAdmin):
	filter_horizontal = ('map_locations',"sponsors",)
	

admin.site.register(Content,contentStyle)
admin.site.register(Slide)
admin.site.register(Logos)
admin.site.register(location,locationStyle)
