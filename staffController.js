const getStaffInfo= function(){
    var account=document.getElementById("accountStaff").value;
    var name =document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var workday=document.getElementById("datepicker").value;
    var baseSalary=document.getElementById("baseSalary").value*1;
    var title=document.getElementById("tbTitle").value;
    var numWorkHours=document.getElementById("workTime").value*1;

    var staff =new STAFF(
        account,
        name,
        email,
        password,
        workday,
        baseSalary,
        title,
        numWorkHours,
        );

        return staff;
};

var showStaffList=function(list){
    var contentHTML="";
    for(var i=0;i<list.length;i++){
        var currentStaff=list[i];
        var contentTr=`
        <tr>
        <td>${currentStaff.account}</td>
        <td>${currentStaff.name}</td>
        <td>${currentStaff.email}</td>
        <td>${currentStaff.workday}</td>
        <td>${currentStaff.totalSalary()}</td>
        <td>${currentStaff.type()}</td>
        <td>
        <button data-toggle="modal" data-target="#myModal" class="btn btn-success" onclick="editStaff(${currentStaff.account})">Edit</button>       
        </td>
        <td>
        <button class="btn btn-danger" onclick="deleteStaff(${currentStaff.account})">Delete</button>
        </td>
        </tr>  
        `;
        contentHTML+=contentTr;
    }
    document.getElementById("tableList").innerHTML=contentHTML;
};

var showBackToFrom=function(staff){
    document.getElementById("account").value=staff.account;
    document.getElementById("name").value=staff.name;
    document.getElementById("email").value=staff.email;
    document.getElementById("password").value=staff.password;
    document.getElementById("datepicker").value=staff.datepicker;
    document.getElementById("baseSalary").value=staff.baseSalary;
    document.getElementById("title").value=staff.title;
    document.getElementById("workTime").value=staff.numWorkHours;
}

var findIndexByType=function(type,array){
    return array.findIndex(function(staff){
        return staff.type() === type;
    });
};


const showSearchingStaffList=function(staffSearching){
    var contentHTML="";
    for(var i=0;i<staffSearching.length;i++){
        var currentStaff=staffSearching[i];
        var contentTr=`
        <tr>
        <td>${currentStaff.account}</td>
        <td>${currentStaff.name}</td>
        <td>${currentStaff.email}</td>
        <td>${currentStaff.password}</td>
        <td>${currentStaff.workday}</td>
        <td>${currentStaff.totalSalary()}</td>
        <td>${currentStaff.type()}</td>
        <td>
        <button data-toggle="modal" data-target="#myModal" class="btn btn-success" onclick="editStaff(${currentStaff.account})">Edit</button>       
        </td>
        <td>
        <button class="btn btn-danger" onclick="deleteStaff(${currentStaff.account})">Delete</button>
        </td>
        </tr>  
        `;
        contentHTML+=contentTr;
    }
    document.getElementById("tableList").innerHTML=contentHTML;
}
// var findPosition =function(string,array){
//     return array.findIndex(function(staff){
//         return staff.account===string;
//     });
// };

// var reset = function(){
//     document.getElementById("account").value="";
//     document.getElementById("name").value="";
//     document.getElementById("email").value="";
//     document.getElementById("password").value="";
//     document.getElementById("datepicker").value="";
//     document.getElementById("baseSalary").value="";
//     document.getElementById("workTime").value="";

//     document.getElementById("tbAccount").innerText="";

// }