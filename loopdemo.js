var age = prompt("what is your age")
if(age>=60)
{
    console.log("first priority")
    alert("first")
}
else if(age>=40)
{
    console.log("second priority")
    alert("second")
}
else
{
    console.log("third priority")
    alert("third")
}
var time=prompt("what is the time now")
if(time<=7)
{
    console.log("play")
    alert("you play")
    time=time+1
}
else
{
    console.log("no play")
    alert("no play")
}
var name='tamil'
console.log(name[0])
console.log(name[1])
console.log(name[2])
console.log(name[3])
console.log(name[4])
var name1 = prompt("enter a name1")
console.log(name1.length)
for(i=0;i<name1.length;i++)
{
    console.log(name1[i])
}
