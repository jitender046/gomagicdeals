import './Cscworkdetail.css';
import Header from '../Header Footer/Header';
import Footer from '../Header Footer/Footer';
function Workdetails() {
  return (
    <div className='workdetails'>
        <Header />
     <h1>Common Services Center (CSC) Services</h1>

<section className="cscwork">
    <h2>Government-to-Citizen (G2C) Services</h2>
    <ul>
        <li>
            <h3>Aadhaar Services</h3>
            <div class="details">
                <p><strong>Details:</strong> CSCs facilitate Aadhaar enrollment, updates (address, mobile number, etc.), and printing of Aadhaar cards. This helps citizens access essential government services linked to Aadhaar.</p>
                <p><strong>Benefits:</strong> Convenient access to Aadhaar services, reduced travel time, and easier updates.</p>
            </div>
        </li>
        <li>
            <h3>PAN Card Services</h3>
            <div class="details">
                <p><strong>Details:</strong> CSCs assist in the application for new PAN cards and modifications to existing PAN details, ensuring citizens can comply with tax regulations and financial transactions.</p>
                <p><strong>Benefits:</strong> Simplified PAN card application process, reduced paperwork, and quicker processing.</p>
            </div>
        </li>
        <li>
            <h3>Passport Services</h3>
            <div class="details">
                <p><strong>Details:</strong> CSCs provide assistance with passport application processes, including form filling and document submission, making international travel more accessible.</p>
                <p><strong>Benefits:</strong> Guidance through the passport application, reduced errors, and easier access to passport services.</p>
            </div>
        </li>
        <li>
            <h3>Election Services</h3>
            <div class="details">
                <p><strong>Details:</strong> CSCs facilitate voter ID card applications, corrections, and updates, ensuring citizens can exercise their voting rights.</p>
                <p><strong>Benefits:</strong> Streamlined voter ID services, increased voter participation, and easy access to electoral information.</p>
            </div>
        </li>
        <li>
            <h3>e-District Services</h3>
            <div class="details">
                <p><strong>Details:</strong> CSCs provide access to various e-District services, including the issuance of certificates (birth, death, domicile, caste, income), making essential documents readily available.</p>
                <p><strong>Benefits:</strong> Reduced wait times, elimination of manual processes, and transparent service delivery.</p>
            </div>
        </li>
        <li>
            <h3>Pension Services</h3>
            <div class="details">
                <p><strong>Details:</strong> CSCs assist in pension applications and related services, ensuring senior citizens can access their pension benefits efficiently.</p>
                <p><strong>Benefits:</strong> Simplified pension application process, reduced paperwork, and timely disbursement of pensions.</p>
            </div>
        </li>
        <li>
            <h3>Land Records</h3>
            <div class="details">
                <p><strong>Details:</strong> CSCs provide access to digitized land records, enabling citizens to view and obtain copies of their land documents.</p>
                <p><strong>Benefits:</strong> Transparent land record access, reduced land disputes, and easier property transactions.</p>
            </div>
        </li>
        <li>
            <h3>Insurance Services</h3>
            <div class="details">
                <p><strong>Details:</strong> CSCs facilitate enrollment in various government insurance schemes, providing financial security to citizens.</p>
                <p><strong>Benefits:</strong> Increased insurance coverage, financial protection, and simplified enrollment processes.</p>
            </div>
        </li>
        <li>
            <h3>E-Shram Card</h3>
            <div class="details">
                <p><strong>Details:</strong> Apply E-sharm card ,correction and modifications to existing card details.</p>
                <p><strong>Benefits:</strong> The e-Shram card is a unique identification card issued by the Ministry of Labour & Employment, Government of India, to workers in the unorganized sector. It aims to create a national database of unorganized workers, facilitating the delivery of social security schemes and welfare benefits.</p>
            </div>
        </li>
        <li>
            <h3>PM Kisan Samman Nidhi</h3>
            <div class="details">
                <p><strong>Details:</strong> Apply PM Kisan Samman Nidhi ,correction and modifications to existing card details.</p>
                <p><strong>Benefits:</strong> Provides ₹6,000 per year to eligible farmer families, disbursed in three equal installments of ₹2,000 every four months.</p>
            </div>
        </li>
        <li>
            <h3>PM Kisan Card (Registry Farmer)</h3>
            <div class="details">
                <p><strong>Details:</strong> Apply PM Kisan card ,correction and modifications to existing card details</p>
                <p><strong>Benefits:</strong> This record is essential for verifying a farmer's eligibility and facilitating the direct transfer of financial benefits.</p>
            </div>
        </li>
    </ul>
</section>

<section className="cscwork">
    <h2>Business-to-Citizen (B2C) Services</h2>
    <ul>
        <li>
            <h3>Banking Services (DigiPay)</h3>
            <div class="details">
                <p><strong>Details:</strong> CSCs offer banking services through DigiPay, including cash deposits, withdrawals, and money transfers, especially in areas with limited banking infrastructure.</p>
                <p><strong>Benefits:</strong> Financial inclusion, convenient access to banking services, and reduced travel to banks.</p>
            </div>
        </li>
        <li>
            <h3>Insurance Services</h3>
            <div class="details">
                <p><strong>Details:</strong> CSCs facilitate the sale and renewal of private insurance policies, offering diverse insurance options to citizens.</p>
                <p><strong>Benefits:</strong> Access to a wide range of insurance products, simplified policy purchasing, and convenient renewal processes.</p>
            </div>
        </li>
         <li>
            <h3>Travel Services</h3>
            <div class="details">
                <p><strong>Details:</strong> CSCs enable booking of railway tickets (IRCTC), flight tickets, and bus tickets, providing convenient travel solutions.</p>
                <p><strong>Benefits:</strong> Easy access to travel booking, reduced travel agency visits, and convenient ticket purchases.</p>
            </div>
        </li>
        <li>
            <h3>Utility Bill Payments</h3>
            <div class="details">
                <p><strong>Details:</strong> CSCs facilitate the payment of electricity, water, and gas bills, saving citizens time and effort.</p>
                <p><strong>Benefits:</strong> Convenient bill payment, reduced queues, and timely payment options.</p>
            </div>
        </li>
        <li>
            <h3>Mobile and DTH Recharge</h3>
            <div class="details">
                <p><strong>Details:</strong> CSCs offer recharge services for mobile phones and DTH connections, ensuring uninterrupted communication and entertainment.</p>
                <p><strong>Benefits:</strong> Easy and quick recharge options, 24/7 availability, and convenient access.</p>
            </div>
        </li>
        <li>
          <h3>E-Commerce Services</h3>
          <div class="details">
            <p><strong>Details:</strong> CSCs help people to buy and sell products online, and help with delivery, especially in rural areas.</p>
            <p><strong>Benefits:</strong> increased commerce in rural areas, access to a larger market, and help with online shopping.</p>
          </div>
        </li>
    </ul>
</section>
<Footer />
    </div>
  );
}

export default Workdetails;