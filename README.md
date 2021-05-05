# Sample Project
Spring Boot 2.4 + Angular 11 + Gradle

with;
- Spring Web
- Spring Security

# Virtual Environment
bash, zsh
```
. gradleenv/activate
```

fish
```
. gradleenv/activate.fish
```

# Angular
```
npx ng serve 
```

# Build jar
```
gradlew bootJar
```

# Run jar
```
java -jar ./api/build/libs/api-0.0.1-SNAPSHOT.jar &
open http://localhost:8080
```

username: user

password: Please see spring launch message (Using generated security password)