let dropElement=document.querySelector(".main");

let table=document.querySelector(".table");

let upload=document.querySelector(".icon");

let input=document.querySelector("input");


upload.onclick=function(){

input.click();

}
input.onchange=function(e){
upoladimage(e.target.files);

}
dropElement.ondragover=function(e) {

e.preventDefault();

}


let count=1;

dropElement.ondrop=function(e) {

e.preventDefault();

upoladimage(e.dataTransfer.files);

}



function upoladimage(files)

{


[...files].forEach(file=>{

let reader=new FileReader();

reader.onloadend=function(e){

let tr=`<tr>

<th scope="row">${count++}</th>

<td>

<img src="${e.target.result}" alt="image" width="200px">

</td>

<td>${file.name}</td>

<td>${file.size}</td>

<td>    <button onclick="deleteRow()">Delete Row</button>
<i class="fa-solid fa-xmark mark"></i><td>

</tr>

`

table.lastElementChild.innerHTML +=tr;

}


reader.readAsDataURL(file);

})

}
