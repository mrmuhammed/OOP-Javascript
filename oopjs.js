function humanBeing(){
    var name;
    var age;
    var sex;
    var displayArea;
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
humanBeing.prototype.fnSetMyProfile = function(myName, myAge, mySex, myDisplayAre){
    this.name = myName; 
    this.age = myAge;
    this.sex = mySex;
    this.displayArea = myDisplayAre;
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
humanBeing.prototype.fnWalk = function(){
    var str = this.name + " can walk."
    document.getElementById(this.displayArea).innerHTML = str;
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
humanBeing.prototype.fnTellAge = function(){
    var str = this.name + " is " + this.age + " years old."
    document.getElementById(this.displayArea).innerHTML += "&lt;br&gt;"+ str;
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
humanBeing.prototype.fnTellSex = function(){
    var str = this.name + " is a " + this.sex + "."
    document.getElementById(this.displayArea).innerHTML += "&lt;br&gt;"+ str;
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
function fnRunScript(){
    var man_1 = new humanBeing();
    man_1.fnSetMyProfile("Tom", 25, "male", "resultAreaID_1")
    man_1.fnWalk();
    man_1.fnTellAge();
    man_1.fnTellSex();
    var woman_1 = new humanBeing();
    woman_1.fnSetMyProfile("Rosy", 22, "female", "resultAreaID_2")
    woman_1.fnWalk();
    woman_1.fnTellAge();
    woman_1.fnTellSex();
}
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
$(document).ready(function() {
    document.getElementById('testCodeBtnID').onclick = function (){
        fnRunScript()
    };
});