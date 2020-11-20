window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th>Full Name</th><th>Address</th>" +
        "<th>City</th><th>State</th><th>Zip Code</th><th>Phone Number</th><th>Actions</th>";
    let contactList = createJsonObjects();
    if (contactList.length == 0) return;
    let innerHtml = `${headerHtml}`;
    for (const contact of contactList) {
        innerHtml = `${innerHtml}
<tr>
    <td>${contact._fullName}</td>
    <td>${contact._address}</td>
    <td>${contact._city}</td>
    <td>${contact._state}</td>
    <td>${contact._zip}</td>
    <td>${contact._phoneNumber}</td>
    <td>
        <img src="../assets/icons/delete-black-18dp.svg" alt="delete" id="${contact._id}" onclick="remove(this)">
        <img src="../assets/icons/create-black-18dp.svg" alt="edit" id="${contact._id}" onclick="update(this)">
    </td>
</tr>
    `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}

const createJsonObjects = () => {
    let contactJsonList = [
        {
            _id: '1',
            _fullName: 'Yudhajit Koley',
            _phoneNumber: '7878787878',
            _address: '123/1/1 Sarat Chatterjee Road',
            _city: 'Howrah',
            _state: 'West Bengal',
            _zip: '111111'
        },
        {
            _id: '2',
            _fullName: 'Soumen Koley',
            _phoneNumber: '7878787878',
            _address: '123/1/1 Sarat Chatterjee Road',
            _city: 'Howrah',
            _state: 'West Bengal',
            _zip: '111111'
        }
    ];
    return contactJsonList;
}