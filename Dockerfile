FROM nginx:1.23.3-alpine-slim

WORKDIR /usr/share/nginx/html
COPY --chown=1001:1001 ./app/* .
RUN cat home.html > index.html

LABEL description="Progressao Geometrica JS"
LABEL version="1.2"

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
