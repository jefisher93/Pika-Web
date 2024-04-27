async function fetchPika() {
    let PikaFact = await fetch('https://api.adviceslip.com/advice')
        .then(res => res.json());
        
       
        var h5 = document.createElement('h5');
        h5.innerHTML = "Advice for the Day";
       
        var para = document.createElement('p');
        para.innerHTML = PikaFact.advice;


        document.body.appendChild(h5);
        document.body.appendChild(para);
    }
    fetchPika();