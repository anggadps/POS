const db = require('../config/database');
const SelectQuery = ({ table = {}, fields = {}, where = {} }) => {
    let run = new Promise((resolve, reject) => {
        const query = "SELECT " + fieldsMap(fields) + " FROM " + table + " " + fieldsWhereMap(where);
        console.log(where);
        db.query(query, function (err, result) {
            if (err) throw err;
            resolve(result);
        });
    });
    return run.then((val) => {
        return val;
    }).catch((err) => {
        console.log(err);
    });
}

const InsertQuery = ({ table = {}, data = {}, where = {} }) => {
    let run = new Promise((resolve, reject) => {
        const query = "INSERT INTO " + table + " SET " + fieldsValueMap(data) + fieldsWhereMap(where);
        db.query(query, function (err, result) {
            if (err) throw err;
            resolve(result);
        });
    })
    return run.then((val) => {
        return val;
    }).catch((err) => {
        console.log(err);
    })
}

const UpdateQuery = ({ table = {}, data = {}, where = {} }) => {
    let run = new Promise((resolve, reject) => {
        const query = "UPDATE " + table + " SET " + fieldsValueMap(data) + fieldsWhereMap(where);
        db.query(query, function (err, result) {
            if (err) throw err;
            resolve(result);
        });
    })
    return run.then((val) => {
        return val;
    }).catch((err) => {
        console.log(err);
    })
}

const DeleteQuery = ({ table = {}, where = {} }) => {
    let run = new Promise((resolve, reject) => {
        const query = "DELETE FROM " + table + fieldsWhereMap(where);
        db.query(query, function (err, result) {
            if (err) throw err;
            resolve(result);
        });
    })
    return run.then((val) => {
        return val;
    }).catch((err) => {
        console.log(err);
    })
}

const fieldsMap = (fields) => {
    let result = "";
    for (let i = 0; i < fields.length; i++) result += fields[i] + " " + (i < (fields.length - 1) ? "," : "");
    if (result == "") return "*";
    return result;
}

const fieldsWhereMap = (array) => {
    let no = 1, result = '';
    for (const arr in array) {
        result += arr + '=' + `"${array[arr]}" ` + (no == Object.keys(array).length ? "" : "AND" + " "); no++;
    }
    return (Object.keys(array).length > 0 ? " WHERE " : "") + result;
}

const fieldsValueMap = (array) => {
    let no = 1, result = '';
    for (const arr in array) {
        result += arr + '=' + `"${array[arr]}" ` + (no == Object.keys(array).length ? "" : "," + " "); no++;
    }
    return result;
}

module.exports = { SelectQuery, InsertQuery, UpdateQuery, DeleteQuery };