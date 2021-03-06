function updatePreview(){
    document.getElementById('preview').innerHTML = marked(document.getElementById('editor').value);

}
function dText(){
    let defTxt = `# heading
## sub heading
[link](https://www.freecodecamp.com)
> Block Quote!
- list
**bold**
\` code block \`
\`\`\`
python {id="python-print" class="blue large" data-filename="test.py"}
import time

print(2 + 2)
\`\`\`
// this is multi-line code:
![just an image](https://static.gettyimages.com/display-sets/creative-landing/images/GettyImages-1284793131.jpg)`;
    document.getElementById('editor').value = defTxt;
    updatePreview();

}
