# Sample Project
Spring Boot 2.4 + Angular 11 + Gradle
- Spring Web
- Spring Security

## How to start Spring Boot + Angular PJ

### Spring Initializr
https://start.spring.io/

Project: Gradle Project<br>
Language: Java<br>
Dependencies:<br>
- Spring Web
- Spring Security

### Create sub-projects
```
cd <project root>

# backend project
mkdir api
mv src build.gradle ./api
## add "implementation project(':ui')" in dependencies
vim ./api/build.gradle

# frontend project
mkdir ui
## make gradle project
cat <<EOF > ./ui/build.gradle
plugins {
    id 'java'
    id "com.github.node-gradle.node" version "3.0.1"
}

node {
    version = '16.0.0'
    download = true
    workDir = file("${rootProject.projectDir}/.gradle/nodejs")
}

//---------------------------
//    Installation
//---------------------------
task newAngularApp(type: NpxTask) {
    dependsOn nodeSetup
    command = '@angular/cli@11.2.11'
    args = ['new', "${rootProject.name}", '--directory=./', '--style=scss', '--routing=true']
}

//---------------------------
//    Build jar
//---------------------------
jar.dependsOn 'buildForProduction'

jar {
    from "dist/${rootProject.name}" into 'static'
}
EOF

# multi-project setting
echo "include 'api', 'ui'" >> settings.gradle

```

create new Angular app
```
gradlew newAngularApp
```

## Development
### Virtual Environment
bash, zsh
```
. gradleenv/activate
```

fish
```
. gradleenv/activate.fish
```

### Stand alone Angular
```
npx ng serve 
```

### Build jar
```
gradlew bootJar
```

### Run jar
```
java -jar ./api/build/libs/api-0.0.1-SNAPSHOT.jar &
open http://localhost:8080
```

username: user<br>
password: Please see spring launch message<br>
(Using generated security password)



# Getting Started Spring Boot

### Reference Documentation

For further reference, please consider the following sections:

* [Official Gradle documentation](https://docs.gradle.org)
* [Spring Boot Gradle Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/2.4.5/gradle-plugin/reference/html/)
* [Create an OCI image](https://docs.spring.io/spring-boot/docs/2.4.5/gradle-plugin/reference/html/#build-image)
* [Spring Web](https://docs.spring.io/spring-boot/docs/2.4.5/reference/htmlsingle/#boot-features-developing-web-applications)
* [Spring Security](https://docs.spring.io/spring-boot/docs/2.4.5/reference/htmlsingle/#boot-features-security)

### Guides

The following guides illustrate how to use some features concretely:

* [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)
* [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/)
* [Building REST services with Spring](https://spring.io/guides/tutorials/bookmarks/)
* [Securing a Web Application](https://spring.io/guides/gs/securing-web/)
* [Spring Boot and OAuth2](https://spring.io/guides/tutorials/spring-boot-oauth2/)
* [Authenticating a User with LDAP](https://spring.io/guides/gs/authenticating-ldap/)

### Additional Links

These additional references should also help you:

* [Gradle Build Scans – insights for your project's build](https://scans.gradle.com#gradle)
