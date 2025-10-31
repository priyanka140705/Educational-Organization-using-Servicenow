function onChange(control, oldValue, newValue, isLoading, isTemplate) {

   if (isLoading || newValue === '') {

      return;

   }


   //Type appropriate comment here, and begin script below

   var a = g_form.getReference('u_admission_number');

   g_form.setValue('u_admin_date',a.u_admin_date);

   g_form.setValue('u_grade',a.u_grade);

   g_form.setValue('u_student_name',a.u_student_name);

   g_form.setValue('u_father_name',a.u_father_name);

   g_form.setValue('u_mother_name',a.u_mother_name);

   g_form.setValue('u_father_cell',a.u_father_cell);

   g_form.setValue('u_mother_cell',a.u_mother_cell);



   g_form.setDisabled('u_admin_date',a.u_admin_date);

   g_form.setDisabled('u_grade',a.u_grade);

   g_form.setDisabled('u_student_name',a.u_student_name);

   g_form.setDisabled('u_father_name',a.u_father_name);

   g_form.setDisabled('u_mother_name',a.u_mother_name);

   g_form.setDisabled('u_father_cell',a.u_father_cell);

   g_form.setDisabled('u_mother_cell',a.u_mother_cell);

}


function onChange(control, oldValue, newValue, isLoading, isTemplate) {

   if (isLoading || newValue === '') {

      return;

   }

    var a = g_form.getValue('u_pincode');

if(a == '509358')

{

g_form.setValue('u_mandal', 'kadthal');

g_form.setValue('u_city', 'kadthal');

g_form.setValue('u_district', 'RangaReddy');


}

else if(a == '500081')

{

g_form.setValue('u_mandal', 'karmanghat');

g_form.setValue('u_city', 'karmanghat');

g_form.setValue('u_district', 'RangaReddy');


}

else if(a == '500079')

{

g_form.setValue('u_mandal', 'Abids');

g_form.setValue('u_city', 'AsifNagar');

g_form.setValue('u_district', 'Hyderabad');

}
}

function onLoad() {

   //Type appropriate comment here, and begin script below

   g_form.setDisabled('u_total',true);

   g_form.setDisabled('u_percentage',true);

   g_form.setDisabled('u_result',true);

}

function onChange(control, oldValue, newValue, isLoading, isTemplate) {

   if (isLoading || newValue === '') {

      return;

   }


   //Type appropriate comment here, and begin script below

if (newValue){

var a = parseInt(g_form.getValue('u_telugu'));

var b = parseInt(g_form.getValue('u_hindi'));

var c = parseInt(g_form.getValue('u_english')); 

var d = parseInt(g_form.getValue('u_maths'));

var e = parseInt(g_form.getValue('u_science')); 

var f = parseInt(g_form.getValue('u_social'));

var Total = parseInt(a+b+c+d+e+f);

g_form.setValue('u_total', Total);

}

}

function onChange(control, oldValue, newValue, isLoading, isTemplate) {

   if (isLoading || newValue === '') {

      return;

   }

   //Type appropriate comment here, and begin script below

   if(newValue) {

      var a = parseInt(g_form.getValue('u_percentage')); // Convert the value to an integer for comparison

      if(a >= 0 && a <= 59){

         g_form.setValue('u_result','Fail');

      } else if(a >= 60 && a <= 100) {

         g_form.setValue('u_result','Pass');

      } else {

         // Handle the case if a is out of range (optional)

         g_form.addErrorMessage('Percentage should be between 0 and 100.');

         g_form.clearValue('u_result');

      }

   }

}

function onChange(control, oldValue, newValue, isLoading, isTemplate) {

   if (isLoading || newValue === '') {

      return;

   }


   //Type appropriate comment here, and begin script below

   var Total = g_form.getValue('u_total');

   var Percentage = (Total/600)*100;

   g_form.setValue('u_percentage',Percentage+'%');

}



