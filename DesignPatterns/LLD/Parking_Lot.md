vehicle(collects ticket)----> parking spot -----> makes payment ----- > exit

Requirement Gathering
Parking Spot should be nearest to the entrace
How many Entrances ?
Different Types of Spot? (2 wheeler/4 wheeler)
charges-> Hourly based Charge/Min due based Charge
Floors parking ?

Objects

- Vehicle-> Vehicle no, Vehicle type(Enum: 2wheeler,4wheeler)
- Ticket-> EntryTime, Parking Spot
- Entrance Gate-> find Parking Space, Update Parking Space,Generate ticket
- Parking Spot-> id, isEmpty, Vehicle, Price, Type(enum: 2/4 Wheeler)
- Exit Gate-> Cost Calculation, Payment, update Parking Spot

--------- Objects
Vehicle
vehicleNum:
VehicleType:Enum:2wheeler/4wheeler

<General>
ParkingSpot
id:int
isEmpty:boolean
Vehicle:Vehicle
Price:double

parkVehicle(Vehicle V);
removeVehicle();

--- Type of ParkingSpots(Scalability)
TwoWheelerSpot
Price(){10;}
FourWheelerSpot
Price(){20;}
ThreeWheelerSpot
Price(){15;}
HighUtilityVehicle
Price(){100;}
Handicapped
Price(){0;}

---------- ParkingSpotManager (has a relationship with ParkingSpot)
List<ParkingSpot> list

---

PSManager(List<PS> list)
{
list=list;
}

findParkingSpace();
addParkingSpace();// if we want to expand
removeParkingSpace();// if we want to reduce, eg:expansion
parkVehicle();
RemoveVehicle();

--- Type of PSManager( total spot is 1000- 600(2wheeler), 400(4wheeler))

TwoWheelerManager
List<PS> list={600 spots}
constructor(List)
{
super(list);
}

FourWheelerManager
List<PS> list={400 spots}
constructor(List)
{
super(list);
}

---------------- ParkingStrategy

NearToEntrance
neaRtoEntranceAndElevator
default

-------------- Ticket

long entry time
Vehicle V
ParkingSpot spot
// getters/setters

------- ParkingSpotManagerFactory

// return type of PSManager(Vehicle Type)
--- Entrance Gate, it will have PSManagerFACTORY

PSFactory factory;
PSManager;

-- methods
findSpace(Vehicle type,EntranceGateNo)-> implement strategy pattern to find spot
BookSpot(Vehicle)
GenerateTicket(Vehicle,ParkingSpot)

--------------- Pricing Strategy

Price(){
defaultrate{
return PS.price;
}
}
---- types of pricing strategy
hourlyPS
Price(Ticket)
{
hourly(charges*PS.Price)
}
minutePS
Price(ticket)
{
minute*PS.price;
}

-------------- costComputation

Price()
{
obj.Price(ticket)// here obj is set from the base class implementation , and its strategy
}

2wheeler{
constructor()
{
super(pricingStrategy)
{
super(hourlyPS);
}
}
}

---

4wheeler{
constructor()
{
super(pricingStrategy)
{
super(minutePS);
}
}
}

------------ ExitGate
PSManager;// to manage ps after exit
ticket; calculate on the ticket of the vehicle
CostComputational OBJ;// this could be identified from CC factory, type of vehicle, and calculate

-- methods
PriceCal();
Payment();// we could store the data for ticket, update exit time and Payment
removeVehicle();
