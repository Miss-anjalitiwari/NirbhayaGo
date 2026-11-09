

function show(page){
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    document.getElementById(page).classList.add('active');
    window.scrollTo(0,0);
}

function findAssistants(){
    let from=document.getElementById('from').value || 'Dhule';
    let to=document.getElementById('to').value || 'Pune';

    document.getElementById('assistants').innerHTML=`
    <h3 style="margin-top:20px">Available Assistants</h3>

    <div class="box">
    <h3>👩 Aditi Sharma ✔</h3>
    ⭐ 4.8 · 120 trips
    <p>${from} → ${to}</p>
    <p>Estimated charge: ₹600</p>
    <button class="primary" onclick="book('Aditi Sharma')">Book Now</button>
    </div>

    <div class="box">
    <h3>👩 Riya Patil ✔</h3>
    ⭐ 4.7 · 85 trips
    <p>${from} → ${to}</p>
    <p>Estimated charge: ₹550</p>
    <button class="primary" onclick="book('Riya Patil')">Book Now</button>
    </div>`;
}

function book(name){
    alert('Demo booking request for '+name+' submitted!');
}

function findPartners(){
    let from=document.getElementById('pfrom').value || 'Dhule';
    let to=document.getElementById('pto').value || 'Pune';

    document.getElementById('partners').innerHTML=`
    <div class="box">
    <h3>👭 Aditi Sharma</h3>
    ⭐ 4.8 · Verified demo
    <p>${from} → ${to}</p>
    <button class="primary" onclick="alert('Demo connection request sent')">Connect</button>
    </div>
    <div class="box">
    <h3>👭 Riya Patil</h3>
    ⭐ 4.7 · Verified demo
    <p>${from} → ${to}</p>
    <button class="primary" onclick="alert('Demo connection request sent')">Connect</button>
    </div>`;
}

function addPost(){
    let text =document.getElementById('postText').value;
    if(!text.trim())return;

    let post=document.createElement('div');
    post.className='post';
    post.innerHTML='<b>👩 You</b><p></p>';
    post.querySelector('p').textContent=text;

    document.getElementById('posts').prepend(post);
    document.getElementById('postText').value='';
}

function activateSOS(){
    alert('DEMO SOS activated. Real emergency contacts are not connected.');
}

function startTracking(){
    document.getElementById('trackStatus').innerText='Demo journey in progress';
    document.getElementById('location').innerText='GPS integration not connected';
}

