// Importation des modules nécessaires 
import express, { Request, Response } from 'express'; // Framework Express et types pour les 
import * as dotenv from 'dotenv'; // Permet de charger les variables d’environnement 
import userRoutes from './routes/user.routes'; // Importe les routes utilisateurs 

 

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
