# -*- coding: utf-8 -*-
# from odoo import http


# class Petshop(http.Controller):
#     @http.route('/petshop/petshop', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/petshop/petshop/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('petshop.listing', {
#             'root': '/petshop/petshop',
#             'objects': http.request.env['petshop.petshop'].search([]),
#         })

#     @http.route('/petshop/petshop/objects/<model("petshop.petshop"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('petshop.object', {
#             'object': obj
#         })
