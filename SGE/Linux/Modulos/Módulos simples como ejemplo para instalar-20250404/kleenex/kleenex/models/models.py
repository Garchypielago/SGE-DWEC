# -*- coding: utf-8 -*-

from odoo import models, fields, api


class paquete(models.Model):
    _name = 'kleenex.paquete'
    _description = 'Paquete de kleenex sencillo'

    name = fields.Char('Identificador')
    num_pannuelos = fields.Integer(string='Nº pañuelos')
    color = fields.Selection(string='Color',selection=[('b','Blanco'),('a','amarillo'),('r','Rosa')], default='b')
    tamanno = fields.Selection(string='Tamaño',selection=[('s','Pequeño'),('l','Normal'),('xl','Grande')], default='l')
#     description = fields.Text()
#
#     @api.depends('value')
#     def _value_pc(self):
#         for record in self:
#             record.value2 = float(record.value) / 100


class pack(models.Model):
    _name = 'kleenex.pack'
    _description = 'Empaquetado de los paquetes'

    name = fields.Char('Identificador')
    num_paqs = fields.Integer(string='Nº paquetes')
    precio = fields.Float('Precio')


