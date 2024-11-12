static class MyPrefixSearch{
    String document;

    MyPrefixSearch(String document){
        this.document=document;
    }

    // findAll: Return a list of all locations in a document where the (case insensitive) word begins with the given prefix.
    // Example: given the document "a aa Aaa abca bca",
    1) findAll("a") -> [0,2,5,9]
    2) findAll("bc") -> [14]
    3) findAll("aA") -> [2,5]
    4) findAll("abc") -> [9]

    public List<Integer> findAll(String prefix){
        // TODO: Implement this function
        return null;
    }
}

public static void doTestsPass(){

    MyPrefixSearch prefixSearch= new MyPrefixSearch(DOCUMENT);

    BiFunction<List<?>, List<?>, Boolean> resultMatches= (actual,expected)-> actual!=null && expected.equals(actual);

    if(resultMatches.apply(
        prefixSearch.findAll("demonstrate"),Arrays.asList(80))
        && resultMatches.apply(prefixSearch.findAll("pub"),Arrays.asList(3,988))
        && resultMatches.apply(prefixSearch.findAll("publishiing"),Arrays.asList(3,988))
        && resultMatches.apply(prefixSearch.findAll("lab"),Arrays.asList(1173,1263,1517))
        && resultMatches.apply(prefixSearch.findAll("laborum"),Arrays.asList(1517))
        && resultMatches.apply(prefixSearch.findAll("in"),Arrays.asList(0,404,717,839,857,873,930,1159,1334,1351,1468))
        && resultMatches.apply(prefixSearch.findAll("lor"),Arrays.asList(34,434,456,686,1061,1080))
        && resultMatches.apply(prefixSearch.findAll("l"),Arrays.asList(34,309,434,456,557,651,686,806,1061,1080,1173,1263,1517))
        && prefixSearch.findAll("").size()==0
        && prefixSearch.findAll("hamburger").size()==0){
            System.out.println("All test pass");
        }else{
            System.out.println("Test failed");
        }
}

class Solution{
    static class MyPrefixSearch{
        private final MyTrie index= new MyTrie(null);
        MyPrefixSearch(String document){
            buildIndex(document);
        }

        private void buildIndex(String document){
            var map= new HashMap<Integer,Integer>();
            int location=0;
            String[] words= document.split(" ");
            for(String word:words){
                if(word.length()>0){
                    // could be an extra whitespace, leading to "" token
                    String clean= word.toLowerCase().replaceAll("[^\\p{IsAlphabetic}^\\p{IsDigit}]","");
                    index.add(clean,location);
                }
                location+=word.length()+1;
            }
        }
    }
    public List<Integer> findAll(String prefix){
        return index.get(prefix);
    }

    static class MyTrie{
        Character character;
        private final List<Integer> locations= new LinkedList<>();
        private final Map<Character, MyTrie> nodes= new HashMap<>();

        MyTrie(Character character){
            this.character= character;
        }

        // record a substring location/
        public void add(String chars,int location){
            if(character!=null)
            {
                // note: this trie variant records at each node, not just leaf nodes(simpler, less space efficient).
                locations.add(location);
            }
            if(char.length()>0)
            {
                char c= chars.charAt(0);
                nodes.putIfAbsent(c,new MyTrie(c));
                nodes.get(c).add(chars.substring(1),location);
            }
        }

        // retrieve locations for substring
        public List<Integer> get(String prefix){
            if(prefix.length()>0)
            {
                char c= prefix.charAt(0);
                if(nodes.containsKey(c))
                return nodes.get(c).get(prefix.substring(1));
                else
                return new LinkedList<>();
            }else
            {
                return locations;
            }
        }
    }
}