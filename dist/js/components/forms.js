
const forms = () => {

  const forms = document.querySelectorAll('form');

  const message = {
    loading: 'assets/icons/form/spinner.svg',
    success: 'Спасибо за обращение Дмитрий',
    failure: 'Извините, произошла потеря соединения'
  };

  forms.forEach((item) => {
    postData(item);
  });

  function postData(form) {
    form.addEventListener('submit',(e)=>{
      e.preventDefault();

      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
        display: block;
        margin: 10px auto;
      `;
      form.append(statusMessage);

      const request = new XMLHttpRequest();

      request.open('POST', 'server.php');

      const formData = new FormData(form);

      request.send(formData);

      request.addEventListener('load', ()=>{
        if(request.status == 200) {
          console.log(request.response);
          showConfirmModal(message.success);
          form.reset();
          setTimeout(()=> {
            statusMessage.remove();
          }, 2000);
        } else {
          showConfirmModal(message.failure);
          setTimeout(()=> {
            statusMessage.remove();
          }, 3000);
        }
      });
    });
  }

  function showConfirmModal(message) {
      const prevModal = document.querySelector('.modal-default');          
      
      prevModal.style.display = 'none';
      // функция открытия мод окна

      const confirmModal = document.createElement('div');
        confirmModal.classList.add('popup');
        confirmModal.innerHTML = `
            <a href="#" class="modal-close"></a>
              <div class="message">
                <div class="popup-title">${message}</div>
                <div class="popup-text"></div>
              </div>
        `;
        confirmModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    
      document.querySelector('.wrapper').append(confirmModal);
  }
  
};

export default forms;


// JSON
// request.setRequestHeader('Content-type', 'application/json');
// const formData = new FormData(form);

// const object = {};
// formData.forEach(function(value, key){
//   object[key] = value;
// });
// const json = JSON.stringify(object);
// request.send(json);