

function encipherStr(str) {
    str = str.split("");
    
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'a':
                str[i] = '1';
                break;
            case 'e':
                str[i] = 2;
                break;
            case 'i':
                str[i] = 3;
                break;
            case 'o':
                str[i] = 4;
                break;
            case 'u':
                str[i] = 5;
                break;

            case 'b':
                str[i] = 'y';
                break;
            case 'c':
                str[i] = 'x';
                break;
            case 'd':
                str[i] = 'w';
                break;
            case 'f':
                str[i] = 'u';
                break;
            case 'g':
                str[i] = 't';
                break;
            case 'h':
                str[i] = 's';
                break;
            case 'j':
                str[i] = 'q';
                break;
            case 'k':
                str[i] = 'p';
                break;
            case 'l':
                str[i] = 'o';
                break;
            case 'm':
                str[i] = 'n';
                break;
            case 'n':
                str[i] = 'm';
                break;
            case 'p':
                str[i] = 'k';
                break;
            case 'q':
                str[i] = 'j';
                break;
            case 'r':
                str[i] = 'i';
                break;
            case 's':
                str[i] = 'h';
                break;
            case 't':
                str[i] = 'g';
                break;
            case 'v':
                str[i] = 'e';
                break;
            case 'w':
                str[i] = 'd';
                break;
            case 'x':
                str[i] = 'c';
                break;
            case 'y':
                str[i] = 'b';
                break;
            case 'z':
                str[i] = 'a';
                break;

            default:
                break;
        };
    };
    return str.join("");
};
function decipherStr(str) {
    str = str.split("");
    
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case '1':
                str[i] = 'a';
                break;
            case '2':
                str[i] = 'e';
                break;
            case '3':
                str[i] = 'i';
                break;
            case '4':
                str[i] = 'o';
                break;
            case '5':
                str[i] = 'u';
                break;

            case 'a':
                str[i] = 'z';
                break;
            case 'b':
                str[i] = 'y';
                break;
            case 'c':
                str[i] = 'x';
                break;
            case 'd':
                str[i] = 'w';
                break;
            case 'e':
                str[i] = 'v';
                break;
            case 'f':
                str[i] = 'u';
                break;
            case 'g':
                str[i] = 't';
                break;
            case 'h':
                str[i] = 's';
                break;
            case 'i':
                str[i] = 'r';
                break;
            case 'j':
                str[i] = 'q';
                break;
            case 'k':
                str[i] = 'p';
                break;
            case 'l':
                str[i] = 'o';
                break;
            case 'm':
                str[i] = 'n';
                break;
            case 'n':
                str[i] = 'm';
                break;
            case 'o':
                str[i] = 'l';
                break;
            case 'p':
                str[i] = 'k';
                break;
            case 'q':
                str[i] = 'j';
                break;
            case 'r':
                str[i] = 'i';
                break;
            case 's':
                str[i] = 'h';
                break;
            case 't':
                str[i] = 'g';
                break;
            case 'u':
                str[i] = 'f';
                break;
            case 'v':
                str[i] = 'e';
                break;
            case 'w':
                str[i] = 'd';
                break;
            case 'x':
                str[i] = 'c';
                break;
            case 'y':
                str[i] = 'b';
                break;
            case 'z':
                str[i] = 'a';
                break;

            default:
                break;
        };
    };
    return str.join("");
}

console.log(encipherStr("I love cryptography!"));
console.log(decipherStr(encipherStr("I love cryptography!")))