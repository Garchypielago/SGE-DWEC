from odoo import models, fields, api
from dateutil.relativedelta import *
from datetime import datetime, timedelta
from datetime import date

class paciente(models.Model):
    _name = 'azf_hospital.paciente'
    _description = 'Paciente del hospital'

    name = fields.Char('Nombre completo', compute = '_get_full_name')
    nombre = fields.Char('Nombre', default = '', required = True)
    apellidos = fields.Char('Apellidos', default = '', required = True)
    cipa = fields.Char('CIPA', required = True, size = 10, help = 'Código de Identificación Personal Autonómico')
    fecha_nacimiento = fields.Date('Fecha de nacimiento', default = fields.Date.context_today)
    peso = fields.Float('Peso', (5, 2), default = 0)
    domicilio = fields.Char('Domicilio', required = False)
    edad = fields.Integer('Edad', compute='_get_edad') 
    perfil = fields.Image('Foto del perfil', help='Subir fotografía de perfil') 

    # Relaciones entre tablas
    medicos_ids = fields.Many2many('azf_hospital.medico', string='Médicos') 
    ingresos_ids = fields.One2many('azf_hospital.ingreso', 'paciente_id', string='Ingresos')

    # Funciones de los campos calculados
    @api.depends('nombre','apellidos')
    def _get_full_name(self):
        for paciente in self:
            paciente.name = paciente.nombre + ' ' + paciente.apellidos
    
    @api.depends('fecha_nacimiento')
    def _get_edad(self):
        for paciente in self:
            hoy = date.today()
            paciente.edad = relativedelta(hoy, paciente.fecha_nacimiento).years

    # Restricciones
    _sql_constraints=[('cipa_uniq', 'unique(cipa)', 'El CIPA ya está incluido')]

class medico(models.Model):
    _name = 'azf_hospital.medico'
    _description = 'Médico'

    name = fields.Char('Nombre completo', compute = '_get_full_name')
    nombre = fields.Char('Nombre', default = '', required = True)
    apellidos = fields.Char('Apellidos', default = '', required = True)
    colegiado = fields.Char('Nº de colegiado')
    cargo = fields.Selection(string='Cargo', selection=[('js','Jefe de sección'),('jp','Jefe de planta'),('ad','Adjunto'),('sa','Sanitario')], default='jp')     
    cirujano = fields.Boolean('Cirujano', default=False)
    comision = fields.Float(string='Comisión', help='Comisión total según el número de pacientes a su cargo', compute='_get_comisionTotal')
    perfil = fields.Image('Foto del perfil', help='Subir fotografía de perfil')       
    
    # Relaciones entre tablas
    especialidad_id = fields.Many2one('azf_hospital.especialidad', string='Especialidad')
    pacientes_ids = fields.Many2many('azf_hospital.paciente', string='Pacientes') 

    # Funciones de los campos calculados
    @api.depends('nombre','apellidos')
    def _get_full_name(self):
        for doctor in self:
            doctor.name = doctor.nombre + ' ' + doctor.apellidos    

    @api.depends('comision')
    def _get_comisionTotal(self):
        for doctor in self:
            for paciente in doctor.pacientes_ids:
                doctor.comision += 53.21

    # Restricciones
    _sql_constraints=[('colegiado_uniq', 'unique(colegiado)', 'El número de colegiado ya está incluido')]

class especialidad(models.Model):
    _name = 'azf_hospital.especialidad'
    _description = 'Especialidad médica'
    _rec_name = 'nombre'

    nombre = fields.Char('Especialidad', required=True)
    planta = fields.Char('Nº de planta')
    tipo = fields.Selection(string='Tipo', selection=[('me','Médica'),('qu','Quirúrgica'),('mq','Médico-quirúrgica'),('la','De laboratorio')], default='me')     
    descripcion = fields.Text('Descripción')     

    # Relaciones entre tablas
    medicos_ids = fields.One2many('azf_hospital.medico', 'especialidad_id', string='Médicos') 

class ingreso(models.Model):
    _name = 'azf_hospital.ingreso'
    _description = 'Ingreso hospitalario'
    _order = 'fecha_ingreso'

    name = fields.Char(compute='_get_name')
    fecha_ingreso = fields.Date('Fecha de ingreso', default = fields.Date.context_today)
    fecha_alta = fields.Date('Fecha de alta')
    planta = fields.Char('Nº de planta')
    cama = fields.Char('Nº de cama')
    cipa = fields.Char('CIPA', related='paciente_id.cipa', readonly=True)
    
    # Relaciones entre tablas
    paciente_id = fields.Many2one('azf_hospital.paciente', string='Paciente') 
    
    # Funciones de los campos calculados
    @api.depends('name')
    def _get_name(self):
        for ingreso in self:
            ingreso.name = 'Ingreso ' + str(ingreso.fecha_ingreso)


