// Q01
var num=[];
//  Q02
var num=[];
// Q03
var string = ["xzy","abc","omamah"];
//  Q04
var numbers =[1,2,3,4];
// Q05
var bool =[true,false];
// Q06
var mix = ["abc",undefined,12,true];
//  Q07
var qual =[ "SSC","HSC","BSC","BS","BCOM","MS","M.Phil","PhD"
  ];
document.write("QUALIFICATIONS:<br>");
document.write("1)"+ qual[0]  +"<br>  2)" +qual[1] +"<br> 3)" +qual[2] +"<br> 4)" + qual[3]+" <br> 5)"+qual[4]+"<br> 6)"+qual[5]+"<br> 7)"+qual[6]+"<br> 8)"+qual[7]);
// Q08
var students=["MICHEAL" ,"JOHN", "TONY"];
var score =[230,320,480];
var per =["46%","64%","96%"];
document.write(" <br> score of "+ students[0]+ " is" +score[0] + " Persentage: "+per[0] +"<br>");
document.write(" score of "+ students[1]+ " is" +score[1] + " Persentage: "+per[1] +"<br>");
document.write(" score of "+ students[2]+ " is" +score[2] + " Persentage: "+per[2] +"<br>");
// Q09
var color=["red","yellow", "blue", "green"];
var coloruser=prompt("Add color");
color.unshift( coloruser);
var coloruser1=prompt("Add color");
color.push(coloruser1);
document.write(color);
 color.unshift("purple","green")
document.write(color);
 color.shift();
 color.pop();
document.write(color)
var indexno = prompt("WHICH INDEX NO YOU WANT TO ADD COLOR");
var newColor = prompt("WHICH COLOR YOU WANT TO ADD");
color.splice(indexno,0,newColor);
document.write(color);
var del=prompt("enter index no you want to delete color");
var quan=prompt("how many color");
color.splice(del,quan);
document.write(color)
// Q10
var as=[24,1,50,40]
document.write("<br>SCORE OF STUDENTS : " +as)
var as1= as.sort()
document.write( " <br>ORDER SCORE OF STUDENTS : " +as1)
// Q11
var cities= ["<br> karachi","lahore","multan <br>"];
document.write("<br> Cities list :"+cities)
var sel = cities.slice(1,3)
document.write("Selected Cities list :<br>"+sel)
// Q12
var arr = [ "this", " is "," my "," cat"];
document.write(arr.concat());
var str=["this is my cat"];
// Q13
var hd=["<br>Devices:<br>"];
var hd1=["keybord","mouse","printer","monitor"];
var out1=["<br> Out:"];
var name1=["<br> keybord:"];
var out2=["<br> Out:"];
var name2=["<br> mouse:"];
var out3=["<br> Out:"];
var name3=["<br> printer:"];
var out4=["<br> Out:"];
var name4=["<br> monitor:"];
document.write(hd+hd1+out1+name1+out2+name2+out3+name3+out4+name4);
// Q14
var hd=["<br>Devices:<br>"];
var hd1=["keybord","mouse","printer","monitor"];
var out1=["<br> Out:"];
var name1=["<br> monitor:"];
var out2=["<br> Out:"];
var name2=["<br> printer:"];
var out3=["<br> Out:"];
var name3=["<br> mouse:"];
var out4=["<br> Out:"];
var name4=["<br> keyboard:"];
document.write(hd+hd1+out1+name1+out2+name2+out3+name3+out4+name4);



