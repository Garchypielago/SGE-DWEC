# -*- coding: utf-8 -*-

# from odoo import models, fields, api


# class clubdeportivo(models.Model):
#     _name = 'clubdeportivo.clubdeportivo'
#     _description = 'clubdeportivo.clubdeportivo'

#     name = fields.Char()
#     value = fields.Integer()
#     value2 = fields.Float(compute="_value_pc", store=True)
#     description = fields.Text()
#
#     @api.depends('value')
#     def _value_pc(self):
#         for record in self:
#             record.value2 = float(record.value) / 100

from odoo import models, fields, api, exceptions
from dateutil.relativedelta import *
from datetime import date

class alumno(models.Model):
    _name = 'clubdeportivo.alumno'
    _description = 'Alumno del club deportivo'


    nombre = fields.Char('Nombre', required=True)
    apellidos = fields.Char('Apellidos', required=True)
    fechaAlta = fields.Date(string='Fecha de alta',  required=True)
    aniosClub = fields.Integer('Años en club', compute='_get_anios')
    

    #Relacion entre tablas
    grupo_ids = fields.Many2many('clubdeportivo.grupo', string='Grupos')

    @api.depends('fechaAlta')
    def _get_anios(self):
        for alumno in self:
            hoy = date.today()
            alumno.aniosClub = relativedelta(hoy, alumno.fechaAlta).years
    
    name = fields.Char(compute='_get_name')
    @api.depends('name')
    def _get_name(self):
        for alumno in self:
            alumno.name = alumno.nombre + ' ' + alumno.apellidos
    
    @api.constrains('fechaAlta')
    def _check_fechaPasada(self):
        for alumno in self:
            if alumno.fechaAlta > date.today():
                raise exceptions.ValidationError("La fecha no puede ser posterior al dia de hoy.")

class profesor(models.Model):
    _name = 'clubdeportivo.profesor'
    _description = 'Profesor del club deportivo'

    nombre = fields.Char('Nombre', required=True)
    apellidos = fields.Char('Apellidos', required=True)
    fechaAlta = fields.Date(string='Fecha de alta', required=True)
    aniosClub = fields.Integer('Años en club', compute='_get_anios')

    #Relaciones entre tablas
    grupo_ids = fields.One2many('clubdeportivo.grupo', 'profesor_id', string='Grupos')

    @api.depends('fechaAlta')
    def _get_anios(self):
        for profesor in self:
            hoy = date.today()
            profesor.aniosClub = relativedelta(hoy, profesor.fechaAlta).years

    name = fields.Char(compute='_get_name')
    @api.depends('name')
    def _get_name(self):
        for profesor in self:
            profesor.name = profesor.nombre + ' ' + profesor.apellidos

    pagoMensual = fields.Float(string='Pago mensual', compute='_get_pagoTotal')
    @api.depends('pagoMensual')
    def _get_pagoTotal(self):
        for profesor in self:
            for grupo in profesor.grupo_ids:
                profesor.pagoMensual += grupo.pagoTotal

    @api.constrains('fechaAlta')
    def _check_fechaPasada(self):
        for profesor in self:
            if profesor.fechaAlta > date.today():
                raise exceptions.ValidationError("La fecha no puede ser posterior al dia de hoy.")
    
class grupo(models.Model):
    _name = 'clubdeportivo.grupo'
    _description = 'Grupo del club'

    deporte = fields.Selection(string='Deporte', selection=[('f', 'Futbol'), ('b', 'Baloncesto'), ('h', 'Hockey')], required=True)
    nHoras = fields.Integer(string='Horas mensuales', required=True)
    precioHora = fields.Float('Pago hora', (2,2), default=10.50)
    cerrado = fields.Boolean(string='Grupo cerrado', default=False)

    #Relaciones entre tablas
    profesor_id = fields.Many2one('clubdeportivo.profesor', string='Profesor', required=True)
    alumno_ids = fields.Many2many('clubdeportivo.alumno', string='Alumnos')



    name = fields.Char(compute='_get_name')
    @api.depends('name')
    def _get_name(self):
        for grupo in self:
            grupo.name = 'Grupo' + grupo.deporte + '(' + grupo.profesor_id.nombre + grupo.profesor_id.apellidos + ')'

    pagoTotal = fields.Float(string='Pago mensual', compute='_get_pagoTotal')
    @api.depends('pagoTotal')
    def _get_pagoTotal(self):
        for grupo in self:
            grupo.pagoTotal = grupo.precioHora * grupo.nHoras