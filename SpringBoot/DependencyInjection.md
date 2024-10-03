@Component
public class MyService {

    @Autowired
    private MyRepository myRepository;  // Dependency is injected here

    // constructor injection
    @Autowired  // Can be omitted for single constructor, as Spring will automatically use it
    public MyService(MyRepository myRepository) {  // Dependency is injected here
        this.myRepository = myRepository;
    }
    
    // setter injection
    @Autowired
    public void setMyRepository(MyRepository myRepository)
    {
        this.myRepository=myRepository;
    }

    public void performTask() {
        myRepository.doSomething();
    }
}

- construction injection - this is preferred , setup using the default way

The dependency MyRepository is injected via the constructor when the MyService class is instantiated.
so we can have immutable instance, variables could be set a final and it wont be modified at later stage.


- setter injection - if we have to add any business logic , and change the bean instantiation from the default setup
fields are initialised after object creation.