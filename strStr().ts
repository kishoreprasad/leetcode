function strStr(haystack: string, needle: string): number {
    for(var i=0;i<haystack.length;i++){
        if(haystack[i]===needle[0]){
            let flag=1;
            for(var j=1;j<needle.length;j++){
                if(haystack[i+j]==needle[j]){continue;}
                else{flag=0;}
            }
            if(flag==1){return i;}
        }
    }
    return -1;
};