

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

//******************************************************************************** 

function displayUploadMessage(containerID) {
  
  document.getElementById(containerID).style.display = 'block';
 
}




//******************************************************************************** 

 
  
  function changeLanguage() {

    const selectedLanguage = document.getElementById('languageSelect').value;
    document.getElementById('name').placeholder = i18n[selectedLanguage].field1;
    document.getElementById('role').placeholder = i18n[selectedLanguage].field2;
    document.getElementById('Qualification').placeholder = i18n[selectedLanguage].field3;
    document.getElementById('purpose_of_condition_report').placeholder = i18n[selectedLanguage].field4;
    document.getElementById('name_of_client').placeholder = i18n[selectedLanguage].field5;
    document.getElementById('height').placeholder = i18n[selectedLanguage].field6;
    document.getElementById('examination_center').placeholder = i18n[selectedLanguage].field7;
    document.getElementById('platform').placeholder = i18n[selectedLanguage].field8;
    document.getElementById('behind_glass').placeholder = i18n[selectedLanguage].field9;
    document.getElementById('quantity').placeholder = i18n[selectedLanguage].field10;
    document.getElementById('quality').placeholder = i18n[selectedLanguage].field11;
    document.getElementById('nature').placeholder = i18n[selectedLanguage].field12;
    document.getElementById('person_present_name').placeholder = i18n[selectedLanguage].field13;
    document.getElementById('person_present_role').placeholder = i18n[selectedLanguage].field14;
    document.getElementById('inaccessibility').placeholder = i18n[selectedLanguage].field15;

    document.getElementById('identification_no').placeholder = i18n[selectedLanguage].field16;
    document.getElementById('name_of_asset').placeholder = i18n[selectedLanguage].field17;
    document.getElementById('title').placeholder = i18n[selectedLanguage].field18;
    document.getElementById('heading').placeholder = i18n[selectedLanguage].field19;
    document.getElementById('author').placeholder = i18n[selectedLanguage].field20;
    document.getElementById('origin').placeholder = i18n[selectedLanguage].field21;
    document.getElementById('ownership').placeholder = i18n[selectedLanguage].field22;
    document.getElementById('protection').placeholder = i18n[selectedLanguage].field23;
    document.getElementById('summary').placeholder = i18n[selectedLanguage].field24;


    document.getElementById('material').placeholder = i18n[selectedLanguage].field25;
    document.getElementById('structure').placeholder = i18n[selectedLanguage].field26;
    document.getElementById('surface').placeholder = i18n[selectedLanguage].field27;
    document.getElementById('history').placeholder = i18n[selectedLanguage].field28;
    document.getElementById('technique').placeholder = i18n[selectedLanguage].field29;
    document.getElementById('weight').placeholder = i18n[selectedLanguage].field30;
    document.getElementById('contituent_elements').placeholder = i18n[selectedLanguage].field31;
    document.getElementById('heights').placeholder = i18n[selectedLanguage].field32;
    document.getElementById('length').placeholder = i18n[selectedLanguage].field33;
    document.getElementById('width').placeholder = i18n[selectedLanguage].field34;
    document.getElementById('installation_notes').placeholder = i18n[selectedLanguage].field35;
    document.getElementById('artist_installation_guide').placeholder = i18n[selectedLanguage].field36;
    document.getElementById('object_creation_description').placeholder = i18n[selectedLanguage].field37;

    document.getElementById('environment').placeholder = i18n[selectedLanguage].field38;
    document.getElementById('effect').placeholder = i18n[selectedLanguage].field39;

    
    document.getElementById('info_observed').placeholder = i18n[selectedLanguage].field40;
    document.getElementById('report_change').placeholder = i18n[selectedLanguage].field41;

    document.getElementById('descriptive_diagnosis').placeholder = i18n[selectedLanguage].field42;
    document.getElementById('recommendations').placeholder = i18n[selectedLanguage].field43;
    document.getElementById('investigations').placeholder = i18n[selectedLanguage].field44;

    document.getElementById('heading1').textContent = i18n[selectedLanguage].head1;
    document.getElementById('heading2').textContent = i18n[selectedLanguage].head2;
    document.getElementById('heading3').textContent = i18n[selectedLanguage].head3;
    document.getElementById('heading4').textContent = i18n[selectedLanguage].head4;
    document.getElementById('heading5').textContent = i18n[selectedLanguage].head5;
    document.getElementById('heading6').textContent = i18n[selectedLanguage].head6;






    
    
  }

  // Initialize placeholders with default language 
  changeLanguage();







  function record(){

    var recognition = new webkitSpeechRecognition();
    recognition.lang = "fr-FR";
    recognition.onresult = function(event){

        document.getElementById('purpose_of_condition_report').value = event.results[0][0].transcript;
    }
    recognition.start();


  }

 