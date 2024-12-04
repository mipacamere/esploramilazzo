# Usa una base immagine PHP
FROM php:8.2-apache

# Copia il contenuto della tua app nella cartella di lavoro del container
COPY . /var/www/html/

# Abilita il mod_rewrite di Apache (se necessario per il tuo sito)
RUN a2enmod rewrite

# Espone la porta 80 per il web
EXPOSE 80

# Comando per avviare Apache con PHP
CMD ["apache2-foreground"]
