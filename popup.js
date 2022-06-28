document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('submit');
    checkPageButton.addEventListener('click', function() {
  
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://urlcheck.f5se.com/analyze"); 
        xhr.onload = function(event){ 
            alert("Response: " + event.target.response); // raw response
        }; 
        // or onerror, onabort
        xhr.onerror = function(event){ 
            alert("Error"); // Error response
        };
        var formData = new FormData(document.getElementById('checkPage')); 
        xhr.send(formData);
    }, false);
  }, false);