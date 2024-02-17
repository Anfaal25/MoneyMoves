function openTab(tabName) {
    // Hide all elements with class="tab-content" by default */
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Show the specific tab content
    document.getElementById(tabName).style.display = "block";
  }
  