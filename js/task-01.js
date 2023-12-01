const getCategoryInfo = selector => {
  const ulList = document.querySelector(selector);
  console.log('Number of categories: ' + ulList.childElementCount);
};

getCategoryInfo('ul#categories');

function getCategoryItemInfo(selector) {
  const itemList = document.querySelectorAll(selector);
  itemList.forEach(i => {
    console.log('Category: ' + i.firstElementChild.innerText);
    const nestedItem = i.querySelectorAll('ul>li');
    console.log('Elements: ' + nestedItem.length);
  });
}

getCategoryItemInfo('li.item');
