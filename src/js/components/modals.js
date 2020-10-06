const modals = () => {

  function bindModal(triggerSelector, modalSelector, closeSelector, overlaySelector) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          overlay = document.querySelector(overlaySelector);

    trigger.forEach( item => {
      item.addEventListener('click', openModal)
    })

    function openModal(e) {
      e.preventDefault();
      modal.style.display = 'block';
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }

    close.addEventListener('click', closeModal);

    function closeModal(e) {
      e.preventDefault();
      modal.style.display = 'none';
      overlay.style.display = 'none';
      document.body.style.overflow = '';
    }

    overlay.addEventListener('click', function(e){
      if (e.target === overlay) {
        closeModal();
      }
    });  

  }

  bindModal('.button', '.modal-feedbackcall', '.modal-feedbackcall .modal-close', '#modal-overlay');
  bindModal('.first-button-link', '.modal-request', '.modal-request .modal-close', '#modal-overlay');
  bindModal('.button-call', '.modal-master', '.modal-master .modal-close', '#modal-overlay');
  bindModal('.button-cost', '.modal-cost', '.modal-cost .modal-close', '#modal-overlay');
  bindModal('.bottom-button-link', '.modal-free', '.modal-free .modal-close', '#modal-overlay');
  bindModal('.button-review-link', '.modal-review', '.modal-review .modal-close', '#modal-overlay');
  bindModal('.button-content', '.modal-sale', '.modal-sale .modal-close', '#modal-overlay');

};

export default modals;