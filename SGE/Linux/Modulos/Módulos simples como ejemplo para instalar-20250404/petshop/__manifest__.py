# -*- coding: utf-8 -*-
{
    'name': "Tienda de animales",

    'summary': """
        Modulo para gestión de dueños y animales""",

    'description': """
        Ejemplo de desarrollo de módulos para la gestión de mascotas
    """,

    'author': "Profesor SGE",
    'website': "http://www.petshop.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/16.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
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
