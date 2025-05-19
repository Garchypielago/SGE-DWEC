from odoo import models, fields

class StoreMap(models.Model):
    _name = 'store.map'
    _description = 'Plano de Tienda'

    name = fields.Char('Nombre del plano', required=True)
    image = fields.Binary('Plano (imagen)', attachment=True)
    sector_ids = fields.One2many('store.map.sector', 'map_id', string='Sectores')


class StoreMapSector(models.Model):
    _name = 'store.map.sector'
    _description = 'Sector de Tienda'

    name = fields.Char('Nombre del sector', required=True)
    x = fields.Integer('Coordenada X')
    y = fields.Integer('Coordenada Y')
    width = fields.Integer('Ancho')
    height = fields.Integer('Alto')
    map_id = fields.Many2one('store.map', string='Plano asociado', required=True)

