IOC(Principle):
Inversion Of Control : is a design principle, which does not actually create the objects but describes the way in which object is created.

IOC, where the control flow of a program is inverted. instead programmer controlling the flow of a program, the framework or service takes control of the program flow.

Dependency Injection is the design pattern through which IOC is achieved.through DI, the responsibility of obj creation is shifted from the application to the Spring IOC container.

-- it reduces coupling b/w multiple objs.

-- IOC
-- Dependency Injection
-- Spring Beans
-- Context
-- Ioc container
-- SpEL

-- Any POJO class i.e manager by a Spring IoC container is called Spring Bean

-- the beans are created with the config metadata that is supplied in the form of xml cofig and annotations.

-- Spring IoC containers manage the lifecycle of the Spring Bean scope and injecting any required dependencies in the bean.

-- Context is like a memory location of your app, in which we add all the object instances that we want the framework to manage.

-- Spring Actuator

- to monitor and manage the application
- to check application health
- access application metrics

-- dependency in .xml

spring-boot-started-actuator
-- Endpoints /actuator
/health(default exposed) , Health info about your app
/info
/auditevents Audit events for your application
/beans List of all beans registered in the Spring app context
/mappings List of all @RequestMapping paths

management.endpoints.web.exposure.include= health,info,\*(all endpoints)
management.info.env.enabled=true
// update info endpoint

application.properties file

info.app.name= my super cool app
info.app.description= a crazy and fun app, yoohoo!
info.app.version=1.0.0

// Secure endpoints using spring-boot-starter-security
// adding custom properties in properties file
@Value("${team.name}")
	private String teamName;
	@Value("${coach.name}")
private String coachName;

-- Define the dependency interface and class

Coach.java
public interface Coach{
String getDailyWorkout();
}

@Component
public class CricketCoach implements Coach{
@Override
public String getDailyWorkout(){
return "Practice fast bowling for 15mins";
}
}

@Component annotation

- @Component marks the class as a Spring Bean
- A Spring Bean is just a regular Java class that is managed by Spring
- @Component also makes the bean available for dependency injection

Create Demo Rest Controller
Create a constructor in your class for injections

@RestController
public class DemoController{
private Coach myCoach;
@Autowired
public DemoController(Coach theCoach){
myCoach= theCoach;
}
@GetMapping("/dailyworkout")
public String getDailyWorkout(){
return myCoach.getDailyWorkout();
}
}

-- @Autowired annotation tells Spring to inject a Dependency
-- Component Scanning, by default the main package is always scanned, to add other packages , we need to add config in SpringBoot
@SpringBootApplication(
scanBasePackages= {"com.tcs.springbootdemo","com.tcs.utils"}
)

Autowiring Example

- DemoController -> Coach
- Injecting a Coach implementation
- Spring will scan for @Components
- Any one implements the Coach interface
- if so, let's inject them. for example:CricketCoach

Development Process - Setter injection

- Create setter method(s) in your class for injections
- Configure the dependency injection with @Autowired Annotation

Step 1: add setter method
@RestController
public class DemoController{
private Coach myCoach;
@Autowired
public void setCoach(Coach theCoach){
mycoach=theCoach;
}

}

-- Constructor injection/ setter injection- when to use

- when all the dependencies are available, constructor
- when some are available and some defaul logic needs to be set , then setter injections

-- Field Injection, without using setters/constructor
-- @Qualifier ,
when there are 4class implementinng Coach
-- BaseBallCoach
-- TennisCoach
-- TrackCoach
-- CricketCoach
@Autowired
public void setCoach(@Qualifier("circketCoach")Coach theCoach){
mycoach=theCoach;
}
// same name as class, first name in small letter
@Primary , default bean to be injected

-- Imp
@Component, when your application starts , all beans are initialized
-Spring will create an instance of each and make them available

-- to restrict instance creation , we can use @Lazy initialization

- Instead of creating all beans up front, we can specify lazy initialization
- A bean will only be initialized in the following cases:
- It is needed for dependency injection
- or it is explicitly requested

-- Lazy initialization- Global Configuration

application.properties
spring.main.lazy-initialization=true

--- Bean Scopes

- Scopes refers to the lifecycle of a bean
- How long does the bean live ?
- How mane instances are created ?
- How is the bean shared ?

---- Default is singleton

- Spring Container creates only one instance of the bean, by default
- it is cached in memory
- All dependency injections for the bean
- will reference the Same bean.

@RestController
public class DemoController{
private Coach myCoach;
private Coach anotherCoach;

    @Autowired
    public void setCoach(@Qualifier("cricketCoach") Coach theCoach,@Qualifier("cricketCoach") Coach theAnotherCoach){
    myCoach=theCoach;
    anotherCoach=theAnotherCoach;
    }
    	// here @Qualifier("cricketCoach") refers to the same instance.

}

Explicitly specify Bean Scope
@Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)

---- SPRING BEAN SCOPES

SINGLETON- create a single shared instance of the bean.Default scope
PROTOTYPE-Create a new bean instance for each container request
REQUEST-Scoped to an HTTP web request, only used for web apps
session- Scoped to an HTTP web session. only used for web apps
application- Scoped to a web app ServletContext
websocket- scoped to a web socket

--- Bean Lifecycle
-- Container Started --> Bean Instantiated --> Dependencies injected --> Internal Spring Processing --> Your Custom init method

-- once the container is shutdown -- > your custom destroy method

-- Bean Lifecycle Methods/Hooks

- You can add custom code during bean initialization
- Calling custom business logic methods
- Setting up handles to resources (db,sockets,file etc)

You can add custom code during bean destruction

- Calling custom business logic method
- Clean up handles to resources (db,sockets,files etc)

Init: method configuration

@Component
public class CricketCoach implements Coach{

    public CricketCoach(){
    	System.out.println("In constructor: "+getClass().getSimpleName());
    }

    @PostConstruct
    public void doMyStartupStuff(){
    	System.out.println("In doMyStartupStuff(): "+getClass().getSimpleName());
    }

    	@PreDestroy
    public void doMyCleanupStuff(){
    	System.out.println("In doMyCleanupStuff(): "+getClass().getSimpleName());
    }

}

For "prototype" scoped beans, Spring does not call the destroy method.

Prototype Beans and Lazy Initialization
Prototype beans are lazy by default. There is no need to use the @Lazy annotation for prototype scopes beans.

---------- Configuring Beans with Java Code

public class SwimCoach implements Coach{
}

-- Steps

- Create @Configuration class

@Configuration
public class SportConfig{

- Define @Bean method to configure the bean
  @Bean
  public Coach swimCoach(){
  // bean id defaults to the method name
  // to provide custom bean id @Bean("aquatic")
  return new SwimCoach();
  }
  }

- Inject the bean into our controller

@RestController
public class DemoController{
private Coach myCoach;
private Coach anotherCoach;

    @Autowired
    public void setCoach(@Qualifier("swimCoach") Coach theCoach,@Qualifier("cricketCoach") Coach theAnotherCoach){
    myCoach=theCoach;
    anotherCoach=theAnotherCoach;
    }
    	// here @Qualifier("cricketCoach") refers to the same instance.

}

------------- Hibernate/JPA and JDBC

Hibernate/Jpa uses JDBC for all DB communications

-- MySQL Server
-- MySQL workBench- GUI for interacting with the DB

application.properties
spring.datasource.url= jdbc:mysql://localhost:3306/student_tracker
spring.datasource.username=springstudent
spring.datasource.password=springstudent

-- Command Line App

@Bean
public CommandLineRunner commandLineRunner(String[] args){
return runner ->{
System.out.println("Hello world")
}
}

application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/student_tracker
spring.datasource.username=springstudent
spring.datasource.password=springstudent

# Turn Off the spring Boot banner

spring.main.banner-mode=off

# Reduce logging level.set logging level to warn

logging.level.root=warn

--- JPA Development process
1.Annotate Java Class
2.Develop Java code to perform DB operations

Entity Class: Java class that is mapped to a DB table
Object-to-Realtional Mapping(ORM)

Java class: Student{
id:int
firstName:String
lastName:String
email:String
}

DB table
student
id INT
first_name VARCHAR(45)
last_name VARCHAR(45)
email VARCHAR(45)

step1:Map class to DB table

@Entity
@Table(name="Student")
public class Student{

@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)// generated by the db
@Column(name="id")
private int id;

@Column(name="first_name")
private String firstName ;
}

--- GenerationType
-GenerationType.IDENTITY
-GenerationType.AUTO
-GenerationType.UUID: unique global identifier

-- Spring Data JPA

for Data Access Layer ,

there use to be a ProductDao layer-> ProductDao implementation

-- create an Entity class , another Repository Interface that will extends JpaRepository<Entity,Primary Key>

-- To show all the sql queries run be Hibernate in the background ,

application.properties

spring.jpa.show-sql=true

add context path

spring.servlet.path="/productapi"

-- changing embedded server - tomcat

<exclusions>
<exclusion>
<groupId>org.springframework.boot</groupId>
<artifactId>spring-boot-starter-tomcat</artifactId>
</exclusion>
</exclusion>

-- dependency
<artifactId>spring-boot-starter-jetty</artifactId>

create a studentApi
context path= /studentapi
make the server run on jetty

student- id,name.testscore, crud operations

-------------- spring beans/@Component/@Service...

@Bean: Used to define and configure beans within @Configuration classes.
@Component: A generic annotation for Spring-managed components.
@Service: A specialization of @Component for service layer components.
@RestController: A specialization of @Controller for RESTful web services, automatically serializing return values to JSON/XML.
