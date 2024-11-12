// Your are an avid rock collector who lives in southern California. Some rare and desirable rocks just became available in New york, so you are planning a cross-country road trip. There are several other rare rocks that you could pick up along the way.

you have been given a grid filled with numbers, representing the number of rare rocks avaialble in various cities across the country. Your objective is to find the optimal
path from So_Cal to New_York that would allow you to accumulate the most rocks along the way.

Note: You caan only travel either north (up) or east (right).

// Implement optimalPath() correctly.

example:

{{0,0,0,0,5}, New_York (finish) 
    {0,1,1,1,0},
So_Cal(start) {2,0,0,0,0}}

the total for this example would be 10(2+0+1+1+1+0+5).

class solution{

    public static int optimalPath(int[][] grid)
    {
        // check for empty grid
        if(grid.length==0 || grid[0].length==0){
            return 0;
        }

        for(int row=grid.length-1;row>=0;row--){
            for(int col=0;col<grid[0].length;col++)
            {
                if(row<grid.length-1 && col>0)
                {
                    grid[row][col]+=Math.max(grid[row+1][col],grid[row][col-1]);
                }else if(row<grid.length-1)
                {
                    grid[row][col]+=grid[row+1][col];
                }else if(col>0)
                {
                    grid[row][col]+=grid[row][col-1];
                }
            }

            int result=grid[0][grid[0].length-1];
            System.out.println(result);
            return result;
        }
    }

    public static boolean doTestPass(){
        boolean result=true;

        result&= optimalPath(new int[][]{
            {0,0,0,0,5},
            {0,1,1,1,0},
            {2,0,0,0,0}})==10;
        // Random numbers
         result&= optimalPath(new int[][]{
            {1,3,2,0,2,1,8},
            {3,4,1,2,0,1,1},
            {1,1,1,2,3,2,1},
            {1,0,1,1,4,2,1}})==25;
        // All 0's
        result&= optimalPath(new int[][]{
            {0,0,0,0,0},
            {0,0,0,0,0},
            {0,0,0,0,0},
            {0,0,0,0,0}})==0;
        // Many Optimal paths
        result&= optimalPath(new int[][]{
            {1,1,1,1,1},
            {1,0,1,0,1},
            {1,0,1,0,1},
            {1,1,1,1,1}})==8;
        // Empty grid
        result &= optimalPath(new int[][]{{}})==0;

        return result;
    }
}
