document.getElementById('wingSelectorForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const spice = document.querySelector('input[name="spice"]:checked').value;
    const texture = document.querySelector('input[name="texture"]:checked').value;
    const flavor = document.querySelector('input[name="flavor"]:checked').value;
    
    let redirectUrl = '';
    console.log(spice, texture, flavor);
  
    if (spice === 'moderate' && texture === 'dry' && flavor === 'smoky') {
        redirectUrl = 'lr.html';
    } else if (spice === 'mild' && texture === 'dry' && flavor === 'tangy') {
        redirectUrl = 'lp.html';
    } else if (spice === 'mild' && texture === 'dry' && flavor === 'none') {
        redirectUrl = 'plain.html';
    } else if (spice === 'mild' && texture === 'dry' && flavor === 'sweet') {
        redirectUrl = 'gp.html';
    } else if (spice === 'moderate' && texture === 'dry' &&flavor === 'sweet') {
        redirectUrl = 'hh.html';
    } else if (spice === 'hot' && texture === 'wet' && flavor === 'smoky') {
         redirectUrl = 'atomic.html';
    } else if (spice === 'hot' && texture === 'wet' && flavor === 'sweet') {
        redirectUrl = 'mh.html';
    } else if (spice === 'hot' && texture === 'wet' && flavor === 'tangy') {
        redirectUrl = 'cajun.html';
    } else if (spice === 'moderate' && texture === 'wet' &&flavor === 'tangy') {
        redirectUrl = 'oghot.html';
    } else if (spice === 'moderate' && texture === 'wet' &&flavor === 'sweet') {
        redirectUrl = 'skq.html';
    } else if (spice === 'mild' && texture === 'wet' && flavor === 'smoky') {
        redirectUrl = 'hsb.html';
    } else if (spice === 'mild' && texture === 'wet' && flavor === 'tangy') {
        redirectUrl = 'mild.html';
    } else if (spice === 'mild' && texture === 'wet' && flavor === 'sweet') {
        redirectUrl = 'hawaiian.html';
    } else {
        alert('No matching flavor found. Please refine your selections.');
        return;
    }
    window.location.href = redirectUrl;
  });