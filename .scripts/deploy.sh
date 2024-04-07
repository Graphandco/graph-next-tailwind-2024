#!/bin/bash
set -e

echo "Début du déploiement..."

# Pull the latest version of the app
git pull origin master
echo "Changements envoyés sur le serveur !"

echo "Installation des dépendances..."
npm install --yes

echo "Créating du build Production.."
# For ReactJS VueJS and Nuxt JS
npm run build

# For NextJS
# npm run export

echo "Déploiement terminé!"