buy low , sell high ,

so if the diff is negative , then that means we have a lower buying point , we can set the buy with sell value and again start comparing with the next sell value.

class Solution {
public int maxProfit(int[] prices) {
int buy=0,sell=1,maxP=0,P=0;

        while(sell<prices.length)
        {
            P=prices[sell]-prices[buy];
            if(P<0)
            {
                buy=sell;
            }
            sell+=1;
            maxP=Math.max(maxP,P);
        }
        return maxP;
    }

}

// Best Time to Buy and Sell Stock II
public int maxProfit(int[] prices) {
int totalProfit = 0;

        // Loop through the prices array starting from the second day
        for (int i = 1; i < prices.length; i++) {
            // If the price on day i is greater than day i-1, calculate the profit
            if (prices[i] > prices[i - 1]) {
                totalProfit += prices[i] - prices[i - 1];
            }
        }

        return totalProfit;
    }
