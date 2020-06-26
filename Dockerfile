## Config to copy build files and serve with nginx image
FROM nginx:1.15
COPY /build/ /usr/share/nginx/html

# Copy the default nginx.conf
COPY /nginx.conf /etc/nginx/conf.d/default.conf
