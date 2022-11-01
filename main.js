var staffList=[];
var validator = new ValidationStaff();

const staffList_LocalStorage="staffList_LocalStorage";
const saveLocalStorage=function(){
    var staffListJson=JSON.stringify(staffList);
    localStorage.setItem(staffList_LocalStorage,staffListJson);
};


const findPosition= function(account,array){
    return array.findIndex(function(i){
        return i.account== account;
    })
}
var staffListJson =localStorage.getItem(staffList_LocalStorage);
if(staffListJson){
    staffList=JSON.parse(staffListJson);
    staffList=staffList.map(function(staff){
        return new STAFF(
            staff.account,
            staff.name,
            staff.email,
            staff.password,
            staff.workday,
            staff.baseSalary,
            staff.title,
            staff.numWorkHours,
        );
    });
    showStaffList(staffList);
}
function addStaff(){
    var newStaff= getStaffInfo();
    var isValid= true;

    var isValidAccount= validator.checkEmpty("accountStaff","tbAccount") 
    && validator.checkLength("accountStaff","tbAccount",2,6);
    var isValidName = validator.checkAlphabet("name","name") 
    && validator.checkEmpty("name","name");
    var isValidEmail=validator.checkEmail("email","tbEmail") 
    && validator.checkEmpty("email","tbEmail");
    var isValidPassword=validator.checkEmpty("password","tbPassword")
    && validator.checkLength("password","tbPassword",6,10) && validator.checkPassword("password","tbPassword");
    var isValidWorkDay=validator.checkDate("datepicker","tbWorkDay")
    && validator.checkEmpty("datepicker","tbWorkDay");
    var isValidBaseSalary=validator.checkNumberic("baseSalary","tbBaseSalary")
    && validator.checkBaseSalary("baseSalary","tbBaseSalary",6,10)
    && validator.checkEmpty("baseSalary","tbBaseSalary");
    var isValidTitle=validator.checkTitle("title","tbTitle")
    var isValisWorkTime=validator.checkEmpty("workTime","tbWorkTime")
    && validator.checkWorkTime("workTime","tbWorkTime");
    isValid=isValidAccount &&isValidName &&isValidEmail&&isValidPassword&&
    isValidWorkDay&&isValidBaseSalary &&isValidTitle &&isValisWorkTime;
    if(isValid){
        staffList.push(newStaff);
        showStaffList(staffList);
        document.getElementById("tbAccount").value="";
        saveLocalStorage()
    }
}

function deleteStaff(account){
    var position =findPosition(account,staffList);
    staffList.splice(position,1);
    showStaffList(staffList);
    saveLocalStorage();
}


function editStaff(account){
    var position =findPosition(account,staffList);
    var staff=staffList[position];
    showBackToFrom(staff);
}

function updateStaff(){
    var staffToEdit=getStaffInfo();
    let position =findPosition(staffToEdit.account,staffList);
    staffList[position]=staffToEdit;
    showStaffList(staffList);
    saveLocalStorage();
}

function searchStaff(){
   
    var searchList=[];
    var typeToSearch=document.getElementById("searchName").value;
    let position=findIndexByType(typeToSearch,staffList);
    searchList.push(staffList[position]);
    showSearchingStaffList(searchList);
}
function stopSearch(){
    showStaffList(staffList);
    document.getElementById("searchName").value="";


} 
       



