let dropElement = document.querySelector(".main");

let table = document.querySelector(".table");

let upload = document.querySelector(".icon");

let input = document.querySelector("input");

upload.onclick = function () {
  input.click();
};
input.onchange = function (e) {
  upoladimage(e.target.files);
};
dropElement.ondragover = function (e) {
  e.preventDefault();
};

let count = 1;

dropElement.ondrop = function (e) {
  e.preventDefault();

  upoladimage(e.dataTransfer.files);
};

function upoladimage(files) {
  [...files].forEach((file) => {
    let reader = new FileReader();

    reader.onloadend = function (e) {
      let tr = `<tr>

<th scope="row">${count++}</th>

<td>

<img src="${e.target.result}" alt="image" width="200px">

</td>

<td>${file.name}</td>

<td>${file.size}</td>

<td>    
<i class="fa-solid fa-xmark mark" onclick="deleterow()"></i><td>

</tr>

`;

      table.lastElementChild.innerHTML += tr;
    };

    reader.readAsDataURL(file);
  });
}
function deleterow() {
  document.querySelector(".table").remove(0);
}
