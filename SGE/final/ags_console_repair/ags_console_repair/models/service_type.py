from odoo import models, fields

class ServiceType(models.Model):
    _name = 'console.repair.service.type'
    _description = 'Tipo de servicio'

    name = fields.Char(required=True)
    price = fields.Float(string='Precio')