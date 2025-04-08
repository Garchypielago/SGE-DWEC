# -*- coding: utf-8 -*-

# from odoo import models, fields, api


# class organizacion(models.Model):
#     _name = 'organizacion.organizacion'
#     _description = 'organizacion.organizacion'

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

class diciplina(models.Model):
    _name = 'organizacion.disciplina'
    _description = 'organizacion.disciplina'

    name = fields.Char('Nombre', required=True)
    equipos = fields.One2many('organizacion.equipo', 'disciplina', string='Equipos')

class categoria(models.Model):
    _name = 'organizacion.categoria'
    _description = 'organizacion.categoria'

    name = fields.Char('Nombre', required=True)
    equipos = fields.One2many('organizacion.equipo', 'categoria', string='Equipos')

class estadio(models.Model):
    _name = 'organizacion.estadio'
    _description = 'Estadios a cargo de la Organizacion'

    name = fields.Char('Nombre', required=True)
    direccion = fields.Char('Direccion', required=True)
    capacity = fields.Integer(string='Capacidad', required=True)
    isActive = fields.Boolean(string='Esta Activo', required=False)
    dateOfBuild = fields.Date(string='Fecha de Construccion', required=True)

class equipo(models.Model):
    _name = 'organizacion.equipo'
    _description = 'Equipos a cargo de la Organizacion'

    name = fields.Char('Nombre', required=True)
    capacity = fields.Integer(string='Cantidad miembros', required=True)
    budget = fields.Float('Presupuesto', (5, 2), default=0.0, hrlp='Cantidad en euros de presupuesto')
    equipacion = fields.Selection(string='Equipacion', selection=[('r', 'Rojo'),('w', 'Blanco'),('b', 'Black'), ('y', 'Yellow')], default='r')
    disciplina = fields.Many2one('organizacion.disciplina', string='Disciplina')
    categoria = fields.Many2one('organizacion.categoria', string='Categoria')