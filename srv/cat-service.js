const { SELECT } = require("@sap/cds/lib/ql/cds-ql");

module.exports = srv => {
    const { Books } = srv.entities;

    srv.before('CREATE', 'Books', async (req) => {
        const { name, price } = req.data;
        if (price < 0) {
            req.error(400, 'Price cannot be negative');
        }
        // Extend logic for extensibility here if needed
    });

    srv.on('READ', 'Books', async(req) => {
        console.log("inside the ")
        const data = await SELECT.from(Books);
        console.log(JSON.parse(data).title);
    })
};
