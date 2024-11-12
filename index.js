document.getElementById("generatorForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const pageTitle = encodeURIComponent(document.getElementById("pageTitle").value);
    const subtitle = encodeURIComponent(document.getElementById("subtitle").value);
    const bgColor = encodeURIComponent(document.getElementById("bgColor").value);
    
    const url = `ubg.html?pageTitle=${pageTitle}&subtitle=${subtitle}&bgColor=${bgColor}`;
    window.location.href = url;
});
