//tagudashi.js v1.0

/*
MIT License

Copyright (c) 2025 Eric R Outen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

document.addEventListener('DOMContentLoaded', () => {
	const codeBlocks = document.querySelectorAll('.tagudashi');

	codeBlocks.forEach(block => {
		block.style.border = '1px solid #74737A';
		block.style.borderRadius = '15px;'

		// Get the raw text inside the <pre>
        let text = block.textContent;
        console.log(text);

        // Replace ` with nothing
        text = text.replace(/`/g, '')
        

        // Replace < and > with their HTML entity equivalents
        text = text
        	.replace(/</g, '&lt;')
        	.replace(/>/g, '&gt;');

/*
        text = text
        	.replace(/&lt;/g, '<span class="angle">&lt;</span>')
        	.replace(/&gt;/g, '<span class="angle">&gt;</span>');

        // Wrap tag names (handles opening and closing tags)
        text = text.replace(
            /(?<=<span class="angle">&lt;<\/span>\/?)([a-zA-Z0-9]+)/g,
            '<span class="tagname">$1</span>'
        );
*/


// Use one regex to wrap everything: tag names, attributes, and values
        text = text.replace(
            /&lt;\/?([a-zA-Z0-9]+)([^&]*)&gt;/g,
            (match, tagName, rest) => {
                // Highlight tag name
                let result = `<span class="angle">&lt;</span><span class="tagname">${tagName}</span>`;

                // Highlight attributes
                rest = rest.replace(/\b([a-zA-Z-:]+)=("[^"]*")/g,
                    '<span class="attrname">$1</span>=<span class="attrvalue">$2</span>'
                );

                result += rest + `<span class="angle">&gt;</span>`;
                return result;
            }
        );
        // Write the escaped text back
        block.innerHTML = text;
	});
});