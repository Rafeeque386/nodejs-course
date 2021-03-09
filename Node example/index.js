var rectangle= require('./rectangle');
function solverect(l,b){
    console.log("solving rectangle with l="+l+"and b="+b);
   rectangle(l,b,(err,rectangle)=>{
       if(err){
           console.log("ERROR:",err.message);

       }
   
    else{
        console.log("The area of the rectangle is " + rectangle.area(l,b));
	    console.log("The perimeter of the rectangle is " + rectangle.perimeter(l,b));
    }
});
console.log("this statement after the call to rect()");
};
solverect(5,6);
solverect(2,9);
solverect(10,10);