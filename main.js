names=[];
function submit(){
    var s1=document.getElementById("n1").value;
    var s2=document.getElementById("n2").value;
    var s3=document.getElementById("n3").value;
    var s4=document.getElementById("n4").value;
    names.push(s1);
    names.push(s2);
    names.push(s3);
    names.push(s4);
    console.log(names);
    document.getElementById("output").innerHTML=names;
    document.getElementById("b1").style.display="none";
    document.getElementById("sorter").style.display="inline-block";

}
function sort(){
    names.sort();
    document.getElementById("output").innerHTML=names;
}