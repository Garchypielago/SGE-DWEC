from odoo import models, fields, api, _

class Console(models.Model):
    _name = 'console.repair.console'
    _description = 'Consola'
    _rec_name = 'display_name'

    name = fields.Char(compute='_compute_display_name', store=True)
    brand = fields.Char(required=True)
    model = fields.Char(required=True)
    serial_number = fields.Char()
    owner_id = fields.Many2one('res.partner', string='Cliente', required=True)
    warranty = fields.Boolean(string='En garantía')
    purchase_date = fields.Date(string='Fecha de compra')

    repair_order_ids = fields.One2many('console.repair.order', 'console_id', string='Órdenes de reparación')
    display_name = fields.Char(compute='_compute_display_name', store=True)

    _sql_constraints = [
        ('serial_unique', 'unique(serial_number)', 'El número de serie debe ser único.')
    ]

    # @api.depends('brand', 'model', 'serial_number')
    # def _compute_display_name(self):
    #     for rec in self:
    #         parts = [rec.brand, rec.model, rec.serial_number]
    #         rec.display_name = ' '.join(filter(None, parts))
    #         rec.name = rec.display_name