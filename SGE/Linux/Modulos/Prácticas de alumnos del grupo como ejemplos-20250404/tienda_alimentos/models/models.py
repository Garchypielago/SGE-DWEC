# -*- coding: utf-8 -*-

# from odoo import models, fields, api


# class tienda_alimentos(models.Model):
#     _name = 'tienda_alimentos.tienda_alimentos'
#     _description = 'tienda_alimentos.tienda_alimentos'

#     name = fields.Char()
#     value = fields.Integer()
#     value2 = fields.Float(compute="_value_pc", store=True)
#     description = fields.Text()
#
#     @api.depends('value')
#     def _value_pc(self):
#         for record in self:
#             record.value2 = float(record.value) / 100
from odoo import models, fields

class Tienda(models.Model):
    _name = 'tienda_alimentos.tienda'
    _description = 'Tienda de alimentación'

    name = fields.Char(string='Nombre', required=True)
    dir = fields.Char(string='Dirección')
    tel = fields.Char(string='Teléfono')
    email = fields.Char(string='Email')
    abierta = fields.Boolean(string='Abierta', default=True)
    inventario_ids = fields.One2many('tienda_alimentos.inventario', 'tienda_id', string='Inventario')
    ventas_ids = fields.One2many('tienda_alimentos.venta', 'tienda_id', string='Ventas')
    comprador_ids = fields.One2many('tienda_alimentos.comprador', 'tienda_id', string='Comprador')

class InventarioTienda(models.Model):
    _name = 'tienda_alimentos.inventario'
    _description = 'Inventario de los alimentos de la tienda'

    name = fields.Char(string='Nombre', required=True)
    tipo = fields.Selection(string='Tipo', selection=[('f','Fruta'),('c','Carne'),('p','Pescado'),('o','Otros')], default='c')
    cantidad = fields.Integer(string='Cantidad')
    tienda_id = fields.Many2one('tienda_alimentos.tienda', string='Tienda')

class VentaTienda(models.Model):
    _name = 'tienda_alimentos.venta'
    _description = 'Ventas de la tienda de alimentos'

    name = fields.Char(string='Name', required=True)
    total = fields.Float(string='Total')
    fecha = fields.Date(string='Fecha')
    tienda_id = fields.Many2one('tienda_alimentos.tienda', string='Tienda')
    comprador_id = fields.Many2one('tienda_alimentos.comprador', string='Comprador')

class CompradorTienda(models.Model):
    _name = 'tienda_alimentos.comprador'
    _description = 'Comprador de la tienda de alimentos'

    name = fields.Char(string='Name', required=True)
    email = fields.Char(string='Email')
    tel = fields.Char(string='Teléfono')
    tienda_id = fields.Many2one('tienda_alimentos.tienda', string='Tienda')