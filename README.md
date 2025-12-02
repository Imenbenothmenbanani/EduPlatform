## 🎯 À Propos

**EduPlatform** est une plateforme moderne de gestion de cours en ligne construite avec le stack **MERN** (MongoDB, Express, React, Node.js). Elle permet aux utilisateurs de découvrir des cours, de s'inscrire, de laisser des avis et de gérer leur profil personnel.

# 🎓 EduPlatform

<div align="center">

![EduPlatform Logo](https://img.shields.io/badge/EduPlatform-Learning%20Management-blue?style=for-the-badge&logo=react)

**Application web de gestion de cours en ligne**

[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)

[🚀 Démo](#) · [📖 Documentation](#fonctionnalités) · [🐛 Signaler un Bug](#) · [💡 Demander une Feature](#)

</div>

---

## 📋 Table des Matières

- [À Propos](#-à-propos)
- [Fonctionnalités](#-fonctionnalités)
- [Technologies](#-technologies)
- [Architecture](#-architecture)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Utilisation](#-utilisation)
- [API Endpoints](#-api-endpoints)
- [Structure du Projet](#-structure-du-projet)
- [Scripts](#-scripts)
- [Captures d'Écran](#-captures-décran)
- [Contribution](#-contribution)
- [License](#-license)
- [Contact](#-contact)

---

### ✨ Points Forts

- 🔐 **Authentification sécurisée** avec JWT
- 📱 **Interface responsive** et moderne
- 🔍 **Recherche et pagination** des cours
- ⭐ **Système de reviews** complet
- 👤 **Gestion de profil** utilisateur
- 🛡️ **Routes protégées** avec middleware

---

## 🚀 Fonctionnalités

### 🎨 Frontend (React + Vite)

| Fonctionnalité | Description | Statut |
|----------------|-------------|--------|
| 🔑 **Authentification** | Inscription, connexion et déconnexion avec JWT | ✅ |
| 👤 **Profil Utilisateur** | Affichage et édition du profil | ✅ |
| 📚 **Liste des Cours** | Pagination, recherche par titre | ✅ |
| 📖 **Détails du Cours** | Page détaillée avec informations complètes | ✅ |
| ⭐ **Reviews** | Ajout et consultation des avis | ✅ |
| 📝 **Mes Reviews** | Gestion personnelle des avis | ✅ |
| 🚫 **Page 404** | Gestion des routes inexistantes | ✅ |

### ⚙️ Backend (Express + Node.js)

| Fonctionnalité | Description | Statut |
|----------------|-------------|--------|
| 🔒 **API REST Sécurisée** | Authentification JWT sur toutes les routes sensibles | ✅ |
| 👥 **Gestion Utilisateurs** | CRUD complet des utilisateurs | ✅ |
| 📋 **Gestion Profils** | Relation One-to-One avec User | ✅ |
| 📚 **Gestion Cours** | CRUD complet des cours | ✅ |
| 💬 **Gestion Reviews** | Relation One-to-Many avec Course | ✅ |
| 🗄️ **MongoDB** | Base de données NoSQL avec Mongoose | ✅ |
| 🛡️ **Middleware Auth** | Protection des routes privées | ✅ |

---

## 🛠️ Technologies

### Frontend

```
⚛️  React 18.3.1          - Bibliothèque UI
⚡  Vite 6.0.1            - Build tool rapide
🎨  CSS3                  - Styling
🔄  Axios                 - Client HTTP
🧭  React Router DOM      - Routing
🌐  Context API           - State management
```

### Backend

```
🟢  Node.js 18+           - Runtime JavaScript
🚂  Express 4.21.2        - Framework web
🍃  MongoDB 8.0           - Base de données NoSQL
🐱  Mongoose 8.9.4        - ODM MongoDB
🔐  JWT                   - Authentification
🔒  bcrypt                - Hashage de mots de passe
🔄  CORS                  - Cross-Origin Resource Sharing
```

---

## 🏗️ Architecture

```mermaid
graph TB
    A[Client React] -->|HTTP Requests| B[Express Server]
    B -->|JWT Auth| C[Auth Middleware]
    C -->|Valid Token| D[Controllers]
    D -->|Mongoose| E[(MongoDB)]
    E -->|Data| D
    D -->|JSON Response| A
```

### Relations de Données

```
User ──────1:1────── Profile
 │
 └───1:Many────────► Review
                      │
                      └──Many:1──► Course
```

---

## 📦 Installation

### Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- ![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=flat&logo=node.js) **Node.js** >= 18.0.0
- ![MongoDB](https://img.shields.io/badge/MongoDB-v6+-47A248?style=flat&logo=mongodb) **MongoDB** installé localement ou compte [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- ![npm](https://img.shields.io/badge/npm-v9+-CB3837?style=flat&logo=npm) **npm** 

### 🔧 Installation Rapide

#### 1️⃣ Cloner le Projet

```bash
git clone https://github.com/votre-username/eduplatform.git
cd eduplatform
```

#### 2️⃣ Installation Backend

```bash
cd backend
npm install
```

Créer un fichier `.env` à la racine du dossier `backend` :

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/eduplatform
JWT_SECRET=votre_secret_ultra_securise_ici_2024
NODE_ENV=development
```

Démarrer le serveur backend :

```bash
npm run dev
```

✅ **Backend disponible sur** : `http://localhost:5000`

#### 3️⃣ Installation Frontend

```bash
cd ../frontend
npm install
```

Démarrer le serveur frontend :

```bash
npm run dev
```

✅ **Frontend disponible sur** : `http://localhost:5173`

---

## ⚙️ Configuration

### Variables d'Environnement Backend

Créez un fichier `.env` dans le dossier `backend` :

| Variable | Description | Exemple |
|----------|-------------|---------|
| `PORT` | Port du serveur backend | `5000` |
| `MONGO_URI` | URI de connexion MongoDB | `mongodb://localhost:27017/eduplatform` |
| `JWT_SECRET` | Clé secrète pour JWT | `mySecretKey123!@#` |
| `NODE_ENV` | Environnement d'exécution | `development` ou `production` |

### Exemple de fichier `.env.example`

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=mongodb://localhost:27017/eduplatform
# Pour MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/eduplatform

# Security
JWT_SECRET=your_super_secret_jwt_key_here_change_this_in_production
JWT_EXPIRE=30d
```

---

## 🎮 Utilisation

### 1️⃣ Créer un Compte

1. Accéder à `http://localhost:5173/register`
2. Remplir le formulaire d'inscription
3. Se connecter avec les identifiants créés

### 2️⃣ Explorer les Cours

- Parcourir la liste des cours disponibles
- Utiliser la barre de recherche pour filtrer
- Cliquer sur un cours pour voir les détails

### 3️⃣ Laisser un Avis

- Naviguer vers un cours
- Ajouter une note (1-5 étoiles) et un commentaire
- Consulter vos avis dans "Mes Reviews"

### 4️⃣ Gérer son Profil

- Accéder à la page profil
- Modifier les informations personnelles
- Voir les cours suivis

---

## 🌐 API Endpoints

### 🔓 Authentification

| Méthode | Endpoint | Description | Auth |
|---------|----------|-------------|------|
| `POST` | `/api/auth/register` | Créer un compte | ❌ |
| `POST` | `/api/auth/login` | Se connecter | ❌ |
| `GET` | `/api/auth/me` | Obtenir l'utilisateur connecté | ✅ |

#### Exemple de Requête d'Inscription

**POST** `http://localhost:5000/api/auth/register`

```json
{
  "username": "imen",
  "email": "imen@gmail.com",
  "password": "123456"
}
```

**Réponse (201 Created)** :

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MmVjNzUxMmM4OTA1Y2ZjOGM2YmYwYiIsImlhdCI6MTczMTIxNTQ5NiwiZXhwIjoxNzMzODA3NDk2fQ.xNjF9.xQFrIAOQMWbmo_W-w7WI5YUNpaajUMxQ87d5_xtYjQg",
  "user": {
    "id": "692ec7512c8905cfc8c6bf0b",
    "username": "imen",
    "email": "imen@gmail.com"
  }
}

```
<img width="1307" height="762" alt="image" src="https://github.com/user-attachments/assets/0ae80adf-d4c5-4647-8d2e-89c5e163c7a9" />
#### Exemple de Requête Login
**POST** `http://localhost:5000/api/auth/register`

```json
{
  "email": "imen@gmail.com",
  "password": "123456"
}
```



***Réponse (200 Created)*** :
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTJlYzc1MTJjODkwNWNmYzhjNmJmMGIiLCJlbWFpbCI6ImltZW5AZ21haWwuY29tIiwiaWF0IjoxNzY0NjczOTM2LCJleHAiOjE3NjUyNzg3MzZ9.YEx3GDEDKF44ymkZ2x3EUbzjGt5GRMzVRKAC7bWjdio",
    "user": {
        "id": "692ec7512c8905cfc8c6bf0b",
        "username": "imen",
        "email": "imen@gmail.com"
    }

<img width="822" height="787" alt="image" src="https://github.com/user-attachments/assets/211c6b24-edc6-4736-9bb2-6b6d52bf2cee" />


#### Exemple de Requête Login
**POST** `http://localhost:5000/api/auth/me`

```json
{
  "email": "imen@gmail.com",
  "password": "123456"
}

```



***Réponse (200 Created)*** :
{
{
    "_id": "692ec7512c8905cfc8c6bf0b",
    "username": "imen",
    "email": "imen@gmail.com",
    "courses": [],
    "createdAt": "2025-12-02T11:02:41.741Z",
    "updatedAt": "2025-12-02T11:02:41.741Z",
    "__v": 0
}

<img width="825" height="1032" alt="image" src="https://github.com/user-attachments/assets/e58df2a1-aa8a-4be9-a184-d33a00678412" />


### 👤 Utilisateurs

| Méthode | Endpoint | Description | Auth |
|---------|----------|-------------|------|
| `GET` | `/api/users` | Lister tous les utilisateurs | ✅ |
| `GET` | `/api/users/:id` | Obtenir un utilisateur | ✅ |
| `PUT` | `/api/users/:id` | Mettre à jour un utilisateur | ✅ |
| `DELETE` | `/api/users/:id` | Supprimer un utilisateur | ✅ |

### 📚 Cours

| Méthode | Endpoint | Description | Auth |
|---------|----------|-------------|------|
| `GET` | `/api/courses` | Lister tous les cours | ❌ |
| `GET` | `/api/courses/:id` | Obtenir un cours | ❌ |
| `POST` | `/api/courses` | Créer un cours | ✅ |
| `PUT` | `/api/courses/:id` | Mettre à jour un cours | ✅ |
| `DELETE` | `/api/courses/:id` | Supprimer un cours | ✅ |

### ⭐ Reviews

| Méthode | Endpoint | Description | Auth |
|---------|----------|-------------|------|
| `GET` | `/api/courses/:courseId/reviews` | Lister les reviews d'un cours | ❌ |
| `POST` | `/api/courses/:courseId/reviews` | Ajouter une review | ✅ |
| `GET` | `/api/users/:userId/reviews` | Lister les reviews d'un utilisateur | ✅ |
| `PUT` | `/api/reviews/:id` | Mettre à jour une review | ✅ |
| `DELETE` | `/api/reviews/:id` | Supprimer une review | ✅ |

### 📋 Profils

| Méthode | Endpoint | Description | Auth |
|---------|----------|-------------|------|
| `GET` | `/api/users/:userId/profile` | Obtenir le profil | ✅ |
| `POST` | `/api/users/:userId/profile` | Créer un profil | ✅ |
| `PUT` | `/api/users/:userId/profile` | Mettre à jour le profil | ✅ |

---

## 📂 Structure du Projet

```
eduplatform/
│
├── 📁 backend/
│   ├── 📁 config/
│   │   └── db.js                 # Configuration MongoDB
│   │
│   ├── 📁 controllers/
│   │   ├── authController.js     # Logique authentification
│   │   ├── userController.js     # Logique utilisateurs
│   │   ├── courseController.js   # Logique cours
│   │   ├── reviewController.js   # Logique reviews
│   │   └── profileController.js  # Logique profils
│   │
│   ├── 📁 models/
│   │   ├── User.js               # Schéma User
│   │   ├── Profile.js            # Schéma Profile (1:1)
│   │   ├── Course.js             # Schéma Course
│   │   └── Review.js             # Schéma Review (1:Many)
│   │
│   ├── 📁 routes/
│   │   ├── authRoutes.js         # Routes auth
│   │   ├── userRoutes.js         # Routes users
│   │   ├── courseRoutes.js       # Routes courses
│   │   └── reviewRoutes.js       # Routes reviews
│   │
│   ├── 📁 middleware/
│   │   ├── authMiddleware.js     # Protection JWT
│   │   └── asyncHandler.js       # Gestion async/await
│   │
│   ├── .env                       # Variables d'environnement
│   ├── .env.example               # Exemple de configuration
│   ├── server.js                  # Point d'entrée backend
│   └── package.json
│
└── 📁 frontend/
    ├── 📁 public/
    │   └── vite.svg
    │
    ├── 📁 src/
    │   ├── 📁 pages/
    │   │   ├── Home.jsx           # Page d'accueil
    │   │   ├── Login.jsx          # Page connexion
    │   │   ├── Register.jsx       # Page inscription
    │   │   ├── Courses.jsx        # Liste des cours
    │   │   ├── CourseDetails.jsx  # Détails d'un cours
    │   │   ├── Profile.jsx        # Page profil
    │   │   ├── MyReviews.jsx      # Mes avis
    │   │   └── NotFound.jsx       # Page 404
    │   │
    │   ├── 📁 components/
    │   │   ├── Navbar.jsx         # Barre de navigation
    │   │   └── ProtectedRoute.jsx # Route protégée
    │   │
    │   ├── 📁 context/
    │   │   └── AuthContext.jsx    # Contexte authentification
    │   │
    │   ├── 📁 api/
    │   │   └── axios.js           # Configuration Axios
    │   │
    │   ├── App.jsx                # Composant racine
    │   ├── main.jsx               # Point d'entrée React
    │   └── index.css              # Styles globaux
    │
    ├── index.html
    ├── vite.config.js             # Configuration Vite
    └── package.json
```

---

## 📜 Scripts

### Backend

```bash
# Démarrer en mode développement (avec nodemon)
npm run dev

# Démarrer en mode production
npm start

# Installer les dépendances
npm install
```

### Frontend

```bash
# Démarrer le serveur de développement
npm run dev

# Compiler pour la production
npm run build

# Prévisualiser la version de production
npm run preview

# Installer les dépendances
npm install
```

---

## 📸 Captures d'Écran

### 🔐 Test API - Inscription (Postman)
![API Register Test](./screenshots/api-register-token.png)
*Exemple de réponse d'inscription avec génération du token JWT*

### 🏠 Page d'Accueil
![Home Page](./screenshots/home.png)

### 📚 Liste des Cours
![Courses List](./screenshots/courses.png)

### 📖 Détails d'un Cours
![Course Details](./screenshots/course-details.png)

### 👤 Page Profil
![Profile Page](./screenshots/profile.png)

### ⭐ Mes Reviews
![My Reviews](./screenshots/my-reviews.png)

### 🚫 Page 404
![404 Page](./screenshots/404.png)

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment participer :

1. 🍴 **Fork** le projet
2. 🌿 Créer une branche pour votre feature (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push vers la branche (`git push origin feature/AmazingFeature`)
5. 🔃 Ouvrir une **Pull Request**

### 📝 Guidelines

- Respecter la structure du projet
- Commenter le code complexe
- Tester les fonctionnalités ajoutées
- Suivre les conventions de nommage

---

## 📄 License

Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 👨‍💻 Auteurs

**Votre Nom**

- 🌐 Website: [votre-site.com](https://votre-site.com)
- 🐙 GitHub: [@votre-username](https://github.com/votre-username)
- 💼 LinkedIn: [Votre Nom](https://linkedin.com/in/votre-profil)
- 📧 Email: votre.email@example.com

---

## 📞 Contact & Support

Pour toute question ou suggestion :

- 📧 **Email** : support@eduplatform.com
- 💬 **Discord** : [Rejoindre notre serveur](https://discord.gg/eduplatform)
- 🐛 **Issues** : [Signaler un bug](https://github.com/votre-username/eduplatform/issues)
- 💡 **Discussions** : [Forum de discussion](https://github.com/votre-username/eduplatform/discussions)

---

## 🙏 Remerciements

- [MongoDB](https://www.mongodb.com/) pour la base de données
- [Express.js](https://expressjs.com/) pour le framework backend
- [React](https://reactjs.org/) pour la bibliothèque frontend
- [Vite](https://vitejs.dev/) pour le build tool ultra-rapide
- [JWT](https://jwt.io/) pour l'authentification sécurisée

---

<div align="center">

**⭐ Si ce projet vous a aidé, n'hésitez pas à lui donner une étoile !**

Made with ❤️ by [Votre Nom](https://github.com/votre-username)

[![GitHub stars](https://img.shields.io/github/stars/votre-username/eduplatform?style=social)](https://github.com/votre-username/eduplatform)
[![GitHub forks](https://img.shields.io/github/forks/votre-username/eduplatform?style=social)](https://github.com/votre-username/eduplatform/fork)
[![GitHub watchers](https://img.shields.io/github/watchers/votre-username/eduplatform?style=social)](https://github.com/votre-username/eduplatform)

</div>
