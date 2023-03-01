FROM nginx:1.23.3-alpine-slim

WORKDIR /usr/share/nginx/html
ADD --chown=1001:1001 ./progjs.tar.gz .
RUN cat modelo.html > index.html

LABEL description="Progressao Geometrica JS"
LABEL version="1.2"

EXPOSE 80
FROM nginx:1.23.3-alpine-slim

WORKDIR /usr/share/nginx/html
ADD --chown=1001:1001 ./progjs.tar.gz .
RUN cat modelo.html > index.html

LABEL description="Progressao Geometrica JS"
LABEL version="1.2"

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
