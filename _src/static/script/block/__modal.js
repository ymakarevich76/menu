if (document.querySelector('.modal')) {
  const modal = document.querySelector('.modal');
  const modalTrigger = document.querySelectorAll('[data-modal]');

  const closeModal = () => {
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflow = '';
  }

  const openModal = () => {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
  }

  modalTrigger.forEach(item => {
    item.addEventListener('click', (e) => {

      if (!e.target.classList.contains('card__heart')) {
        openModal();
      } else {
        e.target.classList.toggle('active');
      }
    })
  })

  // modalTrigger.forEach(item => {
  //   item.addEventListener('click', (openModal))
  // })

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal();
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  })
}
