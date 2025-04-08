# -*- coding: utf-8 -*-

# from odoo import models, fields, api


# class sge_scooters(models.Model):
#     _name = 'sge_scooters.sge_scooters'
#     _description = 'sge_scooters.sge_scooters'

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

class ebike(models.Model):
    _name = 'sge_scooters.ebike'
    _description = 'Bicicletas eléctricas'

    name = fields.Char(string='Modelo')
    peso = fields.Integer('Peso')
    tipo = fields.Selection(string='Tipo', selection=[('ci','Ciudad'),('ca','Carretera'),('pl','Plegable')], default='ci')
    precio = fields.Float('Precio por horas', (5,2))
    motor = fields.Boolean(string='Motor trasero', default=False)
    fabricante_id = fields.Many2one('sge_scooters.fabricante', string = 'Fabricante de la bicicleta')


class scooter(models.Model):
    _name = 'sge_scooters.scooter'
    _description = 'Scooter'

    name = fields.Char('Modelo del scooter', required=True) #Campo Modelo que si no se llama name no figura bien
    peso = fields.Integer('Peso del scooter', default = 0)
    precio_hora = fields.Float('Precio por hora', (4, 2), default = 0)
    panel = fields.Boolean('Panel de visualización de velocidad y batería', default=False)
    potencia = fields.Selection(string='Potencia', selection=[('baja','Baja potencia (<250W)'),('media','Media potencia (250-500W)'),('alta','Alta potencia (>500W)')], default='baja')
    fabricante_id = fields.Many2one('sge_scooters.fabricante', string = 'Fabricante del patinete')


class fabricante(models.Model):
    _name = 'sge_scooters.fabricante'
    _description = 'Fabricante de vehiculos personales'

    name = fields.Char('Fabricante')
    cif = fields.Char('CIF')
    nbikes = fields.Integer('Nº bicicletas')
    nscooters = fields.Integer('Nº patinetes')
    pais = fields.Selection(string='Pais', selection=[('ES','España'),('UK','Gran Bretaña'),('PT','Portugal')], default='ES')

    bikes_ids = fields.One2many('sge_scooters.ebike','fabricante_id', string = 'Modelos de bicicletas')
    scooters_ids = fields.One2many('sge_scooters.scooter','fabricante_id', string = 'Modelos de patinetes')
