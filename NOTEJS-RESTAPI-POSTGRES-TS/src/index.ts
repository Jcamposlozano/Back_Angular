import express from 'express';
const app = express();

import indexRoutes from './routes/indexRoutes'

//middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); // para poder tener datos de un html



app.use(indexRoutes);

app.listen(3000, () => {
    console.log('server on port ', 3000)
})