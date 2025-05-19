# -*- coding: utf-8 -*-
{
    'name': "AGS_store_map_sector",

    'version': '1.10',
    'category': 'Tools',
    'summary': 'Permite sectorizar visualmente una tienda',
    'depends': ['base'],
    'data': [
        'security/ir.model.access.csv',
        'views/store_map_views.xml',
        'views/store_zone_views.xml',
        'views/store_product_views.xml',
        'data/demo_store_data.xml',
        'data/demo_zone_data.xml',
        'data/demo_product_data.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'ags_store_map_sector/static/img/sample.png',
        ],
    },
    'installable': True,
    'application': True,
}