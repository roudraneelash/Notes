// check if X is a power-of-10 , return true else false.

for(int i=1; i<=x; i*=10)
{
    if(i==x)
    {
        return true;
    }else
    {
        if(i>Integer.MAX_VALUE/10)
        {
            return false;
        }
    }
    return false;
}