from odoo import models, fields

class StoreMapZone(models.Model):
    _name = 'store.map.zone'
    _description = 'Zona de tienda'
    _parent_name = 'parent_id'
    _parent_store = True

    name = fields.Char('Nombre', required=True)
    zone_type = fields.Selection([
        ('seccion', 'Sección Principal'),
        ('campania', 'Campaña'),
        ('categoria', 'Categoría de producto'),
    ], string='Tipo de zona', required=True)

    parent_id = fields.Many2one('store.map.zone', string='Zona Padre')
    child_ids = fields.One2many('store.map.zone', 'parent_id', string='Subzonas')
    parent_path = fields.Char(index=True)

    map_id = fields.Many2one('store.map', string='Plano asociado')
