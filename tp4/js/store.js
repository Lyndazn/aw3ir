/*
store.js
Script pour gérer la liste de contact en JSON

Pour ajouter un contact:  contactStore.add(_name, _firsname, _date, _adress, _mail);
Pour récuper la liste:    contactStore.getList();
*/
var contactStore = (function () {
    // variable privée
    let contactListString = localStorage.getItem('contactList')
    var contactList = contactListString ? JSON.parse(contactListString) : [];

    // Expose these functions via an interface while hiding
    // the implementation of the module within the function() block

    return {
        add: function (_name, _firstname, _date, _adress, _email) {
            var contact = {
                name: _name,
                firstname: _firstname,
                date: _date,
                adress: _adress,
                mail: _email,
            };
            // ajout du contact à la liste
            contactList.push(contact);

            // persistence de la liste dans une base de données local du navigateur web
            // https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage
            localStorage.setItem('contactList', JSON.stringify(contactList));

            return contactList;
        },
        reset: function () {

            localStorage.removeItem('contactList');
            contactList = [];

            return contactList;
        },

        getList: function () {
            return contactList;
        },
    };
})();
function displayContactList() {
    const contactListString = localStorage.getItem('contactList');
    const contactList = contactListString ? JSON.parse(contactListString) : [];
    document.querySelector("table tbody").innerHTML = '';
    for (const contact of contactList) {
        document.querySelector("table tbody").innerHTML +=
            `<tr>
    <td>${contact.name}</td>
    <td> ${contact.firstname} </td>
    <td> ${contact.date} </td>
    <td> ${contact.adress} </td>
    <td> ${contact.mail} </td>
    
    
    <tr>`;
    }
};
function addContact() {

    var name = document.getElementById('nom').value;
    var firstname = document.getElementById('prénom').value;
    var address = document.getElementById('Address').value;
    var date = document.getElementById('naissance').value;
    var mail = document.getElementById('email').value;


    contactStore.add(name, firstname, date, address, mail);


    displayContactList();
}
function resetcontact() {
    contactStore.reset();

    displayContactList();

};