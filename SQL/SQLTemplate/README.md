# To Test

psql -h localhost -U testuser -d testdb

# To Clean Up

chmod +x cleanup.sh
./cleanup.sh
chmod +x cleanup.sh
./cleanup.sh

## or to clean up

docker compose down -v && docker rmi $(docker images -q) -f && docker system prune -a --volumes --force
