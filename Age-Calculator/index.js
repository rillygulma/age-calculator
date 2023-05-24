function age (){
    const dateEl = document.getElementById('date').value;
    const monthEl = document.getElementById('month').value;
    const yearEl = document.getElementById('year').value;


    let date = new Date();

    let d1 = date.getDate();
    let m1 = 1 + date.getMonth();
    let y1 = date.getFullYear();
    let month = [31,28,31,30,31,30,31,31,30,31,30,31];

    if(dateEl > d1){
        d1 = d1 + month[m1 - 1];
        m1 = m1 - 1;
    }
    if(monthEl > m1){
        m1 = m1 + 12;
        y1 = y1 - 1;
    }

    let d = d1 - dateEl;
    let m = m1 - monthEl;
    let y = y1 - yearEl;

    document.getElementById('age').innerHTML = 'Your Age is: ' +y+'-Years, '  +m+'-Months, ' + 'and '  +d+'-Days.';
} 