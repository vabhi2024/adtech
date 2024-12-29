document.addEventListener("DOMContentLoaded", function () {
    var popup = document.getElementById('popup');
    var closeBtn = document.getElementById('close-btn');

    // Function to show the popup
    function showPopup() {
        popup.style.display = 'flex';
    }

    // Function to hide the popup
    function hidePopup() {
        popup.style.display = 'none';
    }

    // Show the popup after 3 seconds
    setTimeout(showPopup, 5000);

    // Hide the popup when the close button is clicked
    closeBtn.addEventListener('click', hidePopup);

    // Hide the popup when the user clicks outside the popup content
    window.addEventListener('closeBtn', function (event) {
        if (event.target == popup) {
            hidePopup();
        }
    });
});

