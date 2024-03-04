const inputbox = document.getElementById("input-box");
const listcont = document.getElementById("list-cont");
const inputbox2 = document.getElementById("input-box2");
const listcont2 = document.getElementById("list-cont2");
const inputbox3 = document.getElementById("input-box3");
const listcont3 = document.getElementById("list-cont3");
const drop = document.getElementById("drop");
const dropfolder = document.getElementById("dropfolder");
var naa = document.getElementById("naa");
var naaoo = document.getElementById("naaoo");
var na = document.getElementById("editable");
const opt = document.getElementById("opt");
const optlist = document.getElementById("optlist");
const del = document.getElementById("del");

del.addEventListener("click", function () {
  localStorage.removeItem("nama");
  localStorage.removeItem("folder");
  localStorage.removeItem("data");
  localStorage.removeItem("data3");
  localStorage.removeItem("data2");
  localStorage.removeItem("darkMode");
  location.reload();
});

opt.onclick = function () {
  optlist.classList.toggle("optlist");
};


naa.addEventListener("click", function () {
  var newName = prompt("Enter new username:");
  if (newName !== null && newName !== "") {
    na.textContent = newName;
    savename();
    location.reload();
  }
});

function savename() {
  localStorage.setItem("nama", na.textContent);
}
// localStorage.getItem("nama") = "jddddd";

showname();
function showname() {
  // na.textContent = localStorage.getItem("nama");
  if (localStorage.getItem("nama") !== null && localStorage.getItem("nama") !== ""){
    na.textContent = localStorage.getItem("nama");
  }
}

drop.onclick = function () {
  dropfolder.classList.toggle("open");
  drop.classList.toggle("rotate");
};

function AddTask() {
  if (inputbox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerText = inputbox.value;
    listcont.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputbox.value = "";
  saveData();
}

listcont.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
// -----------------------------
function AddTask2() {
  if (inputbox2.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerText = inputbox2.value;
    listcont2.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputbox2.value = "";
  saveData2();
}

listcont2.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData2();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData2();
    }
  },
  false
);
// -----------------------------
function AddTask3() {
  if (inputbox3.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerText = inputbox3.value;
    listcont3.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputbox3.value = "";
  saveData3();
}

listcont3.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData3();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData3();
    }
  },
  false
);
// -----------------------------

const folder = document.getElementById("foldercont");

function craeteFolder() {
  let i = folder.querySelectorAll("div").length;
  if (i <= 2) {
    i++;
    let div = document.createElement("div");
    div.setAttribute("id", `div${i}`);
    folder.appendChild(div);
    div.innerHTML = `<h4>New folder (${i})</h4>`;
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    div.appendChild(span);
    location.reload();
  } else {
    alert("u need to buy the subscription to add more folder briosgar");
  }
  savefolder();
}

folder.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savefolder();
    }
  },
  false
);

function savefolder() {
  localStorage.setItem("folder", folder.innerHTML);
}
function saveData() {
  localStorage.setItem("data", listcont.innerHTML);
}
function saveData2() {
  localStorage.setItem("data2", listcont2.innerHTML);
}
function saveData3() {
  localStorage.setItem("data3", listcont3.innerHTML);
}

function showTask() {
  listcont.innerHTML = localStorage.getItem("data");
}
function showTask2() {
  listcont2.innerHTML = localStorage.getItem("data2");
}
function showTask3() {
  listcont3.innerHTML = localStorage.getItem("data3");
}
function showfolderTask() {
  folder.innerHTML = localStorage.getItem("folder");
}
showTask();
showfolderTask();
showTask2();
showTask3();

const div1 = document.getElementById("to1");
const div2 = document.getElementById("to2");
const div3 = document.getElementById("to3");

const btn1 = document.getElementById("div1");
const btn2 = document.getElementById("div2");
const btn3 = document.getElementById("div3");

btn1.addEventListener("click", () => {
  div1.style.display = "block";
  div2.style.display = "none";
  div3.style.display = "none";
});

btn2.addEventListener("click", () => {
  div1.style.display = "none";
  div2.style.display = "block";
  div3.style.display = "none";
});

btn3.addEventListener("click", () => {
  div1.style.display = "none";
  div2.style.display = "none";
  div3.style.display = "block";
});
