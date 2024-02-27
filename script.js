const expand_btn = document.querySelector(".expand-btn"); // Get expand button element

let activeIndex;

expand_btn.addEventListener("click", () => { // Add click event listener to expand_btn
  document.body.classList.toggle("collapsed"); // Toggle collapsed class on body element
});

const current = window.location.href; // Get current URL

const allLinks = document.querySelectorAll(".sidebar-links a"); // Get all links in the sidebar

allLinks.forEach((elem) => { // Add click event listener to each link
  elem.addEventListener('click', function() { 
    const hrefLinkClick = elem.href; // Get href attribute value of clicked link

    allLinks.forEach((link) => { // Iterate through all links
      if (link.href == hrefLinkClick){ // Check if href attribute of current link matches clicked link
        link.classList.add("active"); // Add "active" class to current link
      } else {
        link.classList.remove('active'); // Remove "active" class from other links
      }
    });
  })
});