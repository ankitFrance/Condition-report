



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
    document.getElementById('name').placeholder = i18n[selectedLanguage].Name;
    document.getElementById('role').placeholder = i18n[selectedLanguage].Role;
    document.getElementById('institution').placeholder = i18n[selectedLanguage].Institution;
    document.getElementById('date_of_inspections').textContent = i18n[selectedLanguage].Date_of_inspection;
    document.getElementById('tools').textContent = i18n[selectedLanguage].Tools;
    document.getElementById('methods').textContent = i18n[selectedLanguage].Methods;
    document.getElementById('purpose_of_condition_report').placeholder = i18n[selectedLanguage].Purpose_of_Condition_Report;
    document.getElementById('name_of_client').placeholder = i18n[selectedLanguage].Name_of_Client;
    document.getElementById('height').placeholder = i18n[selectedLanguage].Height;
    document.getElementById('examination_center').placeholder = i18n[selectedLanguage].Examination_Center;
    document.getElementById('platform').placeholder = i18n[selectedLanguage].Platform;
    document.getElementById('behind_glass').placeholder = i18n[selectedLanguage].Behind_Mirror;
    document.getElementById('quantity').placeholder = i18n[selectedLanguage].Quantity;
    document.getElementById('quality').placeholder = i18n[selectedLanguage].Quality;
    document.getElementById('nature').placeholder = i18n[selectedLanguage].Nature;
    document.getElementById('person_present_name').placeholder = i18n[selectedLanguage].Person_Present_Name;
    document.getElementById('person_present_role').placeholder = i18n[selectedLanguage].Person_Present_Role;
    document.getElementById('inaccessibility').placeholder = i18n[selectedLanguage].Inaccessibility_of_part_of_Asset;

    document.getElementById('identification_no').placeholder = i18n[selectedLanguage].Identification_Number;
    document.getElementById('name_of_asset').placeholder = i18n[selectedLanguage].Name_of_Asset;
    document.getElementById('title').placeholder = i18n[selectedLanguage].Title;
    document.getElementById('heading').placeholder = i18n[selectedLanguage].Heading;
    document.getElementById('author').placeholder = i18n[selectedLanguage].Author;
    document.getElementById('origin').placeholder = i18n[selectedLanguage].Origin;
    document.getElementById('ownership').placeholder = i18n[selectedLanguage].Ownership;
    document.getElementById('protection').placeholder = i18n[selectedLanguage].Protection;
    document.getElementById('summary').placeholder = i18n[selectedLanguage].Summary_of_its_importance;


    document.getElementById('material').placeholder = i18n[selectedLanguage].Material;
    document.getElementById('structure').placeholder = i18n[selectedLanguage].Structure;
    document.getElementById('surface').placeholder = i18n[selectedLanguage].Surface;
    document.getElementById('history').placeholder = i18n[selectedLanguage].History;
    document.getElementById('technique').placeholder = i18n[selectedLanguage].Technique;
    document.getElementById('weight').placeholder = i18n[selectedLanguage].Weight;
    document.getElementById('contituent_elements').placeholder = i18n[selectedLanguage].Constituent_Elements;
    document.getElementById('heights').placeholder = i18n[selectedLanguage].Heights;
    document.getElementById('length').placeholder = i18n[selectedLanguage].Length;
    document.getElementById('width').placeholder = i18n[selectedLanguage].Width;
    document.getElementById('installation_notes').placeholder = i18n[selectedLanguage].Installation_Notes;
    document.getElementById('artist_installation_guide').placeholder = i18n[selectedLanguage].Artist_installation_guide;
    document.getElementById('object_creation_description').placeholder = i18n[selectedLanguage].Oc_description;

    document.getElementById('environment').placeholder = i18n[selectedLanguage].Env
    document.getElementById('effect').placeholder = i18n[selectedLanguage].Effect_of_env;

    
    document.getElementById('info_observed').placeholder = i18n[selectedLanguage].Info_current_state;
    document.getElementById('report_change').placeholder = i18n[selectedLanguage].Changes_report;

    document.getElementById('descriptive_diagnosis').placeholder = i18n[selectedLanguage].Diagnosis;
    document.getElementById('recommendations').placeholder = i18n[selectedLanguage].Recommendations;
    document.getElementById('investigations').placeholder = i18n[selectedLanguage].Further_study;

    document.getElementById('heading1').textContent = i18n[selectedLanguage].heading_Repotinng_info;
    document.getElementById('heading2').textContent = i18n[selectedLanguage].heading_Object_iden;
    document.getElementById('heading3').textContent = i18n[selectedLanguage].heading_Object_desc;
    document.getElementById('heading4').textContent = i18n[selectedLanguage].heading_Object_env;
    document.getElementById('heading5').textContent = i18n[selectedLanguage].heading_Cond_desc;
    document.getElementById('heading6').textContent = i18n[selectedLanguage].heading_diag_rec;


    document.getElementById('working_conditions').textContent = i18n[selectedLanguage].buttons_working_conditions;
    document.getElementById('additional_details').textContent = i18n[selectedLanguage].buttons_additional_details;

    document.getElementById('reliability_collect_data').textContent = i18n[selectedLanguage].subheading_additional_details;

    document.getElementById('Not_Available').textContent = i18n[selectedLanguage].reliabilityLabel_notAv;
    document.getElementById('Incomplete').textContent = i18n[selectedLanguage].reliabilityLabel_inc;
    document.getElementById('Exhaustive').textContent = i18n[selectedLanguage].reliabilityLabel_exhaust;







    
    
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

 

  function viewSummary() {


    // Get values from the form
    var name = document.getElementById('name').value;

    var role = document.getElementById('role').value;

    var summaryText = "<h5> Name: " + name + "</h5>";
    

    // Display the summary in the designated div
    document.getElementById('summaryOfForm').innerHTML = summaryText;

}