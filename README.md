# GitHub Copilot Quiz

Bienvenue dans **GitHub Copilot Quiz** ! Ce projet interactif vous permet de maîtriser les meilleures pratiques d'utilisation de GitHub Copilot à travers un quiz ludique.

## Aperçu

- **Quiz interactif** : Classez des techniques d'autocomplétion par ordre d'efficacité.
- **Explications détaillées** : Chaque technique est accompagnée d'une description pour expliquer son intérêt.
- **Interface moderne** : Construite avec React et Tailwind CSS pour une expérience utilisateur fluide.

## Structure du projet

- **src/** : Contient l'ensemble du code source de l'application.
  - **components/** : Composants UI réutilisables, comme [`QuizCard`](src/components/QuizCard.tsx) et [`ThemeSelector`](src/components/ThemeSelector.tsx).
  - **data/** : Données du quiz telles que définies dans [`quizData`](src/data/quizData.ts).
  - **pages/** : Page d'accueil et autres vues de l'application.
  - **hooks/** et **lib/** : Fonctions utilitaires et hooks personnalisés.
- **public/** : Fichiers statiques (images, icônes, etc.).
- **Configurations** :
  - [postcss.config.js](postcss.config.js)
  - [tailwind.config.ts](tailwind.config.ts)
  - [tsconfig.json](tsconfig.json)

## Installation

1. Installez les dépendances :

    ```sh
    npm install
    ```

2. Démarrez le serveur de développement :

    ```sh
    npm run dev
    ```

Accédez à l'application en ouvrant [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Utilisation

1. **Choisissez un thème** sur la page de démarrage.
2. **Réorganisez** les cartes en utilisant la fonctionnalité drag and drop pour classer les techniques de la moins efficace à la plus efficace.
3. **Validez vos réponses** pour obtenir un retour immédiat sur la justesse de votre classement.
4. **Recommencez** pour améliorer vos résultats et approfondir vos connaissances.

## Contribuer

Les contributions sont les bienvenues !

1. Forkez le dépôt.
2. Créez une branche pour votre fonctionnalité :

    ```sh
    git checkout -b feature/amélioration
    ```

3. Commitez vos modifications :

    ```sh
    git commit -am "Ajout d'une nouvelle fonctionnalité"
    ```

4. Poussez votre branche :

    ```sh
    git push origin feature/amélioration
    ```

5. Ouvrez une Pull Request.

## Remerciements

Merci d'utiliser **GitHub Copilot Quiz** ! Profitez de ce projet pour améliorer vos compétences et optimiser votre utilisation de GitHub Copilot.
