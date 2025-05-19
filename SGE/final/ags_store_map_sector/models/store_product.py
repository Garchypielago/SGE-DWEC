from odoo import models, fields

class StoreProduct(models.Model):
    _name = 'store.product'
    _description = 'Producto de Tienda Sectorizada'

    name = fields.Char('Nombre', required=True)
    price = fields.Float('Precio')
    description = fields.Text('Descripción')

    zone_seccion_id = fields.Many2one(
        'store.map.zone', string='Sección Principal',
        domain="[('zone_type','=','seccion')]"
    )
    zone_campania_ids = fields.Many2many(
        'store.map.zone', 'store_product_campania_rel',
        string='Campañas',
        domain="[('zone_type','=','campania')]"
    )
    zone_categoria_ids = fields.Many2many(
        'store.map.zone', 'store_product_categoria_rel',
        string='Categorías',
        domain="[('zone_type','=','categoria')]"
    )
