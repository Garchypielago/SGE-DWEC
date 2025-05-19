# -*- coding: utf-8 -*-
{
    "name": "Console Repair Workshop (AGS)",
    "version": "17.0.1.0.0",
    "summary": "Gestión de un taller de reparación de consolas",
    "author": "AGS",
    "license": "LGPL-3",
    "website": "https://github.com/ags-example",
    "depends": [
        "base",
        "contacts",
        "mail",
    ],
    "data": [
        # — Seguridad (si sólo usas ir.model.access.csv, no necesitas groups)
        "security/ir.model.access.csv",

        # — Vistas y acciones (definen xml_id de acciones) —
        "views/console_views.xml",         # define action_console_view
        "views/service_type_views.xml",    # define action_service_type_view
        "views/repair_order_views.xml",    # define action_repair_order_view

        # — Menú (usa los xml_id definidos arriba) —
        "views/menus.xml",

        # — Datos demo y secuencia —
        "data/repair_order_sequence.xml",

        "data/demo_data.xml",
    ],
    "application": True,
    "installable": True,
}
