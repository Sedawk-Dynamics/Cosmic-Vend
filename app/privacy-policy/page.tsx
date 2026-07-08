import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import StarfieldCanvas from '@/components/starfield-canvas'

export const metadata: Metadata = {
  title: 'Privacy Policy | CosmicVend',
  description:
    "How CosmicVend (Hallow Essentials LLP) collects, uses, stores, and protects your personal data.",
}

type Section = { title?: string; paras: string[] }

const INTRO: string[] = [
  `At Hallow Essentials LLP, operating under the brand name “CosmicVend” (“Company”, “We”, “Us”, or “Our”), we are committed to protecting the privacy and personal data of every individual who visits or interacts with our Platform. We recognise the importance of safeguarding the personal information entrusted to us and are committed to processing such information in a lawful, fair, transparent, and secure manner.`,
  `This Privacy Policy explains how we collect, use, store, process, disclose, and protect the personal data that you provide while accessing or using our Platform, including when you submit enquiries, request a venue placement, apply for a franchise, schedule a discovery call or site visit, subscribe to updates, communicate with us, or otherwise interact with the Platform. This Privacy Policy should be read together with our Terms of Use and any other policies published on the Platform.`,
  `In order to respond to your enquiries, evaluate partnership or franchise opportunities, provide information about our products and services, improve the functionality of the Platform, comply with legal obligations, and operate our business efficiently, we may collect and process certain personal data voluntarily provided by you or automatically collected through your interaction with the Platform.`,
  `The Company processes personal data only in accordance with the Digital Personal Data Protection Act, 2023, the Information Technology Act, 2000, and all other Applicable Laws relating to data protection and privacy in India.`,
  `Where processing is based on your consent, such consent shall be obtained through a clear, specific, informed, unconditional, and unambiguous affirmative action. Before or at the time of obtaining your consent, the Company shall provide information regarding the categories of personal data being collected, the purpose for which such data is being processed, the manner in which your personal data will be used, your rights in relation to such data, and the procedure for withdrawing your consent or exercising any rights available under Applicable Laws.`,
  `You may withdraw your consent at any time in the manner specified in this Privacy Policy or by contacting the Company. Withdrawal of consent shall not affect the lawfulness of any processing undertaken prior to such withdrawal. However, where the processing of personal data is necessary to respond to your enquiry, evaluate a business proposal, fulfil a contractual obligation, comply with Applicable Laws, or provide a requested service, withdrawal of consent may affect the Company’s ability to continue providing such services or processing your request.`,
  `By accessing or using the Platform or by voluntarily submitting your personal data, you acknowledge that you have read, understood, and agree to the collection, use, processing, storage, and disclosure of your personal data in accordance with this Privacy Policy and Applicable Laws.`,
]

const SECTIONS: Section[] = [
  {
    title: 'INFORMATION WE COLLECT',
    paras: [
      `The Company is committed to collecting only such personal data as is reasonably necessary for the purposes described in this Privacy Policy and in accordance with the applicable provisions of the Digital Personal Data Protection Act, 2023 and other Applicable Laws.`,
      `Depending upon the manner in which You interact with the Platform, We may collect the following categories of information:`,
      `1. Information Provided by You`,
      `When You submit an enquiry, request a venue placement, apply for a franchise, request a site walk or discovery call, subscribe to communications, or otherwise contact Us through the Platform, We may collect information voluntarily provided by You, including but not limited to:`,
      `a) Full Name;`,
      `b) Company or Organisation (where applicable);`,
      `c) Email Address;`,
      `d) Phone Number;`,
      `e) Enquiry Type;`,
      `f) Message or enquiry details;`,
      `g) City or location (where voluntarily provided);`,
      `h) Any documents, information, or communications voluntarily submitted by You; and`,
      `i) Any other information that You choose to provide while communicating with the Company.`,
      `2. Information Automatically Collected`,
      `When You access or browse the Platform, certain technical information may be collected automatically through cookies and similar technologies, including:`,
      `a) IP address;`,
      `b) Browser type and version;`,
      `c) Device information;`,
      `d) Operating system;`,
      `e) Internet service provider;`,
      `f) Date and time of access;`,
      `g) Referring website;`,
      `h) Pages visited;`,
      `i) Time spent on the Platform;`,
      `j) Navigation patterns;`,
      `k) Clickstream data; and`,
      `l) Other analytical and diagnostic information relating to Your interaction with the Platform.`,
      `3. Cookies and Analytics`,
      `The Platform may use cookies, web beacons, pixels, analytics tools, and similar technologies to understand user behavior, improve website functionality, analyze traffic patterns, enhance user experience, remember user preferences, and maintain the security and performance of the Platform.`,
      `You may configure Your browser to refuse or delete cookies. However, disabling certain cookies may affect the functionality or performance of certain features of the Platform.`,
      `4. Information Collected from All Visitors`,
      `This Privacy Policy applies to all visitors accessing the Platform, irrespective of whether they submit an enquiry or otherwise communicate with the Company. Accordingly, We may collect information relating to browsing behavior, pages viewed, session duration, referral sources, device characteristics, and other usage statistics for the purposes described herein.`,
    ],
  },
  {
    title: 'PURPOSE OF COLLECTION',
    paras: [
      `The personal data collected by the Company may be processed for one or more of the following purposes:`,
      `a. To respond to enquiries submitted through the Platform;`,
      `b. To evaluate venue placement requests, franchise applications, partnership proposals, business enquiries, and other commercial opportunities;`,
      `c. To schedule discovery calls, site visits, meetings, demonstrations, or other interactions requested by You;`,
      `d. To communicate with You regarding Your enquiry, requested services, updates, or follow-up information;`,
      `e. To improve the functionality, security, usability, and performance of the Platform;`,
      `f. To analyze visitor behavior, website traffic, and usage trends through analytics tools;`,
      `g. To personalize Your experience on the Platform and improve the relevance of information displayed;`,
      `h. To send newsletters, promotional communications, product announcements, event invitations, or marketing materials where You have provided Your consent or where otherwise permitted under Applicable Laws;`,
      `i. To prevent fraud, unauthorized access, misuse of the Platform, cybersecurity incidents, and other unlawful activities;`,
      `j. To establish, exercise, or defend legal claims;`,
      `k. To comply with Applicable Laws, regulatory requirements, judicial directions, governmental requests, or lawful orders; and`,
      `l. For any other legitimate business purpose connected with the Company’s operations, provided such processing is undertaken in accordance with Applicable Laws.`,
      `Where the Company engages third-party service providers for website hosting, cloud infrastructure, analytics, communication services, customer relationship management, technical support, or other operational purposes, the Company may share only such personal data as is reasonably necessary for such service providers to perform their respective functions, subject to appropriate contractual and legal safeguards.`,
      `Where marketing communications are sent based on Your consent, You may withdraw such consent at any time by using the unsubscribe mechanism contained in the communication or by contacting the Company at the email address specified in this Privacy Policy. Withdrawal of consent shall not affect the lawfulness of processing undertaken prior to such withdrawal.`,
      `The Company endeavors to collect only the minimum personal data necessary for the stated purposes. Where the provision of certain personal data is optional, You may choose not to provide such information; however, this may affect the Company’s ability to respond to Your enquiry, process Your request, or provide certain services.`,
      `While the Company employs reasonable technical and organizational measures to safeguard personal data, transmission of information over the internet is inherently subject to certain security risks. Users are encouraged to exercise appropriate caution while sharing information online and should avoid transmitting confidential, financial, or highly sensitive information through the enquiry forms unless specifically requested by the Company.`,
    ],
  },
  {
    title: 'OUR USE OF YOUR INFORMATION',
    paras: [
      `The information provided by you shall be used to provide and improve the service for you and all users.`,
      `a. To provide you with services on your request.`,
      `b. For maintaining an internal record.`,
      `c. For enhancing the Services provided.`,
      `d. For maintaining record under the legal and statutory provisions.`,
      `For more details about the nature of such communications, please refer to our Terms of Service.`,
      `We use your tracking information such as IP addresses, and or Device ID to help identify you and to gather broad demographic information, and make further services available to you.`,
      `We will not sell, license or trade Your personal information. We will not share your personal information with others unless they are acting under our instructions or we are required to do so by law.`,
      `Information collected via Our server logs includes users’ IP addresses and the pages visited will be used to manage the web system and troubleshoot problems. We also use third-party analytics, tracking, optimization and targeting tools to understand how users engage with our Platform so that we can improve it and cater personalized content/ads according to their preferences.`,
    ],
  },
  {
    title: 'HOW INFORMATION IS COLLECTED',
    paras: [
      `The Company collects personal data in a lawful, fair, transparent, and secure manner, and only for purposes that are specific, lawful, and reasonably connected with the operation of the Platform and the services offered by the Company.`,
      `Personal data may be collected directly from You when You voluntarily:`,
      `• submit an enquiry through the Platform;`,
      `• request a venue placement or site walk;`,
      `• apply for a franchise or request a discovery call;`,
      `• subscribe to newsletters or other communications;`,
      `• communicate with the Company via email, telephone, or any other communication channel provided on the Platform; or`,
      `• otherwise provide information while interacting with the Company.`,
      `In addition to the information voluntarily provided by You, the Company may automatically collect certain technical and usage-related information through cookies, web beacons, analytics tools, server logs, and similar technologies when You browse or interact with the Platform. Such information is collected to improve the functionality, security, performance, and user experience of the Platform.`,
      `Before or at the time of collecting Your personal data, the Company shall, wherever required under Applicable Laws, inform You of the categories of personal data being collected, the purposes for which such data is being processed, the manner in which it may be used or shared, and the rights available to You in relation to such personal data. Where processing is based on Your consent, such consent shall be obtained in accordance with the applicable provisions of the Digital Personal Data Protection Act, 2023.`,
      `The Company shall process personal data only for the purposes disclosed to You, for any other lawful purpose permitted under Applicable Laws, or as may otherwise be authorised by You. Personal data shall be retained only for so long as it is necessary to fulfil the purpose for which it was collected, to comply with legal or regulatory obligations, to resolve disputes, enforce legal rights, or for such other period as may be required or permitted under Applicable Laws.`,
      `The Company takes reasonable steps to ensure that the personal data collected is accurate, complete, relevant, and, where necessary, kept up to date. Users are encouraged to promptly notify the Company of any changes to the personal information previously provided to enable the Company to maintain accurate records.`,
    ],
  },
  {
    title: 'CHILDREN’S PRIVACY',
    paras: [
      `The Platform is intended for use by persons who are competent to enter into legally binding contracts under Applicable Laws.`,
      `The Company does not knowingly collect personal data from children or persons for whom parental or lawful guardian consent is required under Applicable Laws.`,
      `If the Company becomes aware that such personal data has been collected inadvertently, it shall take reasonable steps to delete such data in accordance with Applicable Laws.`,
    ],
  },
  {
    title: 'EXTERNAL LINKS ON THE PLATFORM',
    paras: [
      `The Platform may contain links to third-party websites, applications, social media platforms, payment service providers, mapping services, cloud-based services, or other external resources that are not owned, operated, or controlled by the Company. Such links are provided solely for the convenience of Users or to facilitate access to additional information or services.`,
      `The inclusion of any external link on the Platform shall not be construed as an endorsement, recommendation, sponsorship, or approval by the Company of the content, products, services, or practices of such third-party websites or resources.`,
      `The Company does not exercise any control over the availability, accuracy, security, content, privacy practices, or terms of use of any third-party website or service and shall not be responsible or liable for any loss, damage, claim, or liability arising from or in connection with Your access to or use of such third-party websites or resources.`,
      `Once You leave the Platform or access a third-party website through an external link, Your interaction with such website shall be governed exclusively by the terms of use, privacy policy, and other applicable policies of that third party. The Company strongly recommends that You carefully review the privacy policies and terms applicable to every third-party website or service before providing any personal information or engaging in any transaction.`,
    ],
  },
  {
    title: 'YOUR RIGHTS',
    paras: [
      `The Company respects Your rights in relation to Your personal data and shall facilitate the exercise of such rights in accordance with the applicable provisions of the Digital Personal Data Protection Act, 2023 and other Applicable Laws.`,
      `Subject to the provisions of Applicable Laws, You shall have the following rights in relation to Your personal data:`,
      `a. Right to Access Information`,
      `You have the right to request information regarding the personal data processed by the Company, including the categories of personal data collected, the purposes for which such data is processed, the categories of recipients with whom such data has been shared (where applicable), and such other information as may be required under Applicable Laws.`,
      `b. Right to Correction, Completion and Updating`,
      `You have the right to request the correction, completion, or updating of any personal data that is inaccurate, incomplete, misleading, or out of date. The Company may require reasonable verification before acting upon such request.`,
      `c. Right to Erasure`,
      `You may request the deletion or erasure of Your personal data where such data is no longer necessary for the purpose for which it was collected, where You have withdrawn Your consent (to the extent processing is based on consent), or where the Company is otherwise required to erase such data under Applicable Laws. This right shall be subject to the Company’s legal, contractual, regulatory, or legitimate business obligations to retain certain information.`,
      `d. Right to Withdraw Consent`,
      `Where the processing of Your personal data is based on Your consent, You may withdraw such consent at any time by contacting the Company through the contact details provided in this Privacy Policy. Withdrawal of consent shall not affect the lawfulness of any processing undertaken prior to such withdrawal. However, withdrawal of consent may affect the Company’s ability to respond to Your enquiry, process Your request, or provide certain services.`,
      `e. Right to Grievance Redressal`,
      `If You have any concerns regarding the processing of Your personal data or believe that Your rights under Applicable Laws have been violated, You may submit a grievance to the Company’s designated Grievance Officer using the contact details provided in this Privacy Policy. The Company shall endeavour to address such grievance within the time prescribed under Applicable Laws.`,
      `f. Right to Nominate`,
      `Where permitted under Applicable Laws, You shall have the right to nominate another individual to exercise Your rights under the Digital Personal Data Protection Act, 2023 in the event of Your death or incapacity.`,
      `The Company may request reasonable information or documentation to verify the identity of the person making any request under this clause before acting upon such request. The Company reserves the right to refuse or limit any request where such refusal or limitation is permitted under Applicable Laws, including where compliance would adversely affect the rights of another person or where the Company is required by law to retain or continue processing the relevant personal data.`,
      `As the Platform presently does not require Users to create or maintain user accounts, any request relating to personal data shall pertain only to the information voluntarily submitted by the User through the Platform or otherwise collected by the Company in accordance with this Privacy Policy.`,
    ],
  },
  {
    title: 'BUSINESS TRANSFERS',
    paras: [
      `In the event of a merger, acquisition, restructuring, conversion, assignment, transfer of business, or sale of all or substantially all of the Company’s assets, personal data may be transferred to the successor entity, subject to compliance with Applicable Laws.`,
    ],
  },
  {
    title: 'COMPLIANCES',
    paras: [
      `i. Electronic Record`,
      `This Privacy Policy constitutes an electronic record within the meaning of the Information Technology Act, 2000, and the rules, regulations, and amendments made thereunder. Being an electronic record generated by a computer system, this Privacy Policy does not require any physical or digital signature and shall be deemed to be a valid and binding electronic record.`,
      `ii. Publication of Privacy Policy`,
      `This Privacy Policy is published on the Platform in accordance with the applicable provisions of the Information Technology Act, 2000, the Digital Personal Data Protection Act, 2023, and all applicable rules, regulations, notifications, guidelines, and amendments issued thereunder from time to time. The Privacy Policy sets out the manner in which the Company collects, processes, stores, uses, discloses, retains, and protects the personal data of Users accessing or interacting with the Platform.`,
      `iii. Compliance with the Digital Personal Data Protection Act, 2023`,
      `The Company is committed to processing personal data in accordance with the provisions of the Digital Personal Data Protection Act, 2023 (“DPDP Act”) and any rules, regulations, or notifications issued thereunder. Personal data shall be collected and processed only for lawful purposes, in a fair and transparent manner, and only to the extent necessary for the purposes specified in this Privacy Policy or otherwise permitted under Applicable Laws.`,
      `Where the processing of personal data is based on the User’s consent, such consent shall be obtained, managed, and withdrawn in accordance with the requirements prescribed under the DPDP Act. The Company shall also implement reasonable technical and organisational measures to safeguard personal data against unauthorised access, disclosure, alteration, loss, or misuse.`,
      `iv. Amendments to Applicable Laws`,
      `The Company reserves the right to modify, update, or revise this Privacy Policy to ensure continued compliance with any amendments to Applicable Laws, judicial pronouncements, governmental notifications, or regulatory directions relating to data protection, privacy, or electronic records. Any such revisions shall become effective upon their publication on the Platform, unless otherwise required by Applicable Laws.`,
    ],
  },
  {
    title: 'CONFIDENTIALITY',
    paras: [
      `You further acknowledge that the Platform may contain information that is designated confidential by us and that you shall not disclose such information without our prior written consent. Your information is regarded as confidential and therefore will not be divulged to any third party, unless if legally required to do so to the appropriate authorities. We will not sell, share, or rent your personal information to any third party or use your e-mail address for unsolicited mail. Any emails sent by us will only be in connection with the provision of agreed services, and you retain sole discretion to seek for discontinuation of such communications at any point in time.`,
    ],
  },
  {
    title: 'OTHER INFORMATION COLLECTORS',
    paras: [
      `Except as otherwise expressly included in this Privacy Policy, this document only addresses the use and disclosure of information we collect from you. To the extent that you disclose your information to other parties, whether they are on our Platform or other sites throughout the Internet, different rules may apply to their use or disclosure of the information you disclose to them. To the extent that we use third party advertisers, they adhere to their privacy policies. Since we do not control the privacy policies of third parties, you are subject to ask questions before you disclose your personal information to others.`,
    ],
  },
  {
    title: 'DATA RETENTION',
    paras: [
      `The Company shall retain Your personal data only for as long as it is reasonably necessary to fulfil the purposes for which it was collected, to respond to Your enquiries, evaluate franchise or venue placement opportunities, comply with contractual, statutory, regulatory, tax, accounting, or legal obligations, resolve disputes, or enforce its legal rights.`,
      `Upon expiry of the applicable retention period or once the purpose of processing has been fulfilled, the Company shall delete or anonymise such personal data unless retention is required under Applicable Laws.`,
    ],
  },
  {
    title: 'CROSS-BORDER TRANSFER OF PERSONAL DATA',
    paras: [
      `The Company may store or process personal data using cloud service providers or technology infrastructure located outside India where permitted under Applicable Laws.`,
      `Wherever personal data is transferred outside India, the Company shall ensure that such transfer is carried out in accordance with the Digital Personal Data Protection Act, 2023 and any applicable governmental notifications or restrictions.`,
    ],
  },
  {
    title: 'OUR DISCLOSURE OF YOUR INFORMATION',
    paras: [
      `Due to the existing regulatory environment, we cannot ensure that all of your private communications and other personally identifiable information will never be disclosed in ways not otherwise described in this Privacy Policy. By way of example (without limiting and foregoing), we may be forced to disclose information to the government, law enforcement agencies or third parties. Therefore, although we use industry-standard practices to protect your privacy, we do not promise, and you should not expect, that your personally identifiable information or private communications would always remain private. We do however assure you that any disclosure of your personally identifiable information shall be personally intimated to you through an email sent to your provided email address.`,
      `As a matter of policy, we do not sell or rent any personally identifiable information about you to any third party. However, the following describes some of the ways that your personally identifiable information may be disclosed:`,
      `a. External Service Providers: There may be several services offered by external service providers that help you use our Platform. If you choose to use these optional services, and in the course of doing so, disclose information to the external service providers, and/or permit them to collect information about you, then their use of your information is governed by their privacy policy.`,
      `b. Law and Order: We cooperate with law enforcement inquiries, as well as other third parties to enforce laws, such as intellectual property rights, fraud and other rights. We can (and you authorize us to) disclose any information about you to law enforcement and other government officials as we, in our sole discretion, believe necessary or appropriate, in connection with an investigation of fraud, intellectual property infringements, or other activity that is illegal or may expose us or you to legal liability.`,
    ],
  },
  {
    title: 'ACCESSING, REVIEWING AND CHANGING YOUR PROFILE',
    paras: [
      `You can review and change the information you submitted except Email ID. An option for facilitating such change shall be present on the Platform and such change shall be facilitated by the User. If you change any information, we may or may not keep track of your old information. We will not retain in our files information you have requested to remove for certain circumstances, such as to resolve disputes, troubleshoot problems, and enforce our terms and conditions. Such prior information shall be completely removed from our databases, including stored ‘back up’ systems. If you believe that any information, we are holding on to you is incorrect or incomplete, or to remove your profile so that others cannot view it, the User needs to remediate, and promptly correct any such incorrect information.`,
    ],
  },
  {
    title: 'SECURITY',
    paras: [
      `We treat data as an asset that must be protected against loss and unauthorized access. We employ many different security techniques to protect such data from unauthorized access by members inside and outside the Firm. We follow generally accepted industry standards to protect the Personal Information submitted to us and information that we have accessed.`,
      `However, as effective as encryption technology is, no security system is impenetrable. Our Firm cannot guarantee the security of our database, nor can we guarantee that information you provide won’t be intercepted while being transmitted to the Firm over the Internet.`,
      `Data Security Incident: In the event of a personal data breach, the Company shall take such measures as may be required under Applicable Laws, including notifying the relevant authorities and affected individuals where required.`,
    ],
  },
  {
    title: 'SEVERABILITY',
    paras: [
      `Each paragraph of this Privacy Policy shall be and remain separate from and independent of and severable from all and any other paragraphs herein except where otherwise expressly indicated or indicated by the context of the agreement. The decision or declaration that one or more of the paragraphs are null and void shall not affect the remaining paragraphs of this privacy policy.`,
    ],
  },
  {
    title: 'AMENDMENT',
    paras: [
      `Our Privacy Policy may change from time to time. The most current version of the policy will govern our use of your information and will always be on the Platform. Any amendments to this Policy shall be deemed as accepted by the User on their continued use of the Platform.`,
    ],
  },
  {
    title: 'CONSENT WITHDRAWAL, DATA DOWNLOAD & DATA REMOVAL REQUESTS',
    paras: [
      `To withdraw your consent, or to request the download or delete your data with us for any or all our services at any time, please email to “info@cosmicvend.com”`,
    ],
  },
  {
    title: 'DISCLAIMER',
    paras: [
      `We do not store any account related information or any credit / debit card details. We shall not be liable for any loss or damage sustained by Users as a result of any disclosure (inadvertent or otherwise) of any information concerning the User’s account, credit cards or debit cards in the course of any online transactions or payments made for any products and/or services offered through the Platform.`,
      `In case any Personal Information is shared by you with us, which is not requested by us during registration, (whether mandatorily or optionally), we will not be liable for any information security breach or disclosure in relation to such information.`,
    ],
  },
  {
    title: 'DATA PROTECTION OFFICER/ GRIEVANCE OFFICER',
    paras: [
      `In case you have any complaints and/or grievances in relation to the processing of your Personal Information you can send your complaints via e-mail to our grievance officer: info@cosmicvend.com`,
    ],
  },
]

/** A sub-heading line (e.g. "1. Information Provided by You", "a. Right to Access
 *  Information", "i. Electronic Record") gets slightly emphasised — short, capitalised
 *  titles with no trailing sentence punctuation, never list items or full sentences. */
function isSubHeading(text: string): boolean {
  const t = text.trim()
  if (/[.;,]$/.test(t)) return false
  return /^(\d+|[a-z]{1,4})[.)]\s+[A-Z]/.test(t) && t.length <= 70
}

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen bg-[#07060F] overflow-x-hidden">
      <StarfieldCanvas />
      <Navbar />

      <article className="relative z-10 mx-auto max-w-4xl px-6 pt-36 pb-24">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-[#C9A84C]">
          <span className="mr-2">&#10022;</span>Legal<span className="ml-2">&#10022;</span>
        </p>
        <h1 className="mb-3 font-serif text-4xl md:text-5xl text-[#F0EAFF]">Privacy Policy</h1>
        <p className="font-sans text-sm text-[rgba(240,234,255,0.5)]">Posted as of 08-07-2026</p>
        <p className="mb-10 font-sans text-sm text-[rgba(240,234,255,0.5)]">
          Last updated as of 08-07-2026
        </p>

        <div className="mb-8 h-px w-full bg-linear-to-r from-transparent via-[#C9A84C]/30 to-transparent" />

        <h2 className="mb-5 font-serif text-2xl text-[#F0EAFF]">
          Welcome to CosmicVend’s Privacy Policy
        </h2>
        {INTRO.map((p, i) => (
          <p
            key={`intro-${i}`}
            className="mb-4 font-sans text-[15px] leading-relaxed text-[rgba(240,234,255,0.72)]"
          >
            {p}
          </p>
        ))}

        {SECTIONS.map((section) => (
          <section key={section.title} className="mt-12">
            {section.title && (
              <h2 className="mb-5 font-serif text-2xl text-[#F0EAFF]">{section.title}</h2>
            )}
            {section.paras.map((p, i) =>
              isSubHeading(p) ? (
                <p
                  key={i}
                  className="mb-3 mt-6 font-mono text-sm uppercase tracking-wide text-[#C9A84C]"
                >
                  {p}
                </p>
              ) : (
                <p
                  key={i}
                  className="mb-4 font-sans text-[15px] leading-relaxed text-[rgba(240,234,255,0.72)]"
                >
                  {p}
                </p>
              ),
            )}
          </section>
        ))}
      </article>

      <Footer />
    </div>
  )
}
