import './All page.css'
import Header from '../Header Footer/Header';
import Footer from '../Header Footer/Footer';
function PrivacyPolicy() {
  return (
    <>
    <Header />
    
    <div className="privacypolicy">
      <div className="img">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ01l2W2lt59ziJJvlKFrYjfTpch3qfi2s9DICGIAt-2yiAoPh5"
        alt="Privacy Policy"
      />
      </div>
      <h1>Privacy Policy</h1>
      <div class="container_info">
        <div class="headings"> Information :</div>
        <p id="content">
          This website provides assistance with your documents. and keep
          supporting me and I will always give you good and true content. I will
          give my best in every post, if anyone find any kind of problem in my
          content then give me feedback about my work, I will definitely Will
          work on it and share my website with your friends who want to see
          informative videos and posts. Who needs this website? And do like,
          comment, share and follow.
        </p>
        <h2>Some important points of our Privacy Policy</h2>
        <div class="headings"> 1. Comment box :</div>
        <p id="content">
          {" "}
          There is an open space where respondents can add comments or
          suggestions in the form of text. If you have any question to ask in
          comment then all the visitors of the website are able to answer your
          question. This site may block you permanently if you use foul language
          in the comment box.
        </p>
        <br />
        <div class="headings"> 2. Third-Party Links</div>
        <p id="content">
          Our website may contain links to third-party websites or services that
          are not owned or controlled by us. We are not responsible for the
          privacy practices of these sites and encourage you to read their
          privacy policies before providing any personal information.
        </p>
        <br />
        <div class="headings">3. Security</div>
        <p id="content">
          We take reasonable measures to protect your personal information from
          unauthorized access, use, or disclosure. However, no method of
          transmission over the internet or electronic storage is 100% secure.
        </p>
        <br />
        <div class="headings"> 4. Children's Privacy</div>
        <p id="content">
          Our website is not intended for children under the age of 13. We do
          not knowingly collect or solicit personal information from children
          under the age of 13.
        </p>
        <br />
        <div class="headings"> 5. Changes to this policy:</div>
        <p id="content">
          We may update this privacy policy from time to time. If we make any
          material changes, we will notify you by email (if possible) or by
          posting a notice on our website.
        </p>
        <br />
        <p id="content" >
          <strong>
            If you have any questions or concerns about our privacy policy,
            please contact us at{" "}
            <a href="https://jitendershakya046.blogspot.com/p/about-us_27.html">
              Here
            </a>
            .
          </strong>
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
}
export default PrivacyPolicy;
