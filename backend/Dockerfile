FROM openjdk:17
WORKDIR /app
COPY pom.xml ./
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn package
EXPOSE 8080
CMD ["java", "-jar", "target/wallet-backend-1.0.0.jar"]
