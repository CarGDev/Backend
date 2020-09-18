const db = {
    'user': [
        { id: '1', name: 'Steven' }
    ],
};

async function list(tabla) {
    return db[tabla] || [];
}

async function get(table, id) {
    let col = await list(table);
    return col.filter(item => item.id === id)[0] || null;
}

async function upsert(table, data) {
    if (!db[table]) {
        db[table] = [];
    }

    db[table].push(data);

}
module.exports = {
    get,
    upsert
};