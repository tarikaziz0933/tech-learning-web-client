import React from 'react';

const QuesAnswering = () => {
    return (
        <div>
            <div>
                <h2>1: What are the differences between html4 and html5?</h2>
                <p>Html5 is the updated version of HTML. Based on this, we can say that html5 includes many newer topics in HTML. Some of the differences are as below:</p>
                <ul>
                    <li>Html5 has a canvas tag but html4 has not included that tag.</li>
                    <li>The Doctype declaration is very simple in html5. On the other hand, it's very difficult in html4 to include document type or doctype declaration.</li>
                </ul>
            </div>
            <div>
                <h2>2: What are semantic tags in HTML? Give me some examples.</h2>
                <p>CORS: Cross-Origin Resource Sharing

                    Semantic tags are those tags that give a specific meaning by their name. For example: ‘Div’ has no semantic meaning while ‘article’ or ‘section’ has a unique meaning. Besides, ‘footer’, ‘header’, ‘main’ are also semantic tags.</p>
            </div>
            <div>
                <h2>3: What is a CSS Preprocessor? What are some benefits of Sass?</h2>
                <p>A CSS Preprocessor is a program. It helps to generate CSS. Some benefits of Sass are:</p>
                <ul>
                    <li>Helps to write clean and easy CSS.</li>
                    <li>Make it quicker to generate CSS.</li>
                    <li> It is more powerful</li>
                </ul>
            </div>
            <div>
                <h2>4: What are the properties of flexbox?</h2>
                <p>The properties of flexbox are:</p>
                <ul>
                    <li>flex-wrap</li>
                    <li>justify-content</li>
                    <li>align-items</li>
                    <li>flex-direction.</li>
                </ul>
            </div>
        </div>
    );
};

export default QuesAnswering;