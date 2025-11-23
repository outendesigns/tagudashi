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

		// Get the raw text inside the <pre>
        let text = block.textContent;
        //console.log(text);

        // Replace ` with nothing
        text = text.replace(/`/g, '')
        
        // Replace < and > with their HTML entity equivalents
        text = text
        	.replace(/</g, '&lt;')
        	.replace(/>/g, '&gt;');

        // Use one regex to wrap everything: tag names, attributes, and values
        text = text.replace(
            /&lt;(\/)?([a-zA-Z0-9]+)(.*?)&gt;/g,
            (match, closingSlash, tagName, rest) => {
                let result = `<span class="angle">&lt;</span>` +
                (closingSlash ? `<span class="angle">/</span>` : '') +
                `<span class="tagname">${tagName}</span>`;

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