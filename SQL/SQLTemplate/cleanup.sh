#!/bin/bash

# Stop all containers, remove them and their volumes, remove all images,
# and clean up any unused networks, volumes, and build cache
docker compose down -v &&
  docker rmi $(docker images -q) -f &&
  docker system prune -a --volumes --force

# Verify cleanup
echo -e "\nVerifying cleanup..."
echo -e "\nContainers:"
docker ps -a
echo -e "\nImages:"
docker images
echo -e "\nVolumes:"
docker volume ls
