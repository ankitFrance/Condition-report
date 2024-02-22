document.addEventListener('DOMContentLoaded', function () {

    
    var currentStep = 1;
    var progresStep = 0;

    document.querySelectorAll('.next').forEach(function (nextButton) {
        nextButton.addEventListener('click', function () {
            document.getElementById('step' + currentStep).classList.remove('active');
            currentStep++;
            progresStep++;
            document.getElementById('step' + currentStep).classList.add('active');
            updateProgressBar();
        });
    });

    document.querySelectorAll('.prev').forEach(function (prevButton) {
        prevButton.addEventListener('click', function () {
            document.getElementById('step' + currentStep).classList.remove('active');
            currentStep--;
            progresStep--;
            document.getElementById('step' + currentStep).classList.add('active');
            updateProgressBar();
        });
    });



    function updateProgressBar() {
        var progressBarWidth = progresStep * 20;
        document.querySelector('.progress-bar').style.width = progressBarWidth + '%';
    }
});

function displayUploadMessage() {
  
 // document.querySelector('.tick-container').style.display = 'block';
 document.getElementById('tickcontainer1').style.display = 'block';
 


}


//******************************************************************************** 
const i18n = {

    en: {
      field1: 'Name',
      field2: 'Role'
     
    },
    fr: {
      field1: 'Nom',
      field2: 'Rôle'
     
    },
  
  };

  
  function changeLanguage() {
    const selectedLanguage = document.getElementById('languageSelect').value;
    document.getElementById('name').placeholder = i18n[selectedLanguage].field1;
    document.getElementById('role').placeholder = i18n[selectedLanguage].field2;
    
  }

  // Initialize placeholders with default language 
  changeLanguage();