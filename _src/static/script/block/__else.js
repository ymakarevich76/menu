if (document.querySelector('.header__btn')) {

  const elseBtn = document.querySelector('.header__btn');
  const langBtn = document.querySelector('.header__lang');
  const prevElementChild = elseBtn.previousElementSibling.firstElementChild;

  const blockHide = (el) => {
    return el.nextElementSibling;
  }

  const toggleMenu = (el) => {
    blockHide(el).classList.toggle('hide');
  }

  const clickBtn = (el) => {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      toggleMenu(el);
    });
  }

  clickBtn(elseBtn);
  clickBtn(langBtn);


  document.addEventListener('click', function (e) {

    const checkTarget = (elem) => {
      const target = e.target;

      const itsBlock = target == blockHide(elem) || blockHide(elem).contains(target);
      const itsBtn = target == elem;
      const blockActive = !blockHide(elem).classList.contains('hide');
      if (!itsBlock && !itsBtn && blockActive) {
        toggleMenu(elem);
      }
    }

    checkTarget(elseBtn);
    checkTarget(langBtn);
  });

  const mediaQuery = window.matchMedia('(max-width: 1040px)');

  const handleTabletChange = (e) => {

    if (e.matches) {
      elseBtn.textContent = prevElementChild.firstElementChild.textContent;
      elseBtn.classList.add('active');
    } else {
      elseBtn.textContent = 'Ещё';
      elseBtn.classList.remove('active');
    }
  }
  mediaQuery.addListener(handleTabletChange);
  handleTabletChange(mediaQuery);

}
