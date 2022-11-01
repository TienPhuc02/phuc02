const STAFF = 

function( _account,_name,_email,_password,_workday,_baseSalary,_title,_numWorkHours){
    this.account=_account;
    this.name=_name;
    this.email=_email;
    this.password=_password;
    this.workday=_workday;
    this.baseSalary=_baseSalary;
    this.title=_title;
    this.numWorkHours=_numWorkHours;

    this.totalSalary=function(){
        if(this.title == "boss"){
            return this.baseSalary*3
        }else if (this.title == "manager"){
            return this.baseSalary*2;
        }else {
            return this.baseSalary;
        }
    };

    this.type =function(){
        if(this.numWorkHours >=192 ){
            return "excellent"
        }else if (this.numWorkHours >=176){
            return "good";
        }else if (this.numWorkHours >=160){
            return "averange";
        }else {
            return "bad";
        }
    };
};


