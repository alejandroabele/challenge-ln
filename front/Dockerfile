FROM node:18-alpine
WORKDIR /app
COPY package*.json .
COPY . .
ARG PORT
ARG APP_ENV
EXPOSE $PORT
RUN npm install 
RUN if [ "$APP_ENV" != "development" ] ; then npm run build ; fi
ENV ENVIROMENT ${APP_ENV}
CMD if [ "$ENVIROMENT" == "development" ] ; then npm run dev ; else npm run start ; fi
