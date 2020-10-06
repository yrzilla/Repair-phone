const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {

  let tab = document.querySelectorAll(tabSelector), // Получим элементы по шаблону
      header = document.querySelector(headerSelector),
      content = document.querySelectorAll(contentSelector);

  function hideTabContent(){ // Функция для скрытия контента табов
    content.forEach(item => {
      item.style.display = 'none';
    });
    tab.forEach(item => {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent(i = 0){ // Показываем только определенный таб
    content[i].style.display = 'block';
    tab[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  header.addEventListener('click', function(e) {
  const target = e.target;
  e.preventDefault();
    if(target && target.classList.contains(tabSelector.replace(/\./, "" )) || // Проверяем туда ли кликнул пользователь (убираем точку у класса)
    target.parentNode.classList.contains(tabSelector.replace(/\./, "" ))) {
      tab.forEach((item, i) => {
        if(target == item || target.parentNode == item){
          hideTabContent();
          showTabContent(i);
        }
      });
    } 
  });
};
export default tabs;
