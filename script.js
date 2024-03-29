const allItems = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
  'Item 5',
  'Item 6',
  'Item 7',
  'Item 8',
  'Item 9',
  'Item 10',
  'Item 11',
  'Item 12',
  'Item 13',
  'Item 14',
  'Item 15',
  'Item 16',
  'Item 17',
  'Item 18',
  'Item 19',
  'Item 20',
  'Item 21',
  'Item 22',
  'Item 23',
  'Item 24',
  'Item 25',
  'Item 26',
  'Item 27',
  'Item 28',
  'Item 29',
  'Item 30',
  'Item 31',
  'Item 32',
  'Item 33',
  'Item 34',
  'Item 35',
  'Item 36',
  'Item 37',
  'Item 38',
  'Item 39',
  'Item 40',
  'Item 41',
  'Item 42',
  'Item 43',
  'Item 44',
  'Item 45',
  'Item 46',
  'Item 47',
  'Item 48',
  'Item 49',
  'Item 50',
  'Item 51',
  'Item 52',
  'Item 53',
  'Item 54',
  'Item 55',
  'Item 56',
  'Item 57',
  'Item 58',
  'Item 59',
  'Item 60',
  'Item 61',
  'Item 62',
  'Item 63',
  'Item 64',
  'Item 65',
  'Item 66',
  'Item 67',
  'Item 68',
  'Item 69',
  'Item 70',
  'Item 71',
  'Item 72',
  'Item 73',
  'Item 74',
  'Item 75',
  'Item 76',
  'Item 77',
  'Item 78',
  'Item 79',
  'Item 80',
  'Item 81',
  'Item 82',
  'Item 83',
  'Item 84',
  'Item 85',
  'Item 86',
  'Item 87',
  'Item 88',
  'Item 89',
  'Item 90',
  'Item 91',
  'Item 92',
  'Item 93',
];

const title = document.querySelector('title');
const h1 = document.querySelector('h1');
const ul = document.querySelector('ul');
const navUL = document.querySelector('nav>ul');

const itemsPerPage = 20;

let i = 1;

showItems();

/**
 * Displays a page of items based on the current page number.
 */
function showItems() {
  const start = (i - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const items = allItems.slice(start, end);

  title.textContent = `Page ${i}`;
  h1.textContent = `Page ${i}`;
  ul.replaceChildren(...items.map(buildItem));
  navUL.replaceChildren(...buildNav());
}

/**
 * Builds an HTML list item element with the given item as its text content.
 *
 * @param {string} item - The text content of the list item.
 * @returns {HTMLLIElement} The created list item element.
 */
function buildItem(item) {
  const li = document.createElement('li');

  li.textContent = item;

  return li;
}

/**
 * Builds the navigation menu for pagination.
 * @returns {Array} An array of list items representing the navigation menu.
 */
function buildNav() {
  const count = Math.ceil(allItems.length / itemsPerPage);
  const items = [];

  for (let j = 1; j <= count; j++) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    if (j != i) {
      a.href = '#';
      
      a.onclick = (e) => {
        e.preventDefault();
        i = j;
        showItems();
      };
    }
    
    a.textContent = j;

    li.appendChild(a);
    items.push(li);
  }

  return items;
}
