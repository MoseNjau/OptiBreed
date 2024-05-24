  document.addEventListener('DOMContentLoaded', function () {
    var accordionItems = document.querySelectorAll('.accordion-button');
    
    accordionItems.forEach(function (button) {
      button.addEventListener('click', function () {
        var target = this.getAttribute('data-mdb-target');
        var collapseElement = document.querySelector(target);
        
        if (collapseElement.classList.contains('show')) {
          collapseElement.classList.remove('show');
        } else {
          var allCollapses = document.querySelectorAll('.accordion-collapse');
          allCollapses.forEach(function (collapse) {
            collapse.classList.remove('show');
          });
          collapseElement.classList.add('show');
        }
      });
    });
  });
