function subscribeBtn(){
    alert('You have successfully subscribed to KRUX!')
}


// w3schools.com, 'Scroll to Top Button', [Online]. Available: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp [Accessed: 12- Mar- 2023]. 

  // Get the button
  let mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document

  function topFunction() {
    // Scroll to the top of the document with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }