import mysql from 'mysql2/promise';

const DATABASE_URL='mysql://root:david@localhost:3306/tienda'

const connection = await mysql.createConnection(DATABASE_URL)

export default connection
