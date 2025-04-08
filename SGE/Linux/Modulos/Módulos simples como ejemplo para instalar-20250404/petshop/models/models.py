# -*- coding: utf-8 -*-

# from odoo import models, fields, api


# class petshop(models.Model):
#     _name = 'petshop.petshop'
#     _description = 'petshop.petshop'

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


class pets(models.Model):
    _name = 'petshop.pets'
    _description = 'Mascotas de la tienda'

    name = fields.Char('Nombre')
    edad = fields.Integer(string='Edad')
    peso = fields.Float('Peso', (3,1))
    raza = fields.Selection(string='Raza', selection=[('l','Labrador'),('r','Rotweiller'),('p','Pastor Alemán')], default='l')


class owner(models.Model):
    _name = 'petshop.owner'
    _description = 'Dueño de la mascota'

    name = fields.Char('Nombre')
    addr = fields.Char('Dirección', required=True, size=20)
