let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let firstName = document.getElementById('child-first');
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
     
    row.insertCell(0).innerHTML = document.getElementById('child-first').value;
    row.insertCell(1).innerHTML = document.getElementById('last-name').value;
    row.insertCell(2).innerHTML = document.getElementById('gift').value;
    row.insertCell(3).innerHTML = document.getElementById('myCheck').checked;
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('child-first').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('gift').value = '';
    document.getElementById('myCheck').checked = false;
});
 
function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}