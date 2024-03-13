



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

    //***************************************** FOR SLIDE 1 *****************************************************

    document.getElementById('date_of_inspection').innerText = i18n[selectedLanguage].Date_of_inspection;
    document.getElementById('toolslabel').innerText = i18n[selectedLanguage].Tools;
    document.getElementById('methodslabel').innerText = i18n[selectedLanguage].Methods;
    document.getElementById('purpose_of_condition_report').placeholder = i18n[selectedLanguage].Purpose_of_Condition_Report;
    document.getElementById('name_of_client').placeholder = i18n[selectedLanguage].Name_of_Client;
    document.getElementById('height').placeholder = i18n[selectedLanguage].Height;
    document.getElementById('examination_center').placeholder = i18n[selectedLanguage].Examination_Center;
    document.getElementById('platform').placeholder = i18n[selectedLanguage].Platform;
    document.getElementById('behind_glass').placeholder = i18n[selectedLanguage].Behind_Mirror;
    document.getElementById('quantity').placeholder = i18n[selectedLanguage].Quantity;
    document.getElementById('quality').placeholder = i18n[selectedLanguage].Quality;
    document.getElementById('nature').placeholder = i18n[selectedLanguage].Nature;
    document.getElementById('rulerLabel').innerText = i18n[selectedLanguage].Ruler;
    document.getElementById('microscopeLabel').innerText = i18n[selectedLanguage].Microscope;
    document.getElementById('cameraLabel').innerText = i18n[selectedLanguage].Camera;
    document.getElementById('glovesLabel').innerText = i18n[selectedLanguage].Gloves;
    document.getElementById('clothingLabel').innerText = i18n[selectedLanguage].Clothing;
    document.getElementById('person_present_name').placeholder = i18n[selectedLanguage].Person_Present_Name;
    document.getElementById('person_present_role').placeholder = i18n[selectedLanguage].Person_Present_Role;
    document.getElementById('duration_of_assessmentLabel').innerText = i18n[selectedLanguage].Duration_of_assessment;
    document.getElementById('inaccessibility').placeholder = i18n[selectedLanguage].Inaccessibility_of_part_of_Asset;
    document.getElementById('working_conditions').innerText = i18n[selectedLanguage].working_conditions;
    document.getElementById('additional_details').innerText = i18n[selectedLanguage].additional_details;
    document.getElementById('reporting_info_heading').innerText = i18n[selectedLanguage].heading_Reporting_info;
    document.getElementById('assets_used_legend').innerText = i18n[selectedLanguage].assets_used;
    document.getElementById('protection_Legend').innerText = i18n[selectedLanguage].protection;

     //***************************************** FOR SLIDE 2 *****************************************************

    document.getElementById('identification_no').placeholder = i18n[selectedLanguage].Identification_Number;
    document.getElementById('doaLabel').innerText = i18n[selectedLanguage].Date_of_acqisation; //
    document.getElementById('name_of_asset').placeholder = i18n[selectedLanguage].Name_of_Asset;
    document.getElementById('title').placeholder = i18n[selectedLanguage].Title;
    document.getElementById('heading').placeholder = i18n[selectedLanguage].Heading;
    document.getElementById('author').placeholder = i18n[selectedLanguage].Author;
    document.getElementById('origin').placeholder = i18n[selectedLanguage].Origin;
    document.getElementById('docLabel').innerText = i18n[selectedLanguage].Date_of_creation; //
    document.getElementById('ownership').placeholder = i18n[selectedLanguage].Ownership;
    document.getElementById('protection').placeholder = i18n[selectedLanguage].Protection;
    document.getElementById('summary').placeholder = i18n[selectedLanguage].Summary_of_its_importance;
    document.getElementById('obj_identification_heading').innerText = i18n[selectedLanguage].heading_Object_iden;

    //***************************************** FOR SLIDE 3 *****************************************************

    document.getElementById('material').placeholder = i18n[selectedLanguage].Material;
    document.getElementById('structure').placeholder = i18n[selectedLanguage].Structure; 
    document.getElementById('surface').placeholder = i18n[selectedLanguage].Surface;
    document.getElementById('history').placeholder = i18n[selectedLanguage].History;
    document.getElementById('technique').placeholder = i18n[selectedLanguage].Technique;
    document.getElementById('weight').placeholder = i18n[selectedLanguage].Weight;
    document.getElementById('contituent_elements').placeholder = i18n[selectedLanguage].Constituent_Elements;
    document.getElementById('noeLabel').innerText = i18n[selectedLanguage].Date_of_creation; //
    document.getElementById('heights').placeholder = i18n[selectedLanguage].Heights;
    document.getElementById('length').placeholder = i18n[selectedLanguage].Length;
    document.getElementById('width').placeholder = i18n[selectedLanguage].Width;
    document.getElementById('installation_notes').placeholder = i18n[selectedLanguage].Installation_Notes;
    document.getElementById('artist_installation_guide').placeholder = i18n[selectedLanguage].Artist_installation_guide;
    document.getElementById('object_creation_description').placeholder = i18n[selectedLanguage].Oc_description;
    document.getElementById('obj_desc_heading').innerText = i18n[selectedLanguage].heading_Object_desc;
  

    
    //***************************************** FOR SLIDE 4 *****************************************************

    document.getElementById('environment').placeholder = i18n[selectedLanguage].Env;
    document.getElementById('effect').placeholder = i18n[selectedLanguage].Effect_of_env; 
    document.getElementById('obj_env_heading').innerText = i18n[selectedLanguage].heading_Object_env; 


    //***************************************** FOR SLIDE 5 *****************************************************

    document.getElementById('info_observed').placeholder = i18n[selectedLanguage].Info_current_state;
    document.getElementById('report_change').placeholder = i18n[selectedLanguage].Changes_report; 
    document.getElementById('Cc_label').innerText = i18n[selectedLanguage].conditions_changed; 
    document.getElementById('cond_desc_heading').innerText = i18n[selectedLanguage].heading_Cond_desc; 


    
    //***************************************** FOR SLIDE 6 *****************************************************

    document.getElementById('descriptive_diagnosis').placeholder = i18n[selectedLanguage].Diagnosis;
    document.getElementById('recommendations').placeholder = i18n[selectedLanguage].Recommendations; 
    document.getElementById('investigations').placeholder = i18n[selectedLanguage].Further_study; 
    document.getElementById('diag_recc_heading').innerText = i18n[selectedLanguage].heading_diag_rec; 


     //***************************************** BUTTONS  *****************************************************

    var AllPreviousButtons =  document.querySelectorAll(".prev");
     
    AllPreviousButtons.forEach(element => {
      element.innerText = i18n[selectedLanguage].buttonPrevious;


    });


    var AllNextButtons =  document.querySelectorAll(".next");
     
    AllNextButtons.forEach(element => {
      element.innerText = i18n[selectedLanguage].buttonNext;


    });


      //***************************************** PHOTO UPLOAD  *****************************************************

      document.getElementById('normal_upload').innerText = i18n[selectedLanguage].normal_upload_text; 
      document.getElementById('damaged_upload').innerText = i18n[selectedLanguage].damaged_upload_text; 

    
     

    
  }

 
changeLanguage();   // Initialize placeholders with default language 
























  function record(){

    var recognition = new webkitSpeechRecognition();
    recognition.lang = "fr-FR";
    recognition.onresult = function(event){

        document.getElementById('purpose_of_condition_report').value = event.results[0][0].transcript;
    }
    recognition.start();


  }

 

  function viewSummary() {


    // Get values from the form
    var name = document.getElementById('name').value;

    var role = document.getElementById('role').value;

    var summaryText = "<h5> Name: " + name + "</h5>";
    

    // Display the summary in the designated div
    document.getElementById('summaryDiv').innerHTML = summaryText;

    let summaryModal = new bootstrap.Modal(document.getElementById('summaryModal'));
    summaryModal.show();
}



function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Set the value of the date input to today's date
document.getElementById('doi').value = getTodayDate();