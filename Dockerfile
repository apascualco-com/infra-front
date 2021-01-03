FROM apascualco/node:14
WORKDIR /opt/
ADD ../../../../Downloads/infra-front /opt/
RUN npm install && npm run generate
