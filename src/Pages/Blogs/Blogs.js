import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h2>1: what is cors?</h2>
                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                    mechanism that allows a server to indicate any origins (domain,
                    scheme, or port) other than its own from which a browser should
                    permit loading resources. CORS also relies on a mechanism by which
                    browsers make a "preflight" request to the server hosting the
                    cross-origin resource, in order to check that the server will permit
                    the actual request. In that preflight, the browser sends headers
                    that indicate the HTTP method and headers that will be used in the
                    actual request.</p>
            </div>
            <div>
                <h2>2: Why are you using firebase? What other options do you have to
                    implement authentication?</h2>
                <p>i. Firebase is great for quick projects: it's easy to set up, fast, in
                    many cases requires only front-end logic. It lets you focus on your
                    app instead of implementing custom authentication or database
                    connections.</p><br />
                <p>ii. I'm using firebase in my recent projects. It's very user friendly
                    and helps my site to implement authentication system quickly. It
                    also helps to host my project without any cost!</p><br />
                <p>There are also some authentication platforms:</p>
                <ul>
                    <li>Ory</li>
                    <li>Supabase</li>
                    <li>Okta</li>
                </ul>
            </div>
            <div>
                <h2>3: How does the private route work?</h2>
                <p>The private route component is similar to the public route, the only
                    change is that redirect URL and authenticate condition. If the user
                    is not authenticated he will be redirected to the login page and the
                    user can only access the authenticated routes If he is authenticated
                    (Logged in).</p>
            </div>
        </div>
    );
};

export default Blogs;