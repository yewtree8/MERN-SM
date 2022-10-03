import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { mongo } from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();



app.use(bodyParser.json({limit: '30mb'}, {extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb'}, {extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = 'no';

const PORT = process.env.port || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    app.listen(PORT, () => console.log(`server running on port ${PORT}`))
}).catch((err) => console.log(err.message));
