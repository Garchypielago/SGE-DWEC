# -*- coding: utf-8 -*-
# from odoo import http


# class AgsStoreMapSector(http.Controller):
#     @http.route('/ags_store_map_sector/ags_store_map_sector', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/ags_store_map_sector/ags_store_map_sector/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('ags_store_map_sector.listing', {
#             'root': '/ags_store_map_sector/ags_store_map_sector',
#             'objects': http.request.env['ags_store_map_sector.ags_store_map_sector'].search([]),
#         })

#     @http.route('/ags_store_map_sector/ags_store_map_sector/objects/<model("ags_store_map_sector.ags_store_map_sector"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('ags_store_map_sector.object', {
#             'object': obj
#         })
