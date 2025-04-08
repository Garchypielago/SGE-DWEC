# -*- coding: utf-8 -*-
{
    'name': "Kleenex",

    'summary': """
        Módulo de ejemplo para el desarrollo de aplicaciones.
        Un paquete consta de pañuelos y se vende en packs de n paquetes""",

    'description': """
        Módulo instalado para probar
    """,

    'author': "Profesor SGE",
    'website': "http://www.iesclaradelrey.es",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/15.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Pruebas',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base'],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        'views/views.xml',
        'views/templates.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
}
