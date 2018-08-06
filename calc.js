//begin adding
//set carry to zero.
var carry=0;
//set the string, s, which will contain the answer
var s="";
//now add the two numbers:
//work from the right to the left, starting at the length of the longest string:
//which is always x in this code
var numx,numy;
//numx and numy will hold the digits in each number to add
for (var i=xlen-1;i>=0;i--)
{
//only add the y numbers, if there are any left, else we add zero
numy=0;
if ((ylen-xlen+i)>-1)
numy=parseInt(y.charAt(ylen-xlen+i));
//In the above, when ylen-xlen+i=0, we are at the end of the y numbers
//and i=xlen-ylen. For the next i, (i-1), we will be beyond the length of y, and
//so just add a possible carry in the next place, and thereafter, add only zeros
//to the longer number, x
//x is always the longest string
numx=parseInt(x.charAt(i));
//add the sum of the numbers and any carry from previously
//we add only the units bit of the number
//10 is the normal base for decimals
s=(numy+numx+carry)%10+s;
//we carry the tens bit of the new number
carry=Math.floor((numy+numx+carry)/10);
}//end of adding
if (carry>0)
s=carry+s;
/*
at the end of the first number, x, we might still have something to carry
For instance, 9+9 gives 8, plus a FINAL carry of 1 (in a new place)
  9+
  9=
18
But:
18+
  9
27
... has a normal carry one place from the end, but no carry at the end (1+1 (carry)=2, no carry
so we add any carry on the front of the string
*/


//Clean code
var carry=0;
var s="";
var numx,numy;
for (var i=xlen-1;i>=0;i--) {
	numy=0;
	if ((ylen-xlen+i)>-1)
	numy=parseInt(y.charAt(ylen-xlen+i));
	numx=parseInt(x.charAt(i));
	s=(numy+numx+carry)%10+s;
	carry=Math.floor((numy+numx+carry)/10);
	}
if (carry>0)
s=carry+s;
