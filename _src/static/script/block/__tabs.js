const tabsContainer = document.querySelector('.header__nav .nav__list');

if (tabsContainer) {
  const tabs = document.querySelectorAll('.header__nav .nav__link');

  const tabsContent = document.querySelectorAll('.catalog__block');


  const hideTabsContent = () => {
    tabsContent.forEach(item => {
      item.classList.remove('active-block');
    })

    tabs.forEach(item => {
      item.classList.remove('active');
    })
  }

  const showTabsContent = (i = 0) => {
    tabsContent[i].classList.add('active-block');
    tabs[i].classList.add('active');
  }

  tabsContainer.addEventListener('click', (e) => {
    const target = e.target;
    console.log(target)
    if (target && target.classList.contains('nav__link')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabsContent();
          showTabsContent(i);
        }
      })
    }
  })
}
