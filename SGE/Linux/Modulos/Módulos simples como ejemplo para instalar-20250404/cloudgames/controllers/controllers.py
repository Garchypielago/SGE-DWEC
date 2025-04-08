# -*- coding: utf-8 -*-
# from odoo import http


# class Cloudgames(http.Controller):
#     @http.route('/cloudgames/cloudgames', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/cloudgames/cloudgames/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('cloudgames.listing', {
#             'root': '/cloudgames/cloudgames',
#             'objects': http.request.env['cloudgames.cloudgames'].search([]),
#         })

#     @http.route('/cloudgames/cloudgames/objects/<model("cloudgames.cloudgames"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('cloudgames.object', {
#             'object': obj
#         })
