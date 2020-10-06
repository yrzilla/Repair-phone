const showMore = () => {
        const showbtn = document.querySelector('.more-button-link'),
              hidebtn = document.querySelector('.hide-button-link'),
              content = document.querySelector('.more');
        
        showbtn.addEventListener('click', function(e){
          e.preventDefault();
            content.style.display = 'flex';
            showbtn.style.display = 'none';
            hidebtn.style.display = 'block';
        })
        hidebtn.addEventListener('click', function(e){
          e.preventDefault();
            content.style.display = 'none';
            showbtn.style.display = 'block';
            hidebtn.style.display = 'none';
        })
};

export default showMore;
