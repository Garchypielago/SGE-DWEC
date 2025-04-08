# -*- coding: utf-8 -*-

# from odoo import models, fields, api


# class cloudgames(models.Model):
#     _name = 'cloudgames.cloudgames'
#     _description = 'cloudgames.cloudgames'

#     name = fields.Char()
#     value = fields.Integer()
#     value2 = fields.Float(compute="_value_pc", store=True)
#     description = fields.Text()
#
#     @api.depends('value')
#     def _value_pc(self):
#         for record in self:
#             record.value2 = float(record.value) / 100

from odoo import models, fields, api


class videogame(models.Model):
    _name = 'cloudgames.videogame'
    _description = 'Videojuego'

    name = fields.Char(string='Nombre', required=True)
    id = fields.Char(string='Identificador', size=8)
    precio = fields.Float('Precio', (5,2))
    tematica = fields.Selection(string='Tematica', selection=[('t','Terror'),('r','Rol'),('a','Acción')], default='a')
    multijugador = fields.Boolean(string='Multijugador', default=True)


