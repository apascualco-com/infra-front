FROM apascualco/node:14
WORKDIR /opt/
ADD . /opt/
RUN npm install && npm run build
