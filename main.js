var image = [
    "http://cdn.shopify.com/s/files/1/2068/3659/files/FatherTimeBread_FelixBust.png?v=1510449596","https://tse4.mm.bing.net/th?id=OIP.5dDh7CMBtLCwaQDz_1JeyQHaHa&pid=Api&P=0&w=300&h=300","https://tse1.mm.bing.net/th?id=OIP.k5QiH2IixeObF9SYB1CKFwHaPr&pid=Api&P=0&w=300&h=300","https://tse2.mm.bing.net/th?id=OIP.8xCb9IXL6SF19SAcEwl47AHaHa&pid=Api&P=0&w=300&h=300",
  ];
var name = [ "family book", "Samir kumar bhadoriya", "Punam singh","Shreyash singh","Shristi singh"
  ]
  var i=0;
  function update(){
    i++;
if(i==5)
  {
    i=0
  }
      var updatedimage = image[i];
      var updatedname = name[i];
   document.getElementById("family").src = image[i];
   document.getElementById("names").innerHTML = name[i]; 
}