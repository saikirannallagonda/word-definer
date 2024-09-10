(() => {
    document.addEventListener('dblclick', function () {
        const selectedText = window.getSelection().toString().trim();
        if (selectedText) {
            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${selectedText}`)
                .then(response => response.json())
                .then(data => {
                    alert(`${selectedText}\nDefination: ${data[0].meanings[0].definitions[0].definition}\nPronunciation: ${data[0].phonetics[0]?.text || "No pronunciation available"}`);
                }).catch(error => alert(`Sorry, ${selectedText} defination is not found.`));
        }
    });
})();
