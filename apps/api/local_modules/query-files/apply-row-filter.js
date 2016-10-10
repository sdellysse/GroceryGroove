const InvalidRowFilterType = require("./invalid-row-filter-error");

const rowFilters = {
    column: function (rows) {
        return rows.map(row => row[Object.keys(row)[0]]);
    },
    one: function (rows) {
        const row = rows[0];
        if (row) {
            return row[Object.keys(row)[0]];
        } else {
            return void(0);
        }
    },
    row: function (rows) {
        return rows[0];
    },
};
module.exports = function applyRowFilter (type, rows) {
    if (type) {
        if (rowFilters[type]) {
            return rowFilters[type](rows);
        } else {
            throw new InvalidRowFilterType(type);
        }
    } else {
        return rows;
    }
};
