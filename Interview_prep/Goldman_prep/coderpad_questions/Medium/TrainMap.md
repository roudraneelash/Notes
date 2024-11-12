// implement def shortestPath(self,fromStationName, toStationName) method to find shortest path between 2 stations.

-- visual rep of the Train map used.

King's cross st Pancras --- Angel ---- Old Street
|                    \                           \
|                     \                            \
|                       \                           \
Russell Square         Farringdon ---- Barbican ---- Moorgate
|                                                       /
|                                                      /
|                                                     /
Holborn --- Chancery Lane --- St Paul's --------- Bank

public class Solution{

    /*
    class Station
    <p>
    Represents Station in the rail network. Each station is identified by unique name. Station is connected with other stations. - this information is stored in the 'neighbours' field. Two station objects with the same name are equal therefore they are considered to be the same station.
    */

    private static class Station {
        private String name;
        private List<Station> neighbours;

        public Station(String name){
            this.name=name;
            this.neighbours=new ArrayList<>(3);
        }

        String getName(){
            return name;
        }

        void addNeighbour(Station v){
            this.neighbours.add(v);
        }

        List<Station> getNeighbours(){
            return this.neighbours;
        }

        @Override
        public boolean equals(Object obj){
            return obj instanceOf Station && this.name.equals(((Station) obj).getName());
        }

        @Override
        public int hashCode(){
            return Objects.hash(this.name);
        }
    }

        /*
        class TrainMap
        <p>
        Represents whole rail network - consists of number of the stations objects.
        Stations in the map are bi-directionally connected. Distance between any 2 stations 
        is of same constant distance unit. This implies that shortest distance between any
        2 stations depends only on number of stations in between
        */
        private static class TrainMap{

            private HashMap<String, Station> stations;

            public TrainMap(){
                this.stations=new HashMap<>();
            }

            public TrainMap addStation(String name){
                Station s= new Station(name);
                this.stations.putIfAbsent(name,s);
                return this;
            }
            public Station getStation(String name){
                return this.stations.get(name);
            }

            public TrainMap connectStations(String fromStation, String toStation){
                return connectStations(getStation(fromStation),getStation(toStation));
            }

            public TrainMap connectStations(Station fromStation, Station toStation){
                if(fromStation==null){
                    throw new IllegalArgumentException("From station is null");
                }
                if(toStation==null)
                {
                    throw new IllegalArgumentException("To station is null");
                }
                fromStation.addNeighbour(toStation);
                toStation.addNeighbour(fromStation);
                return this;
            }
            private static List<Station> pathFromRootToStation(Station station, Map<Station, Station> bfsTreeParent){
                var rootToStationPath= new ArrayDeque<Station>();
                rootToStationPath.add(station);
                var current= station;
                while((current==bfsTreeParent.get(current)) !=null){
                    rootToStationPath.addFirst(current);
                }
                return new ArrayList<>(rootToStationPath);
            }
            public List<Station> shortestPathBFS(String from, String to){
                Station root= this.stations.get(from);
                if(root==null){
                    throw new IllegalArgumentException("Start station is not present in the map");
                }
            }
            Station goalNode= this.stations.get(to);
            if(goalNode==null){
                throw new IllegalArgumentException("Goal station is not present in the map");
            }
            var searchSpace= new ArrayDeque<Station>();
            var bfsTreeParent= new HashMap<Station,Station>();
            var visitedStations= new HashSet<Station>();


            searchSpace.add(root);
            visitedStations.add(root);
            while(!searchSpace.isEmpty()){
                var currentStation= searchSpace.poll();

                if(currentStation.equals(goalNode)){
                    return pathFromRootToStation(currentStation,bfsTreeParent);
                }
                for(var neighbor:currentStation.getNeighbours()){
                    if(!visitedStations.contains(neighbour)){
                        bfsTreeParent.put(neighbour,currentStation);
                        visitedStations.add(neightbour);
                        searchSpace.addLast(neighbour);
                    }
                }
            }
            throw new RuntimeException("goal node not reachable");

        }

        public Set<List<Station>> getAllPathsDFS(String from, String to){
            var allPaths= new HashSet<List<Station>>();
            var root=this.stations.get(from);
            var goalNode= this.stations.get(to);

            var searchSpace= new Stack<Station>();
            searchSpace.push(root);

            allPathDFSRecursive(searchSpace,goalNode,allPaths);
            return allPaths;
        }

        private void allPathsDFSRecursive(Stack<Station> searchSpace, Station goalNode, Set<List<Station>> paths) {

                var currentStation = searchSpace.peek();

                if (currentStation.equals(goalNode)) {

                    paths.add(List.copyof(searchSpace));

                } else {

                    for (var neighborStation: currentStation.getNeighbours()) {

                        if (!searchSpace.contains(neighborStation)) {
                            searchSpace.push(neighborStation);
                            allPathsDFSRecursive (searchSpace, goalNode, paths);
                        }
                    }
                }
                searchSpace.pop();

        }

        public List<Station> shortestPathDFS(String from, String to) {
                return getAllPathsDFS(from, to)
                                .stream()
                                .min(Comparator.comparingInt(List::size))
                                .orElse(null);

        }

        public static String convertPathToString Representation (List<Station> path) {
            return String.join("->", path.stream().map(Station::getName).toList());

        }
    public static boolean doTestsPass() (

//todo: implement more tests, please

// feel free to make testing more elegant

TrainMap trainMap new TrainMap();

trainMap.addStation("King's Cross St Pancras")

.addStation("Angel")

.addStation("Old Street")

.addStation("Moorgate")

.addStation("Farringdon")

.addStation("Barbican")

.addStation("Russel Square")

.addStation("Holborn")

.addStation("Chancery Lane")

.addStation("St Paul's")

.addStation("Bank");

trainMap.connectStations ("King's Cross St Pancras", "Angel")

.connectStations ("King's Cross St Pancras", "Farringdon")

.connectStations ("King's Cross St Pancras", "Russel Square")

.connectStations ("Russel Square", "Holborn")

.connectStations ("Holborn", "Chancery Lane") .connectStations("Chancery Lane", "St Paul's")

.connectStations ("St Paul's", "Bank")

.connectStations ("Angel", "Old Street")

.connectStations ("Old Street", "Moorgate")

.connectStations ("Moorgate", "Bank") .connectStations("Farringdon", "Barbican")

.connectStations("Barbican", "Moorgate");

boolean pass true;

String solution "King's Cross St Pancras->Russel Square->Holborn-Chancery Lane->St Paul's";

pass pass && solution.equals(TrainMap.convertPathToStringRepresentation (trainMap.shortest PathDFS("King's Cross St Pancras", "St Paul's"))); pass pass && solution.equals(TrainMap.convertPathToStringRepresentation (trainMap.shortest PathBFS("King's Cross St Pancras", "St Paul's")));

return pass;

}
}