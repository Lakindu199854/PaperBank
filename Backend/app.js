const express = require('express');
const { sequelize } = require('./models');
const cors = require('cors');


require('dotenv').config();

const universityRoutes = require('./routes/universityRoutes');
const courseRoutes = require('./routes/courseRoutes');
const paperRoutes = require('./routes/paperRoutes');

//creates the app.
const app = express();
//allows Express to read JSON request bodies (e.g., from POST requests).
app.use(express.json());


app.use(cors());

//These lines register the route files under a URL prefix:
//Requests like GET /api/universities will go to the universityRoutes router.
app.use('/api/universities', universityRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/papers', paperRoutes);

//When someone visits /uploads/something, go look for something inside the local uploads/ folder and send it back
app.use('/uploads', express.static('uploads'));


const PORT = process.env.PORT || 5000;

sequelize.sync({ alter: true }) // use { force: true } to reset tables
  .then(() => {
    console.log('Database synced');
    //app.listen(PORT, ...) starts your Express server on the port from .env or defaults to 5000.
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch(err => console.error('Failed to sync DB:', err));

/** 
Final Outcome:
    Express server running at http://localhost:5000 
    Sequelize connects to MySQL and syncs tables
    API routes are live at:
        GET /api/universities
        POST /api/courses   
        GET /api/papers, etc.
*/
