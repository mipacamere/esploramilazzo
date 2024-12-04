# Usa una base immagine PHP
FROM php:8.2-cli

# Copia i file del progetto nella directory di lavoro
COPY . /var/www/html/

# Esponi la porta 10000 (Render usa questa porta per i web service)
EXPOSE 10000

# Comando per avviare il server PHP integrato
CMD ["php", "-S", "0.0.0.0:10000", "-t", "/var/www/html"]
