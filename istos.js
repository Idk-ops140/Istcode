function compileIstos() {
    const istosCode = document.getElementById('istosInput').value;
    const outputContainer = document.getElementById('output');
    
    // Simple Istos to HTML conversion (example)
    let html = istosCode
        .replace(/<title>(.*?)<\/title>/g, '<h1>$1</h1>')
        .replace(/<p>(.*?)<\/p>/g, '<p>$1</p>')
        .replace(/<bold>(.*?)<\/bold>/g, '<strong>$1</strong>')
        .replace(/<italic>(.*?)<\/italic>/g, '<em>$1</em>')
        .replace(/<link url="(.*?)">(.*?)<\/link>/g, '<a href="$1">$2</a>');

    outputContainer.innerHTML = html;
}
