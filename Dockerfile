# Usa una base immagine di PHP con Apache
FROM php:8.2-apache

# Copia i file del progetto nella directory di Apache
COPY . /var/www/html/

# Abilita mod_rewrite per Apache (se necessario)
RUN a2enmod rewrite

# Esponi la porta 10000 (Render usa questa porta per i web service)
EXPOSE 10000

# Modifica la configurazione di Apache per ascoltare sulla porta 10000
RUN echo "Listen 10000" >> /etc/apache2/ports.conf
RUN sed -i 's/80/10000/' /etc/apache2/sites-available/000-default.conf

# Avvia Apache
CMD ["apache2-foreground"]
