function countAndSay(n: number): string {
    if(n==1){return "1";}
    else{
        let return_value=countAndSay(n-1);
        let output_str="";
        for(var i=0;i<return_value.length;i++){
            for(var j=1;return_value[i]==return_value[i+1];j++){i++;}
            let append_str=j.toString()+return_value[i];
            output_str+=append_str;
        }
        return output_str;
    }
};