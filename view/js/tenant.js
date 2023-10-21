function editTenant(tenantId) {
    // Get the tenant data from the list
    const name = document.getElementById(tenantId + 'Name').textContent;
    const phone = document.getElementById(tenantId + 'Phone').textContent.split(': ')[1];
    const email = document.getElementById(tenantId + 'Email').textContent.split(': ')[1];

    // Populate the form with the selected tenant's data
    document.getElementById('editedName').value = name;
    document.getElementById('editedPhone').value = phone;
    document.getElementById('editedEmail').value = email;
}

function saveTenant() {
    // Get the edited data from the form
    const editedName = document.getElementById('editedName').value;
    const editedPhone = document.getElementById('editedPhone').value;
    const editedEmail = document.getElementById('editedEmail').value;

    // Update the tenant data in the list
    // You can update the tenant list data here as per your application's logic

    // Clear the form fields after saving
    document.getElementById('editedName').value = '';
    document.getElementById('editedPhone').value = '';
    document.getElementById('editedEmail').value = '';
}
