function toggleDiv(divId) {
    var div = document.getElementById(divId);
  
    // Hide all divs
    document.querySelectorAll('.content').forEach(function (otherDiv) {
      otherDiv.style.display = 'none';
    });
  
    // Display the clicked div
    div.style.display = 'block';
  }
  