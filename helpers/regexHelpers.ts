export const regexHelper = (markup : String) => {
    //Tweak the header
    markup = markup.replace(/Community\sCoordinated\sModeling\sCenter\sDatabase\sOf\sNotifications\D\sKnowledge\D\sInformation\s\D\sCCMC DONKI\s\D/, 
        '***Community Coordinated Modeling Center Database Of Notifications, Knowledge, Information ( CCMC DONKI )***\n****'
    )
    markup = markup.replace(/Community\sCoordinated\sModeling\sCenter\sDatabase\sOf\sNotifications\D\sKnowledge\D\sInformation\s\DCCMC DONKI\D/, 
    '***Community Coordinated Modeling Center Database Of Notifications, Knowledge, Information ( CCMC DONKI )***\n****'
)
    //Weaken top headers
    markup = markup.replace(/\D\D\sMessage\sType/, '#### Message Type')
    markup = markup.replace(/\D\D\sMessage\sIssue/, '#### Message Issue')
    markup = markup.replaceAll(/\D\D\sReport\sCoverage/g, '#### Report Coverage')

    //Remove time stamps:
    markup = markup.replaceAll(/T\d\d\W\d\d\W\d\dZ/g, "")
    markup = markup.replaceAll(/T\d\d\W\d\dZ/g, "")

    //Change time to "date":
    markup = markup.replaceAll(/time/gi, "date")
    //Remove disclaimer and weaken message ID
    markup = markup.replaceAll(/\D\D\sMessage\sID\D/g,'#### Message ID: ')
    markup = markup.replaceAll("Disclaimer: NOAA's Space Weather Prediction Center is the United States Government official source for space weather forecasts. This \"Experimental Research Information\" consists of preliminary NASA research products and should be interpreted and used accordingly.","\n****")
    console.log(markup)
    return markup
}