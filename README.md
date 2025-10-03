# Cyberkaoatry - Client
Une application web pour faciliter la gestion d'un espace de coworking ou cybercafé avec des clients wifi. Détéction automatique d'une connexion, géstion des sessions, limitation par temps, limitation par données consommées, gestion de paiement etc ...

# 🚀 Angular Good Practices Project

Ce projet a été conçu afin de **mettre en pratique les bonnes pratiques de développement Angular**.  
L’accent est mis sur la qualité du code, la maintenabilité et l’adoption des concepts modernes du framework.

---

## 🎯 Objectifs du projet

- **Architecture claire et maintenable** :  
  Mise en place d’une structure de dossiers cohérente et évolutive.
  
- **Mode Standalone** :  
  Utilisation des composants, directives et pipes en mode *standalone*, afin de réduire la dépendance aux modules traditionnels.

- **Signals Angular** :  
  Adoption des *signals* pour une gestion plus réactive et plus performante de l’état local.

- **Smart & Dumb Components** :  
  Application de la séparation des responsabilités :
  - *Smart components* (ou containers) : connectés aux services, gestion de la logique métier et des données.  
  - *Dumb components* (ou présentations) : responsables uniquement de l’affichage et réutilisables.

- **Préparation de NgRx** :  
  Une implémentation future de **NgRx** est prévue afin de gérer l’état global de l’application.

- **Méthodologie TDD (Test Driven Development)** :  
  Développement guidé par les tests unitaires et d’intégration, pour garantir la robustesse et la fiabilité du code.

---

## 🛠️ Installation et démarrage

### 1. Prérequis
- [Node.js](https://nodejs.org/) (version LTS recommandée)  
- [Angular CLI](https://angular.io/cli)

Vérifier vos versions installées :
```bash
node -v
npm -v
ng version
```

### 2. Installation des dépendances:
```bash
git clone https://github.com/senderMinader/cyberkaoatry-client.git
cd cyberkaoatry-client
npm install
```

### 3. Démarrer l'application
```bash
ng serve
```

L'application sera dispoible sur : 
http://localhost:4200

