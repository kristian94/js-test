//function Student(name, age){
//    this.name = name;
//    this.age = age;
//};

var Student = function(id, name, age){
    this.id = id;
    this.name = name;
    this.age = age;
};

var s1 = new Student(01, "Gorm", 20);
var s2 = new Student(02, "Lenin", 34);
var s3 = new Student(03, "Ralf", 23);

var students = [s1, s2, s3];

console.log(students.length);

var sortStudents = function(studentArray, student){
    for (var i = 0, max = studentArray.length; i < max; i++) {
        if(studentArray[i] === student) studentArray.splice(i, 1);
    }
    return studentArray;
};



sortStudents(students, s1);

console.log(students.length);

students.forEach(function(s){
    if(s.age > 30) console.log(s.name);
});

var max = function(elements){
    res = 0;
    elements.forEach(function(element){
        if(element > res) res = element;
    });
    return res;
};

var stuff = [5, 2, 3, "hey"];

console.log(max(stuff));

var getCurDay = function(){
    var d = new Date();
    var wd = d.getDay();
    var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday" , "saturday"];
    return days[wd];
};

console.log(getCurDay());

var Animal = function(name, isMammal, species, color){
    this.name = name;
    this.isMammal = isMammal;
    this.species = species;
    this.color = color;
    this.toString = function(){
        var mam = "not ";
        if (this.isMammal) mam = ""; 
        var line = this.name + ": " + this.color + " " + this.species + ". Is " + mam + "a mammal";
        return line;
    };
};

var a1 = new Animal("George", true, "monkey", "brown");
var a2 = new Animal("Jimmy", false, "cobra", "green");
var a3 = new Animal("Henry", true, "cat", "black");

var animals = [a1, a2, a3];

animals.forEach(function(ani){
    console.log(ani.toString());
});

var animalsFiltered = animals.filter(function(ani){
    return(ani.isMammal);
});

console.log("filtering non-mammals");

animalsFiltered.forEach(function(ani){
    console.log(ani.toString());
});

var animalsMap = animals.map(function(ani){
    return ani.name;
});

animalsMap.forEach(function(ani){
    console.log(ani);
});