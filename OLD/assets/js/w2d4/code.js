String.prototype.filter=function(words){
    let result=this;
    words.forEach(function(w){
        result=result.replaceAll(w,"");
    });
    return result.replace(/\s+/g,' ').trim();
};

Array.prototype.bubbleSort=function()
{
    let arr=this;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < ( arr.length - i -1 ); j++){
          if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
          }
        }
    }
    return arr;
}

var Person = function() {};
Person.prototype.initialize = function(name, age)
{
 this.name = name;
 this.age = age;
}
Person.prototype.describe = function()
{
 return this.name + ", " + this.age + " years old.";
}

var Student = function() {};
Student.prototype = new Person();
Student.prototype.learn = function(subject)
{
    return this.name + " just learned " + subject;
}

var Teacher = function() {};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject)
{
    return this.name + " is now teaching " + subject;
}

