import Document, { Html, Head, Main, NextScript } from "next/document";
import { LogoBlue } from "../public";
// import { FaviconIcon } from "../public";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="google-site-verification"
            content="hgymbBGM38uS9Um2Pehh6vTNPbp2Fv7b0OkosH0BtgM"
          />
          <meta name="description" content="Annapurna Treks" />
          <meta name="keywords" content="Annapurna Treks" />
          <meta name="author" content="Annapurna Treks" />

          {/* <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          /> */}
          <meta property="og:title" content="Annapurna Treks" />
          <meta property="og:description" content="Annapurna Treks" />
          <meta property="og:image" content={LogoBlue} />
          <meta property="og:url" content="https://annapurnatreks.com/" />
          <meta property="og:site_name" content="Annapurna Treks" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta name="geo.placename" content="Nepal" />
          <meta name="geo.region" content="NP" />
          <meta name="geo.position" content="27.717245;85.323959" />

          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
          <meta name="google-site-verification" content="" />
          <meta name="msvalidate.01" content="" />
          <meta name="p:domain_verify" content="" />
          <meta name="yandex-verification" content="" />
          <meta name="pinterest" content="nopin" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@AnnapurnaTreks" />
          <meta name="twitter:creator" content="@AnnapurnaTreks" />
          <meta name="twitter:title" content="Annapurna Treks" />
          <meta name="twitter:description" content="Annapurna Treks" />
          <meta name="twitter:image" content={LogoBlue} />
          <meta name="twitter:image:alt" content="Annapurna Treks" />
          <meta name="twitter:url" content="https://annapurnatreks.com/" />
          <meta name="twitter:domain" content="Annapurna Treks" />
          {/* Add About Us, Contact Us, Privacy Policy, Terms and Conditions, and Disclaimer pages in meta tags */}

          <link rel="shortcut icon" href="/logo/faviconIconWhite.ico" />

          {/* Your Chat Plugin code */}
          <div id="fb-root"></div>
          <div id="fb-customer-chat" className="fb-customerchat"></div>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              var chatbox = document.getElementById('fb-customer-chat');
              chatbox.setAttribute("page_id", "104465537838224");
              chatbox.setAttribute("attribution", "biz_inbox");
              `,
            }}
          />

          {/* Your SDK code */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.fbAsyncInit = function() {
                FB.init({
                  xfbml            : true,
                  version          : 'v16.0'
                });
              };
              
              (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

// <!-- Messenger Chat Plugin Code -->
//<div id="fb-root"></div>

// <!-- Your Chat Plugin code -->
// <div id="fb-customer-chat" class="fb-customerchat">
// </div>

// <script>
//   var chatbox = document.getElementById('fb-customer-chat');
//   chatbox.setAttribute("page_id", "100487522823571");
//   chatbox.setAttribute("attribution", "biz_inbox");
// </script>

// <!-- Your SDK code -->
// <script>
//   window.fbAsyncInit = function() {
//     FB.init({
//       xfbml            : true,
//       version          : 'v16.0'
//     });
//   };

//   (function(d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) return;
//     js = d.createElement(s); js.id = id;
//     js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
//     fjs.parentNode.insertBefore(js, fjs);
//   }(document, 'script', 'facebook-jssdk'));
// </script>
