function editplan(planId) {
    // Get the tenant data from the list
    const title = document.getElementById(planId + 'Title').textContent;
    const description = document.getElementById(planId + 'Description').textContent.split(': ')[1];
    const price = document.getElementById(planId + 'Price').textContent.split(': ')[1];

    // Populate the form with the selected tenant's data
    document.getElementById('editedTitle').value = title;
    document.getElementById('editedDescription').value = description;
    document.getElementById('editedPrice').value = price;
}

function saveplan() {
    // Get the edited data from the form
    const editedTitle = document.getElementById('editedTitle').value;
    const editedDescription = document.getElementById('editedDescription').value;
    const editedPrice = document.getElementById('editedPrice').value;

    // Update the tenant data in the list
    // You can update the tenant list data here as per your application's logic

    // Clear the form fields after saving
    document.getElementById('editedTitle').value = '';
    document.getElementById('editedDescription').value = '';
    document.getElementById('editedPrice').value = '';
}
