const my_math=(function(){
    return {
        add:(x,y) => x+y,
        multiply:(x,y) => x*y,
        subtract:(x,y) => y-x,
        divide:(x,y) => (x!=0)?y/x:null,
        pi: 3.14,
    }
})();
module.exports=my_math;