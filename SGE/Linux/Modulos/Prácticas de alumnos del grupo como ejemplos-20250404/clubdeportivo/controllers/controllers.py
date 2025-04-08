# -*- coding: utf-8 -*-
# from odoo import http


# class Clubdeportivo(http.Controller):
#     @http.route('/clubdeportivo/clubdeportivo', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/clubdeportivo/clubdeportivo/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('clubdeportivo.listing', {
#             'root': '/clubdeportivo/clubdeportivo',
#             'objects': http.request.env['clubdeportivo.clubdeportivo'].search([]),
#         })

#     @http.route('/clubdeportivo/clubdeportivo/objects/<model("clubdeportivo.clubdeportivo"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('clubdeportivo.object', {
#             'object': obj
#         })
