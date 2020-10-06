import tabs from './components/tabs';
import modals from './components/modals';
import forms from './components/forms';
import showMore from './components/more-content';
import './components/slider/jquery.event.move';
import './components/slider/jquery.twentytwenty';

window.addEventListener("DOMContentLoaded", function(){
  modals();
  tabs('.tabs', '.tabs-item', '.tab', 'active');
  forms();
  showMore();

  $("#slider").twentytwenty();


  
  function showRows() {
    let tableRows = document.querySelectorAll('.tab table tbody tr'),
        tableBtn = document.querySelector('.table-button');

    tableRows.forEach(item => {
      item.addEventListener('mouseover', function(){

        const top = this.getBoundingClientRect().y + pageYOffset;
        const left = this.getBoundingClientRect().x + pageXOffset;

        tableBtn.style.top = `${top}px`;
        tableBtn.style.left = `${left}px`;

        tableBtn.style.display = 'block';
          
      });
      item.addEventListener('mouseout', function(){
        tableBtn.style.display = 'none';
      });
    });

    // tableBtn.addEventListener('mouseover', function() {
    //     this.style.display = 'block';
    // });

    // tableBtn.addEventListener('mouseout', function(){
    //     tableBtn.style.display = 'none';
    // });
  }
  showRows();

})