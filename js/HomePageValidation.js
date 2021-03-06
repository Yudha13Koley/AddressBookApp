let contactListLocalStorage;
window.addEventListener('DOMContentLoaded', (event) => {
    contactListLocalStorage = getContactListFromLocalStorage();
    createInnerHtml();
    document.querySelector(".contact-count").textContent = contactListLocalStorage.length;
    localStorage.removeItem('editContact');
});

const getContactListFromLocalStorage = () => {
    return localStorage.getItem('addressBookContactList') ?
        JSON.parse(localStorage.getItem('addressBookContactList')) : [];
}

const createInnerHtml = () => {
    const headerHtml = "<th>Full Name</th><th>Address</th>" +
        "<th>City</th><th>State</th><th>Zip Code</th><th>Phone Number</th><th>Actions</th>";
    if (contactListLocalStorage.length == 0) return;
    let innerHtml = `${headerHtml}`;
    for (const contact of contactListLocalStorage) {
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

const remove = (node) => {
    let contact = contactListLocalStorage.find(contactInList => contactInList._id == node.id);
    if (!contact) return;
    const index = contactListLocalStorage.map(contactInList => contactInList._id).indexOf(contact._id);
    contactListLocalStorage.splice(index, 1);
    localStorage.setItem("addressBookContactList", JSON.stringify(contactListLocalStorage));
    document.querySelector(".contact-count").textContent = contactListLocalStorage.length;
    createInnerHtml();
}

const update = (node) => {
    let contact = contactListLocalStorage.find(contactInList => contactInList._id == node.id);
    if (!contact) return;
    localStorage.setItem('editContact', JSON.stringify(contact));
    window.location.replace(site_properties.add_Contact_Details_Page);
}