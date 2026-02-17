document.getElementById('viewPoem').addEventListener('click', () => {
    const poemText = document.getElementById('poemInput').value.trim();
    if(poemText){
        localStorage.setItem('poemText', poemText);
        window.location.href = 'poem.html';
    } else {
        alert("من فضلك أدخل القصيدة أولاً!");
    }
});
