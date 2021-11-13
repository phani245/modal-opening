const open_btn = document.getElementById('open');
const modal_container = document.getElementById('modal-container');
const close_btn = document.getElementById('close');

open_btn.addEventListener('click', () => {
  modal_container.classList.add('show');
});

close_btn.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

