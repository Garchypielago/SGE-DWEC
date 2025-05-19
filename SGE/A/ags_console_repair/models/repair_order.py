from odoo import models, fields, api, _
from odoo.exceptions import UserError

class RepairOrder(models.Model):
    _name = 'console.repair.order'
    _description = 'Orden de reparación de consola'
    _inherit = ['mail.thread', 'mail.activity.mixin']
    _order = 'name desc'

    name = fields.Char(string='Referencia', required=True, copy=False, readonly=True, default=lambda self: _('New'))
    console_id = fields.Many2one('console.repair.console', string='Consola', required=True)
    customer_id = fields.Many2one(related='console_id.owner_id', store=True, readonly=True)
    service_type_id = fields.Many2one('console.repair.service.type', string='Tipo de servicio', required=True)
    description = fields.Text('Descripción del problema')
    date_received = fields.Datetime(string='Recibida', default=fields.Datetime.now)
    date_promised = fields.Datetime(string='Fecha prometida')
    date_done = fields.Datetime(string='Fecha reparación')
    assigned_user_id = fields.Many2one('res.users', string='Técnico asignado')
    state = fields.Selection([
        ('draft', 'Borrador'),
        ('diagnosed', 'Diagnosticada'),
        ('waiting_parts', 'Esperando piezas'),
        ('repaired', 'Reparada'),
        ('delivered', 'Entregada'),
        ('cancel', 'Cancelada'),
    ], default='draft', tracking=True)
    labor_cost = fields.Float(string='Mano de obra')
    parts_cost = fields.Float(string='Piezas')
    total_cost = fields.Float(string='Costo total', compute='_compute_total_cost', store=True)

    @api.depends('labor_cost', 'parts_cost')
    def _compute_total_cost(self):
        for rec in self:
            rec.total_cost = rec.labor_cost + rec.parts_cost

    @api.model
    def create(self, vals):
        if vals.get('name', _('New')) == _('New'):
            vals['name'] = self.env['ir.sequence'].next_by_code('console.repair.order') or _('New')
        return super().create(vals)

    # Acciones de flujo
    def action_diagnose(self):
        for rec in self:
            if rec.state != 'draft':
                raise UserError(_('La orden debe estar en borrador.'))
            rec.state = 'diagnosed'

    def action_waiting_parts(self):
        for rec in self:
            if rec.state != 'diagnosed':
                raise UserError(_('La orden debe estar diagnosticada.'))
            rec.state = 'waiting_parts'

    def action_repaired(self):
        for rec in self:
            if rec.state not in ['diagnosed', 'waiting_parts']:
                raise UserError(_('La orden no puede marcarse como reparada.'))
            rec.state = 'repaired'
            rec.date_done = fields.Datetime.now()

    def action_delivered(self):
        for rec in self:
            if rec.state != 'repaired':
                raise UserError(_('La orden debe estar reparada.'))
            rec.state = 'delivered'

    def action_cancel(self):
        for rec in self:
            rec.state = 'cancel'