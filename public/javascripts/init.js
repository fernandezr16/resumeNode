(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });


// OPENS MODAL ON SCROLL
  var options = [
    {selector: '#skills', offset: 320, callback: "$('#modal5').openModal()" },
    {selector: '#skills', offset: 610, callback: "$('#modal5').closeModal()" },
  ];
  Materialize.scrollFire(options);
 


  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
  