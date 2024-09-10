function sortBtn() 
{
    document.getElementById("myDropdown").classList.toggle("show");
}
  
/* w3schools.com, 'dropdowns', [online] available: https://www.w3schools.com/css/css_dropdowns.asp [accessed: 11 mar 2023]*/
  window.onclick = function(event) 
  {
    if (!event.target.matches('.dropbtn')) 
    {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;

      for (i = 0; i < dropdowns.length; i++) 
      {
        var openDropdown = dropdowns[i];

        if (openDropdown.classList.contains('show')) 
        {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

function subscribeBtn(){
    alert('You have successfully subscribed to KRUX!')
}