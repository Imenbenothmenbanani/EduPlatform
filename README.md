# EduPlatform

Application web de gestion de cours en ligne, développée avec le stack MERN (MongoDB, Express, React, Node.js).

## Fonctionnalités

### Frontend (React / Vite)
- Authentification JWT (inscription, login, logout)
- Profil utilisateur (affichage, édition)
- Liste des cours avec pagination et recherche par titre
- Page de détails d’un cours
- Ajout et consultation de reviews
- Page “Mes Reviews” pour l’utilisateur
- Page 404 pour les routes inexistantes

### Backend (Express / Node.js)
- API REST sécurisée avec JWT
- Gestion des utilisateurs, profils, cours et reviews
- Base de données MongoDB (Mongoose)
- Middleware pour la protection des routes (`authMiddleware`)

---

## Installation

### Prérequis
- Node.js >= 18
- MongoDB installé ou compte MongoDB Atlas

### Backend

1. Aller dans le dossier backend :
```bash
cd backend
Installer les dépendances :

npm install


Créer un fichier .env à la racine du backend ou copier le fichier .env.example :

PORT=5000
MONGO_URI=ton_uri_mongodb
JWT_SECRET=ton_secret


Lancer le serveur en mode développement :

npm run dev


Le backend sera disponible sur http://localhost:5000.
---

 Frontend

Aller dans le dossier frontend :

cd frontend


Installer les dépendances :

npm install


Lancer le serveur de développement :

npm run dev


Le frontend sera disponible sur http://localhost:5173 (Vite).

Structure du projet
eduplatform/
├── backend/
│   ├── config/          # Configuration (DB, variables d'environnement)
│   ├── controllers/     # Logique des routes
│   ├── models/          # Schémas MongoDB (User, Profile, Course, Review)
│   ├── routes/          # Routes API
│   ├── middleware/      # Middlewares (auth, asyncHandler)
│   ├── server.js        # Point d'entrée du backend
│   └── package.json
└── frontend/
    ├── src/
    │   ├── pages/       # Pages React (Home, Login, Register, Courses, Profile, CourseDetails)
    │   ├── components/  # Composants réutilisables (Navbar, ProtectedRoute)
    │   ├── context/     # Contexte Auth
    │   └── api/         # Fichier axios pour requêtes API
    ├── index.html
    └── package.json

Scripts utiles
Backend
npm run dev      # Démarre le serveur avec nodemon (rechargement automatique)
npm start        # Démarre le serveur normalement

Frontend
npm run dev      # Démarre le serveur de développement Vite
npm run build    # Compile l’application pour la production
npm run preview  # Prévisualise la version buildée

Configuration
.env.example
PORT=5000
MONGO_URI=mongodb+
JWT_SECRET=your_jwt_secret


PORT : port du serveur backend

MONGO_URI : URI de connexion MongoDB

JWT_SECRET : clé secrète pour JWT

Captures d’écran

Ajoute ici les captures d’écran des pages principales :

Liste des cours

Page détail d’un cours

Page profil

Page Mes Reviews

Page 404
