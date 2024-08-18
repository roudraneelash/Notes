Kafka:
-- High Level Architecture

- Producer

-- Cluster(it is a group of Brokers)

- Broker(Kafka Servers)
- Topic(placeholder for partition)
- Partition(queue where actual server resides)

- Consumer Group(it has multiple consumers that consumes from the partitions)
  -- Consumer(each consumer can consume from single partition only of a single Consumer Group), eg: ConsumerGrA-c1,c2, ConsumerGrB-c1,c2, and we have Topic A-partition:P0,P1. so from CGrpA, c1 can consume from p0,and c2 from P1, vice versa.

-- Zookeper(it manages/keeps track of the state of the Consumer/partition state of the Messaging queue)

- Offset(it keeps the state of the Consumer/partition queue)
  -----------------Questions

1. what happend when queue size limit is reached ?
2. what happens to Messaged, when queue goes down ?

3. What happen when Consumer goes down?

4. what happens when consumer not able to process MSGs?

5. How Retry works? Different ways to Retry?

6. How Distributed Messaging Queue works?

7. What is Dead Letter Queue?

---------------------- Working

Producer produce Message ,
Messages contains:
Key: string/id
Value: actual message
partition: partition(optional)
Topic: topic name

-- here key/partition is optional, if there partition is not mentioned , then it follows robin circular pattern to assign the msg into the Broker-topic-partition.

---- Consuming
now we have Consumer GROUP, that have multiple consumers, like consumer A,b...

Consumer A consumed message queue from Parititon p0 and processed 3from the ququ.

so offset is 3.

this data is stored by Zookeper
consumer Group
consumer A,
topic A
Commited Offset:3(read/succefully processed queue data/msgs)

useCase 1: WHEN in ConsumerGrpA, consumer 1 process 3 MSG FROM partiton P0 and failed.
so it will be processed by another consumer from the Group, following/process from the committed offset from the zookepper data.

------ When Consumer goes down, it is handled by another consumer of the consumer group
------ when consumer cannot process msgs, it try to process it using Retry(#retries),if failed, it moves to another queue known as dead letter queue(failed msgs), and update the offset.

------------ Clusters have multiple Broker Servers
Each Broker Servers:B1 will have Topic A, and Partition 0(it is known as leader)
Each Broker Servers:B2 will have Topic A, and Partition 1, B2 will have replica of P0(replicas)
Each Broker Servers:B3 will have Topic A, and Partition 2
---- NOW IT WILL HAVE REPLICAS for when partition queue goes down, it will process the replica of the partition, and it will become Leader

### Kafka High-Level Architecture Notes

#### Core Components

1. **Producer**

   - Responsible for producing (publishing) messages to Kafka topics.

2. **Cluster**

   - A group of brokers working together.

3. **Broker**

   - Kafka servers that store data and serve clients. Each broker has a unique ID.

4. **Topic**

   - A logical channel to which producers send messages and from which consumers receive messages. Topics are divided into partitions.

5. **Partition**

   - A distributed queue that holds a subset of messages of a topic. Partitions are distributed across multiple brokers for scalability and fault tolerance.

6. **Consumer Group**

   - A group of consumers working together to consume messages from a topic. Each consumer in a group reads from a unique partition.

   - **Consumer**:
     - Each consumer in a group consumes messages from one partition of a topic.

7. **ZooKeeper**

   - Manages and coordinates Kafka brokers, keeps track of the status of Kafka cluster nodes, and maintains the state of the Kafka topics and partitions.

8. **Offset**
   - A unique ID assigned to each message within a partition. Keeps track of the consumer's position in the partition.

#### Questions and Answers

1. **What happens when the queue size limit is reached?**

   - Kafka topics are configured with retention policies based on time or size. Once the limit is reached, older messages are deleted according to the retention policy to make space for new messages.

2. **What happens to messages when the queue goes down?**

   - If a broker goes down, other brokers that contain replicas of the partitions on the downed broker take over (become leaders). No data loss occurs if replication is correctly configured.

3. **What happens when a consumer goes down?**

   - Kafka reassigns the partitions assigned to the downed consumer to other consumers in the same consumer group, ensuring no interruption in message consumption.

4. **What happens when a consumer is not able to process messages?**

   - If a consumer cannot process messages, it retries processing the message. If it continues to fail after the configured number of retries, the message is typically moved to a Dead Letter Queue (DLQ).

5. **How does retry work? Different ways to retry?**

   - **Retry Mechanisms**:
     - **Immediate Retry**: The consumer immediately retries processing the message.
     - **Exponential Backoff**: The consumer waits for increasing intervals of time before each retry.
     - **DLQ**: After exhausting all retries, the message is moved to a DLQ.

6. **How does a distributed messaging queue work?**

   - Kafka distributes messages across multiple partitions within a topic. Each partition can be hosted on different brokers, and consumers in a consumer group read from these partitions concurrently. Replication ensures data availability and fault tolerance.

7. **What is a Dead Letter Queue (DLQ)?**
   - A special queue where messages that cannot be processed successfully after a defined number of retries are stored. This allows for further inspection and handling of problematic messages.

#### Detailed Workflow

1. **Producing Messages**

   - Producers send messages to a topic. Each message consists of:
     - **Key**: Optional, used for partitioning.
     - **Value**: The actual message content.
     - **Partition**: Optional, if not specified, messages are distributed using round-robin.

2. **Consuming Messages**

   - Consumer groups consume messages from a topic. Each consumer in the group processes messages from specific partitions.
   - **Offsets**: Track the consumer's progress. After processing a message, the consumer commits the offset.

3. **Consumer Group Coordination**

   - ZooKeeper (or Kafka’s newer group coordinator) manages the state of consumers, partitions, and offsets.
   - If a consumer fails, another consumer in the group takes over processing from the last committed offset.

4. **Replication and Fault Tolerance**
   - Each partition has one leader and multiple replicas.
   - Leaders handle all reads and writes for the partition. Followers replicate the data.
   - If a leader fails, one of the replicas becomes the new leader to ensure availability.

### Summary

Kafka's architecture ensures high throughput, fault tolerance, and scalability through distributed partitions, consumer groups, replication, and efficient management by ZooKeeper. This robust structure makes Kafka suitable for real-time data streaming and processing applications.

### Real-Time Use Case Using Spring Boot and Kafka

#### Scenario: Real-Time Order Processing System

Let's design a real-time order processing system for an e-commerce platform using Spring Boot and Kafka. This system will handle incoming orders, process them, and update the inventory in real-time.

### Components

1. **Order Service** (Producer)
2. **Order Processing Service** (Consumer)
3. **Inventory Service** (Consumer)
4. **Kafka Broker** (Cluster with multiple brokers)
5. **ZooKeeper** (Coordination)

### Architecture Diagram

```
               +------------------+
               |  Order Service   |
               +------------------+
                       |
                       v
                 Kafka Broker
               +------------------+
               |  Topic: Orders   |
               +------------------+
                /       |       \
               v        v        v
+------------------+ +------------------+ +------------------+
| Order Processing | |  Inventory       | |  Another Service |
| Service          | |  Service         | |  (Future Use)    |
+------------------+ +------------------+ +------------------+
```

### Detailed Steps

1. **Order Service**: Receives new orders via a REST API and publishes them to the Kafka topic "Orders".
2. **Kafka Broker**: Manages the "Orders" topic, partitions, and replication.
3. **Order Processing Service**: Consumes messages from the "Orders" topic, processes the order (e.g., payment validation, order confirmation), and updates the order status.
4. **Inventory Service**: Consumes messages from the "Orders" topic and updates the inventory based on the order details.

### Implementation

#### 1. Setup Kafka

- Start ZooKeeper and Kafka broker.
- Create a Kafka topic "Orders".

```bash
bin/zookeeper-server-start.sh config/zookeeper.properties
bin/kafka-server-start.sh config/server.properties
bin/kafka-topics.sh --create --topic Orders --bootstrap-server localhost:9092 --partitions 3 --replication-factor 1
```

#### 2. Spring Boot Order Service (Producer)

**Dependencies**:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.kafka</groupId>
    <artifactId>spring-kafka</artifactId>
</dependency>
```

**Application.properties**:

```properties
spring.kafka.bootstrap-servers=localhost:9092
spring.kafka.producer.key-serializer=org.apache.kafka.common.serialization.StringSerializer
spring.kafka.producer.value-serializer=org.apache.kafka.common.serialization.StringSerializer
```

**OrderController.java**:

```java
@RestController
@RequestMapping("/orders")
public class OrderController {

    private final KafkaTemplate<String, String> kafkaTemplate;

    @Autowired
    public OrderController(KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    @PostMapping
    public ResponseEntity<String> createOrder(@RequestBody Order order) {
        kafkaTemplate.send("Orders", order.toString());
        return ResponseEntity.ok("Order received");
    }
}
```

**Order.java**:

```java
public class Order {
    private String orderId;
    private String product;
    private int quantity;
    // getters and setters
}
```

#### 3. Spring Boot Order Processing Service (Consumer)

**Dependencies**:

```xml
<dependency>
    <groupId>org.springframework.kafka</groupId>
    <artifactId>spring-kafka</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter</artifactId>
</dependency>
```

**Application.properties**:

```properties
spring.kafka.bootstrap-servers=localhost:9092
spring.kafka.consumer.group-id=order-processing-group
spring.kafka.consumer.key-deserializer=org.apache.kafka.common.serialization.StringDeserializer
spring.kafka.consumer.value-deserializer=org.apache.kafka.common.serialization.StringDeserializer
```

**OrderProcessingService.java**:

```java
@Service
public class OrderProcessingService {

    @KafkaListener(topics = "Orders", groupId = "order-processing-group")
    public void processOrder(String orderMessage) {
        Order order = parseOrder(orderMessage);
        // Process the order (e.g., payment validation, confirmation)
        System.out.println("Processed order: " + order);
    }

    private Order parseOrder(String orderMessage) {
        // Parse orderMessage to Order object
        return new Order();
    }
}
```

#### 4. Spring Boot Inventory Service (Consumer)

**Dependencies**:
Same as Order Processing Service.

**Application.properties**:

```properties
spring.kafka.bootstrap-servers=localhost:9092
spring.kafka.consumer.group-id=inventory-group
spring.kafka.consumer.key-deserializer=org.apache.kafka.common.serialization.StringDeserializer
spring.kafka.consumer.value-deserializer=org.apache.kafka.common.serialization.StringDeserializer
```

**InventoryService.java**:

```java
@Service
public class InventoryService {

    @KafkaListener(topics = "Orders", groupId = "inventory-group")
    public void updateInventory(String orderMessage) {
        Order order = parseOrder(orderMessage);
        // Update inventory based on order details
        System.out.println("Updated inventory for order: " + order);
    }

    private Order parseOrder(String orderMessage) {
        // Parse orderMessage to Order object
        return new Order();
    }
}
```

### Explanation

1. **Order Service**:

   - REST API endpoint to receive new orders.
   - Publishes order messages to Kafka topic "Orders".

2. **Order Processing Service**:

   - Consumes messages from the "Orders" topic.
   - Processes each order (e.g., validating payment, confirming the order).
   - Each consumer instance in the same group reads from different partitions.

3. **Inventory Service**:
   - Consumes messages from the "Orders" topic.
   - Updates the inventory based on the order details.
   - Ensures inventory is up-to-date with real-time order data.

### Conclusion

This setup ensures real-time processing of orders and inventory updates using Spring Boot and Kafka. The architecture can handle high throughput and is scalable, fault-tolerant, and easily extensible for additional services.
