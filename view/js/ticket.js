document.addEventListener("DOMContentLoaded", function() {
    const ticketItems = document.querySelectorAll(".tenant-item");
    const ticketDetails = document.getElementById("ticket-details");
    const viewDetails = document.getElementById("view-details");

    ticketItems.forEach(item => {
        item.addEventListener("click", function() {
            const tenantName = item.querySelector('h3').textContent;
            const message = item.querySelector('p').textContent;
            ticketDetails.textContent = tenantName;
            viewDetails.innerHTML = `<p><strong>Tenant Name:</strong> ${tenantName}</p><p><strong>Message:</strong> ${message}</p>`;
        });
    });

    // Add an event listener for the "Problem Fixed" button here
});