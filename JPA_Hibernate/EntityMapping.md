@Entity
@Table(name="Employee_Data",schema="emp-data",catalogue="...")
public class Employee {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Integer id;
@Column(nullable = false)
private String name;
@Column(unique = true, nullable = false, length = 9)
private Integer ssn;
@Enumerated(EnumType.STRING)
private EmployeeType type;
@Temporal(TemporalType.TIMESTAMP)
private Date createdAt;
@Temporal(TemporalType.TIMESTAMP)
private Date updatedAt;
// Getters and Setters
@PrePersist
protected void onCreate() {
createdAt = new Date();
updatedAt = new Date();
}
@PreUpdate
protected void onUpdate() {
updatedAt = new Date();
}
public Integer getId() {
return id;
}

public void setId(Integer id) {
this.id = id;
}

public String getName() {
return name;
}

public void setName(String name) {
this.name = name;
}

}

- @Table annotation is optional , by default it will name the table with the class name , but if we want to name it specifically, then using name field.
  -- if we want to map it to specific schema in certain db/catalogue, we can use the specific fields.

-- @Id id annotation marks it as primary key

-- @Column(name="employee_ssn", unique=true, nullable=false)

- column annotations helps us to name the column name/or the constraints
- if the constraints are not met , then it will throw database error.
- In Java , primitive datatype Int can have default value of 0 as null, but in DB int can have null value

----------------- Handling Date/Timestamps
@Temporal(TemporalType.TIMESTAMP)

- tempral is use to define the field type of the timestamp in the db
  @PrePersist
  protected void onCreate() {
  createdAt = new Date();
  updatedAt = new Date();
  }

      @PreUpdate
      protected void onUpdate() {
          updatedAt = new Date();
      }

-- we can use JPA lifecycle callbacks (@PrePersist and @PreUpdate) for custom behavior.
-- we can Use @CreationTimestamp and @UpdateTimestamp from Hibernate to automatically handle timestamp fields.

----------------- Handling Enums @Enumerated(EnumType.STRING)
enum EmployeeType{
Fulltime,
Contract
}

so by default it will store in the db using ordinal values, i.e order of the enum values i.e 0,1,2 ...
@Enumerated(EnumType.STRING)-> this will update using the string value

--------------- Handling field which should not be there in the DB table.
@Transient
// JPA wont persist the data , it will ignore
It looks like you're preparing comprehensive notes on JPA relationships and Hibernate fetch strategies. Below is a refined and structured version of your notes to help you understand and recall the key concepts more clearly.

---

### JPA Relationships and Fetch Strategies

#### One-to-One Relationship

```java
@Entity
class Employee {
    @OneToOne(fetch = FetchType.LAZY)
    private AccessCard card;
}

@Entity
class AccessCard {
    @OneToOne(mappedBy = "card")
    private Employee emp;
}
```

- **Fetch Type:**

  - **Eager (Default):** Fetches the related entity immediately in a single query using a join.
  - **Lazy:** Fetches the related entity only when accessed, which may result in additional queries.

- **Ownership:**

  - The entity containing the `@OneToOne` annotation owns the relationship.
  - `@OneToOne(mappedBy = "card")` indicates the inverse side of the relationship and does not own it.

- **Cyclic Relationships:**
  - Used to ensure both entities reflect updated data before being persisted.
  - Helps avoid inconsistencies during data retrieval and persistence.

#### One-to-Many Relationship

```java
@Entity
class Owner {
    @OneToMany(mappedBy = "owner")
    private List<OwnedEntity> ownedEntities;
}

@Entity
class OwnedEntity {
    @ManyToOne
    private Owner owner;
}
```

- **Fetch Type:**

  - **OneToMany (Default: Lazy):** The collection of related entities is fetched only when accessed.
  - **ManyToOne (Default: Eager):** The related entity is fetched immediately.

- **Relationship Mapping:**
  - `OneToMany` indicates that one entity owns multiple instances of another entity.
  - `ManyToOne` indicates the inverse relationship.

#### Many-to-Many Relationship

```java
@Entity
class Employee {
    @ManyToMany
    @JoinTable(
        name = "Email_group_subscriptions",
        joinColumns = @JoinColumn(name = "Emp_id"),
        inverseJoinColumns = @JoinColumn(name = "Subscription_group_id")
    )
    private Set<EmailGroup> emailGroups;
}

@Entity
class EmailGroup {
    @ManyToMany(mappedBy = "emailGroups")
    private Set<Employee> employees;
}
```

- **Fetch Type:**

  - **ManyToMany (Default: Lazy):** Collections are fetched only when accessed.

- **Join Table:**
  - Used to map the relationship between two entities.
  - `@JoinTable` allows renaming of the join table and its columns.

#### Cascade Operations

```java
@Entity
class ParentEntity {
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "parent")
    private List<ChildEntity> children;
}
```

- **CascadeType:** Propagates operations (e.g., persist, remove) from the parent entity to related entities.
  - **CascadeType.PERSIST:** Saves the related entity when the parent is saved.
  - **CascadeType.REMOVE:** Deletes the related entity when the parent is deleted.
  - **CascadeType.ALL:** Applies all cascade types.

#### Common Annotations

- `@JoinColumn(name = "column_name")`: Customizes the join column name.
- `@JoinTable(name = "table_name", joinColumns = @JoinColumn(name = "column_name"), inverseJoinColumns = @JoinColumn(name = "column_name"))`: Customizes join table and columns for many-to-many relationships.

@Query("SELECT p FROM Product p WHERE " + "(:name IS NULL OR LOWER(p.name) LIKE LOWER(CONCAT('%', :name, '%'))) AND " + "(:category IS NULL OR p.category = :category) AND " + "(:price IS NULL OR p.price = :price)")
List<Product> findByParams(@Param("name") String name,
@Param("category") Category category,
@Param("price") Double price);
