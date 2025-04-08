# -*- coding: utf-8 -*-
# from odoo import http


# class Kleenex(http.Controller):
#     @http.route('/kleenex/kleenex', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/kleenex/kleenex/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('kleenex.listing', {
#             'root': '/kleenex/kleenex',
#             'objects': http.request.env['kleenex.kleenex'].search([]),
#         })

#     @http.route('/kleenex/kleenex/objects/<model("kleenex.kleenex"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('kleenex.object', {
#             'object': obj
#         })
