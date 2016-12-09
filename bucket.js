//Danielle Oden//
window.onload = loadCookieList;
var myList = [];
function loadCookieList()
{
  var groceries;
  var str = getCookie("bucketlist");
  var arrayCookie = str.split(",");
  for(bucketlist = 0; arrayCookie.length > bucketlist; bucketlist++)
  {
    displayItem(arrayCookie[bucketlist]);

  }

}
function displayItem(bucket)
{
  var index =  myList.indexOf(bucket);

  if (index == -1)
  {
    myList.push(bucket);
    var list = document.getElementById("listDisplay");
    var item = document.createElement("li");
    var itemName = document.createTextNode(bucket);
    item.appendChild(itemName);

    document.getElementById("newItem").value = "";
    var btnClose = document.createElement("button");
    btnClose.classList.add("btn");
    btnClose.classList.add("btn-danger");
    btnClose.classList.add("btn-lg");
    btnClose.addEventListener("click",removeParentsListItem);

    var iconClose = document.createElement("span");
    iconClose.classList.add("glyphicon");
    iconClose.classList.add("glyphicon-remove");
    btnClose.appendChild(iconClose);

    item.appendChild(btnClose);
    list.appendChild(item);
  }

}

function saveThing()
{
var something
something= myList.toString();
setCookie("bucket", something, 100);

}
function clearThing()
{

myList= [];
document.getElementById("listDisplay").innerHTML = "";
}


function addThing()
{

  var input = document.getElementById("newItem").value;

  displayItem(input);




}
  function removeParentsListItem()
  {
    var mom = this.parentNode;
    var grandma = mom.parentNode;
    grandma.removeChild(mom);
    var itemRemove = mom.firstChild.textContent;
    var itemIndex = myList.splice(itemIndex, 1);
    window.alert("Congradulatons you have completed an item on your bucket list, now go do some more.")

  }


//courtesy of w3schoolss,, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
