// given an array of non-negative integers representing the elavtions from the vertical cross section of a range of hills, determine how many units of snow could be captured between the hills.

-- similiar like trapping rain water question

public static int computeSnowpack(int[] groundHeightAt){
    // check for empty array
    if(groundHeightAt.length==0){
        return 0;
    }

    int total=0;
    int[] maxHeightToLeftOf= new int[groundHeightAt.length];
    int[] maxHeightToRightOf= new int[groundHeightAt.length];

    int currentMaxLeftHeight=0;
    for(int i=0;i<groundHeightAt.length;i++)
    {
        currentMaxLeftHeight= Math.max(currentMaxLeftHeight,groundHeightAt[i]);
        maxHeightToLeftOf[i]=currentMaxLeftHeight;
    }
    int currentMaxRightHeight=0;
    for(int i=groundHeightAt.length-1;i>0;i--){
        currentMaxRightHeight=Math.max(currentMaxRightHeight,groundHeightAt[i]);
        maxHeightToRightOf[i]=currentMaxRightHeight;
    }
    for(int i=0; i<groundHeightAt.length;i++)
    {
        int snowHeight= Math.min(maxHeightToRightOf[i],maxHeightToLeftOf[i]);
        maxHeightToRightOf[i]=currentMaxRightHeight;
    }

    for(int i=0;i<groundHeightAt.length;i++)
    {
        int snowHeight= Math.min(maxHeightToRightOf[i],maxHeightToLeftOf[i]);
        if(snowHeight>groundHeight[i]) total+=snowHeight-groundHeight[i];
    }

    System.out.println(Arrays.toString(groundHeightAt)+' '+total);
    return total;
}

public static boolean doTestsPass(){
    boolean result=true;
    result &= computeSnowPack(new int[]{0,1,3,0,1,2,0,4,2,0,3,0})==13;
    result &= computeSnowPack(new int[]{1,0,0,0,0,0,0,0,0,0,0,1})==10;
    result &= computeSnowPack(new int[]{0,0,0,0,0})==0;
    result &= computeSnowPack(new int[]{0,0,1,0,0})==0;
    result &= computeSnowPack(new int[]{1})==0;
    result &= computeSnowPack(new int[]{})==0;

    return result;
}