const DbQuery = require('../helpers/DbQuery');

class Produk {
    static async index(req, res, next) {
        const produk = await DbQuery.SelectQuery({ table: "produk" });
        const produk_types = await DbQuery.SelectQuery({ table: "produk_types" });
        const supplier = await DbQuery.SelectQuery({ table: "supplier" });
        res.render('backend', {
            title: 'Produk',
            selected: 'produk',
            layout: 'produk',
            produk: produk,
            produk_types: produk_types,
            supplier: supplier
        });
    }

    static async add(req, res, next) {
        const result = {};
        const data = req.body;
        if (data.id == "") {
            const insert = await DbQuery.InsertQuery({ table: "produk", data: data });
            if (insert.insertId > 0) {
                result.status = "success";
                result.data = {
                    id: insert.insertId
                }
            } else {
                result.status = "error";
                result.data = {};
            }
        } else {
            const update = await DbQuery.UpdateQuery({ table: "produk", data: data, where: { id } });
            if (update.affectedRows > 0) {
                result.status = "success";
                result.message = "Update Success";
                result.data = {};
            } else {
                result.status = "error";
                result.data = {};
            }
        }
        res.json(result);
    }

    static async getAll(req, res, next) {
        const result = {};
        const { draw, start, length, search } = req.query;
        const limit = (length != -1) ? start.concat(',', length) : '';
        const getAll = await DbQuery.SelectQuery({ table: "produk", limit: limit });
        const countAll = await DbQuery.SelectQuery({ table: "produk", fields: ["COUNT(id) as total"] });
        result.data = getAll;
        result.draw = draw;
        result.recordsTotal = getAll.length;
        result.recordsFiltered = countAll[0].total;
        res.json(result);
    }

    static async getById(req, res, next) {
        const { id } = req.params;
        const getData = await DbQuery.SelectQuery({ table: "produk", where: { id: id } });
        res.json({
            status: 'success',
            data: getData
        })
    }
}

module.exports = Produk;