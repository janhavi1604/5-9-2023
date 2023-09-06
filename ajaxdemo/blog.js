function getdata()
{
 var xhtp=new XMLHttpRequest()
 xhtp.onreadystatechange=function(){
 if(this.readyState==4 && this.status==200)
        {
          console.log("status ready")
         var res=this.responseXML
         var blogdateList=res.getElementsByTagName("blogdate")
         var blogauthorList=res.getElementsByTagName("blog_author")
         var blogdscriptionList=res.getElementsByTagName("blog_description")
         var txt=""
         for(i=0;i<blogdateList.length;i++)
         {
            txt+=blogdateList[i].childNodes[0].nodeValue+" "+blogauthorList[i].childNodes[0].nodeValue+""+blogdscriptionList[i].childNodes[0].nodeValue+"<br/>"
         }
         console.log()
        }
        document.getElementById("blog").innerHTML=txt
 
    }
 xhtp.open("GET","blog.xml",true)
 xhtp.send()
 
}