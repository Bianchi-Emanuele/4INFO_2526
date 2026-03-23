function estraiMaiuscole(stringa) {
    return stringa.split('').filter(c => c >= 'A' && c <= 'Z');
}
console.log((estraiMaiuscole("ccHEewLtfL20q sWrds0gtvfdcRwLffDff")));