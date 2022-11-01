//tạo chương trình xác thực
var ValidationStaff =function(){
    this.checkEmpty= function(idTarget,idMessage){// tạo function check khoảng trống
        var valueToCheck=document.getElementById(idTarget).value.trim();
        if(valueToCheck==""){
            document.getElementById(idMessage).innerText="Can not be empty!!!";
            return false;
        }else{
            document.getElementById(idMessage).innerText="";
            return true;
        }
    };
    // kiểm tra id trùng lặp
    // this.checkDuplicateId=function(newStudent,studentList){
    //     var index= studentList.findIndex(function(student){
    //         return student.studentId == newStudent.studentId;// tìm ra id của student khi duyệt qua vị trí phần tử đầu tiên
    //     });
    //     if(index==-1){
    //         document.getElementById("spanId").innerText="";// nếu không trùng thì không nói gì
    //         return true;
    //     }else{
    //         document.getElementById("spanId").innerText="Your id has been used!!!";// trùng thì báo đã được sử dụng
    //         return false;
    //     }
    // };
    // kiểm tra email
    this.checkEmail=function(idTarget,idMessage){
        var valueToCheck=document.getElementById(idTarget).value.trim();
        var valiEmailEx=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(valiEmailEx.test(valueToCheck)){// nếu email điền vào đúng định dạng thì ok
            document.getElementById(idMessage).innerText="";
            return true;
        }else{
            document.getElementById(idMessage).innerText="Not valid email";
            return false;
        }
    };
    // kiểm tra chữ cái
    this.checkAlphabet=function(idTarget,idMessage){
        var valueToCheck=document.getElementById(idTarget).value.trim();
        var validAphabet=/^[a-zA-Z() ]+$/;
        if(validAphabet.test(valueToCheck)){
            document.getElementById(idMessage).innerText="";
            return true;
        }else{
            document.getElementById(idMessage).innerText="Not valid alphabet characters";
            return false;
        }
    };
    // chekck số
    this.checkNumberic=function(idTarget,idMessage){
        var valueToCheck=document.getElementById(idTarget).value.trim();
        var validNumberic=/^[0-9]+$/;
        if(validNumberic.test(valueToCheck)){
            document.getElementById(idMessage).innerText="";
            return true;
        }else{
            document.getElementById(idMessage).innerText="Not valid numberic characters";
            return false;
        } 
    }
    // check length;
    this.checkLength=function(idTarget,idMessage,min,max){
        var valueToCheck=document.getElementById(idTarget).value.trim();
        if(valueToCheck.length>min &&valueToCheck.length<max){
            document.getElementById(idMessage).innerText="";
            return true;
        }else{
            document.getElementById(idMessage).innerText=`Plaese input from ${min} to ${max} characters`;
            return false;
        } 
    };
    this.checkPassword= function(idTarget,idMessage){
        var valueToCheck=document.getElementById(idTarget).value.trim();
        var validPass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
        if(validPass.test(valueToCheck)){
            document.getElementById(idMessage).innerText="";
            return true;
        }else{
            document.getElementById(idMessage).innerText="Must contain at least 1 uppercase/1 lowercase/1 numberic character"; 
            return false;
        }
    };
    this.checkDate= function(idTarget,idMessage){
        var valueToCheck=document.getElementById(idTarget).value.trim();
        var validDate=/^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;
        if(validDate.test(valueToCheck)){
            document.getElementById(idMessage).innerText="";
            return true;
        }else{
            document.getElementById(idMessage).innerText="Date must be in format mm/dd/yyyy"; 
            return false;
        }
    };
    this.checkBaseSalary=function(idTarget,idMessage,min,max){
        var valueToCheck=document.getElementById(idTarget).value.trim();
        if(valueToCheck.length>min &&valueToCheck.length<max){
            document.getElementById(idMessage).innerText="";
            return true;
        }else{
            document.getElementById(idMessage).innerText=`Plaese input from ${min} to ${max} characters`;
            return false;
        } 
    };
    this.checkTitle= function(idTarget,idMessage){
        var valueToCheck=document.getElementById(idTarget).value.trim();
        if(valueToCheck== "boss"|| "manager"||"satff"){
            document.getElementById(idMessage).innerText="";
            return true;
        }else{
            document.getElementById(idMessage).innerText="Please choose title"; 
            return false;
        }
    };
    this.checkWorkTime= function(idTarget,idMessage){
        var valueToCheck=document.getElementById(idTarget).value.trim();
        if(valueToCheck>=80 && valueToCheck<=200){
            document.getElementById(idMessage).innerText="";
            return true;
        }else{
            document.getElementById(idMessage).innerText="Number of work hours must be in range from 80 to 200 hours"; 
            return false;
        }
    };
};
    // this.checkDuplicateId=function(newStaff,staffList){
    //     var index= staffList.findIndex(function(staff){
    //         return staff.account == newStaff.account;// tìm ra id của student khi duyệt qua vị trí phần tử đầu tiên
    //     });
    //     if(index==-1){
    //         document.getElementById("account").innerText="";// nếu không trùng thì không nói gì
    //         return true;
    //     }else{
    //         document.getElementById("tbAccount").innerText="Your id has been used!!!";// trùng thì báo đã được sử dụng
    //         return false;
    //     }
    // };
    
    // //===========================================================================

    
    















