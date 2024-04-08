
//*********************************************************************************************************************************** */

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


// **************** Request to fetch the JSON file **** ***********************

fetch('F5702.json')
 .then(response => {
  // Check if the response is successful
  if (!response.ok) {
     console.log('Network response was not ok');
  }
  // Parse the JSON data
  return response.json();
})
.then(ErosData => {
  // Log the JSON data to the console
 // console.log(ErosData);
  document.getElementById('title').value = ErosData.title
  document.getElementById('author').value = ErosData.author
  document.getElementById('date_of_creation').value = ErosData.dtfrom
  document.getElementById('width').value = ErosData.width
  document.getElementById('heights').value = ErosData.height

  
 
})
.catch(error => {
  console.error('There was a problem fetching the JSON file:', error);
});

// ****************END OF Request to fetch the JSON file******************

});


//**************************************************************************************************************************************** */











//**********************************************************************************************************************************
let uploadedFiles = []; // Define an array to store uploaded files with their captions and names

function displayUploadMessage() {
let filesUploaded = document.getElementById('inputGroupFile02').files;
const previewContainer = document.getElementById('previewContainer');
// Clear previous previews
previewContainer.innerHTML = '';

for (let i = 0; i < filesUploaded.length; i++) {
  const file = filesUploaded[i];
  const reader = new FileReader();

  reader.onload = function(e) {
    //*****DIV INSIDE WHICH ELEMENTS ARE THERE ********/
    const previewItem = document.createElement('div');
    previewItem.classList.add('preview-item');

    //******************IMAGE ************************/
    const previewImage = document.createElement('img');
    previewImage.classList.add('preview-image');
    previewImage.src = e.target.result;
    previewItem.appendChild(previewImage);

    //******************FILE NAME *******************/
    const fileNameText = document.createElement('p');
    fileNameText.classList.add('file-name');
    fileNameText.innerText = file.name;
    previewItem.appendChild(fileNameText);

    //******************TEXT FIELD *******************/
    const inputFieldCaption = document.createElement('input');
    inputFieldCaption.setAttribute('type', 'text');
    inputFieldCaption.classList.add('caption');
    inputFieldCaption.setAttribute('placeholder', 'Enter caption here');
    inputFieldCaption.addEventListener('input', function() {
      updateCaption(file.name, inputFieldCaption.value);
    });
    previewItem.appendChild(inputFieldCaption);

//************************************************ */
    previewContainer.appendChild(previewItem);

//************************************************ */
    // Push the uploaded file into the array
    uploadedFiles.push({
      image: e.target.result,
      caption: '',
      fileName: file.name
    });

    };
    reader.readAsDataURL(file);
  }}

//************************************************ */
function updateCaption(fileName, newCaption) {
uploadedFiles.forEach(upload => {
  if (upload.fileName === fileName) {
    upload.caption = newCaption;
  }
});
// console.log(uploadedFiles);
}

//*******************************************************************************************************************************












//*********************************************************************************************************************************************

function viewSummary() {

//***********FOR UPLOADING **************
let images = [];
let captions = [];
let fileNames = [];

uploadedFiles.forEach(upload => {
  images.push(upload.image);
  captions.push(upload.caption);
  fileNames.push(upload.fileName);
});

const form = document.getElementById('registrationForm');
const captionsInput = document.createElement('input');
captionsInput.type = 'hidden';
captionsInput.style.display = 'none';
captionsInput.style.visibility = 'hidden';
captionsInput.name = 'captions';
captionsInput.value = JSON.stringify(captions);
form.appendChild(captionsInput);

const imagesInput = document.createElement('input');
imagesInput.type = 'hidden';
imagesInput.style.display = 'none';
imagesInput.style.visibility = 'hidden';
imagesInput.name = 'images';
imagesInput.value = JSON.stringify(images);
form.appendChild(imagesInput);
//console.log("Images:", images);
//console.log("Captions:", captions);
//console.log("File Names:", fileNames);

var imagesHTML = '';

for (let i = 0; i < images.length; i++) {
  imagesHTML += `
  
    <img src="${images[i]}" style="width: 400px; height: 400px;">
    <p>${captions[i]}</p>
    <p>${fileNames[i]}</p>
  `;
}

//************************ **************

// FOR SLIDE 1
const name = document.getElementById('name').value;             
const role = document.getElementById('role').value;
const institution = document.getElementById('institution').value;
const doi = document.getElementById('doi').value;
const tools = document.getElementById('tools').value;
const methods = document.getElementById('methods').value;
const purpose_of_condition_report = document.getElementById('purpose_of_condition_report').value;
const name_of_client = document.getElementById('name_of_client').value;
const height = document.getElementById('height').value;
const examination_center = document.getElementById('examination_center').value;
const platform = document.getElementById('platform').value;
const behind_glass = document.getElementById('behind_glass').value;
const quantity = document.getElementById('quantity').value;
const quality = document.getElementById('quality').value;
const nature = document.getElementById('nature').value;
const ruler = document.getElementById('ruler').value;
const microscope = document.getElementById('microscope').value;
const camera = document.getElementById('camera').value;
const gloves = document.getElementById('gloves').value;
const clothing = document.getElementById('clothing').value;
const person_present_name = document.getElementById('person_present_name').value;
const person_present_role = document.getElementById('person_present_role').value;
const duration_of_assessment = document.getElementById('duration_of_assessment').value;
const inaccessibility = document.getElementById('inaccessibility').value;

// FOR SLIDE 2
const identification_no  = document.getElementById('identification_no').value;
const date_of_acquisition = document.getElementById('date_of_acquisition').value;
const name_of_asset = document.getElementById('name_of_asset').value;
const title = document.getElementById('title').value;
const heading = document.getElementById('heading').value;
const author = document.getElementById('author').value;
const origin = document.getElementById('origin').value;
const date_of_creation = document.getElementById('date_of_creation').value;
const ownership = document.getElementById('ownership').value;
const protection = document.getElementById('protection').value;
const summary = document.getElementById('summary').value;

// FOR SLIDE 3
const material = document.getElementById('material').value;
const structure = document.getElementById('structure').value;
const surface = document.getElementById('surface').value;
const history = document.getElementById('history').value;
const technique = document.getElementById('technique').value;
const weight = document.getElementById('weight').value;
const contituent_elements = document.getElementById('contituent_elements').value;
const no_of_elements = document.getElementById('no_of_elements').value;
const heights = document.getElementById('heights').value;
const length = document.getElementById('length').value;
const width = document.getElementById('width').value;
const installation_notes = document.getElementById('installation_notes').value;
const artist_installation_guide = document.getElementById('artist_installation_guide').value;
const object_creation_description = document.getElementById('object_creation_description').value;


 // FOR SLIDE 4
const environment = document.getElementById('environment').value;
const effect= document.getElementById('effect').value;


var summaryText = `
<div style="position: relative;">
<h5 style="color: white; background-color: green; padding: 10px; margin-bottom: 0;"> 
  REPORTING INFORMATION 
  <i class="fas fa-pencil-alt" style="float: right;"></i>
</h5> 
<hr style="border-color: darkblue; margin-top: 0;">
</div>
<p><strong> Name:</strong> ${name} </p>
<p><strong> Role:</strong> ${role} </p>
<p><strong> Institution:</strong> ${institution} </p>
<p><strong> Date of Inspection:</strong> ${doi} </p>
<p><strong> Tools:</strong> ${tools} </p>
<p><strong> Methods:</strong> ${methods} </p>
<p><strong> Purpose of Condition Report:</strong> ${purpose_of_condition_report} </p>
<p><strong> Name of Client :</strong> ${name_of_client} </p>
<p><strong> Height:</strong> ${height} </p>
<p><strong> Examination center:</strong> ${examination_center} </p>
<p><strong> Platform:</strong> ${platform} </p>
<p><strong> Behind glass:</strong> ${behind_glass} </p>
<p><strong> Quantity:</strong> ${quantity} </p>
<p><strong> Quality:</strong> ${quality} </p>
<p><strong> Nature:</strong> ${nature} </p>
<p><strong> Ruler ?:</strong> ${ruler} </p>
<p><strong> Microscope ?:</strong> ${microscope} </p>
<p><strong> Camera ?:</strong> ${camera} </p>
<p><strong> Gloves ?:</strong> ${gloves} </p>
<p><strong> Clothing ?:</strong> ${clothing} </p>
<p><strong> Person Present name:</strong> ${person_present_name} </p>
<p><strong> Person Present Role:</strong> ${person_present_role} </p>
<p><strong> Duration of assessment:</strong> ${duration_of_assessment} </p>
<p><strong> Inaccessibility of part of Asset:</strong> ${inaccessibility} </p>

<div style="position: relative;">
<h5 style="color: white; background-color: green; padding: 10px; margin-bottom: 0;"> 
OBJECT IDENTIFICATION
  <i class="fas fa-pencil-alt" style="float: right;"></i>
</h5> 
<hr style="border-color: darkblue; margin-top: 0;">
</div>
<p><strong> Identification Number:</strong> ${identification_no} </p>
<p><strong> Date of Acquisition:</strong> ${date_of_acquisition} </p>
<p><strong> Name of Asset:</strong> ${name_of_asset} </p>
<p><strong> Title:</strong> ${title} </p>
<p><strong> Heading:</strong> ${heading} </p>
<p><strong> Authors:</strong> ${author} </p>
<p><strong> Origin:</strong> ${origin} </p>
<p><strong> Date of creation :</strong> ${date_of_creation} </p>
<p><strong> Ownership:</strong> ${ownership} </p>
<p><strong> Protection:</strong> ${protection} </p>
<p><strong> Summary:</strong> ${summary} </p>



<div style="position: relative;">
<h5 style="color: white; background-color: green; padding: 10px; margin-bottom: 0;"> 
OBJECT DESCRIPTION 
  <i class="fas fa-pencil-alt" style="float: right;"></i>
</h5> 
<hr style="border-color: darkblue; margin-top: 0;">
</div>

<p><strong> Material:</strong> ${material} </p>
<p><strong> Structure:</strong> ${structure} </p>
<p><strong> Surface:</strong> ${surface} </p>
<p><strong> History:</strong> ${history} </p>
<p><strong> Technique:</strong> ${technique} </p>
<p><strong> Weight:</strong> ${weight} </p>
<p><strong> Constituent Elements:</strong> ${contituent_elements} </p>
<p><strong> Number of elements :</strong> ${no_of_elements} </p>
<p><strong> Height:</strong> ${heights} </p>
<p><strong> Length:</strong> ${length} </p>
<p><strong> Width:</strong> ${width} </p>
<p><strong> Installation Notes:</strong> ${installation_notes} </p>
<p><strong> Artist installation guide:</strong> ${artist_installation_guide} </p>
<p><strong> Object creation description:</strong> ${object_creation_description} </p>
<div>
${imagesHTML}
</div>


<div style="position: relative;">
<h5 style="color: white; background-color: green; padding: 10px; margin-bottom: 0;"> 
OBJECT ENVIRONMENT
  <i class="fas fa-pencil-alt" style="float: right;"></i>
</h5> 
<hr style="border-color: darkblue; margin-top: 0;">
</div>

<p><strong> Environment in which item is held:</strong> ${environment} </p>
<p><strong> Effect of Environment on object:</strong> ${effect} </p>


<div style="position: relative;">
<h5 style="color: white; background-color: green; padding: 10px; margin-bottom: 0;"> 
CONDITIONS DESCRIPTION (OBEJCT)
  <i class="fas fa-pencil-alt" style="float: right;"></i>
</h5> 
<hr style="border-color: darkblue; margin-top: 0;">
</div>

<div style="position: relative;">
<h5 style="color: white; background-color: green; padding: 10px; margin-bottom: 0;"> 
DIAGNOSTIC AND RECOMMENDATIONS
  <i class="fas fa-pencil-alt" style="float: right;"></i>
</h5> 
<hr style="border-color: darkblue; margin-top: 0;">
</div>
`;



document.getElementById('summaryDiv').innerHTML = summaryText;

let summaryModal = new bootstrap.Modal(document.getElementById('summaryModal'));
summaryModal.show();
}

//**************************************************************************************************************************************************












//******************************************************************************** 

function closeModal() {
$('#summaryModal').modal('hide');

}

//******************************************************************************** 











//******************************************************************************** ****************************************************

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


changeLanguage();   // Initialize placeholders with default language  //calling of function


//******************************************************************************************************************************* 












//*********************************************************************************************************************************

function record(){

  var recognition = new webkitSpeechRecognition();
  recognition.lang = "fr-FR";
  recognition.onresult = function(event){

      document.getElementById('purpose_of_condition_report').value = event.results[0][0].transcript;
  }
  recognition.start();
}

//*********************************************************************************************************************************











//******************************************************************************** ************************************************

function getTodayDate() {
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');
return `${year}-${month}-${day}`;
}

// Set the value of the date input to today's date
document.getElementById('doi').value = getTodayDate();



//*********************************************************************************************************************************