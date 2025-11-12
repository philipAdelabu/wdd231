const getData = async () => {
    const response = await fetch('http://127.0.0.1:5500/chamber/data/members.json'); // fetching the data, a request
    const data = await response.json(); //  parse the JSON data
    return data;
}


//making a function call


           /*
             <div class="business-card">
                    <div class="business-card-header">
                         <h3>Business Name</h3>
                          <span>Business Tag Line</span>
                    </div>
                    <div class="business-card-detail">
                        <img src="" alt="" height="" width="" loading="lazy">
                        <ul>
                            <li><strong>EMAIL:</strong> info@gmail.com</li>
                            <li><strong>PHONE:</strong> 800-090-8833 </li>
                            <li><strong>URL:</strong> mybusiness.com </li>
                        </ul>
                    </div>
                </div>

                 {
                    "name":"Fruit Connection",
                    "address": "72 Avenue, Owoloda, Kwara State",
                    "phone": "070-9956-90084",
                    "web-url": "",
                    "image":"localhost:5500/chamber/images/company/",
                    "membership": {
                        "member":1,
                        "silver":2,
                        "gold":3
                       },
                    "other":"Tomatoes and Onions"
                },
            */

const showData = async () => {
    const response = await fetch('http://127.0.0.1:5500/chamber/data/members.json'); // fetching the data, a request
    const data = await response.json(); //  parse the JSON data
    if(data){
     const section = document.getElementById('display');
     data.forEach(element => {
        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        const div3 = document.createElement('div');
        const h3 = document.createElement('h3');
        const span = document.createElement('span');
        const img = document.createElement('img');
        const ul = document.createElement('ul');
        div1.setAttribute('class', 'business-card');
        div2.setAttribute('class', 'business-card-header');
           h3.innerHTML = element.name;
           span.innerHTML = element.other;
        div2.appendChild(h3);
        div2.appendChild(span);

        div3.setAttribute('class', 'business-card-detail');
            img.setAttribute('src', element.image);
            img.setAttribute('loading', 'lazy');
            img.setAttribute('height', '200');
            img.setAttribute('width', '200');
            img.setAttribute('alt', element.name);
        div3.appendChild(img);
            const li_1 = document.createElement('li');
            const li_2 = document.createElement('li');
            const li_3 = document.createElement('li');
            li_1.innerHTML = "<strong>Address</strong> : "+ element.address;
            li_2.innerHTML = "<strong>Phone</strong> : "+ element.phone;
            li_3.innerHTML = "<strong>URL</strong> : "+ element.url;
        ul.appendChild(li_1);
        ul.appendChild(li_2);
        ul.appendChild(li_3);
        div3.appendChild(ul);
        div1.appendChild(div2);
        div1.appendChild(div3);
        section.appendChild(div1);
      });
    }
   
}


showData();
