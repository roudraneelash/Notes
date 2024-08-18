1. Constant window
   eg: given an array of elements , find the max sum for k consecutive elements .

arr=[-1,2,3,4,5,-1];
int l=0,r=k-1;
for(int i=l;i<=r;i++)
sum+=arr[i];
maxSum=sum;
while(r<arr.length-1)
{
sum=sum-arr[l];
l++;
r++;
sum+=arr[r];
maxSum=max(maxSum,sum);
}

2. Longest Subarray/substring where <condition>

- approach, -> Brute, Better, Optimal

eg: Longest subarrau with sum<=k
arr=[2,5,1,7,10] k=14

generate all the subarrays
