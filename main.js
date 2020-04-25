// get elements
let filterInput = document.getElementById('filterInput');
let List = document.getElementById('names');

// add events
filterInput.addEventListener('keyup', filterItems);

// filter function
function filterItems(e) {

    var text = e.target.value.toLowerCase();

    var items = List.getElementsByTagName('a');

    Array.from(items).forEach(function(item) {
        if (item.innerHTML.toLowerCase().indexOf(text) > -1) {
            item.parentNode.style.display = '';
        } else {
            item.parentNode.style.display = 'none';
        }
    });
}