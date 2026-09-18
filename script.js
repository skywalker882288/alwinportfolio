
    const modal = document.getElementById("modal");
    const seeMoreBtn = document.getElementById("seeMoreBtn");
    const closeBtn = document.querySelector(".close");

    // Open popup
    seeMoreBtn.addEventListener("click", function(event) {
        event.preventDefault();
        modal.style.display = "flex";
    });

    // Close popup using X
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Close popup by clicking outside the window
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });