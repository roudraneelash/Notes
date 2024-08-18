Sure, let's put all the pieces together and create a comprehensive design for the parking lot system based on your requirements. Here's a detailed design in Java:

### Enum for Vehicle Type

```java
public enum VehicleType {
    TWO_WHEELER,
    FOUR_WHEELER
}
```

### Vehicle Class

```java
public class Vehicle {
    private String vehicleNum;
    private VehicleType vehicleType;

    public Vehicle(String vehicleNum, VehicleType vehicleType) {
        this.vehicleNum = vehicleNum;
        this.vehicleType = vehicleType;
    }

    public String getVehicleNum() {
        return vehicleNum;
    }

    public VehicleType getVehicleType() {
        return vehicleType;
    }
}
```

### ParkingSpot Class

```java
public abstract class ParkingSpot {
    private int id;
    private boolean isEmpty;
    private Vehicle vehicle;
    private double price;

    public ParkingSpot(int id, double price) {
        this.id = id;
        this.isEmpty = true;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public boolean isEmpty() {
        return isEmpty;
    }

    public void parkVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
        this.isEmpty = false;
    }

    public void removeVehicle() {
        this.vehicle = null;
        this.isEmpty = true;
    }

    public double getPrice() {
        return price;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }
}

class TwoWheelerSpot extends ParkingSpot {
    public TwoWheelerSpot(int id) {
        super(id, 10.0);
    }
}

class FourWheelerSpot extends ParkingSpot {
    public FourWheelerSpot(int id) {
        super(id, 20.0);
    }
}

// You can add more spot types similarly
```

### Ticket Class

```java
public class Ticket {
    private long entryTime;
    private Vehicle vehicle;
    private ParkingSpot spot;

    public Ticket(long entryTime, Vehicle vehicle, ParkingSpot spot) {
        this.entryTime = entryTime;
        this.vehicle = vehicle;
        this.spot = spot;
    }

    public long getEntryTime() {
        return entryTime;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public ParkingSpot getSpot() {
        return spot;
    }
}
```

### ParkingSpotManager Class

```java
import java.util.List;

public abstract class ParkingSpotManager {
    protected List<ParkingSpot> spots;

    public ParkingSpotManager(List<ParkingSpot> spots) {
        this.spots = spots;
    }

    public ParkingSpot findParkingSpace() {
        for (ParkingSpot spot : spots) {
            if (spot.isEmpty()) {
                return spot;
            }
        }
        return null; // No available spots
    }

    public void addParkingSpace(ParkingSpot spot) {
        spots.add(spot);
    }

    public void removeParkingSpace(ParkingSpot spot) {
        spots.remove(spot);
    }

    public void parkVehicle(ParkingSpot spot, Vehicle vehicle) {
        spot.parkVehicle(vehicle);
    }

    public void removeVehicle(ParkingSpot spot) {
        spot.removeVehicle();
    }
}

class TwoWheelerManager extends ParkingSpotManager {
    public TwoWheelerManager(List<ParkingSpot> spots) {
        super(spots);
    }
}

class FourWheelerManager extends ParkingSpotManager {
    public FourWheelerManager(List<ParkingSpot> spots) {
        super(spots);
    }
}
```

### ParkingSpotManagerFactory Class

```java
import java.util.List;

public class ParkingSpotManagerFactory {
    public static ParkingSpotManager getManager(VehicleType type, List<ParkingSpot> spots) {
        switch (type) {
            case TWO_WHEELER:
                return new TwoWheelerManager(spots);
            case FOUR_WHEELER:
                return new FourWheelerManager(spots);
            default:
                throw new IllegalArgumentException("Invalid vehicle type");
        }
    }
}
```

### PricingStrategy Interface and Implementations

```java
public interface PricingStrategy {
    double calculatePrice(Ticket ticket, long exitTime);
}

class HourlyPricingStrategy implements PricingStrategy {
    @Override
    public double calculatePrice(Ticket ticket, long exitTime) {
        long duration = (exitTime - ticket.getEntryTime()) / 3600; // convert ms to hours
        return duration * ticket.getSpot().getPrice();
    }
}

class MinutePricingStrategy implements PricingStrategy {
    @Override
    public double calculatePrice(Ticket ticket, long exitTime) {
        long duration = (exitTime - ticket.getEntryTime()) / 60; // convert ms to minutes
        return duration * ticket.getSpot().getPrice();
    }
}
```

### CostComputation Class

```java
public class CostComputation {
    private PricingStrategy pricingStrategy;

    public CostComputation(PricingStrategy pricingStrategy) {
        this.pricingStrategy = pricingStrategy;
    }

    public double computeCost(Ticket ticket, long exitTime) {
        return pricingStrategy.calculatePrice(ticket, exitTime);
    }
}
```

### EntranceGate Class

```java
import java.util.Map;

public class EntranceGate {
    private ParkingSpotManagerFactory factory;
    private Map<VehicleType, ParkingSpotManager> managers;

    public EntranceGate(ParkingSpotManagerFactory factory, Map<VehicleType, List<ParkingSpot>> spotsMap) {
        this.factory = factory;
        this.managers = new HashMap<>();
        for (Map.Entry<VehicleType, List<ParkingSpot>> entry : spotsMap.entrySet()) {
            this.managers.put(entry.getKey(), factory.getManager(entry.getKey(), entry.getValue()));
        }
    }

    public ParkingSpot findSpace(Vehicle vehicle) {
        ParkingSpotManager manager = managers.get(vehicle.getVehicleType());
        return manager.findParkingSpace();
    }

    public Ticket generateTicket(Vehicle vehicle, ParkingSpot spot) {
        return new Ticket(System.currentTimeMillis(), vehicle, spot);
    }

    public void bookSpot(Vehicle vehicle, ParkingSpot spot) {
        ParkingSpotManager manager = managers.get(vehicle.getVehicleType());
        manager.parkVehicle(spot, vehicle);
    }
}
```

### ExitGate Class

```java
public class ExitGate {
    private ParkingSpotManager manager;
    private CostComputation costComputation;

    public ExitGate(ParkingSpotManager manager, CostComputation costComputation) {
        this.manager = manager;
        this.costComputation = costComputation;
    }

    public double calculatePrice(Ticket ticket) {
        long exitTime = System.currentTimeMillis();
        return costComputation.computeCost(ticket, exitTime);
    }

    public void makePayment(Ticket ticket) {
        double amount = calculatePrice(ticket);
        System.out.println("Payment of " + amount + " received.");
        manager.removeVehicle(ticket.getSpot());
    }
}
```

### Main Class to Demonstrate

```java
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ParkingSystemDemo {
    public static void main(String[] args) {
        List<ParkingSpot> twoWheelerSpots = new ArrayList<>();
        for (int i = 1; i <= 600; i++) {
            twoWheelerSpots.add(new TwoWheelerSpot(i));
        }

        List<ParkingSpot> fourWheelerSpots = new ArrayList<>();
        for (int i = 601; i <= 1000; i++) {
            fourWheelerSpots.add(new FourWheelerSpot(i));
        }

        Map<VehicleType, List<ParkingSpot>> spotsMap = new HashMap<>();
        spotsMap.put(VehicleType.TWO_WHEELER, twoWheelerSpots);
        spotsMap.put(VehicleType.FOUR_WHEELER, fourWheelerSpots);

        ParkingSpotManagerFactory factory = new ParkingSpotManagerFactory();
        EntranceGate entranceGate = new EntranceGate(factory, spotsMap);

        Vehicle bike = new Vehicle("KA-01-1234", VehicleType.TWO_WHEELER);
        ParkingSpot bikeSpot = entranceGate.findSpace(bike);
        entranceGate.bookSpot(bike, bikeSpot);
        Ticket bikeTicket = entranceGate.generateTicket(bike, bikeSpot);

        PricingStrategy hourlyStrategy = new HourlyPricingStrategy();
        CostComputation costComputation = new CostComputation(hourlyStrategy);
        ExitGate exitGate = new ExitGate(factory.getManager(VehicleType.TWO_WHEELER, twoWheelerSpots), costComputation);

        exitGate.makePayment(bikeTicket);
    }
}
```

### Explanation:

- **Vehicle**: Represents the vehicle entering the parking lot.
- **ParkingSpot**: Represents a parking spot and can be of different types such as two-wheeler, four-wheeler, etc.
- **Ticket**: Represents a parking ticket issued to a vehicle.
- **ParkingSpotManager**: Manages parking spots, including finding, adding, removing, and parking vehicles.
- **ParkingSpotManagerFactory**: Factory to get the appropriate manager based on vehicle type.
- **PricingStrategy**: Strategy interface and implementations for hourly and minute-based pricing.
- **CostComputation**: Uses a pricing strategy to compute the cost of parking.
- **EntranceGate**: Manages vehicle entry, including finding parking spots and issuing tickets.
- **ExitGate**: Manages vehicle exit, including calculating the cost and processing payment.

This design should provide a robust and scalable parking lot management system.
