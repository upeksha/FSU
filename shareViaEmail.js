function shareViaEmail() {
    var subject = "Check out this webpage";
    var body = "I found this webpage and thought you might be interested:\n\n" + window.location.href;
    var mailtoLink = "mailto:?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = mailtoLink;
  }
  
