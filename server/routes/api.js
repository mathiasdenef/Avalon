// const express = require('express');
// const router = express.Router();

// /* GET api listing. */
// router.get('/', (req, res) => {
//     res.send('api works');
// });

// // Get all posts
// router.get('/customers', (req, res) => {
//     const sql = require('mssql/msnodesqlv8')

//     const pool = new sql.ConnectionPool({
//         database: 'Avalon',
//         server: '.',
//         driver: 'msnodesqlv8',
//         options: {
//             trustedConnection: true
//         }
//     })

//     pool.connect().then(() => {
//         //simple query
//         pool.request().query('select * from tbl_customers', (err, result) => {
//             res.json(result.recordset);
//         })
//     });
// });

// module.exports = router;