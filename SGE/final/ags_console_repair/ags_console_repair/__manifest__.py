{
    "name": "Console Repair Workshop (AGS)",
    "version": "17.0.1.0.0",
    "summary": "Gestión de un taller de reparación de consolas",
    "author": "AGS",
    "license": "LGPL-3",
    "website": "https://github.com/ags-example",
    "depends": ["base", "contacts", "mail"],
    "data": [
        "security/ir.model.access.csv",
        "data/repair_order_sequence.xml",
        "views/menus.xml",
        "views/console_views.xml",
        "views/service_type_views.xml",
        "views/repair_order_views.xml"
    ],
    "application": true,
    "installable": true
}