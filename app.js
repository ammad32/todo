
const firebaseConfig = {
    apiKey: "AIzaSyD7oyqy8OGCearXpnBA4G0MGSq9k79HyoQ",
    authDomain: "todoapp-8b533.firebaseapp.com",
    databaseURL: "https://todoapp-8b533-default-rtdb.firebaseio.com",
    projectId: "todoapp-8b533",
    storageBucket: "todoapp-8b533.appspot.com",
    messagingSenderId: "1055712084963",
    appId: "1:1055712084963:web:43f73e144ac2bdb908d6d6",
    measurementId: "G-V1B0T7GZR5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function delTask(thisVal){
    thisVal.parentNode.remove();
}
function edtTask(thisVal){
    var vals = thisVal.parentNode.childNodes[0].textContent;
    var res = prompt("Edit Value",vals);
    thisVal.parentNode.childNodes[0].textContent = res;
}

function addTask(){
var task = document.getElementById("inpTask").value;
var txtNd= document.createTextNode(task)

var liEle = document.createElement("li");
var edtBtnEle = document.createElement("button");
var delBtnEle = document.createElement("button");

edtBtnEle.setAttribute("onclick","edtTask(this)");
delBtnEle.setAttribute("onclick","delTask(this)");

edtBtnEle.innerHTML="Edit";
delBtnEle.innerHTML="Delete";

liEle.appendChild(txtNd);
liEle.appendChild(edtBtnEle);
liEle.appendChild(delBtnEle);

var olEle = document.getElementById("taskLs")
olEle.appendChild(liEle);
document.getElementById("inpTask").value = "";
}
