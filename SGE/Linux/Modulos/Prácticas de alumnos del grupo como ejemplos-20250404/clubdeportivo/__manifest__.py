# -*- coding: utf-8 -*-
{
    'name': "Club Deportivo",

    'summary': """
        Administrador de los diferentes grupos de un club deportivo.""",

    'description': """
        Administrador de los diferentes grupos con sus alumnos y profesor de un club deportivo.
    """,

    'author': "Daniel Gomez Torquemada",
    'website': "http://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/15.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base'],

    # always loaded
    'data': [
        'security/clubdeportivo_security.xml',
        'security/ir.model.access.csv',
        'views/views.xml',
        'views/templates.xml',
        'data/clubdeportivo_data.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
    #Indicamos que es una aplicacion
    'application': True,
}
