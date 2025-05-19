# -*- coding: utf-8 -*-
{
    'name': "Hospital General Clara Campoamor",

    'summary': """
        Hospital General con todas las especialidades""",

    'description': """
        Hospital General público
    """,

    'author': "Ana Celia Zurita Fernández",
    'website': "https://www.hospital_general_ana_zurita.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/16.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base'],

    # always loaded
    'data': [
        'security/azf_hospital_security.xml',
        'security/ir.model.access.csv',
        'views/views.xml',
        'views/templates.xml',
        'data/hospital_data.xml'
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
}
