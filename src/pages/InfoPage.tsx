import React from 'react'

const InfoPage = ({ match }: any) => {
    let text = <></>
    switch (match.path) {
        case "/about_us":
            text = <div className="text-sm text-gray-700 info_block__about_us">
                <div className={'text-primary-500 text-3xl font-bold mb-4'}>About us</div>
                VODsearch.tv was created by a team of video game enthusiasts.
                Our mission is to build products and services that increase the number and quality of ways that streamers and fans connect.
                We aim to make it easier for streamers to get more out of the material they put out,
                while at the same time giving fans better ways to explore and discover.
            <br></br><br></br>
                If you're a streamer and would be interested in collaborating, shoot us a note at <a href="mailto: collaborations@vodsearch.tv">collaborations@VODsearch.tv</a>.
            <br></br><br></br>
                If you're a developer with a passion for gaming and skilled in front-end design or back-end optimization contact us at <a href="mailto: work@vodsearch.tv">work@VODsearch.tv</a>.
            </div>
            break
        case "/privacy":
            text = <div className="text-black info_block__privacy">
                Privacy Policy
            <br></br><br></br>
                General Information
            <br></br><br></br>
                Protecting your private information is our priority. This privacy policy ("Privacy Policy") applies to your access and use of the Stream Snipers website and its subdomains (the "Site") our products, and any information, text, graphics, photos, or other materials uploaded to, downloaded from, or appearing on the Site (collectively, the "Services"). The Services are owned, operated, and managed by 1337, Inc. (the "Company"). By using the Services, you acknowledge, agree, and consent to the data use and collection practices described in this Privacy Policy. This Privacy Policy is to be read in conjunction with the Terms of Service ("Terms"), which are incorporated herein by reference.
            <br></br><br></br>
                1. Information Collected
            <br></br>
                a. User Provide Information
                To provide Stream Snipers users ("Users") with the best possible experience when using the Services, Company may collect personally identifiable information ("Personal Information"), including, but not limited to your email address.

                Notwithstanding Company's automated collection of information, as discussed herein, Company does not collect any Personal Information about you unless you voluntarily provide it. However, you may be required to provide certain Personal Information to us when you register for an account on the Site ("Account"). We will use your Personal Information for, but not limited to, communicating with you in relation to the Services.
            <br></br>
                b. Information that is Automatically Collected<br></br>
                When you access the Services, we may automatically record and store certain information about your technology and system by using cookies and/or other types of technology. Examples of such information collected via cookies includes, but is not limited to, your Internet Protocol ("IP") address, other unique user identifiers, your mobile device ("Device") and browser type identifiers, software and system type, and information about your use of the Services, including the duration of time you access or use the Services and information about Services performance analytics, including crashing, network, and tracing.
            <br></br><br></br>
                2. Information From Children<br></br>
                IF YOU ARE NOT AT LEAST 13 YEARS OLD, THEN YOU MUST NOT USE OR ACCESS SERVICES IN ANY MANNER.

                Company does not knowingly collect or maintain Personal Information from persons under 13 years of age. If Company learns that Personal Information of persons under 13 years of age has been collected on or through the Services, Company will take the necessary and appropriate steps to delete the Personal Information.
            <br></br><br></br>
                3. How Company Uses Your Personal Information<br></br>
                Company collects and uses the Personal Information and other information collected pursuant to this Privacy Policy to provide, maintain, enhance, and develop the Services and will only use such Personal Information in a manner that is consistent with this Privacy Policy.

                If you provide Personal Information for a certain reason, Company will use that Personal Information in connection with the reason it was provided. For example, Company will use your email address for notification purposes. Such notifications include, but are not limited to, notifying you of updates to the Services, notifications for customer service purposes, notifications regarding likes or shares, or to otherwise contact you for any reason in connection with your use of the Services or in the event that you contact Company.

                Company may also user your Personal Information and other information collected pursuant to this Privacy Policy for the following purposes:

            <br></br>
                a. Identify your Account;<br></br>
                b. Resolving disputes;<br></br>
                c. Preventing potentially fraudulent, prohibited, or illegal activities;<br></br>
                d. Enforcing the Terms;<br></br>
                e. Comparing information for accuracy; and<br></br>
                f. Performing other duties as required by law.
            <br></br><br></br>
                4. How Company Shares Information With Third Parties<br></br>
                Company will not sell, rent, lease or otherwise transfer your Personal Information to any third parties and such Personal Information will only be used for communication between you, and Company, and in connection with your use of the Services. Company may disclose your personal information to its Owners, employees, and third party contractors for the purpose of understanding User behavior and using such information to improve the Services.

                Company may disclose your Personal Information, without notice, if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on Company; (b) protect and defend the rights or property of Company; and/or (c) act under exigent circumstances to protect the personal or economic safety of users of Company, or the public.

                Notwithstanding the foregoing, Company may disclose your Personal Information to other third parties with your consent and direction to do so. When you broadcast information to third-party services, such information is no longer under the control of Company and is subject to the terms of use and privacy policies of such third parties.
            <br></br><br></br>
                5. Cookies and Do Not Track Signals<br></br>
                Company uses cookies to store and sometimes track information about your technology. A "cookie" is a small amount of data that is sent to your computer or device from a web server and stored thereon. Generally, Company uses cookies to collect additional service usage data, to improve the Services, and to personalize your experience. Using cookies helps ensure a safe experience; prevent spam, scammers, and phishing; and facilitate user-to-user interactions, such as chatting, posting and sharing content, and providing links to third-party services. However, Company does not share cookies with third parties, unless otherwise described herein.

                Company may keep track of User behavior, within the Services to understand said behavior. This data is used to enhance the Services.

                Company will not follow any browser, extension, or other application's Do Not Track signal or any other similar anti-tracking signals.
            <br></br><br></br>
                6. Third Party Links<br></br>
                The Services may contain links to other third party websites, which displays third party advertisements. Company is not responsible for the content or privacy practices of third party websites, applications, or software. We encourage our Users to be aware when they leave the Services and to read the privacy statements of any other site or application that collects personally identifiable information.
            <br></br><br></br>
                7. Security of your Personal Information<br></br>
                Company will take reasonable and appropriate security measures to protect your Personal Information from unauthorized access, disclosure, alteration, or destruction. Unfortunately, no data transmission over the Internet or any mobile or wireless network is 100% secure. As a result, while we strive to protect your personal information, you agree and acknowledge that: (a) there are security and privacy limitations inherent to the Internet and wireless and mobile networks which are beyond our control; and (b) security, integrity, and privacy of any and all information and data exchanged between you and Company cannot be guaranteed.

                Company recommends that you do your part in protecting your Personal Information. This includes guarding against unauthorized access to your Account, if applicable, by ensuring no one else uses your device or computer when you are logged in, by logging off from the Services when they are not in use, by keeping your password and other Personal Information confidential, and by taking precautionary steps to guard the physical safety and security of your device or computer.
            <br></br><br></br>
                8. How Long Will Your Information Be Stored<br></br>
                Company will store your Personal Information for as long as permitted by applicable laws and regulations.
            <br></br><br></br>
                9. Email Communications<br></br>
                From time to time, Company may contact you via email for the purpose of providing announcements, promotional offers, alerts, confirmations, surveys, and/or other general communication regarding the Services. To improve the Services, we may receive a notification when you open an email from Company or click on a link therein.

                If you would like to stop receiving such communications via email from Company, you may opt out of such communications by clicking on the UNSUBSCRIBE button and/or by emailing us at support at vodsearch.tv.
            <br></br><br></br>
                10. Changes to this Privacy Policy<br></br>
                Company reserves the right to change this Privacy Policy at any time in Company's sole discretion. We will provide you with notice of such a change. Notice of any changes to the Privacy Policy will be accomplished upon Company sending you an email to the address listed in your Account notifying you of such changes and Company announcing such changes through the Services. Such changes will go into effect immediately upon your access of the Services after you are given notice, as described herein. Your continued use of the Services following the notice of any changes to this Privacy Policy constitutes your acceptance of such changes. Any information collected by the Services will be dealt with in accordance with the version of this Privacy Policy that was in place at the time of collection.
            <br></br><br></br>
                11. Merger or Sale<br></br>
                The information collected pursuant to this Privacy Policy, including Personal Information, is considered an asset of Company. In the event Company or some or all of the assets related to the Services are acquired by another entity through a sale, merger, or some other change of ownership transaction, Company reserves the right to transfer or assign the information, collected pursuant to this Privacy Policy, in that event.
            <br></br><br></br>
                12. Contact Information<br></br>
                Company welcomes your questions or comments regarding this Privacy Policy. If you believe that Company has not adhered to this Privacy Policy, or if you have any other questions or concerns regarding this Privacy Policy please contact Company at support at vodsearch.tv.

                The effective date of this Privacy Policy is July 23, 2019
            </div>
            break
        case "/terms_of_service":
            text = <div className="text-gray-900 info_block__privacy ">
                Terms of Service<br></br><br></br>
                General Information<br></br><br></br>
                Welcome to Stream Snipers an online platform that allows gamers to access highlights of their performance and replay review in-game interactions with celebrity streamers. These Terms of Service (the "Terms") govern your access and the use of the Stream Snipers website and its subdomains (the "Site") our products, and any information, text, graphics, photos, or other materials uploaded to, downloaded from, or appearing on the Site. We refer to the Site and all related services throughout these Terms as the "Services." These Terms are a legally binding agreement between you and 1337, Inc. ("Company"). Read this agreement carefully before using the Services.
            <br></br>
                We may amend these Terms at any time by posting a revised version on the Site and/or sending you notice of the same to the email address associated with your Account, as defined herein. Each revised version will state its effective date, which will be on or after the date in which it is posted. Your continued use of the Services after the effective date of a revised version of these Terms constitutes your acceptance of the revised Terms.
            <br></br><br></br>
                <b>
                    You understand that by using Services, you are agreeing to be bound by these Terms, including any and all of your warranties and representations contained herein. If you do not accept these Terms in their entirety, you may not access or use the Services. If you agree to these Terms on behalf of an entity, you represent and warrant that you have the authority to bind that entity to these Terms. In that event, "you" and "your" will refer and apply to that entity.
            </b>
                <br></br><br></br>
                Effective Date
                These Terms are effective as of July 23, 2019.
            <br></br><br></br>
                1. Privacy<br></br>
                Your use of the Services is conditioned upon your agreement to the Privacy Policy ("Privacy Policy"). Please review the complete Privacy Policy, which is incorporated herein by reference.
            <br></br><br></br>
                2. Children Under 13<br></br>
                The Services are only for people 13 years or older. By using the Services, you confirm that you are above the minimum age and are not barred from doing so under applicable law. If you do not provide us with accurate information, then we may not be able to assist you with accessing your account.
            <br></br><br></br>
                3. Electronic Communication<br></br>
                Each and every time you either use the Services or send an email or other electronic communication to Company, such communication will constitute an electronic communication ("Electronic Communication"). By using the Services, you consent to receive Electronic Communications and you agree that all agreements, notices, disclosures and other communications that Company provides to you via Electronic Communication, individually and collectively, satisfy any legal requirement that such communications be in writing.
            <br></br><br></br>
                4. Account<br></br>
                Users of the Services ("Users") may, but are not required to set up an account ("Account") to use the Services. The Account includes a unique and complex password ("Password") used to access your Account. You are solely responsible for maintaining the confidentiality and security of your Account and Password. Such security includes, but is not limited to restricting access to your computer, laptop, tablet, or mobile device that you use to access the Services and/or where such Password may be stored. You agree that you are solely responsible for all activities and actions that occur under the auspices of your Account. You agree not to assign or otherwise transfer your Account to or share your Password with any other person or entity. You acknowledge and agree that Company is not responsible for third party access to your Account that results from theft or misappropriation of your Password or other Account credentials. Company also reserves all available legal rights and remedies to prevent the unauthorized use of the Services, including, but not limited to, technological barriers, IP mapping, and contacting your internet service provider. You hereby acknowledge and agree that any action taken under your Account will be presumed to have been authorized by you.
            <br></br><br></br>
                5. Services Description<br></br>
                The Services allow Users to search Twitch© video archives for footage of them interacting in a certain game with a certain streamer. For example, if you are playing a battle royale game and encounter a person livestreaming the same game on Twitch©, you would be able to use our Services to subsequently search for and view that specific interaction. Users can access and view this content by searching for a particular game or a particular gamer, based on his/her game name. If a user has an Account, the user will be also able to like and share videos.
            <br></br><br></br>
                6. Permissions<br></br>
                The Services capture prerecorded audiovisual works that have been uploaded to Twitch© or similar streaming sites ("User Content"). To the extent that any User Content appears on the Services, you hereby grant Company the furthest extent and for the maximum duration permitted by applicable law an unrestricted, worldwide, irrevocable, fully sub-licenseable, nonexclusive, and royalty-free right to a) use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform and display such User Content in any form, format, or media, now known or hereafter devised; and b) use the name, identity, likeness, and voice that is submitted in connection with such User Content.
            <br></br><br></br>
                7. Prohibited Content<br></br>
                Company reserves the right to remove any User Content that does not comply with the Terms.. Company may also remove User Content that violates someone else's rights, including without limitation any trademarks, copyrights, patent rights or similar, as well as statutory and common law rights of publicity. Finally, Company may remove any prohibited User Content, which includes, but is not limited to the following:
            <br></br>
                a. User Content that is pornographic, lewd, or otherwise sexually explicit in nature<br></br>
                b. User Content that is defamatory or in violation of any person's state or common law right of publicity or other privacy rights;<br></br>
                c. User Content that may be considered misleading, fraudulent, or otherwise unlawful or that is uploaded for an illegal or unauthorized purpose; or<br></br>
                d. Any User Content that otherwise violates these Terms<br></br>
                <br></br><br></br>
                8. Twitch© Integration
                Company is wholly separate and independent from Twitch© and is not a parent, agent, subsidiary, affiliate, partner, member, or otherwise affiliated or involved in a joint venture with Twitch© or Amazon.com Inc. Company utilizes Twitch© API and other utilities provided by Twitch© pursuant to the Twitch© Developer Agreement.
            <br></br>
                You hereby acknowledge and agree that your use of any User Content is subject to the Twitch Terms of Service.
            <br></br><br></br>
                9. Prohibited Conduct<br></br>
                You are granted a non-exclusive, non-transferable, revocable license to access and use the Services, strictly in accordance with these Terms. As a condition of your use of the Services, you represent and warrant to Company that you will not use the Services for any purpose that is unlawful or prohibited by these Terms. Further, you agree that you will comply with these Terms and will not:
            <br></br><br></br>
                a. Use the Services in any manner which could damage, disable, overburden, or impair the Services or interfere with any other party's use and enjoyment of the Services;<br></br>
                b. Obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through the Services;<br></br>
                c. Impersonate any person or entity, falsely claim an affiliation with any person or entity, or access the Services accounts of others without permission, forge another person's digital signature, misrepresent the source, identity, or content of information transmitted via the Services, or perform any other similar fraudulent activity;<br></br>
                d. Harvest or collect the email addresses or other contact information of other users from the Services;<br></br>
                e. Defame, harass, abuse, threaten or defraud users of the Services, or collect, or attempt to collect, personal information about users or third parties without their consent;<br></br>
                f. Remove, circumvent, disable, damage or otherwise interfere with security-related features of the Services;<br></br>
                g. Reverse engineer, decompile, disassemble or otherwise attempt to discover the source code of the Services or any part thereof, except and only to the extent that this activity is expressly permitted by the applicable law of your country of residence;<br></br>
                h. Modify, adapt, translate or create derivative works based upon the Services or any part thereof, except and only to the extent that such activity is expressly permitted by applicable law notwithstanding this limitation;<br></br>
                i. Access any website, server, software application, or other computer resource owned, used and/or licensed by Company including but not limited to the Services, by means of any robot, spider, scraper, crawler or other automated means for any purpose, or bypass any measures Company may use to prevent or restrict access to any website, server, software application, or other computer resource owned, used and/or licensed to Company, including but not limited to the Services;<br></br>
                j. Interfere with or disrupt the Services or servers or networks connected to the Services, or disobey any requirements, procedures, policies or regulations of networks connected to the Services;<br></br>
                k. Attempt to indicate in any manner that you have a relationship with Company or that Company has endorsed you or any products or services for any purpose; and<br></br>
                l. Use the Services for any illegal purpose, or in violation of any local, state, national, or international law or regulation, including, without limitation, laws governing intellectual property and other proprietary rights, data protection and privacy.<br></br>
                <br></br><br></br>
                10. Rights Company Grants to You<br></br>
                Subject to your compliance with these Terms, Company grants you access to view any User Content that belongs to Company or its Users that have also agreed to these Terms. You agree that you will not use any User Content except as expressly permitted in these Terms. Please follow the steps in accordance with the functionality of Services if you want to remove your Account.
            <br></br><br></br>
                11. Disclaimer and Limitation of Liability<br></br>
                All information and content, including User Content, provided by Company through the Services is for informational purposes only and Company does not guarantee the accuracy, completeness, timeliness, or reliability of any such information or content. The Services are provided "as-is" and Company does not guarantee that they are safe, secure, or functional at all times.
            <br></br>
                TO THE EXTENT PERMITTED BY LAW, COMPANY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
            <br></br>
                COMPANY IS NOT RESPONSIBLE FOR ANY CONTENT THAT IS UPLOADED TO THE SERVICES, INCLUDING ANY INFRINGING, UNLAWFUL, OR OBJECTIONABLE CONTENT THAT IS UPLOADED TO THE SERVICES. FURTHER, COMPANY IS NOT RESPONSIBLE FOR USER ACTIONS.
            <br></br>
                USERS ARE NOT EMPLOYEES, PARTNERS, AGENTS, JOINT VENTURES, OR FRANCHISEES OF COMPANY. YOU HEREBY ACKNOWLEDGE THAT COMPANY DOES NOT SUPERVISE, DIRECT, CONTROL OR MONITOR OTHER USERS.
            <br></br>
                COMPANY IS NOT RESPONSIBLE FOR SERVICES AND FEATURES OFFERED BY OTHER PERSONS, COMPANIES, OR ENTITIES, EVEN IF YOU ACCESS THEM THROUGH THE SERVICES.
            <br></br>
                You hereby agree that Company will not be liable for any lost profits, revenues, information, or data, or consequential, special, indirect, exemplary, punitive, or incidental damages arising out of or related to these Terms or your use of the Company Services. Company's aggregate liability arising out of or related to these Terms or your use of the Services will not exceed the greater of one hundred dollars ($100.00) or the amount you have paid Company in the past calendar year.
            <br></br><br></br>
                12. User Representations and Warranties<br></br>
                As a User, you hereby represent that i) you are at least thirteen (13) years of age; and ii) you are not prohibited from receiving or using any aspect of the Services under applicable laws; and c) Company has not previously disabled your account for a violation of the law or these Terms, even if these Terms have been amended. Disclaimers of Warranties.
            <br></br>
                As a User, you hereby warrant that i) you will comply with the applicable laws and regulations in your jurisdiction when you make any use whatsoever of the Services.
            <br></br><br></br>
                13. Links to Third Party Sites and Services<br></br>
                The Services may contain links to third party websites ("Linked Sites"). The Linked Sites are not under the control of Company or any part of the Services and Company is not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. Company is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by Company of the website or any association with its operators.
            <br></br><br></br>
                14. Device and Internet Connection<br></br>
                Use and Access of the Services may require the use of your personal computer, laptop, tablet, or mobile device, as well as communication with or use of space on such device. You are solely responsible for all internet and/or mobile data connection and all associated fees that you incur when accessing the Services.
            <br></br><br></br>
                15. Intellectual Property<br></br>
                All content included as part of the Services, including, but not limited to, text, graphics, logos, images, as well as the compilation thereof, the look and feel of the Services, including, without limitation, the text, graphics, code, and other materials contained therein (collectively "Protected Content") is the property of Company or its third party suppliers and protected by copyright, trademark, and other laws that protect intellectual property and proprietary rights. You agree to observe and abide by all copyright, trademark and other proprietary notices, legends or other restrictions contained in any such content and will not make any changes thereto.
            <br></br>
                You will not modify, publish, transmit, reverse engineer, participate in the transfer or sale, create derivative works, or in any way exploit any of the Protected Content, in whole or in part, found within the Services. Your use of the Services does not entitle you to make any unauthorized use of any of the Protected Content, and in particular you shall not delete or alter any proprietary rights or attribution notices in any Protected Content. You shall use Protected Content solely for your personal use, as outlined in these Terms, and will make no other use of the Content without the express written permission of Company and/or Protected Content's third party owner. You acknowledge and agree that you do not acquire any ownership rights in any Protected Content. Except as provided for herein, these Terms do not grant any licenses, express or implied, to the Protected Content or any other intellectual property of Company, our licensors, or any third party.
            <br></br><br></br>
                16. Copyright Infringement Policy<br></br>
                Company committed to protecting the rights of copyright rights holders and seeks to comply with all applicable laws and regulations regarding the protection of intellectual property.
            <br></br>
                If you are a copyright owner or an agent thereof and believe that any content on the Services infringes on your copyright, you may submit a notification pursuant to the Digital Millennium Copyright Act ("DMCA") by providing our designated agent for copyright claim notifications ("Designated Agent") with the following information in writing (see 17 U.S.C. §512(c)(3) for further detail):
            <br></br>
                a. A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed;<br></br>
                b. Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works within the Services are covered by a single notification, a representative list of such works that appear within the Services;<br></br>
                c. Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled and information reasonably sufficient to permit the service provider to locate the material;<br></br>
                d. Information reasonably sufficient to permit the service provider to contact you, such as an address, telephone number, and, if available, an electronic mail;<br></br>
                e. A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law; and<br></br>
                f. A statement under penalty of perjury that the information in the notification is accurate, and you are the owner of, or authorized to act on behalf of the owner of, an exclusive right that is allegedly infringed.<br></br>
                Company will process any notices of alleged copyright infringement and will take appropriate actions as permitted under the DMCA. Upon receipt of notices complying with the DMCA, Company will act expeditiously to remove or disable access to any material claimed to be infringing or claimed to be the subject of infringing activity and will act expeditiously to remove or disable access to any reference or link to material or activity that is claimed to be infringing.<br></br>
                <br></br>
                17. DMCA Counter Claims<br></br>
                Company may notify the owner or administrator of the affected Content so that he or she can make a counter-notification pursuant to his or her rights under the DMCA. If you receive such a notice, you may provide counter-notification in writing to the Designated Agent. To be effective, the counter-notification must be a written communication that includes the following:<br></br>
                <br></br>
                a. Your physical or electronic signature;<br></br>
                b. Identification of the material that has been removed or to which access has been disabled, and the location at which the material appeared before it was removed or access to it was disabled;<br></br>
                c. A statement from you under the penalty of perjury, that you have a good faith belief that the material was removed or disabled as a result of a mistake or misidentification of the material to be removed or disabled; and<br></br>
                d. Your name, physical address and telephone number, and a statement that you consent to the jurisdiction of a Federal District Court for the judicial district in which your physical address is located, or if your physical address is outside of the United States, for any judicial district in which Company may be found, and that you will accept service of process from the person who provided notification of allegedly infringing material or an agent of such person<br></br>
                <br></br><br></br>
                18. International Users<br></br>
                The Services are controlled, operated and administered by Company from our offices within the United States. If you access the Services from a location outside the United States, you are responsible for compliance with all local laws. You agree that you will not use the Content accessed through Services in any country or in any manner prohibited by any applicable laws, restrictions or regulations.
            <br></br><br></br>
                19. Indemnification<br></br>
                To the maximum extent permitted by applicable law, you agree to indemnify, defend and hold harmless Company, its officers, directors, employees, agents and third parties, and assigns from and against any and all claims, losses, costs, debt, liabilities and expenses (including, but not limited to attorney's fees) arising from (i) your misuse of and access to the Services; (ii) your violation of these Terms; (iii) your violation of any third party right, including without limitation any copyright, intellectual property, or privacy right; (iv) your use of or inability to use the Services; and (v) any claim that you caused damage to a third party.
            <br></br><br></br>
                20. Arbitration<br></br>
                In the event the parties are not able to resolve any dispute between them arising out of or concerning these Terms, or any provisions hereof, whether in contract, tort, or otherwise at law or in equity for damages or any other relief, then such dispute must be resolved solely by final and binding arbitration pursuant to the Federal Arbitration Act, conducted by a single neutral arbitrator and administered by the American Arbitration Association, in a location mutually agreed upon by the parties. If the parties cannot agree on a location, the arbitration will be conducted telephonically. The arbitrator's award will be final, and judgment may be entered upon it in any court having jurisdiction. In the event that any legal or equitable action, proceeding or arbitration arises out of or concerns these Terms, the prevailing party will be entitled to recover its costs and reasonable attorney's fees. The parties agree that the Federal Arbitration Act governs the interpretation and enforcement of this provision. The entire dispute, including the scope and enforceability of this arbitration provision shall be determined by the arbitrator. This arbitration provision shall survive the termination of these Terms.
            <br></br><br></br>
                21. Class Action Waiver<br></br>
                Any arbitration under these Terms will take place on an individual basis; class arbitrations and class/representative/collective actions are not permitted. THE PARTIES AGREE THAT A PARTY MAY BRING CLAIMS AGAINST THE OTHER ONLY IN EACH PARTY'S INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PUTATIVE CLASS, COLLECTIVE AND/ OR REPRESENTATIVE PROCEEDING, SUCH AS IN THE FORM OF A PRIVATE ATTORNEY GENERAL ACTION AGAINST THE OTHER. Further, unless both you and Company agree otherwise, the arbitrator may not consolidate more than one person's claims and may not otherwise preside over any form of a representative or class proceeding.
            <br></br><br></br>
                22. Termination and Access Restriction<br></br>
                Company reserves the right, in its sole discretion, to terminate your access to the Services or any portion thereof at any time, without notice. Use of the Services is unauthorized in any jurisdiction that does not give effect to all provisions of these Terms, including, without limitation, this section.
            <br></br><br></br>
                23. Severability<br></br>
                In the event that any provision of these Terms is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms, such determination shall not affect the validity and enforceability of any other remaining provisions.
            <br></br><br></br>
                24. Miscellaneous<br></br>
                You agree that no joint venture, partnership, employment, or agency relationship exists between you and Company as a result of these Terms or use of the Services.
            <br></br>
                Company's performance of the obligations described herein is subject to existing laws and legal process, and nothing contained in these Terms is in derogation of Company's right to comply with governmental, court and law enforcement requests or requirements relating to your use of the Services or information provided to or gathered by Company with respect to such use.
            <br></br>
                These Terms constitute the entire agreement between you and Company with respect to the Services and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written, between you and Company with respect to the Services. A printed version of these Terms and of any notice given in electronic form will be admissible in judicial or administrative proceedings based upon or relating to these Terms to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form. It is the express wish to the parties that these Terms and all related documents be written in English.
            <br></br>
                These Terms are non-transferable and you may not assign your rights and obligations under these Terms without the express written consent of Company.
            <br></br>
                You hereby consent to the jurisdiction of the State of Nevada and agree that its laws will be used to resolve all disputes arising from or concerning these Terms.
            <br></br>
                Questions and Feedback<br></br><br></br>
                If you have any questions or comments about these Terms or our Services, please contact us at: <a href="mailto: support@vodsearch.tv">support@VODsearch.tv</a>.
            </div>
            break
        case "/info":
            text = <div className="info_block__about_us">
                <div className="info_block__update">
                    <h2>New to the site?</h2>
                    VODsearch.tv shows you highlights of all the on-stream action from your favorite Fortnite players.
                    Using our super duper navigation you can skip to the next kill or death on the stream,
                    or use our Autoskip feature for an action-packed viewing experience.
                    Our "Search" feature also allows you to discover if you've eliminated any streamers and see their reactions.
                    "FragFinder" is our solution for streamers and content creators to find the best moments from their streams in a fraction of the usual time.
                </div>
                <div className="info_block__update">
                    <h2>Update: Feb 5th, 2020</h2>
                    Home page now shows what we think are the top moments from across many streamers (but that's just, like, our opinion, man).<br></br><br></br>
                    FragFinder is a new tool that can help you find the best moments from your own stream!
                    If you want to try it out,
                    <a rel="noopener noreferrer" href="https://twitter.com/VODsearchtv" target="_blank"> send us a DM</a> or
                    <a href="mailto:collaborations@vodsearch.tv?subject=I'd like to try out HighlightHelper!"> drop us an email.</a>
                </div>
                <div className="info_block__update">
                    <h2>Update: Oct 26th, 2019</h2>
                    VODsearch.tv has a new look with added functionality!<br></br><br></br>
                    Just like before, you can search for your Epic name to see if you've eliminated any streamers,
                    by just typing it into the bar at the top of the page. But there's more!<br></br><br></br>
                    New Features:
                    <li>Quickly see all the action from any broadcast that we cover!
                        Cick on any video or reaction and use the handy navigation buttons to skip to all the kills / deaths.</li>
                    <li>Autoskip feature does the hard work for you. Just turn that bad boy on, lean back and enjoy the claps!</li>
                    <li>"Random Video" and "Random Streamer" features allow you to discover new goated streamers you may not have known about.</li>
                    <br></br><br></br>
                    We love to hear what you think and what else you'd like to see on the site!
                    Let us know on our <a rel="noopener noreferrer" href="https://www.reddit.com/r/StreamSn1pers/" target="_blank">Reddit </a>
                    or
                    <a rel="noopener noreferrer" href="https://twitter.com/VODsearchtv" target="_blank"> Twitter</a> pages.
                </div>
            </div>
            break
        default:
            text = <div className="info_block">
                "Not About Us"
                </div>
    }
    return (
        <div className="info_block">
            {text}
        </div>
    )
}

export default InfoPage