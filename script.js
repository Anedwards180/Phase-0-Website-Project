document.getElementById("h1").addEventlistner("mouseover", function() {
    document.getElementById("h1").style.backgroundColor = rgb(87, 131, 123)

 document.getElementById("h1").addEventlistner("mouseout", function() {
        document.getElementById("h1").style.backgroundColor = rgb(201, 216, 182)
    
})




function PFA(){
    alert("Psychological First Aid, or "PFA", is a mental health tool that can be used by anyone to help individuals experiencing stress and  trauma. 
    The World Health Organization offers free PFA certifications online. Check out their website WHO.int for more details.")
        }

   


    document.getElementById("pfa1").addEventListener("click", function() {
    alert("Psychological First Aid, or PFA, is a mental health tool that can be used by anyone to help individuals experiencing stress and  trauma. 
    The World Health Organization offers free PFA certifications online. Check out their website WHO.int for more details.");})


    document.getElementById("mhfa1").addEventListener("click", function() {
     alert(`Mental Health First Aid, or MHFA, is a mental health tool that differs  from PFA by teaching participants about how to identify various mental health issues, 
        and helps to provide information about resources in regards to those in need.`);})
