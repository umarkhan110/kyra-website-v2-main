import { PageWrapper } from "@/ui/templates";
import moment from "moment";

import styles from "../page.module.scss";

export default async function Privacy() {
  const date = new Date();
  const today = moment(date).format("MMMM Do YYYY");
  return (
    <PageWrapper>
      <div className={styles.page}>
        <div className={styles.pageHeader}>
          <h1>Privacy Policy</h1>
        </div>
        <div className={styles.pageContent}>
          <p>
            <b>Thetrianglelab Limited </b>(&ldquo;
            <b>Kyra</b>&rdquo;, &ldquo;<b>us</b>&rdquo;, or &ldquo;<b>we</b>
            &rdquo;) is the &ldquo;
            <b>data controller</b>&rdquo; in respect of your personal
            information.&nbsp;
          </p>
          <p>
            <b>
              This privacy notice sets out the basis on which any of your
              personal information we collect from you or third parties, or that
              you provide to us, will be processed by us.
            </b>{" "}
            <b>
              Please read the following carefully to understand our practices
              regarding your personal information and how it will be treated.
            </b>
          </p>
          <p>
            For some processing, we are &ldquo;joint controllers&rdquo; with
            certain brands in respect of your personal information (for example,
            when we produce data analytics reports to brands in respect of use
            of the services). Should you wish to exercise any of your data
            rights (as described below), or have any questions about this
            arrangement, please contact us using the contact details below.
          </p>
          <p>
            <b>
              <em>WHO DOES THIS PRIVACY NOTICE APPLY TO?</em>
            </b>
          </p>
          <p>This privacy notice applies to:</p>
          <ul>
            <li>
              individuals (e.g. creators) using our services (e.g. our
              app/platform or other services Kyra may provide);
            </li>
            <li>
              individuals working on behalf of brands who may use our services
              (e.g. our app/platform or other services Kyra may provide); and
            </li>
            <li>individuals who may visit our website or view our content.</li>
          </ul>
          <h2>HOW AND WHEN WE COLLECT PERSONAL INFORMATION ABOUT YOU&nbsp;</h2>
          <p>
            We collect and process personal information: (1) <b>when</b>{" "}
            <b>you provide it to us</b>; (2){" "}
            <b>which we may automatically collect from you</b>;&nbsp; and/or (3){" "}
            <b>which we may collect from third party sources</b>.
          </p>
          <p>
            <span>
              <b>
                Personal information which you provide to us and/or we collect
                automatically
              </b>
            </span>
          </p>
          <p>
            We collect personal information which you provide to us and/or which
            we may collect automatically when you:<b> </b>
          </p>
          <ul>
            <li>
              visit our website and/or app (including when registering on our
              site for our newsletter or leaving any reviews or comments);
            </li>
          </ul>
          <ul>
            <li>
              purchase and/or subscribe to any of our services (including when
              you sign up);
            </li>
          </ul>
          <ul>
            <li>
              contact our customer service or request information from us in any
              other way;
            </li>
          </ul>
          <ul>
            <li>
              search for, interact and collaborate with brands or creators on
              our website, app and/or social media channels (including data
              about your interests and preferences as well as any inferences
              drawn from them);
            </li>
          </ul>
          <ul>
            <li>
              participate in discussion on social media or enter competitions;
            </li>
          </ul>
          <ul>
            <li>
              participate in our customer satisfaction surveys or other market
              researchwhich may include profile data about your interests,
              preferences (including inferences about them), feedback and survey
              responses;&nbsp; and/or
            </li>
          </ul>
          <ul>
            <li>
              communicate with us via social networking websites, third party
              apps or similar technologies.
            </li>
          </ul>
          <p>
            <span>
              <b>Third party sources:</b>
            </span>
          </p>
          <p>
            We may also collect information about you from third party sources,
            such as when you give us permission to access data about you via any
            third party API (including, but not limited to, the Instagram,
            Facebook, YouTube and TikTok APIs), or through Stripe in relation to
            payment. For further information on how these third parties process
            your personal data, please see the below:
          </p>
          <ul>
            <li>
              <b>Instagram: </b>
              <a
                href="https://privacycenter.instagram.com/policy"
                target="_blank"
                rel="noopener"
              >
                <span>
                  <b>https://privacycenter.instagram.com/policy</b>
                </span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <b>Facebook:</b>{" "}
              <a
                href="https://en-gb.facebook.com/privacy/policy"
                target="_blank"
                rel="noopener"
              >
                <span>
                  <b>https://en-gb.facebook.com/privacy/policy</b>
                </span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <b>YouTube: </b>
              <a
                href="https://policies.google.com/privacy?hl=en-GB"
                target="_blank"
                rel="noopener"
              >
                <span>
                  <b>https://policies.google.com/privacy?hl=en-GB</b>
                </span>
              </a>
            </li>
          </ul>
          <p>
            <em>
              In addition to the normal procedure for deleting stored data, you
              will be able to revoke the data of YouTube API Services via the
              Google security settings page at&nbsp;
            </em>
            <a
              href="https://myaccount.google.com/permissions"
              target="_blank"
              rel="noopener"
            >
              <span>
                <em>https://myaccount.google.com/permissions</em>
              </span>
            </a>
            <em>.&nbsp;</em>
          </p>
          <ul>
            <li>
              <b>TikTok: </b>
              <a
                href="https://www.tiktok.com/legal/privacy-policy-eea?lang=en"
                target="_blank"
                rel="noopener"
              >
                <span>
                  <b>https://www.tiktok.com/legal/privacy-policy-eea?lang=en</b>
                </span>
              </a>
            </li>
          </ul>
          <h2>WHAT PERSONAL INFORMATION DO WE COLLECT ABOUT YOU&nbsp;</h2>
          <p>
            <u>
              <b>Personal information which you provide to us</b>
            </u>
          </p>
          <p>
            We may collect and process the following personal information about
            you which you provide:&nbsp;
          </p>
          <ul>
            <li>
              contact details (such as your name, address, email address and
              telephone number);
            </li>
          </ul>
          <ul>
            <li>
              demographic information (such as age and/or other information that
              may identify you as an individual);
            </li>
          </ul>
          <ul>
            <li>password and other authentication information;</li>
          </ul>
          <ul>
            <li>
              photograph (for example as part of your profile photo on our
              platform);&nbsp;
            </li>
          </ul>
          <ul>
            <li>
              responses to any customer satisfaction surveys or market research
              (unless these are provided anonymously);
            </li>
          </ul>
          <ul>
            <li>your social media profile information;</li>
          </ul>
          <ul>
            <li>financial and credit card information; and</li>
          </ul>
          <ul>
            <li>your marketing preferences.</li>
          </ul>
          <p>
            <u>
              <b>
                Personal information which we may automatically collect from you
              </b>
            </u>
          </p>
          <p>
            When you visit our website and/or app, we may also collect
            information from you automatically, for example using cookies and
            other similar technologies. A cookie is a small file of letters and
            numbers that we may set on your device. Cookies generally only work
            with web browsers, but there are similar technologies that are used
            with apps.&nbsp;
          </p>
          <p>
            This type of information, collected by cookies and similar
            technologies may include the following:&nbsp;
          </p>
          <ul>
            <li>
              information about your device (including a unique device
              identifier or device ID), operating system and IP address;
            </li>
          </ul>
          <ul>
            <li>your login information;</li>
          </ul>
          <ul>
            <li>browser type and version;</li>
          </ul>
          <ul>
            <li>
              information about your visit on our website or app, including URL,
              clickstream (i.e. your journey to, through and from our site),
              pages you&rsquo;ve searched for and viewed, length of visits to
              certain pages, and page interaction information; and
            </li>
          </ul>
          <ul>
            <li>
              information about your use of our app, for example to distinguish
              you from other users of our app, and to remember your preferences
              which helps us to provide you with a good experience when you use
              our app and also allows us to improve the app.
            </li>
          </ul>
          <p>
            <u>
              <b>Cookies and similar technologies</b>
            </u>
          </p>
          <p>
            Some cookies may expire each time you close your browser and do not
            remain on your device afterwards, and link your actions during a
            particular browser session (<b>session cookies</b>), whilst others
            remain on your device until they expire or you delete them from your
            cache, and are stored on your device in between browser sessions
            allowing for your preferences or actions across the site to be
            remembered (<b>persistent cookies</b>). The cookies we use fall into
            the following categories:&nbsp;
          </p>
          <ul>
            <li>
              <b>Strictly necessary cookies:</b> These cookies are essential for
              you to be able to navigate the site and use its features. Without
              these cookies, the services you have asked for could not be
              provided.
            </li>
          </ul>
          <ul>
            <li>
              <b>Performance cookies:</b> These cookies collect information
              about how you use our site, e.g. which pages you go to most often.
            </li>
          </ul>
          <ul>
            <li>
              <b>Functionality cookies:</b> These cookies allow the site to
              remember the choices you make (such as your user name, language,
              last action and search preferences) and provide enhanced, more
              personal features.
            </li>
          </ul>
          <p>
            <b>If you do not wish for cookies to be installed on your device</b>
            , you can change the settings on your browser or device to reject
            cookies. For more information about how to reject cookies using your
            internet browser settings please consult the &ldquo;Help&rdquo;
            section of your internet browser (or alternatively visit
            http://www.aboutcookies.org). Please note that, if you do set your
            Internet browser to reject cookies or otherwise withdraw your
            consent in relation to cookies, you may not be able to access all of
            the functions of the site.
          </p>
          <h2>PURPOSES FOR PROCESSING YOUR PERSONAL INFORMATION&nbsp;</h2>
          <p>
            We may process your personal information for the following purposes:
          </p>
          <ul>
            <li>
              to provide you with the information, products and/or services you
              have requested (for example, if you&rsquo;re an influencer, to
              connect you with brands, help to provide you with opportunities
              and display your profile data on our app);
            </li>
          </ul>
          <ul>
            <li>to authenticate your access to our website and our app;</li>
          </ul>
          <ul>
            <li>
              for system administration purposes and for internal operations,
              including troubleshooting, data analysis, testing, research,
              statistical and survey purposes;
            </li>
          </ul>
          <ul>
            <li>
              to distinguish you from other users (for example to remember your
              log-in details);
            </li>
          </ul>
          <ul>
            <li>
              to monitor your use of our website and app to improve the user
              experience and to ensure that content is presented in the most
              effective manner for you and for your device;
            </li>
          </ul>
          <ul>
            <li>
              to provide customer support and ensure we provide a good level of
              customer service;
            </li>
          </ul>
          <ul>
            <li>
              to send you marketing and advertising materials and to tailor any
              marketing or advertising so that it is more relevant to you;
            </li>
          </ul>
          <ul>
            <li>to notify you of any changes to our services;</li>
          </ul>
          <ul>
            <li>
              to conduct marketing analysis to allow us to assess trends and the
              effectiveness of advertising and marketing campaigns (including
              using your personal information to evaluate, analyse or predict
              certain personal aspects relating to you, such as your
              preferences, economic situation, interests, and/or location);
            </li>
          </ul>
          <ul>
            <li>
              to create &ldquo;audiences&rdquo; for the purposes of personal
              advertising made up of other individuals who share similar
              characteristics with you and whose interests, attributes and/or
              preferences we can therefore infer;
            </li>
          </ul>
          <ul>
            <li>
              if you are filmed, photographed or recorded as part of any onsite
              activities/one of our events,&nbsp; your image or likeness may be
              used in promotional material, sponsor, exhibitor and media partner
              coverage in print, online and/or on broadcast television;
            </li>
          </ul>
          <ul>
            <li>
              to match personal information that you provide to us directly with
              other information about you obtained from or held by third party
              sources (such as social media platforms). This may include your
              contact details, demographic data, your social media interactions,
              preferences, habits, interests, geographic location and age or age
              range. We may use this personal information to:
            </li>
          </ul>
          <ul>
            <li>provide our services to you; and/or</li>
          </ul>
          <ul>
            <li>
              to tailor and show advertisements more relevant to you either on
              our website or on third party websites (including social media
              platforms).
            </li>
          </ul>
          <ul>
            <li>to ensure that our website and app is safe and secure; and</li>
          </ul>
          <ul>
            <li>
              for security and fraud prevention and to comply with applicable
              laws and regulations.
            </li>
          </ul>
          <h2>LEGAL BASIS FOR PROCESSING YOUR PERSONAL INFORMATION</h2>
          <p>
            We will only process your personal information where we have a legal
            basis to do so. The legal basis will depend on the purposes for
            which we have collected and use your personal information. In almost
            every case the legal basis will be one of the following:&nbsp;
          </p>
          <ul>
            <li>
              <b>Consent</b>: For example, where you have provided your consent
              to receive certain marketing from us. You can withdraw your
              consent at any time, including by clicking on the
              &ldquo;unsubscribe&rdquo; link at the bottom of any marketing
              email we send you.
            </li>
          </ul>
          <ul>
            <li>
              <b>Our legitimate business interests:</b> Where it is necessary
              for us to understand our customers, promote our services and
              operate effectively as a media company, provided in each case that
              this is done in a legitimate way which does not unduly affect your
              privacy and other rights. For example we will rely on this legal
              basis when we conduct certain market analysis to understand our
              clients in sufficient detail so we can develop our services.
            </li>
          </ul>
          <ul>
            <li>
              <b>
                Performance of a contract with you (or in order to take steps
                prior to entering into a contract with you):
              </b>{" "}
              For example, where you have purchased our services and we need to
              use your contact details and payment information in order to
              process your request for our services.
            </li>
          </ul>
          <ul>
            <li>
              <b>Compliance with law:</b> Where we are subject to a legal
              obligation and need to use your personal information in order to
              comply with that obligation.
            </li>
          </ul>
          <h2>WHERE WE STORE YOUR PERSONAL INFORMATION</h2>
          <p>
            The personal information that we collect may be transferred to, and
            stored at, a destination outside the EEA or the UK, including
            countries which have less strict, or no data protection laws, when
            compared to those in the EEA or the UK.&nbsp;
          </p>
          <p>
            Whenever we transfer your information as described in the paragraph
            above, we will take steps which are reasonably necessary to ensure
            that adequate safeguards are in place to protect your personal
            information and to make sure it is treated securely and in
            accordance with this privacy notice. In these cases, we rely on
            approved data transfer mechanisms (such as standard contractual
            clauses) to ensure your information is subject to adequate
            safeguards in the recipient country.&nbsp;
          </p>
          <p>
            <b>If you are located in the UK or the EEA</b>, you may contact us
            for a copy of the safeguards which we have put in place to protect
            your personal information and privacy rights in these
            circumstances.&nbsp;
          </p>
          <h2>HOW WE KEEP YOUR PERSONAL INFORMATION</h2>
          <p>
            We take steps to ensure that the personal information that you
            provide is retained for only as long as it is necessary for the
            purpose for which it was collected. After this period it will be
            deleted or in some cases anonymised. We may also keep a record of
            correspondence with you (for example if you have made a complaint)
            for as long as is necessary to protect us from a legal claim.&nbsp;
          </p>
          <p>
            Where we have collected the personal information based on your
            consent and we have no other lawful basis to continue with that
            processing, if you subsequently withdraw your consent then we will
            delete your personal information.<b> </b>However, please note that
            where you unsubscribe from our marketing communications, we will
            keep a record of your email address to ensure we do not send you
            marketing emails in future.&nbsp;
          </p>
          <h2>SECURITY AND PASSWORDS</h2>
          <p>
            You must keep your password and any other authentication information
            for our website and app confidential. If you know or suspect that
            anyone other than you knows your password or any other
            authentication information, you must promptly notify us using the
            contact details below. Unfortunately, the transmission of
            information via the internet is not completely secure. Although we
            will do our best to protect your personal information, we cannot
            guarantee the security of your information transmitted during your
            use of our website and app.
          </p>
          <p>
            Our website and app may, from time to time, contain links to and
            from third party websites and services such as our business partners
            and advertisers. If you follow a link to any of these websites
            and/or services, please note that they have their own privacy
            notices{" "}
            <b>and we do not accept any responsibility or liability for them</b>
            .{" "}
            <b>
              Please check any such third party privacy notices before you
              submit any personal information to these websites or services.
            </b>
          </p>
          <h2>DISCLOSING YOUR INFORMATION</h2>
          <h3>We may share your personal information:</h3>
          <ul>
            <li>
              within our group of companies (i.e. our subsidiaries, our ultimate
              holding company and its subsidiaries, as defined in section 1159
              of the UK Companies Act 2006);
            </li>
          </ul>
          <ul>
            <li>
              with business partners, suppliers and sub-contractors for the
              performance of any contract we enter into with them or you, in
              particular where they are{" "}
              <b>helping us to market and advertise our services</b> as well as{" "}
              <b>providing our services to you. </b>This includes sharing your
              personal information with our client brands where or not you have
              signed up and/or use our platform/app/services (for example to
              connect you with brands etc);
            </li>
          </ul>
          <ul>
            <li>
              to advertisers and advertising networks that require the data to
              select and serve relevant adverts to you and others;
            </li>
          </ul>
          <ul>
            <li>
              to analytics and search engine providers that assist us in the
              improvement and optimisation of our site and similar third parties
              for the purposes of research, evaluation, and analysis;&nbsp;
            </li>
          </ul>
          <ul>
            <li>
              to credit reference agencies for the purpose of assessing your
              credit score where this is a condition of us entering into a
              contract with you and to protect the rights, property or safety of
              us or our users, or others, and in order to enforce or apply our
              terms and conditions;
            </li>
          </ul>
          <ul>
            <li>
              in the event that we sell any business or assets, in which case we
              may disclose your personal information to the prospective buyer of
              such business or assets;
            </li>
          </ul>
          <ul>
            <li>
              if we or substantially all of our assets are acquired by a third
              party, in which case personal information held by us about our
              customers and visitors to our websites will be one of the
              transferred assets; and
            </li>
          </ul>
          <ul>
            <li>
              if we are under a duty to disclose or share your personal
              information in order to comply with any legal or regulatory
              obligation or request.
            </li>
          </ul>
          <h2>YOUR RIGHTS</h2>
          <p>
            You have certain rights in relation to your personal information.
            These include:&nbsp;
          </p>
          <ul>
            <li>
              the right to object to the processing of your information for
              certain purposes;
            </li>
          </ul>
          <ul>
            <li>
              the right to access or rectify your personal information; and
            </li>
          </ul>
          <ul>
            <li>
              the right to request the ability to erase, restrict or receive a
              machine-readable copy of your personal information.
            </li>
          </ul>
          <p>
            We will handle any request to exercise your rights in accordance
            with applicable law and any relevant legal exemptions. If you wish
            to exercise any of these rights please contact us using the contact
            details below.
          </p>
          <p>
            <b>
              You may also have the right to complain to a data protection
              authority if you think we have processed your personal information
              in a manner which is unlawful or breaches your rights. If you have
              such concerns we request that you initially contact us (using the
              contact details below) so that we can investigate, and hopefully
              resolve, your concerns.
            </b>
          </p>
          <h2>CHANGES TO THIS PRIVACY NOTICE&nbsp;</h2>
          <p>
            We may change this privacy notice at any time. The new privacy
            notice will be displayed on our website and app. The date this
            privacy notice was last updated appears at the bottom.
          </p>
          <h3>CONTACT US</h3>
          <ul>
            <li>
              Questions and comments regarding this privacy notice should be
              sent to:{" "}
              <a href="mailto:hello@kyra.com" target="_blank" rel="noopener">
                <span>
                  <b>hello@kyra.com</b>
                </span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              Our registered offices are located at:{" "}
              <b>8 Warner Yard, London, England, EC1R 5EY</b>
            </li>
          </ul>
          <p>
            <b>This privacy notice was last updated on {today} .</b>
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
