class Solution {
    encode(str) {
        console.log("len", str.length == 0)
        if(str.length == 0){
            console.log("dupa");
            return "?-?";
        } 
        console.log("dont you dare")
        return str.join("!:!");
    }
    decode(str) {
        if (str === "") {
            console.log("im here")
            return [""];
        } 
        if (str === "?-?") {
            return []
        }
        return str.split("!:!");
    }
}
