function getdata()
{
 var xhtp=new XMLHttpRequest()
 xhtp.onreadystatechange=function(){
 if(this.readyState==4 && this.status==200)
        {
          console.log("status ready")
         var res=this.responseXML
         var itemList=res.getElementsByTagName("itemname")
         var priceList=res.getElementsByTagName("price")
         var txt=""
         for(i=0;i<itemList.length;i++)
         {
            txt+=itemList[i].childNodes[0].nodeValue+" "+priceList[i].childNodes[0].nodeValue+"<br/>"
         }
         console.log()
        }
        document.getElementById("items").innerHTML=txt
 
    }
 xhtp.open("GET","item.xml",true)
 xhtp.send()
 
}