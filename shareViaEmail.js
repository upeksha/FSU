 document.getElementById('shareButton').addEventListener('click', shareViaEmail);

function shareViaEmail() {
    var subject = "Check out this webpage";
    var body = "I found this webpage and thought you might be interested:\n\n" + "https://www.freespeechsubmission.com";
    var mailtoLink = "mailto:?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = mailtoLink;
  }
  
