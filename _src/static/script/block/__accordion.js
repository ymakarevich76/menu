if (document.querySelector('.catalog__header')) {
  const accordBtns = document.querySelectorAll('.catalog__header');

  accordBtns.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    })
  })
}
