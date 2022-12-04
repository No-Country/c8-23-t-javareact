FROM openjdk:latest
COPY BACKEND/target/consorcio-0.0.1-SNAPSHOT.jar /usr/app/
WORKDIR usr/app
RUN sh -c 'touch consorcio-0.0.1-SNAPSHOT.jar'
ENTRYPOINT ["java", "-jar", "consorcio-0.0.1-SNAPSHOT.jar"]


