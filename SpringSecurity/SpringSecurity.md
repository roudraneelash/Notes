------------------------------------------------------------- Spring Security Internal Flow

-- Spring Security Filters

- A series of Spring Security filters intercept each request & work together to identify if Authentication is required or not.
  If authentication is required, accordingly navigate the user to login page or use the existing details stored during initial authentication.

-- Authentication: Filters like UsernamePasswordAuthenticationFilter will extract username/password from HTTP request & prepare Authentication type object. Because Authentication is core standard of storing Auth user details inside Spring security framework.

-- Authentication Manager
Once received request from filter, it delegates the validating of the user details to the authentication providers available. Since there can be multiple providers inside an app. it is the reponsibility of the AuthenticationManager to manage all the authentication providers available.

-- AuthenticationProvider
AuthenticationProviders has all the core logic of validation user details for authentication.

-- UserDetailsManager/UserDetailsService
UserDetailsManager/UserDetailsService helps in retrieving, creating, updating,deleting the User details from the DB/storage systems.

--PasswordEncoder
Service interface that helps in encoding & hashing passwords. Otherwise we may have to live with plain text passwords.

--SecurityContext
Once the request has been authenticated, The Authentication will usually be stored in a thread-local SecurityContext managed by the SecurityContextHolder. this helps during upcoming request from the same user.

----------------------------------- Sequence Flow (Spring security default behaviour)

Request--> Authentication Filters(AuthorizationFilter/DefaultLoginPageGeneratingFilter/UsernamePasswordAuthenticationFilter) --> Authentication(UsernamePasswordAuthenticationToken) --> AuthenticationManager(ProviderManager)--> AuthenticationProvider(DaoAuthenticationProvider) --> UserDetailsService(InMemoryUserDetailsManager)

--------------------------- DefaultSecurityConfigurations

By Default, Spring Security framework protects all the paths present inside the web application.This behaviour is due to the code present inside the method defaultSecurityFilterChain(HttpSecurity http) of the class SpringBootWebSecurityConfiguration.

-- Custom modification

@Bean
SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {
// .denyAll() config to denyAll the request , it will 1st Authenticate, then deny Authorization
// .permitAll() config to Allow the request , it will 1st Authenticate, then Allow Authorization
http.authorizeHttpRequests((requests) -> requests.requestMatchers("/myAccount/**","/myLoans/**","/myBalance/**","/myCards/**").authenticated().requestMatchers("/notices","/contact").permitAll());
http.formLogin(withDefaults());
http.httpBasic(withDefaults());
return http.build();
}
