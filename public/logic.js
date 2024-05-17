document.addEventListener('DOMContentLoaded', function () {
  var currentStep = 1;
  var progresStep = 0;

 
  document.querySelectorAll('.next').forEach(function (nextButton) {
      nextButton.addEventListener('click', function () {
          document.getElementById('step' + currentStep).classList.remove('active');
          currentStep++;
          progresStep++;
          document.getElementById('step' + currentStep).classList.add('active');
          //console.log('when clicked next',currentStep)
          updateProgressBarNormal();

      });
  });

 
  document.querySelectorAll('.prev').forEach(function (prevButton) {
      prevButton.addEventListener('click', function () {
          document.getElementById('step' + currentStep).classList.remove('active');
          currentStep--;
          progresStep--;
          document.getElementById('step' + currentStep).classList.add('active');
          //console.log('when clicked previous',currentStep)
          updateProgressBarNormal();
      });
  });

 
  document.getElementById('summaryDiv').addEventListener('click', function (event) {
      if (event.target && event.target.matches('i.fas.fa-pencil-alt')) {
          var pencilId = event.target.id;
          var stepNumber = parseInt(pencilId.replace('pencil', ''));
          showFormStep(stepNumber);
         
      }
  });


  function showFormStep(stepNumber) {
      
      document.querySelectorAll('.step-form').forEach(function (step) {
          step.classList.remove('active');
      });

     
      document.getElementById('step' + stepNumber).classList.add('active');
     
      updateProgressBar(stepNumber - 1);
      currentStep = stepNumber;
      progresStep = currentStep - 1;
      $('#summaryModal').modal('hide');
      

  }

  
  function updateProgressBar(progresStep) {
      var progressBarWidth = progresStep * 20;
      document.querySelector('.progress-bar').style.width = progressBarWidth + '%';
  }

  function updateProgressBarNormal() {
    var progressBarWidth = progresStep * 20;
    document.querySelector('.progress-bar').style.width = progressBarWidth + '%';
}
});










//**************************************************************************************************************************************** */





document.getElementById('FetchEROS').addEventListener('click', function() {

  var identificationNumber = document.getElementById('identification_no').value;


  //var apiUrl = 'https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/notices-d-oeuvres-du-c2r[…]re=numero_de_reference_c2rmf%20like%20%22' + encodeURIComponent(identificationNumber) + '%22';
  var apiUrl = 'https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/notices-d-oeuvres-du-c2rmf/records?where=numero_de_reference_c2rmf%20like%20%22' + encodeURIComponent(identificationNumber) + '%22';
  var artiste = document.getElementById('author');
  var titre_ou_designation = document.getElementById('title');
  var hauteur_ou_diametre_mm = document.getElementById('heights');
  var largeur_ou_diametre_mm= document.getElementById('width');

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          
          console.log(data);

        
          artiste.value = data.results[0].artiste;
          
         
          titre_ou_designation.value = data.results[0].titre_ou_designation;

        
          hauteur_ou_diametre_mm.value = data.results[0].hauteur_ou_diametre_mm;

        
          largeur_ou_diametre_mm.value = data.results[0].largeur_ou_diametre_mm;

          document.getElementById('successAlert').style.display = 'block';
          
          setTimeout(function() {
            document.getElementById('successAlert').style.display = 'none';
          }, 2000);



      })
      .catch(error => {
          console.error('Error fetching data:', error);
          document.getElementById('errorAlert').style.display = 'block';

        
          artiste.value = '';
          
         
          titre_ou_designation.value = '';

        
          hauteur_ou_diametre_mm.value = '';

         
          largeur_ou_diametre_mm.value = '';
          
          setTimeout(function() {
            document.getElementById('errorAlert').style.display = 'none';
          }, 2000);
      });
});












//**********************************************************************************************************************************



document.getElementById('buttonForAddTool').onclick = function () {

  let tools =  document.getElementById('tools');
  let option = document.createElement('option');
  let textInput = document.getElementById('textfieldForAddTool'); 
  option.value = textInput.value
  option.text = textInput.value

  tools.add(option)
   
  //textInput.value = '';

  //
  var toolName = document.getElementById('textfieldForAddTool').value;
  if (toolName) {
    var checkboxContainer = document.querySelector('.checkbox-containers');

    // Create new checkbox div
    var newCheckboxDiv = document.createElement('div');
    newCheckboxDiv.classList.add('checkbox');

    // Create new label
    var newLabel = document.createElement('label');

    // Create new checkbox input
    var newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.name = 'tools';
    newCheckbox.value = toolName;

    // Append checkbox to label
    newLabel.appendChild(newCheckbox);
    newLabel.appendChild(document.createTextNode(' ' + toolName));

    // Append label to checkbox div
    newCheckboxDiv.appendChild(newLabel);

    // Append checkbox div to container
    checkboxContainer.appendChild(newCheckboxDiv);

    // Clear the input field
    document.getElementById('textfieldForAddTool').value = '';
}
}





//**************************************************************************************************************************************** */





document.getElementById('FetchJOCONDE').addEventListener('click', function() {

  var identificationNumber = document.getElementById('identification_no').value;


  
  var apiUrl = 'https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/base-joconde-extrait/records?select=*&where=reference%20like%20%22'+ encodeURIComponent(identificationNumber) +'%22';
  var artiste = document.getElementById('author');
  var titre_ou_designation = document.getElementById('title');
  var Hauteur = document.getElementById('heights');
  var Largeur = document.getElementById('width');

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          
          console.log(data);

          
          artiste.value = data.results[0].auteur;
          
         
          titre_ou_designation.value = data.results[0].titre;

          
          var mesureStringforHauteur = data.results[0].mesures; // "Hauteur 34 ; Largeur 24"
          var hauteurValue = mesureStringforHauteur.split(';')[0].trim().split(' ')[1]; // "34"
          Hauteur.value = hauteurValue; 

         
          var mesureStringforLargeur = data.results[0].mesures; // "Hauteur 34 ; Largeur 24"
          var LargeurValue = mesureStringforLargeur.split(';')[1].trim().split(' ')[1]; // "34"
          Largeur.value = LargeurValue; 

          document.getElementById('successAlert').style.display = 'block';
          
          setTimeout(function() {
            document.getElementById('successAlert').style.display = 'none';
          }, 2000);
         

          

      })
      .catch(error => {
          console.error('Error fetching data:', error);
          document.getElementById('errorAlert').style.display = 'block';

         
          artiste.value = '';
          
         
          titre_ou_designation.value = '';

         
          Hauteur.value = ''; 

         
          Largeur.value = ''; 


          
          setTimeout(function() {
            document.getElementById('errorAlert').style.display = 'none';
          }, 2000);
          

      });
});












//**********************************************************************************************************************************








//************************************************************************************************************************************************* */
let uploadedFiles = []; // Define an array to store uploaded files with their captions and names


function displayUploadMessage() {

let filesUploaded = document.getElementById('inputGroupFile02').files;
console.log(filesUploaded)
const previewContainer = document.getElementById('previewContainer');


previewContainer.innerHTML = '';  // Clear previous previews

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
    inputFieldCaption.classList.add('form-control'); 
    inputFieldCaption.classList.add('caption');
    inputFieldCaption.setAttribute('placeholder', 'Enter caption here');
    inputFieldCaption.addEventListener('input', function() {
      updateCaption(file.name, inputFieldCaption.value);
    });
    previewItem.appendChild(inputFieldCaption);

    //******DELETE BUTTON****************************** */

     
      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'Delete';
      deleteButton.classList.add('btn', 'btn-danger'); 
      deleteButton.setAttribute('type', 'button'); 
      deleteButton.addEventListener('click', function() {
        deleteFile(file.name);
        previewContainer.removeChild(previewItem);
      });
      previewItem.appendChild(deleteButton);


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
 //console.log(uploadedFiles);
}

/*********************************************** */
function deleteFile(fileName) {
  uploadedFiles = uploadedFiles.filter(file => file.fileName !== fileName);
   //console.log('when deleted' , uploadedFiles);
   
// Clear the input element value
const inputElement = document.getElementById('inputGroupFile02');
inputElement.value = null; 

// Update the files uploaded in the input element based on the updated uploadedFiles array
const updatedFiles = new DataTransfer();
uploadedFiles.forEach(file => {
  const blob = dataURItoBlob(file.image);
  const fileItem = new File([blob], file.fileName);
  updatedFiles.items.add(fileItem);
});
inputElement.files = updatedFiles.files;

//console.log('when deleted', uploadedFiles);
}

function dataURItoBlob(dataURI) {
// Convert base64 to raw binary data held in a string
const byteString = atob(dataURI.split(',')[1]);

// Separate the mime component
const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

// Write the bytes of the string to an ArrayBuffer
const ab = new ArrayBuffer(byteString.length);
const ia = new Uint8Array(ab);
for (let i = 0; i < byteString.length; i++) {
  ia[i] = byteString.charCodeAt(i);
}

// Create a Blob
return new Blob([ab], { type: mimeString });

}


//************************************************************************************************************************************************














//**********************************************************************************************************************************
let uploadedFiles2 = []; // Define an array to store uploaded files with their captions and names


function displayUploadMessage2() {

let filesUploaded2 = document.getElementById('inputGroupFile04').files;
const previewContainer2 = document.getElementById('previewContainer1');


previewContainer2.innerHTML = '';  // Clear previous previews

for (let i = 0; i < filesUploaded2.length; i++) {
  const file = filesUploaded2[i];
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
    inputFieldCaption.classList.add('form-control'); 
    inputFieldCaption.classList.add('caption');
    inputFieldCaption.setAttribute('placeholder', 'Enter caption here');
    inputFieldCaption.addEventListener('input', function() {
      updateCaption2(file.name, inputFieldCaption.value);
    });
    previewItem.appendChild(inputFieldCaption);

        //******DELETE BUTTON****************************** */

     
        const deleteButton2 = document.createElement('button');
        deleteButton2.innerText = 'Delete';
        deleteButton2.classList.add('btn', 'btn-danger'); 
        deleteButton2.setAttribute('type', 'button'); 
        deleteButton2.addEventListener('click', function() {
          deleteFile2(file.name);
          previewContainer2.removeChild(previewItem);
        });
        previewItem.appendChild(deleteButton2);
  
  
  //************************************************ */

//************************************************ */
    previewContainer2.appendChild(previewItem);

//************************************************ */
    // Push the uploaded file into the array
    uploadedFiles2.push({
      image: e.target.result,
      caption: '',
      fileName: file.name
    });

    };
    reader.readAsDataURL(file);
  }}

  function updateCaption2(fileName, newCaption) {
    uploadedFiles2.forEach(upload => {
      if (upload.fileName === fileName) {
        upload.caption = newCaption;
      }
    });
    // console.log(uploadedFiles);
    }

    /*************************************** */

    function deleteFile2(fileName) {
      uploadedFiles2 = uploadedFiles2.filter(file => file.fileName !== fileName);
       //console.log('when deleted' , uploadedFiles);
       
    // Clear the input element value
    const inputElement = document.getElementById('inputGroupFile04');
    inputElement.value = null; 
    
    // Update the files uploaded in the input element based on the updated uploadedFiles array
    const updatedFiles2 = new DataTransfer();
    uploadedFiles2.forEach(file => {
      const blob = dataURItoBlob(file.image);
      const fileItem = new File([blob], file.fileName);
      updatedFiles2.items.add(fileItem);
    });
    inputElement.files = updatedFiles2.files;
    
    //console.log('when deleted', uploadedFiles);
    }
    
    function dataURItoBlob(dataURI) {
    // Convert base64 to raw binary data held in a string
    const byteString = atob(dataURI.split(',')[1]);
    
    // Separate the mime component
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    
    // Write the bytes of the string to an ArrayBuffer
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    
    // Create a Blob
    return new Blob([ab], { type: mimeString });
    
    }
    


//**********************************************************************************************************************************************
















//*********************************************************************************************************************************************

function viewSummary(formId) {

//***********FOR UPLOADING (First) **************
let images = [];
let captions = [];
let fileNames = [];

uploadedFiles.forEach(upload => {
  images.push(upload.image);
  captions.push(upload.caption);
  fileNames.push(upload.fileName);
});

const form = document.getElementById(formId);
console.log(form)

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

const fileNamesInput = document.createElement('input');
fileNamesInput.type = 'hidden';
fileNamesInput.style.display = 'none';
fileNamesInput.style.visibility = 'hidden';
fileNamesInput.name = 'fileNames';
fileNamesInput.value = JSON.stringify(fileNames);
form.appendChild(fileNamesInput);


console.log("Images:", images);
console.log("Captions:", captions);
console.log("File Names:", fileNames);

var imagesHTML = '';

for (let i = 0; i < images.length; i++) {
  imagesHTML += `
  
    <img src="${images[i]}" style="width: 400px; height: 400px;">
    <p>${captions[i]}</p>
    <p>${fileNames[i]}</p>
  `;
}

//************************ **************



//***********FOR UPLOADING (Second) **************
let images2 = [];
let captions2 = [];
let fileNames2 = [];

uploadedFiles2.forEach(upload => {
  images2.push(upload.image);
  captions2.push(upload.caption);
  fileNames2.push(upload.fileName);
});

const form2 = document.getElementById(formId);

const captionsInput2 = document.createElement('input');
captionsInput2.type = 'hidden';
captionsInput2.style.display = 'none';
captionsInput2.style.visibility = 'hidden';
captionsInput2.name = 'captions2';
captionsInput2.value = JSON.stringify(captions2);
form2.appendChild(captionsInput2);

const imagesInput2 = document.createElement('input');
imagesInput2.type = 'hidden';
imagesInput2.style.display = 'none';
imagesInput2.style.visibility = 'hidden';
imagesInput2.name = 'images2';
imagesInput2.value = JSON.stringify(images2);
form2.appendChild(imagesInput2);

const fileNamesInput2 = document.createElement('input');
fileNamesInput2.type = 'hidden';
fileNamesInput2.style.display = 'none';
fileNamesInput2.style.visibility = 'hidden';
fileNamesInput2.name = 'fileNames2';
fileNamesInput2.value = JSON.stringify(fileNames2);
form2.appendChild(fileNamesInput2);

var imagesHTML2 = '';
  
for (let i = 0; i < images2.length; i++) {     
  imagesHTML2 += `
  
    <img src="${images2[i]}" style="width: 400px; height: 400px;">
    <p>${captions2[i]}</p>
    <p>${fileNames2[i]}</p>
  `;
}



//************************ **************

// FOR SLIDE 1
const name = document.getElementById('name').value;             
const role = document.getElementById('role').value;
const institution = document.getElementById('institution').value;
let doi;
let doii;
if (formId === 'registrationForm') {
   doi = document.getElementById('doi').value;
  // Do something with the doi variable for register form
} else if (formId === 'UpdateForm') {
   doii = document.getElementById('doii').value;
  // Do something with the doii variable for update form
}
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
const type = document.getElementById('type').value;
const ruler = document.getElementById('ruler').value;
const microscope = document.getElementById('microscope').value;
const camera = document.getElementById('camera').value;
const gloves = document.getElementById('gloves').value;
const clothing = document.getElementById('clothing').value;
const reliability_collected_data = document.querySelector('input[name="reliability_collected_data"]:checked')?.value || '';
const support = document.querySelector('input[name="support"]:checked')?.value || '';
const cmnt_reliabilty = document.getElementById('cmnt_reliabilty').value;
const person_present_during_inspection = document.getElementById('person_present_during_inspection').value;
const contact_person_inspection = document.getElementById('contact_person_inspection').value;
const duration_of_assessment = document.getElementById('duration_of_assessment').value;
const inaccessibility = document.getElementById('inaccessibility').value;


// FOR SLIDE 2
const identification_no  = document.getElementById('identification_no').value;
const date_of_acquisition = document.getElementById('date_of_acquisition').value;
const title = document.getElementById('title').value;
const author = document.getElementById('author').value;
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
const no_of_items = document.getElementById('no_of_items').value;
const heights = document.getElementById('heights').value;
const width = document.getElementById('width').value;
const installation_notes = document.getElementById('installation_notes').value;
const artist_installation_guide = document.getElementById('artist_installation_guide').value;
const object_creation_description = document.getElementById('object_creation_description').value;


 // FOR SLIDE 4
const environment = document.getElementById('environment').value;
const effect= document.getElementById('effect').value;

// FOR SLIDE 5

const info_observed = document.getElementById('info_observed').value;
const report_change = document.getElementById('report_change').value;

// FOR SLIDE 6

const descriptive_diagnosis = document.getElementById('descriptive_diagnosis').value;
const recommendations = document.getElementById('recommendations').value;
const investigations = document.getElementById('investigations').value;


var summaryText = `
<div style="position: relative;">
<h5 style="color: white; background-color: green; padding: 10px; margin-bottom: 0;"> 
  REPORTING INFORMATION 
  <i id="pencil1" class="fas fa-pencil-alt" style="float: right;"></i>
</h5> 
<hr style="border-color: darkblue; margin-top: 0;">
</div>
<p><strong> Name:</strong> ${name} </p>
<p><strong> Role:</strong> ${role} </p>
<p><strong> Institution:</strong> ${institution} </p>
`;

if (doi) {
  summaryText += `<p><strong> Date of Inspection:</strong> ${doi} </p>`;
}

if (doii) {
  summaryText += `<p><strong> Date of Inspection:</strong> ${doii} </p>`;
}

summaryText += `

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
<p><strong> Type:</strong> ${type} </p>
<p><strong> Ruler ?:</strong> ${ruler} </p>
<p><strong> Microscope ?:</strong> ${microscope} </p>
<p><strong> Camera ?:</strong> ${camera} </p>
<p><strong> Gloves ?:</strong> ${gloves} </p>
<p><strong> Clothing ?:</strong> ${clothing} </p>
<p><strong> Reliability of collected data ?:</strong> ${reliability_collected_data} </p>
<p><strong> Support ?:</strong> ${support} </p>
<p><strong> Comment on reliability of data:</strong> ${cmnt_reliabilty} </p>
<p><strong> Person(s) present during the inspection :</strong> ${person_present_during_inspection} </p>
<p><strong> Contact persons for the inspection :</strong> ${contact_person_inspection} </p>
<p><strong> Time used to complete the survey:</strong> ${duration_of_assessment} </p>
<p><strong> Inaccessibility of parts of Asset:</strong> ${inaccessibility} </p>





<div style="position: relative;">
<h5 style="color: white; background-color: green; padding: 10px; margin-bottom: 0;"> 
OBJECT IDENTIFICATION
  <i id="pencil2" class="fas fa-pencil-alt" style="float: right;"></i>
</h5> 
<hr style="border-color: darkblue; margin-top: 0;">
</div>
<p><strong> Identification Number:</strong> ${identification_no} </p>
<p><strong> Date of Acquisition:</strong> ${date_of_acquisition} </p>
<p><strong> Title:</strong> ${title} </p>
<p><strong> Authors:</strong> ${author} </p>
<p><strong> Date of creation :</strong> ${date_of_creation} </p>
<p><strong> Ownership:</strong> ${ownership} </p>
<p><strong> Protection:</strong> ${protection} </p>
<p><strong> Summary:</strong> ${summary} </p>



<div style="position: relative;">
<h5 style="color: white; background-color: green; padding: 10px; margin-bottom: 0;"> 
OBJECT DESCRIPTION 
  <i id="pencil3" class="fas fa-pencil-alt" style="float: right;"></i>
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
<p><strong> Number of items :</strong> ${no_of_items} </p>
<p><strong> Height:</strong> ${heights} </p>
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
  <i id="pencil4" class="fas fa-pencil-alt" style="float: right;"></i>
</h5> 
<hr style="border-color: darkblue; margin-top: 0;">
</div>

<p><strong> Environment in which item is held:</strong> ${environment} </p>
<p><strong> Effect of Environment on object:</strong> ${effect} </p>


<div style="position: relative;">
<h5 style="color: white; background-color: green; padding: 10px; margin-bottom: 0;"> 
CONDITIONS DESCRIPTION (OBEJCT)
  <i id="pencil5" class="fas fa-pencil-alt" style="float: right;"></i>
</h5> 
<hr style="border-color: darkblue; margin-top: 0;">
</div>

<p><strong> Information observed concerning current state of item :</strong> ${info_observed} </p>
<p><strong> Please report the change (repair, treatment):</strong> ${report_change} </p>
<div>
${imagesHTML2}
</div>

<div style="position: relative;">
<h5 style="color: white; background-color: green; padding: 10px; margin-bottom: 0;"> 
DIAGNOSTIC AND RECOMMENDATIONS
  <i id="pencil6" class="fas fa-pencil-alt" style="float: right;"></i>
</h5> 
<hr style="border-color: darkblue; margin-top: 0;">
</div>



<p><strong> Descriptive diagnosis of reason for deterioration :</strong> ${descriptive_diagnosis} </p>
<p><strong> Recommendations for further care and / or conservation:</strong> ${recommendations} </p>
<p><strong> Further scientific, historical, technical or other investigation or analysis:</strong> ${investigations} </p>

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
  document.getElementById('type').placeholder = i18n[selectedLanguage].Type;
  document.getElementById('rulerLabel').innerText = i18n[selectedLanguage].Ruler;
  document.getElementById('microscopeLabel').innerText = i18n[selectedLanguage].Microscope;
  document.getElementById('cameraLabel').innerText = i18n[selectedLanguage].Camera;
  document.getElementById('glovesLabel').innerText = i18n[selectedLanguage].Gloves;
  document.getElementById('clothingLabel').innerText = i18n[selectedLanguage].Clothing;
  document.getElementById('person_present_during_inspection').placeholder = i18n[selectedLanguage].Person_Present_during_inspection;
  document.getElementById('working_conditions').innerText = i18n[selectedLanguage].working_conditions;
  document.getElementById('reporting_info_heading').innerText = i18n[selectedLanguage].heading_Reporting_info;
  document.getElementById('assets_used_legend').innerText = i18n[selectedLanguage].assets_used;
  document.getElementById('protection_Legend').innerText = i18n[selectedLanguage].protection;
  
  document.getElementById('reliability_collect_data_label').innerText = i18n[selectedLanguage].Reliability_collected_dataLegend;
  document.getElementById('not_available').innerText = i18n[selectedLanguage].Not_available;
  document.getElementById('incomplete').innerText = i18n[selectedLanguage].Incomplete;
  document.getElementById('cmnt_reliabilty').placeholder = i18n[selectedLanguage].Cmnt_reliabilty;

  document.getElementById('additional_details').innerText = i18n[selectedLanguage].Additional_details;
  document.getElementById('person_present_during_inspection').placeholder = i18n[selectedLanguage].Person_present_during_inspection;
  document.getElementById('contact_person_inspection').placeholder = i18n[selectedLanguage].Contact_person_inspection;
  document.getElementById('duration_of_assessment').placeholder = i18n[selectedLanguage].Duration_of_assessment;
  document.getElementById('inaccessibility').placeholder = i18n[selectedLanguage].Inaccessibility;

   //***************************************** FOR SLIDE 2 *****************************************************

  document.getElementById('identification_no').placeholder = i18n[selectedLanguage].Identification_Number;
  document.getElementById('doaLabel').innerText = i18n[selectedLanguage].Date_of_acqisation; //
  document.getElementById('identification_noLabel').innerText = i18n[selectedLanguage].Identification_noLabel; //
  document.getElementById('title').placeholder = i18n[selectedLanguage].Title;
  document.getElementById('author').placeholder = i18n[selectedLanguage].Author;
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
  document.getElementById('heights').placeholder = i18n[selectedLanguage].Heights;
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



//*********************************************************************************************************************************  function updateCheckboxValue(checkbox, idFetch) {
  function updateCheckboxValue(checkbox, idFetch) {
    var checkboxValueField = document.getElementById(idFetch);
    if (checkbox.checked) {
        checkboxValueField.value = "Yes";
    } 
    else {
        checkboxValueField.value = ""; 
    }
}