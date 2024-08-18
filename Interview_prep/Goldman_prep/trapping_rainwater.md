https://leetcode.com/problems/trapping-rain-water/description/?envType=company&envId=goldman-sachs&favoriteSlug=goldman-sachs-thirty-days

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9

--------------- visualization representation

Elevation: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

Drawing the elevation map:

Approach 1

- get the max left
- get the max right
- can store min(left,right)

max left- [0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3]
max right-[3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1, 0]
MIN(L,R)- [0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 1, 0]
max water-[0,-1, 1,-1, 1, 2, 2, 2, 2, 2, 1, 0]; // min(l,r)-height>=0

public int trap(int[] height) {
int[] maxleft=new int[height.length];
int[] maxright=new int[height.length];
int[] minleftright=new int[height.length];
int[] rainstorage=new int[height.length];
int prev=0,sum=0;
// store max left from left of the height array
for(int i=0;i<height.length;i++)
{
maxleft[i]=prev=Math.max(height[i],prev);
}
// store min from right from right of the height array
prev=0;
for(int i=height.length-1;i>=0;i--)
{
maxright[i]=prev=Math.max(height[i],prev);
}
// store the min(l,r)
for(int i=0;i<height.length;i++)
{
minleftright[i]=Math.min(maxleft[i],maxright[i]);
}
// water storage
for(int i=0;i<height.length;i++)
{
rainstorage[i]=Math.max(minleftright[i]-height[i],0);
sum+=rainstorage[i];
}
return sum;
}
