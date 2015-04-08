import os
import sys

sys.path.append('/srv/www/rallyforthecure.ca/application/rally_for_the_cure')

os.environ['PYTHON_EGG_CACHE'] = '/srv/www/rallyforthecure.ca/.python-egg'
os.environ['DJANGO_SETTINGS_MODULE'] = 'rally_for_the_cure.settings'

import django.core.handlers.wsgi
application = django.core.handlers.wsgi.WSGIHandler()
