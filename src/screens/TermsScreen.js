import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { transparentHeaderStyle } from "../styles/navigation";
import colors from "../styles/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationActions } from "react-navigation";
import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";
import iPhoneSize from "../helpers/utils";
import NavBarButton from "../components/buttons/NavBarButton";

const size = iPhoneSize();
const headingTextSize = 30;

if (size === "small") {
  headingTextSize = 26;
}

export default class TermsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Terms of Service",
    headerLeft: (
      <NavBarButton
        handleButtonPress={() => navigation.goBack()}
        location="left"
        icon={<Icon name="angle-left" color={colors.beige} size={30} />}
      />
    ),
    headerStyle: transparentHeaderStyle,
    headerTintColor: colors.beige
  });

  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <View style={styles.container}>
          <ScrollView>
            <View>
              <Text style={styles.h2}>Assured Performance Network</Text>
            </View>
            <View>
              <Text style={styles.terms}>
                You have read and agree to the "Terms of Service and Privacy
                Policy" The use of the Collision Care Mobile Application (the
                "Service") is subject to the Agreements and indicates your
                consent to said Agreement. This summary is not intended to
                replace them in their entirety. It is intended for convenience
                purposes only.
              </Text>
            </View>

            <View>
              <Text style={styles.terms}>
                YOUR USE OF THIS APPLICATION IS AT YOUR SOLE RISK. LOCATION DATA
                MAY NOT BE ACCURATE.
              </Text>
            </View>

            <View>
              <Text style={styles.terms}>
                Texting or using the app while you drive is strictly prohibited.
              </Text>
            </View>

            <View>
              <Text style={styles.terms}>
                You hereby confirm that you own all exclusive rights at any data
                and content ("Content") that you provide to the Service and may
                assign, in license, such rights. You keep all title and rights
                to the Content, but you grant Assured Performance Collision
                Care, (the "Company") a worldwide, free, non-exclusive,
                irrevocable, sub-licensable, transferable and perpetual license
                to use, create derivative works of, publicly display, publicly
                perform and exploit in any other manner, the Content. Subject to
                the aforementioned, the Company keeps title and all rights to
                the Service's database that you may use to an extent as
                specified by Company for non-commercial and private purposes
                only.
              </Text>
            </View>

            <View>
              <Text style={styles.terms}>
                The service is offered for free, with hope that you find it
                useful. However, Company or its employees, directors,
                shareholders, advisors, or anyone on its behalf shall not be
                liable to you or to any third party, for any reason whatsoever,
                as result of the use of the Company&#39;s product or Service.
                You hereby irrevocably release all of the above from any
                liability of any kind, for any consequence arising from use of
                the Client or Service, including any loss, loss of profit,
                damage to reputation, fee, expense or damage, direct or
                indirect, financial or non-financial.
              </Text>
            </View>
            <View>
              <Text style={styles.h2}>Terms of Use</Text>
            </View>
            <View>
              <Text style={styles.terms}>
                These Terms of Use ("Terms") govern your rights and obligations
                regarding the use of Company Software ("Software") and service
                (both collectively referred to as the "Service") on the Internet
                or in cellular media. These Terms constitute a fully binding
                agreement between Company, (including its affiliates and
                subsidiaries, "Collision Care, We or "Assured Performance") the
                proprietor of all rights in and to the Service, and you. It is
                therefore recommended that you carefully read these Terms.
              </Text>
            </View>

            <View>
              <Text style={styles.terms}>
                By using the Company Service, you signify your assent to these
                Terms;
              </Text>
            </View>

            <View>
              <Text style={styles.terms}>
                http://app.collisioncare.org/?page=tos (Terms of Service &
                Privacy Policy), all of which are an integral part of these
                Terms. If you do not agree to these Terms or any of its parts,
                then you are prohibited and must refrain from using the Service.
              </Text>
            </View>

            <View>
              <Text style={styles.h2}>Key Points</Text>
            </View>

            <View>
              <Text style={styles.terms}>
                The following key points of the Terms are highlighted here for
                your convenience only. These key points are not made in lieu of
                the full Terms. Their presence in this section does not imply or
                mean that they are intended to supersede or override any other
                terms or conditions provided by Company.
              </Text>
            </View>
            <View>
              <Text style={styles.terms}>
                Non-continuous updates. The information provided by the Service
                is intrinsically fluctuant and may be inaccurate, incomplete or
                outdated. Company does not provide any warranties to such
                information credibility or reliability. At any time the service
                may be updated, deleted, uninstalled, or removed. The Company is
                not responsible for loss of data, pictures, information, or
                reports.
              </Text>
            </View>

            <View>
              <Text style={styles.terms}>
                Location-based Service. Some features of the Service make use of
                detailed location information, for example in the form of GPS
                signals and other information sent by your mobile device on
                which the Company application is installed and activated. These
                features cannot be provided without utilizing this technology.
              </Text>
            </View>

            <View>
              <Text style={styles.terms}>
                (I) Company uses your ZIP code information to create a detailed
                location when using the Service.&nbsp;&nbsp;Company uses this
                history to offer the Service to you, to improve the quality of
                the Service it offers to you and&nbsp;all of its users and to
                improve the accuracy of its data. This history is associated
                with your account. This history is retained by Company&nbsp;for
                a limited period of time and in accordance with the Privacy
                Policy.&nbsp;&nbsp;
              </Text>
            </View>

            <View>
              <Text style={styles.terms}>
                (II) Company allows you to use the Service whether or not you
                choose to verify your email. Company will still link all of your
                information with your account and a unique identifier generated
                by Company in accordance with the Privacy Policy. Note that in
                order to access certain features of the Service (for example
                locator, saved reports, filing an accident, uploading reports)
                you will need to set up an account.
              </Text>
            </View>

            <View>
              <Text style={styles.terms}>
                The Internet connection required to use the Service, and any
                associated charges (e.g. mobile data expenses) incurred by your
                use of the Service, are your exclusive responsibility and made
                solely at your expense. Transmitting and receiving real-time
                updates to and from the Service, requires an online (e.g. Wi-Fi,
                3G, 4G) connection between your cellular device and the
                Internet. The expenses of such connection are
                as&nbsp;prescribed&nbsp;by the agreement between you and your
                communication service provider (such as your cellular company),
                and according to its applicable terms of payment.
              </Text>
            </View>

            <View>
              <Text style={styles.terms}>
                Free Software. The Service utilizes Software for map displays,
                phone features, and UI. With respect to some cellular telephone
                devices running the Software, the Software is a free-software.
                In such cases you may redistribute the Software or modify it in
                accordance with the GNU General Public License as published by
                the Free Software Foundation, whether it is version 2.0 of the
                license or any later version of your choice. For further
                information, see the GNU General Public License. The Service,
                its database,&nbsp;Company&#39;s&nbsp;trademarks, the design of
                the maps of the Service and the voice files integrated in the
                Software &ndash; all are not free-software.
              </Text>
            </View>

            <View>
              <Text style={styles.terms}>
                Privacy.&nbsp;&nbsp;&nbsp;Your privacy is important to us. While
                using the Service, personal information may be provided
                by&nbsp;you&nbsp;or collected by Company as detailed in our
                Privacy Policy. The Privacy Policy explains our practices
                pertaining to the use of&nbsp;your&nbsp;personal information and
                we ask that you read such Privacy Policy carefully. By accepting
                these Terms, you hereby acknowledge and agree to the collection,
                storage and use of your personal information by Company, subject
                to this section, the Privacy Policy and any applicable laws and
                regulation.
              </Text>
            </View>

            <View>
              <Text style={styles.h2}>WHAT IS THE SERVICE</Text>
            </View>

            <View>
              <Text style={styles.terms}>
                The Service allows consumers and/or drivers to locate
                Certified-Recognized Collision Repair Facilities and gives them
                the ability to file an accounting of their accident for their
                own record.&nbsp;The Service is provided mainly through the
                Software.
              </Text>
            </View>

            <View>
              <Text style={styles.h2}>THE LICENSE</Text>
            </View>

            <View>
              <Text style={styles.terms}>
                Company Service.&nbsp;&nbsp;Company hereby grants you a free of
                charge, non-exclusive, time-limited, non-transferable,
                non-sub-licensable, revocable license to use the Service
                (including the Software) for non-commercial purposes, subject to
                these Terms.
              </Text>
            </View>

            <View>
              <Text style={styles.h2}>USING THE SERVICE</Text>
            </View>

            <View>
              <Text style={styles.terms}>
                You may use the Service solely for private and personal
                purposes. You may not use the Service commercially. For example,
                you may not: (i) offer to third parties a service of your own
                that uses the Service; (ii) resell the Service; (iii) offer to
                rent or lease the Service; or (iv) offer the Service to the
                public via communication or integrate it within a service of
                your own, without the prior written consent of Company. For
                clarity, the examples listed above are made for illustrative
                purposes only; they do not constitute an exhaustive list of
                restricted activities involving the Service.
              </Text>
            </View>

            <View>
              <Text style={styles.terms}>
                You may not copy, print, save or otherwise use data from the
                Site or the Service&#39;s database. This clause does not limit
                the use of the database as intended by the Software and for the
                purposes of private and personal use of the Service.
              </Text>
            </View>

            <View>
              <Text style={styles.terms}>
                When using the Service or the Site you may not engage in
                scraping, data mining, harvesting, screen scraping, data
                aggregating, and indexing. You agree that you will not use any
                robot, spider, scraper or other automated means to access the
                Site or the Service&rsquo;s database for any purpose without the
                express prior written permission of Company.
              </Text>
            </View>

            <View>
              <Text style={styles.terms}>
                The Software may not be used in any way that is not expressly
                permitted by these Terms.
              </Text>
            </View>

            <View>
              <Text style={styles.h2}>USE RESTRICTIONS</Text>
            </View>

            <View>
              <Text style={styles.terms}>
                There are certain&nbsp;types of conduct that are strictly
                prohibited on the Service. Please read the following
                restrictions carefully. Your failure to comply with the
                provisions set forth below may result
                (at&nbsp;Company&#39;s&nbsp;sole discretion) in the termination
                of your access to the Service and may also expose you to civil
                and/or criminal liability.
              </Text>
            </View>

            <View>
              <Text style={styles.terms}>
                You may not, whether yourself or through any other means or
                person: (i) copy, modify, adapt, translate, reverse engineer,
                decompile, or disassemble any portion of the Content included in
                the Service and/or Site, or in any way or publicly display,
                perform, or distribute them; (ii) make any use of the Content on
                any other website or networked computer environment for any
                purpose, or replicate or copy the Content without
                Company&rsquo;s prior written consent; (iii) create a browser or
                border environment around the Content (e.g. no frames or inline
                linking); (iv) interfere with or violate any third party or
                other user&#39;s right to privacy or other rights, including
                copyrights and any other intellectual property rights of others,
                or harvest or collect personal information about visitors or
                users of the Service and/or Site without their express consent,
                including using any robot, spider, site search or retrieval
                application, or other manual or automatic device or process to
                retrieve, index, or data-mine; (v) defame, abuse, harass, stalk,
                threaten, or otherwise violate the legal rights of others,
                including others&rsquo; copyrights, and other intellectual
                property rights; (vi) transmit or otherwise make available in
                connection with the Service and/or Site any virus, worm, Trojan
                Horse, time bomb, web bug, spyware, or any other computer code,
                file, or program that may or is intended to damage or hijack the
                operation of any hardware, software, or telecommunications
                equipment, or any other actually or potentially harmful,
                disruptive, or invasive code or component; (vii) interfere with
                or disrupt the operation of the Service and/or Site, or the
                servers or networks that host the Service and/or Site or make
                the Service and/or Site available, or disobey any requirements,
                procedures, policies, or regulations of such servers or
                networks; (viii) sell, license, or exploit for any commercial
                purposes any use of or access to the Content and/or the Service
                and/or Site; (ix) frame or mirror any part of the Service and/or
                Site without Company&rsquo;s prior express written
                authorization; (x) create a database by systematically
                downloading and storing all or any of the Content from the
                Service and/or Site; (xi) forward any data generated from the
                Service and/or Site without the prior written consent of
                Company; (xii) transfer or assign your Service accounts&#39;
                password, even temporarily, to a third party; (xiii) use the
                Service and/or Site for any illegal, immoral or unauthorized
                purpose; (xiv) use the Site, the Service, or the Content for
                non-personal or commercial purposes without Company&rsquo;s
                express prior written consent; or (xv) infringe or violate any
                of these Terms.
              </Text>
            </View>

            <View>
              <Text style={styles.h2}>TERMINATION OF USE OF THE SERVICE</Text>
            </View>

            <View>
              <Text style={styles.terms}>
                You may terminate your use of the Service at any time and for
                whatever reason. You are not obligated to advise Company of such
                termination. However, if you would also like for Company to
                delete your Company account and your personal information
                contained in the account, please contact
                appsupport@assuredperformance.net.&nbsp;&nbsp;On receiving such
                a request, Company will use reasonable efforts to delete such
                information, however please note that your information may be
                retained on our back-up systems for some time.
              </Text>
            </View>

            <View>
              <Text style={styles.terms}>
                Company retains the right to block your access to the Service
                and discontinue your use of the Service, at any time and for any
                reason Company deems appropriate, at its sole and absolute
                discretion.
              </Text>
            </View>

            <View>
              <Text style={styles.terms}>
                ALWAYS BE AWARE OF THE ROAD AND CONDITIONS AROUND YOU. WE ARE
                NOT RESPONSIBLE FOR YOU, OR ANYBODY ELSES WELL-BEING USING THE
                APPLICATION OR A BYSTANDER OF USER USING APPLICATION. USE OF
                BODY SHOP LOCATOR IS PERMITTED BY ASSURED PERFORMANCE. ASSURED
                PERFORMANCE IS NOT LIABLE FOR ANY DAMAGES, COSTS, FINANCIALLY,
                NON FINANCIALLY, EMOTIONAL, OR PHYSICAL, BY THIRD PARTY BODY
                SHOPS, ROAD CONDITIONS, OTHER DRIVERS, BY-STANDER, AND/OR
                DRIVING COLLISIONS.
              </Text>
            </View>

            <View>
              <Text style={styles.h2}>COPYRIGHT</Text>
            </View>

            <View>
              <Text style={styles.terms}>
                All intellectual property rights in and to the Site, the Service
                and its database, including copyrights, trademarks, industrial
                designs, patents and trade secrets &ndash; are either the
                exclusive property of Company or its affiliates or are
                exclusively licensed to Company.
              </Text>
            </View>

            <View>
              <Text style={styles.terms}>
                "Company," the Company logo, and other trade and/or service
                marks are the property of Company or its affiliates and you may
                not use such logos or marks for any purpose that is not
                expressly authorized in these Terms without the prior written
                consent of Company.
              </Text>
            </View>

            <View>
              <Text style={styles.terms}>
                The design, trade dress, and the &lsquo;look and feel&rsquo; of
                the maps of the Site and the Service are protected works under
                applicable copyright laws and Company and its affiliates retain
                all intellectual property rights in them. The Software license
                granted to you in these Terms does not extend to or include a
                license to use the maps displayed on the Software or any mark,
                indicator, logo or notation embedded in the maps that are
                displayed on the Software. You may not copy or print more than
                one copy of any data or material appearing on the Site.
              </Text>
            </View>

            <View>
              <Text style={styles.terms}>
                Company may protect the Service by technological means intended
                to prevent unauthorized use of the Service. You undertake not to
                circumvent these means. Without derogating&nbsp;from
                Company&#39;s&nbsp;rights under these Terms or under any
                applicable law, you are advised that any attempted or actual
                infringement of this provision will result in the termination of
                all your rights under these Terms. If you circumvent any of the
                means taken by Company to protect the Service from unauthorized
                use, you must immediately cease any and all use of the Service,
                and you undertake to do so.
              </Text>
            </View>

            <View>
              <Text style={styles.h2}>
                LIMITATION OF LIABILITY AND WARRANTY
              </Text>
            </View>

            <View>
              <Text style={styles.terms}>
                COMPANY PROVIDES THE SERVICE AND CONTENT INCLUDED THEREIN FOR
                USE ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS.
                THEY CANNOT BE CUSTOMIZED TO FULFILL THE NEEDS OF EACH AND EVERY
                USER. WE HEREBY DISCLAIM ALL WARRANTIES AND REPRESENTATIONS,
                EITHER EXPRESS OR IMPLIED, WITH RESPECT TO THE SERVICE,
                INCLUDING, WITHOUT LIMITATION, ANY WARRANTIES OF MERCHANTABILITY
                AND FITNESS FOR A PARTICULAR PURPOSE, FEATURES, QUALITY,
                NON-INFRINGEMENT, TITLE, COMPATIBILITY, PERFORMANCE, SECURITY OR
                ACCURACY.
              </Text>
            </View>
            <View>
              <Text style={styles.terms}>
                You agree and acknowledge that you assume full, exclusive and
                sole responsibility for the use of and reliance on the Service,
                and you further agree and acknowledge that your use of or
                reliance on the Service is made entirely at your own risk. You
                further acknowledge that it is your responsibility to comply
                with all applicable laws (including traffic laws) while using
                the Service.
              </Text>
            </View>
            <View>
              <Text style={styles.terms}>
                THE INFORMATION PROVIDED BY THE SERVICE IS NOT INTENDED TO
                REPLACE THE INFORMATION PRESENTED ON THE ROAD (TRAFFIC LIGHTS,
                TRAFFIC SIGNS, POLICE PERSON, ETC.) IN THE EVENT THAT THE
                INFORMATION PRESENTED ON THE ROAD INSTRUCTS DIFFERENTLY THAN THE
                SERVICE, YOU MUST NOT RELY ON THE SERVICE.
              </Text>
            </View>

            <View>
              <Text style={styles.terms}>
                Company exerts efforts to provide you with a high quality and
                satisfactory service. However, we do not warrant that the
                Service will operate in an uninterrupted or error-free manner,
                or that it will always be available or free from all harmful
                components, or that it is safe, secured from unauthorized access
                to&nbsp;Company&#39;s&nbsp;computers, immune from damages, free
                of malfunctions, bugs or failures, including, but not limited to
                hardware failures, Software failures and Software communication
                failures, originating either in Company or any of its providers.
              </Text>
            </View>

            <View>
              <Text style={styles.terms}>
                COMPANY, INCLUDING ITS OFFICERS, DIRECTORS, SHAREHOLDERS,
                EMPLOYEES, SUB-CONTRACTORS AND AGENTS WILL NOT BE LIABLE FOR ANY
                DIRECT, INDIRECT, INCIDENTAL OR CONSEQUENTIAL DAMAGE, OR ANY
                OTHER DAMAGE, AND/OR LOSS (INCLUDING LOSS OF PROFIT AND LOSS OF
                DATA), COSTS, EXPENSES AND PAYMENTS, EITHER TORTIOUS,
                CONTRACTUAL, OR IN ANY OTHER FORM OF LIABILITY, ARISING FROM, OR
                IN CONNECTION WITH THE USE OF, OR THE INABILITY TO USE THE
                SERVICE, OR FROM ANY FAILURE, ERROR, OR BREAKDOWN IN THE
                FUNCTION OF THE SERVICE, OR FROM ANY FAULT, OR ERROR MADE BY OUR
                STAFF OR ANYONE ACTING ON ITS BEHALF, OR FROM YOUR RELIANCE ON
                THE CONTENT OF THE SERVICE, INCLUDING, WITHOUT LIMITATION,
                CONTENT ORIGINATING FROM THIRD PARTIES, OR FROM ANY
                COMMUNICATION WITH THE SERVICE, OR WITH OTHER USERS ON OR
                THROUGH THE SERVICE, OR FROM ANY DENIAL OR CANCELLATION OF YOUR
                USER ACCOUNT, OR FROM RETENTION, DELETION, DISCLOSURE AND ANY
                OTHER USE OR LOSS OF YOUR CONTENT ON THE SERVICE. IN ANY EVENT,
                YOUR SOLE REMEDY WILL BE LIMITED TO CORRECTING SUCH ERRORS, OR
                MALFUNCTIONS, IN LIGHT OF THE RELEVANT CIRCUMSTANCES.
              </Text>
            </View>

            <View>
              <Text style={styles.h2}>BREACH AND INDEMNITY</Text>
            </View>
            <View>
              <Text style={styles.terms}>
                Without infringing on any applicable law, you agree to indemnify
                and hold harmless Company and its employees, officers, directors
                and agents, as well as all third party advertisers of Ads from
                and against all claims, damages, expenses, losses and
                liabilities that arise as a result of your violation of these
                Terms. In view of the fact that the Service is provided to you
                free-of-charge, this indemnity is intended to cover all
                expenses, payments, loss, loss of profits or any other damages,
                direct or indirect, monetary or non-monetary, incurred by
                Company, its employees, officers, directors or agents as a
                result of your violation of the Terms, including but not limited
                to legal expenses and attorney fees.
              </Text>
            </View>
            <View>
              <Text style={styles.h2}>PRIVACY</Text>
            </View>
            <View>
              <Text style={styles.terms}>
                Company respects your privacy during your use of the Software
                and the Service. Our updated privacy policy pertaining to the
                Software is readily accessible at
                http://app.collisioncare.org/?page=tos and is an integral part
                of these Terms. Since the privacy policy is subject to periodic
                updates, it is recommended that you periodically review the
                policy for updates.
              </Text>
            </View>

            <View>
              <Text style={styles.h2}>
                MODIFICATIONS TO THE SERVICE AND SOFTWARE
              </Text>
            </View>
            <View>
              <Text style={styles.terms}>
                Company may, either partially or in its entirety and without
                being obligated to provide prior notice &ndash; modify, adapt or
                change the Software, the Service&#39;s features, the user
                interface and design, the extent and availability of the
                contents in the Service and any other aspect related to the
                Service. You will have no claim, complaint or demand against
                Company for applying such changes or for failures incidental to
                such changes.
              </Text>
            </View>

            <View>
              <Text style={styles.h2}>TERMINATION OF SERVICE</Text>
            </View>
            <View>
              <Text style={styles.terms}>
                Company may, at any time, terminate the provision of the Service
                in its entirety or any part thereof, temporarily or permanently,
                at its sole discretion.
              </Text>
            </View>

            <View>
              <Text style={styles.h2}>MODIFICATIONS OF THESE TERMS</Text>
            </View>
            <View>
              <Text style={styles.terms}>
                Company may modify these Terms from time to time. If fundamental
                changes are introduced, a notice will be posted in the updated
                version of the Software as well as on the Service&#39;s home
                page on the Site. Your continued use of the Service after the
                Terms have been modified signifies your assent to the updated
                Terms. If you dissent to the updated Terms or to any term within
                them, you must discontinue all further use of the Software.
              </Text>
            </View>

            <View>
              <Text style={styles.h2}>GOVERNING LAW AND JURISDICTION</Text>
            </View>
            <View>
              <Text style={styles.terms}>
                These Terms, the Software and the Service will be governed
                solely by the laws of the State of California, without giving
                effect to any conflicts of law principles. Any dispute, claim or
                controversy arising out of, connected with or relating to these
                Terms, the Software and the Service, will be under the exclusive
                jurisdiction of the competent court in the County of Orange,
                State of California.
              </Text>
            </View>

            <View>
              <Text style={styles.h2}>ASSIGNMENT OF RIGHTS</Text>
            </View>
            <View>
              <Text style={styles.terms}>
                You may not assign or transfer your rights in and to the
                Service, without the prior written consent of Company. Company
                may assign its rights in and to the Service to a third party at
                its sole and absolute discretion, provided that the third party
                undertakes&nbsp;Company&#39;s obligations to you under these
                Terms.
              </Text>
            </View>

            <View>
              <Text style={styles.h2}>NO LEGAL RELATIONSHIP</Text>
            </View>
            <View>
              <Text style={styles.terms}>
                These Terms of Use and your use of the Service, including the
                submission of Content onto the Service, do not, and shall not be
                construed as creating any relationship, partnership, joint
                venture, employer-employee, agency, or franchisor-franchisee
                relationship in any way and of any kind between the parties
                hereto. Your use of the Service is intended for your enjoyment
                and benefit and the provision of the Service to you (subject to
                your compliance with these Terms) constitutes the sole and
                sufficient consideration that you are entitled to receive for
                any Content or other contributions you have made to the Company
                Service.
              </Text>
            </View>

            <View>
              <Text style={styles.h2}>CONTACT US</Text>
            </View>
            <View>
              <Text style={styles.terms}>
                You may contact us concerning any question about the Service,
                through the channels listed through the &quot;Contact&quot; page
                on the Site (web address:
                http://app.collisioncare.org/?page=contact). We will make our
                best efforts to address your inquiry promptly.
              </Text>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
    backgroundColor: colors.blue01
  },
  container: {
    padding: 10,
    marginTop: 80,
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  terms: {
    margin: 10,
    color: colors.beige
  },
  h2: {
    margin: 10,
    color: "#97C0B7",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});
