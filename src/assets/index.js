let navList = document.querySelector('.nav-list.lower-part');


//Search Field Visible Code
function searchIcon() {
  if (window.innerWidth <= 799) {
    document.querySelector('.searchField.mobile-search').classList.add('show');
    document.querySelector('#searchFieldMobile').focus();
  } else {
    document.querySelector('.searchField').classList.add('show');
    document.querySelector('#searchField').focus();
  }

  if (document.querySelector('.nav-list.active')) {
    document.querySelector('.nav-list').classList.remove('active');
  }
}

//NavList CLick Function
navList.addEventListener('click', (e) => {
  let elementCapture = e.target.parentElement.querySelector('.nav-dropdown');
  let dropdownList = document.querySelectorAll('.show');

  if (
    e.target.classList.contains('searchIcon') ||
    e.target.classList.contains('fa')
  ) {
    searchIcon();
  } else if (e.target.classList.contains('crossButton')) {
    document
      .querySelector('.nav-dropdown.searchField')
      .classList.remove('show');
  } else {
    elementCapture.classList.toggle('show');
  }

  dropdownList.forEach((item) => {
    item.classList.remove('show');
  });
});


//Mobile Search Field
document.querySelector('p.searchIcon').addEventListener('click', (e) => {
  if (
    e.target.classList.contains('searchIcon') ||
    e.target.classList.contains('fa')
  ) {
    searchIcon();
    document.querySelector('#nav-toggle').classList.remove('active');
  }
});


//Mobile Mega Menu
document.querySelector('#nav-toggle').addEventListener('click', (e) => {
  e.target.parentElement.classList.toggle('active');
  document.querySelector('.nav-list').classList.toggle('active');
  if (document.querySelector('.searchField.mobile-search.show')) {
    document
      .querySelector('.searchField.mobile-search')
      .classList.remove('show');
  }
});


//Search Cross Icon
document
  .querySelector('.mobile-search .crossButton')
  .addEventListener('click', (e) => {
    document
      .querySelector('.nav-dropdown.searchField.mobile-search')
      .classList.remove('show');
  });

