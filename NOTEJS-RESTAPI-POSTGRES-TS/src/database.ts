import { Pool } from 'pg'

export const pool =new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'root',
    database: 'typescriptdatabase',
    port: 5432
})