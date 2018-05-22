import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../../styles/colors";

export default class Document extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={[styles.row, styles.bold]}>
            Your Rights as a Consumer
          </Text>
          <Text style={styles.row}>
            As a consumer of automotive collision repair, you have a number of
            rights which, if exercised, could better ensure that your vehicle
            will be repaired in a proper, complete and safe manner. Please
            consider the following, this information is provided by Assured
            Performance, a non-profit consumer advocacy organization, as a
            public service to motorists.
          </Text>
          <Text style={[styles.row, styles.bold]}>
            1. Choosing an Auto Body Shop
          </Text>
          <Text style={styles.row}>
            Choosing the body shop where your vehicle will be repaired is an
            important decision, and in most cases, you have the right to make
            that decision. Not all shops are alike, however, when it comes to
            having properly trained technicians and the equipment and facilities
            needed to fix your vehicle right, so making a well informed choice
            is key. Your insurance company may suggest you use one of its
            "direct-repair facilities" - these are shops with which the insurer
            has a contractual agreement, including both dealership and local
            independent shops. These shops may not have the proper tools,
            equipment, and training necessary to fix your vehicle. Remember, the
            body shop is fixing YOUR vehicle for YOU, and it's important you're
            comfortable with the shop you choose. If you're making an insurance
            claim, your insurer pays the bill, but most states prohibit the
            insurer from requiring you use a particular shop-that means,
            ultimately, no matter what you hear, the body shop is YOUR CHOICE.
          </Text>
          <Text style={[styles.row, styles.bold]}>
            2. Choosing Replacement Parts
          </Text>
          <Text style={styles.row}>
            As a consumer, you have the right to request that your vehicle be
            repaired only with Original Equipment (OE) collision replacement
            parts. These are the same parts that your vehicle manufacturer
            distributes to ensure proper fit, function, and most importantly,
            safety. Two factors influence whether your request will be honored:
            your insurance policy limitations and local (state) laws and
            regulations regarding collision repair.
          </Text>
          <Text style={[styles.row, styles.bold]}>
            Insurance Policy Limitations
          </Text>
          <Text style={styles.row}>
            Prior to being involved in an accident, check your policy to see
            what allowances may, or may not be, made for certain part types.
            Some policies may allow for OE parts in all circumstances, while
            others may allow for OE parts depending on the age of the vehicle.
            Some may specifically call for use of parts that are "like kind and
            quality," usually indicating salvage parts. In other cases,
            insurance companies may offer two auto policies; one that specifies
            that only OE parts be used, and another specifying the use of only
            alternative parts. In addition, there may be policies available
            through a plan endorsed by your vehicle manufacturer, which assures
            OE parts for that brand of vehicle. Find out before you buy!
          </Text>
          <Text style={[styles.row, styles.bold]}>
            State Laws and Regulations
          </Text>
          <Text style={styles.row}>
            Most states require repair shops and/or insurers to disclose to
            their customers when something other than OE parts will be used,
            usually as part of the estimating process. Far fewer states-about a
            quarter-also require shops and/or insurers to get your consent
            before using non-OE parts. These laws and regulations vary greatly,
            however, and most come with time limits-such as two years/30,000
            miles-or other restrictions. There also are several states with no
            disclosure or consent rules currently in place for collision repair.
            Protect your family and your vehicle investment, and know your
            rights BEFORE YOUR VEHICLE IS REPAIRED. Check with your local
            collision or auto body repair associations regarding the collision
            repair-related laws and regulations in your state-a quick Internet
            search should help you find them. Make sure the shop of your
            choosing reviews the parts to be used in detail prior to any repairs
            being starting. Insist on genuine OEM replacement parts.
          </Text>
          <Text style={[styles.row, styles.bold]}>
            3. Do I Need More Than One Estimate?
          </Text>
          <Text style={styles.row}>
            No, by law you are not required to obtain even one estimate.
            Consumers should select a Certified- Recognized repair facility they
            are comfortable with and inform their insurance company of their
            choice.The insurer must assess the damages and negotiate with the
            shop.
          </Text>
          <Text style={[styles.row, styles.bold]}>
            4. Can My Insurance Company Authorize a Body Shop To Start Repairs
            Without My Consent?
          </Text>
          <Text style={styles.row}>
            NO... only the vehicle owner may authorize repairs.
          </Text>
          <Text style={[styles.row, styles.bold]}>
            5. Qualified Auto Body Shops
          </Text>
          <Text style={styles.row}>
            Not all shops are the same.Highly technical vehicle design,
            electronics, crash avoidance and the like are now manufactured into
            ALL automobiles.Industry data shows only 5- 7 % of body shops are
            properly qualified to repair advanced vehicles, from 2010 and up.Ask
            shops you are considering to show you their current credentials from
            YOUR vehicle manufacturer, which indicate they are certified to
            properly repair your vehicle.
          </Text>
          <Text style={[styles.row, styles.bold]}>
            6. Who is Responsible for the Guarantee of Workmanship and Safety of
            my Automobile Repairs... the Insurance Company or the Body Shop?
          </Text>
          <Text style={styles.row}>
            The body shop.Your insurance company is not accepting the liability
            for the quality and safety of your vehicle's repair. Therefore, you
            and you alone must control the fate of your vehicle's repair by
            choosing a proper facility that is adequately trained and equipped
            to restore your vehicle to its pre- accident condition.You have the
            legal right to do so.Some insurers indicate they will guarantee the
            work of their in -network providers.
          </Text>
          <Text style={[styles.row, styles.bold]}>
            7. Do All Body Shops Guarantee Their Work?
          </Text>
          <Text style={styles.row}>
            No.Prior to any repairs being started ask to see a written copy of
            the shops guarantee and review it with them so you completely
            understand the terms and conditions.
          </Text>
          <Text style={[styles.row, styles.bold]}>
            8. Notifying Your Insurance Company
          </Text>
          <Text style={styles.row}>
            If you decide to use your insurance company or the other parties'
            insurance company it is best to notify them prior to any repairs
            being started and inform them of the shop of your choice. The
            insurer may dispatch an adjuster to inspect your vehicles damages
            before repairs can begin. Some situations may require temporary
            repairs or towing to get your vehicle back home or to a body shop,
            those costs should be reimbursed by the paying insurance company.
          </Text>
          <Text style={[styles.row, styles.bold]}>
            9. The Right to a Safe, Properly Repaired Vehicle
          </Text>
          <Text style={styles.row}>
            Everyone deserves to drive or ride in a safely repaired vehicle; one
            that will perform properly in the event of a subsequent
            collision.But don't leave safety to chance. Ask questions about the
            parts that will be used, and how your car will be repaired.Ask about
            the technicians' training and if the shop is "certified" or
            "recognized" within the collision repair community. You have rights,
            but rights must be exercised. Get involved in the repair of your
            vehicle.
          </Text>
          <Text style={[styles.row, styles.bold]}>
            10. Inspect the Completed Repairs
          </Text>
          <Text style={styles.row}>
            Before paying for any final bills or your deductible, examine the
            final repairs to your vehicle.Make sure to allocate enough time to
            review your vehicle in detail against the shop work order or final
            bill.Make sure everything operates properly, that all accessories
            are working.A test drive may be in order if the vehicle suffered any
            structural or suspension damages.
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    //marginTop: 55,
    marginTop: 5,
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  row: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: colors.beige
  },
  bold: {
    fontWeight: "700",
    color: colors.beige
  }
});
