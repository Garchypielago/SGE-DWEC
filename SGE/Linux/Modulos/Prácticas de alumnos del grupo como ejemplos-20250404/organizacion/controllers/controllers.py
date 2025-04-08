# -*- coding: utf-8 -*-
# from odoo import http


# class Organizacion(http.Controller):
#     @http.route('/organizacion/organizacion', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/organizacion/organizacion/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('organizacion.listing', {
#             'root': '/organizacion/organizacion',
#             'objects': http.request.env['organizacion.organizacion'].search([]),
#         })

#     @http.route('/organizacion/organizacion/objects/<model("organizacion.organizacion"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('organizacion.object', {
#             'object': obj
#         })
