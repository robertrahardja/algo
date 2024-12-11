# Dockerfile
FROM postgres:latest

# Copy initialization scripts
COPY init.sql /docker-entrypoint-initdb.d/

# Set default encoding
ENV LANG en_US.utf8

