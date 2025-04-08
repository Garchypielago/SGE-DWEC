# -*- coding: utf-8 -*-
# from odoo import http


# class TiendaAlimentos(http.Controller):
#     @http.route('/tienda_alimentos/tienda_alimentos', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/tienda_alimentos/tienda_alimentos/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('tienda_alimentos.listing', {
#             'root': '/tienda_alimentos/tienda_alimentos',
#             'objects': http.request.env['tienda_alimentos.tienda_alimentos'].search([]),
#         })

#     @http.route('/tienda_alimentos/tienda_alimentos/objects/<model("tienda_alimentos.tienda_alimentos"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('tienda_alimentos.object', {
#             'object': obj
#         })
