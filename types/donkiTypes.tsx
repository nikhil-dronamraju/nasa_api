export type donkiMessages = [String]
export type donkiMessageType = {
    messageType: String,
    messageID: String,
    messageURL: String,
    messageIssueTime: String,
    messageBody: String,
}
export type ParamObjects = {
    params : {String : String}
}
export type Paths = [ParamObjects]