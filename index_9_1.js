// This is just a sample script. Paste your real code (javascript or HTML) here.
var restify = require('restify');
var builder = require('botbuilder');
var emoji = require('node-emoji')
var fs = require('fs');
var util = require('util');
var request = require('request');
var cheerio = require('cheerio');
var nodemailer = require('nodemailer');
var net = require('net');
var dateFormat = require('dateformat');
var moment = require('moment-timezone');
var MongoClient = require('mongodb').MongoClient;
//mongo for ITSupport and WMS

var url = "mongodb://fplmongodb:0PpoJZCtQJJi6ficNyLHYkK8ywZY8qumIwGp9aXl3sl6zBIemxVEPOJL2ldblFpT5Gtp1Q3lPd7BgCp68odWUg==@fplmongodb.documents.azure.com:10255/DB?ssl=true&sslverifycertificate=false";
//var url ="mongodb://fpldata:cDlCyxjYiLoyhFfo43VJ2wyn6588INqPpJWFIGL2FHm1SZ6vA3XBNTIfzeiW4RIQTZTMNBfjYqiao1BmP0ahCw==@fpldata.documents.azure.com:10255/DB?ssl=true&sslverifycertificate=false"

// Setup Restify Server
var server = restify.createServer();

server.listen(process.env.port || process.env.PORT || 1337, function() {   //1337
    try {
        console.log('%s listening to %s', server.name, server.url);
    } catch (err) {
        console.log("Server already in Use" + err);
    }

});

// Create chat connector for communicating with the Bot Framework Service
// nidhi
/* var connector = new builder.ChatConnector({
	appId: "6d711666-6108-423a-b62c-cf5e3ce3c649",
	appPassword: "hibCHA023([wkadJGUG39])"
	//serviceUrl: 'https://smba.trafficmanager.net'
}); */

// FPL outlook
//var connector = new builder.ChatConnector({
//    appId: "f79112cd-78f9-4e73-82fd-a67d021b8e3e",
//    appPassword: "llhLBYJS603$)[darpNJ93-"
//    //serviceUrl: 'https://smba.trafficmanager.net'
//});
// chandra
//var connector = new builder.ChatConnector({
//	appId: "55be86b5-522d-4a06-ad2b-064a9c890f21",
//    appPassword: "ytAGKI420?+|agtwlPGC67:"
//});
//var connector = new builder.ChatConnector({
//    appId: "0bf54539-c93b-4e93-be7e-5d70559e8c92",
//    appPassword: "qcfpmCID810$nkMMHY52#$_"
//    //serviceUrl: 'https://smba.trafficmanager.net'
//});

// Sushmita's Credentials

//Password : qcfpmCID810$nkMMHY52#$_ 
//Name
//Application Id 
//0bf54539-c93b-4e93-be7e-5d70559e8c92 
//Name : WFBot 

// Sushmita
var connector = new builder.ChatConnector({
	appId: "0bf54539-c93b-4e93-be7e-5d70559e8c92",
    appPassword: "qcfpmCID810$nkMMHY52#$_"
});

// By Siva
//var connector = new builder.ChatConnector({
//    appId: "f79112cd-78f9-4e73-82fd-a67d021b8e3e",
//    appPassword: "llhLBYJS603$)[darpNJ93-"
//    //serviceUrl: 'https://smba.trafficmanager.net'
//});
//Bot Endpoint
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());
//LUIS Details
//luis chandra
//https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/aedbd1d8-9fdf-4e25-951f-b306573e871a?subscription-key=119b5859846d4c659760e215857a723d&verbose=true&timezoneOffset=0&q=
//var model = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/aedbd1d8-9fdf-4e25-951f-b306573e871a?subscription-key=119b5859846d4c659760e215857a723d&verbose=true&timezoneOffset=0&q=';
//var model = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/aedbd1d8-9fdf-4e25-951f-b306573e871a?subscription-key=119b5859846d4c659760e215857a723d&verbose=true&timezoneOffset=0&q='
// by Chandra
//var model = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/aedbd1d8-9fdf-4e25-951f-b306573e871a?subscription-key=119b5859846d4c659760e215857a723d&verbose=true&timezoneOffset=0&q='
// by Mukesh
/* var model = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/e7b1b926-4d01-44a7-8235-535f8d38482e?subscription-key=119b5859846d4c659760e215857a723d&verbose=true&timezoneOffset=0&q=' */
//var model = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/c5d0e006-f308-4067-96f5-70ee720c7e36?subscription-key=55c42c8ffcd24e898a7623506ccd18ea&verbose=true&timezoneOffset=0&q='
//https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/aedbd1d8-9fdf-4e25-951f-b306573e871a?subscription-key=119b5859846d4c659760e215857a723d&verbose=true&timezoneOffset=0&q=
// By Sushmita
/* var model = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/883dcc5b-b502-4f62-85de-b9281d900444?subscription-key=2e16c4635d1d4926a4a5472c32bdcb1c&verbose=true&timezoneOffset=0&q='
 */
//var model ='https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/c0ffe2e6-1486-4fa1-8566-56d0e290e5db?subscription-key=2e16c4635d1d4926a4a5472c32bdcb1c&verbose=true&timezoneOffset=0&q='
/* var model = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/c0ffe2e6-1486-4fa1-8566-56d0e290e5db?subscription-key=4bd3b5cc82cc4835ac5e1d3c343b600c&verbose=true&timezoneOffset=0&q='
 */
// paid luis by siva
/* var model = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/ca1c85e6-2574-4f7f-83ac-1cc86731c779?subscription-key=6538d2cf46cb4185ba71872eae6a04d9&verbose=true&timezoneOffset=0&q=' */
// paid luis by siva for small integrated appCodeName
var model = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/79670c24-b3e7-4223-8c3e-c6502f1227e0?subscription-key=7ff4b9f23cf24e278de904380847811f&verbose=true&timezoneOffset=0&q='
// This Url can be obtained by uploading or creating your model from the LUIS portal: https://www.luis.ai/
// for fixing default message issue
var recognizer = new builder.LuisRecognizer(model).onEnabled((context, callback) => {
    var enabled = context.dialogStack().length === 0;
    callback(null, enabled);
});
bot.recognizer(recognizer);
// for sending mail
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'aimcognitivegurgaon@gmail.com', // generated ethereal user
        pass: 'Gurgaon@2016' // generated ethereal password
    }
});
// random prompt testing sachida

var randnum = require('random-number-between');

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// qna for smalltalk

var QnAClient = require("/home/cts565637/FPL/ITsupport/lib/client.js");

var qnaClient = new QnAClient({
    knowledgeBaseId: '9129e861-4d4e-4d96-bec3-6e9e15a56c2a',
    subscriptionKey: '45bf530d13f14afab04d29b4dbc54f18'
    // Optional field: Score threshold
});

//####################################################################

// firewall cards

var new_firewall_card = {
    'contentType': 'application/vnd.microsoft.card.adaptive',
    'content': {
        '$schema': 'http://adaptivecards.io/schemas/adaptive-card.json',
        'type': 'AdaptiveCard',
        'version': '1.0',
        'body': [{
            'type': 'Container',
            'speak': '<s>Hello!</s><s>Please fill out the following form</s>',
            'items': [{
                'type': 'ColumnSet',
                'columns': [{
                        'type': 'Column',
                        'size': 'auto',
                        'items': [{
                            'type': 'Image',
                            'url': 'https://www.brandeps.com/logo-download/F/Florida-Power-&-Light-01.png',
                            'size': 'medium',
                            'style': 'person'
                        }]
                    },
                    {
                        'type': 'Column',
                        'size': 'stretch',
                        'items': [{
                                'type': 'TextBlock',
                                // 'text': 'Hello!',
                                'weight': 'bolder',
                                'isSubtle': true
                            },
                            {
                                'type': 'TextBlock',
                                'text': 'You are creating a new firewall request.',
                                'wrap': true
                            }
                        ]
                    }
                ]
            }]
        }],
        'actions': 
        [
            // Firewall Request Form
            {
                'type': 'Action.ShowCard',
                'title': 'Firewall Request Form',
                'card': {
                    'type': 'AdaptiveCard',

                    'body': [
                    {
                        'type': 'TextBlock',
                        'weight': 'bolder',
                        'text': 'Source IP Address.'
                    }, 
                    {
                        'type': 'Input.Text',
                        'id': 'source_ip',
                        'speak': '<s>Please enter your Source IP Address</s>'
                    }, 
                    {
                        'type': 'TextBlock',
                        'weight': 'bolder',
                        'text': 'Source Port address.'
                    }, 
                    {
                        'type': 'Input.Number',
                        'id': 'source_port',
                        'speak': '<s>Please enter source port address</s>'
                    }, 
                    {
                        'type': 'TextBlock',
                        'weight': 'bolder',
                        'text': 'Destination IP Address.'
                    }, 
                    {
                        'type': 'Input.Text',
                        'id': 'destination_ip',
                        'speak': '<s>Please enter your Destination IP Address</s>'
                    }, 
                    {
                        'type': 'TextBlock',
                        'weight': 'bolder',
                        'text': 'Protocol Type.'
                    }, 
                    {
                        'type': 'Input.ChoiceSet',
                        'id': 'protocol_type',
                        'speak': '<s>Please choose your protocol type</s>',
                        "choices": [{
                            "title": "TCP",
                            "value": "TCP"
                        }, {
                            "title": "UDP",
                            "value": "UDP"
                        }]
                    }],
                    'actions': [
                    {
                        'type': 'Action.Submit',
                        'title': 'Validate',
                        'data': {
                          'type': 'newFirewallRequest'
                        }
                    },
                    {
                        'type': 'Action.Submit',
                        'title': 'Cancel',
                        'data': 
                        {
                            'type': 'cancel'
                        }
                    }
                    ]
                }
            }
            
        ]

    }
};



var existing_firewall_card = {
    'contentType': 'application/vnd.microsoft.card.adaptive',
    'content': {
        '$schema': 'http://adaptivecards.io/schemas/adaptive-card.json',
        'type': 'AdaptiveCard',
        'version': '1.0',
        'body': [{
            'type': 'Container',
            'speak': '<s>Hello!</s><s>Please fill out the following form</s>',
            'items': [{
                'type': 'ColumnSet',
                'columns': [{
                        'type': 'Column',
                        'size': 'auto',
                        'items': [{
                            'type': 'Image',
                            'url': 'https://www.brandeps.com/logo-download/F/Florida-Power-&-Light-01.png',
                            'size': 'medium',
                            'style': 'person'
                        }]
                    },
                    {
                        'type': 'Column',
                        'size': 'stretch',
                        'items': [{
                                'type': 'TextBlock',
                                //'text': 'Hello!',
                                'weight': 'bolder',
                                'isSubtle': true
                            },
                            {
                                'type': 'TextBlock',
                                'text': 'You are enquiring on existing firewall.',
                                'wrap': true
                            }
                        ]
                    }
                ]
            }]
        }],
        'actions': [
            // Firewall Request Form
            {
                'type': 'Action.ShowCard',
                'title': 'Firewall Rule Enquiry Form',
                'speak': '<s>Firewall Request</s>',
                'card': {
                    'type': 'AdaptiveCard',

                    'body': [{
                        'type': 'TextBlock',
                        'weight': 'bolder',
                        'text': 'Source IP'
                    }, {
                        'type': 'Input.Text',
                        'id': 'source_ip',
                        'speak': '<s>Please enter your Source IP Address</s>'
                    }, {
                        'type': 'TextBlock',
                        'weight': 'bolder',
                        'text': 'Source Port'
                    }, {
                        'type': 'Input.Number',
                        'id': 'source_port',
                        'speak': '<s>Please enter source port address</s>'
                    }, {
                        'type': 'TextBlock',
                        'weight': 'bolder',
                        'text': 'Destination IP'
                    }, {
                        'type': 'Input.Text',
                        'id': 'destination_ip',
                        'speak': '<s>Please enter your Destination IP Address</s>'
                    }, {
                        'type': 'TextBlock',
                        'weight': 'bolder',
                        'text': 'Protocol Type'
                    }, {
                        'type': 'Input.ChoiceSet',
                        'id': 'protocol_type',
                        'speak': '<s>Please choose your protocol type</s>',
                        "choices": [{
                            "title": "TCP",
                            "value": "TCP"
                        }, {
                            "title": "UDP",
                            "value": "UDP"
                        }]
                    }],
                    'actions': [
                        {
                            'type': 'Action.Submit',
                            'title': 'Validate',
                            'data': {
                              'type': 'existingFirewallRequest'
                            }
                        },
                   
                        {   'type': 'Action.Submit',
                            'title': 'Cancel',
                            'data': {
                              'type': 'cancel'
                            }

                        }
                    ]

                }
            }
        ]
    }
};

//*********************************************************

var feedback_form = {
	    'contentType': 'application/vnd.microsoft.card.adaptive',
    'content': {
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "type": "AdaptiveCard",
    "version": "1.0",
    "body": [
        {
            "type": "Container",
            "items": [
                {
                    "type": "TextBlock",
                    "text": "Feedback Form",
                    "weight": "bolder",
                    "size": "medium"
                },
                {
                    "type": "ColumnSet",
                    "columns": [
                        {
                            "type": "Column",
                            "width": "auto",
                            "items": [
                            ]
                        },
                        {
                            "type": "Column",
                            "width": "stretch"

                        }
                    ]
                }
            ]
        },
        {
            "type": "Container",
            "items": [
                {
                    "type": "TextBlock",
                    "text": "Please provide your feedback",
                    "wrap": true
                }
            ]
        }
    ],
    "actions": [
	        {
                        "type": "Action.Submit",
                        "title": "Not Interested",
                        "data": {
                        "type": "Not_Interested"
                        }
                    
        },
        {
            "type": "Action.ShowCard",
            "title": "Comment",
            "card": {
                "type": "AdaptiveCard",
                "body": [
                    {
                        "type": "Input.Text",
                        "id": "comment",
                        "isMultiline": true,
                        "placeholder": "Enter your comment"
                    }
                ],
                "actions": [
                    {
                        "type": "Action.Submit",
                        "title": "Submit",
						'data': {
                            'type': 'OK'
                        }
                    }
                ]
            }
        }
    ]
}

};
//************

// Conversation Start
bot.on('conversationUpdate', function(message) {
    if (message.membersAdded) {
        message.membersAdded.forEach(function(identity) {
            if (identity.id === message.address.bot.id) {
                bot.beginDialog(message.address, '/startup');
                console.log("conversaton")
            }
        });
    }
});

 bot.dialog('/startup', [
    function(session) {
    session.privateConversationData = {};
    /////////mukesh
     var now = new Date();
        var currentdate = dateFormat(now, "isoDateTime");
        //var currentday = dateFormat(now, "dddd");
        var jun = moment(currentdate);
        var datetime = jun.tz('America/New_York').format('dddd MMM DD YYYY hh:mm:ss A hh');
        console.log(datetime)
		var datetime1 = datetime.split(' ')
		var currentday = datetime1[0]  //saturday
		var mm = datetime1[5]			
        var time = datetime1[6]
         session.privateConversationData.time_of_day = datetime1[5]
        session.privateConversationData.time_digit = datetime1[6] 
		console.log(session.privateConversationData.time_digit, session.privateConversationData.time_of_day);
		if ((session.privateConversationData.time_of_day == 'AM') && ((session.privateConversationData.time_digit === "01") || (session.privateConversationData.time_digit === "02") || (session.privateConversationData.time_digit === "03") ||(session.privateConversationData.time_digit === "12"))) {
            session.send("Hi, Good Evening !! ");
        } else if ((session.privateConversationData.time_of_day == 'AM') && ((session.privateConversationData.time_digit === "04") || (session.privateConversationData.time_digit === "05") || (session.privateConversationData.time_digit === "06") || (session.privateConversationData.time_digit === "07") || (session.privateConversationData.time_digit === "08") || (session.privateConversationData.time_digit === "09") || (session.privateConversationData.time_digit === "10") || (session.privateConversationData.time_digit === "11"))) {
            session.send("Hi, Good Morning !! ");
        } else if ((session.privateConversationData.time_of_day == 'PM') && ((session.privateConversationData.time_digit === "01") || (session.privateConversationData.time_digit === "02") || (session.privateConversationData.time_digit === "03"))) {
            session.send("Hi, Good Afternoon !! ");
        } else if ((session.privateConversationData.time_of_day == 'PM') && ((session.privateConversationData.time_digit === "04") || (session.privateConversationData.time_digit === "05") || (session.privateConversationData.time_digit === "6") || (session.privateConversationData.time_digit === "7") || (session.privateConversationData.time_digit === "8") || (session.privateConversationData.time_digit === "9") || (session.privateConversationData.time_digit === "10") || (session.privateConversationData.time_digit === "11"))) {
            session.send("Hi, Good Evening !! ");
        }
        /* session.send("This is **Neeva** your Virtual Assistant. We will be providing you the following services.\n1. **WMS**\n2. **Firewall**\n3. **Outlook/Remote Access Support**");	
        session.send("Incase you want to come out of any services please type **Main Menu** \nTo end the conversation at any point type **Exit**")	;	
		session.beginDialog('/Loginbot'); */
		        //builder.Prompts.choice(session, "Welcome to FPL Intelligent Bot Services. Please choose one of the services", ['WMS', 'Firewall','Outlook/Remote Access\nSupport'], {
		        builder.Prompts.choice(session, "This is **Neeva** your Virtual Assistant. We will be providing you the following services.\n1. **WMS**\n2. **Firewall**\n3. **Outlook/Remote Access Support** \n\nIncase you want to come out of any services please type **Main Menu** \nTo end the conversation at any point type **Exit**. \nPlease choose one of the services", ['WMS', 'Firewall','Outlook/Remote Access\nSupport'], {
            retryPrompt: getString(),
            listStyle: builder.ListStyle.button,
            maxRetries: 2
        });
			
    },
	function(session, results) {
        if (results.response) {
            console.log('sfksdh', results.response)
            var selection = results.response.entity;
            // route to corresponding dialogs
            switch (selection) {
                case "WMS":

                    session.endDialog();
                    session.replaceDialog('/wmsinitiate');
                    break;
                case "Firewall":
                    //session.send(msg);
                    session.endDialog();
                    session.replaceDialog('/Firewall');
                    break;
                case "Outlook/Remote Access\nSupport":
					console.log('abc......nfm,n,mn,mn,mn,mnmn,n,,m508..........jhsdhkhaskhkhasdk.');
					//session.endDialog();
					session.beginDialog('/ITSupport');
                    break;
            }
        } else {
            session.endDialog();
            session.replaceDialog('/Greeting11');
        }
    }
]); 

//**********************************
/* bot.dialog('/Entryservice', [
    function(session, args, next) {
        //session.send("Let me look it up for you");
        console.log("#Inside Entryservice  Dialog");
        builder.Prompts.choice(session, "Please select below options which assist you better", ['WMS', 'Firewall', 'Outlook/Remote Access\nSupport'], {
            retryPrompt: getString(),
            listStyle: builder.ListStyle.button,
            maxRetries: 2
        });
    },
    function(session, results) {
        if (results.response) {
			//console.log("Entry",session, results)
            var selection = results.response.entity;
            // route to corresponding dialogs
            switch (selection) {
                case "WMS":

                    session.endDialog();
                    session.replaceDialog('/WMS');
                    break;
                case "Firewall":
                    //session.send(msg);
                    session.endDialog();
                    session.replaceDialog('/Firewall');
                    break;
                case "Outlook/Remote Access\nSupport":
                    session.endDialog();
                    session.replaceDialog('/ITSupport');
                    break;
            }
        } else {
            session.endDialog();
            session.replaceDialog('/Greeting11');
        }
    }
]); */

//**********************************

// LUIS: Greeting intent
bot.dialog('/Greeting', [
    function(session, args, next) {
        //session.send("Let me look it up for you");
        console.log("#Inside Greeting Intent Dialog");
        session.send("Hello!! ");
        builder.Prompts.choice(session, "Please choose  from  one of the services to assist you better:", ['WMS', 'Firewall', 'Outlook/Remote Access\nSupport'], {
            retryPrompt: getString(),
            listStyle: builder.ListStyle.button,
            maxRetries: 2
        });
    },
    function(session, results) {
        if (results.response) {
            var selection = results.response.entity;
            // route to corresponding dialogs
            switch (selection) {
                case "WMS":

                    session.endDialog();
                    session.replaceDialog('/WMS');
                    break;
                case "Firewall":
                    //session.send(msg);
                    session.endDialog();
                    session.replaceDialog('/Firewall');
                    break;
                case "Outlook/Remote Access\nSupport":
                    session.endDialog();
                    session.replaceDialog('/ITSupport');
                    break;
            }
        } else {
            session.endDialog();
            session.replaceDialog('/Greeting11');
        }
    }
]).triggerAction({
    matches: 'Greeting',
    intentThreshold:0.60
});


//
function getString() {
    //session.endDialog();
    console.log("i am in getString function");
    var rand = randnum(0, 5, 1);
    var retrymessage = ['Kindly select from below options only', 'Sorry its an invalid choice, request you select from below options only', 'Ohh you made a wrong selection, kindly select from below options only','Can you please try once More by selecting from below options', 'Hey, I think you selected an incorrect option, please select one of the following', 'Hey you made an incorrect choice, request you to select from below options only'];
    return retrymessage[rand];
};

//


//login ##################################

/* var login_card = {
            'contentType': 'application/vnd.microsoft.card.adaptive',
             'content': {
               '$schema': 'http://adaptivecards.io/schemas/adaptive-card.json',
               'type': 'AdaptiveCard',
               'version': '1.0',
               'body': [
                 {
                 'type': 'Container',
                  'speak': '<s>Hello!</s><s>Please fill LOGIN form</s>',
                   'items': [
                        {
                         'type': 'ColumnSet',
                           'columns': [
                                    {
                                'type': 'Column',
                                 
								 'size': 'auto',
                                    'items': [
                                        {
                                        'type': 'Image',
                                           'url': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb4_z6hZNadMLOUsJ67xXYI2cqGufzuBY1Fl-V0QAJ3cexiTOiLQ',
                                            'size': 'small'
                                            //,
                                              //'style': 'person'
                                            }
                                           ]
                                           },
                                          {
                                   'type': 'Column',
                                    'size': 'stretch',
                                    'items': [
                                      {
                                    'type': 'TextBlock',
                                    // 'text': 'Hello!',
                                      'weight': 'bolder',
                                       'isSubtle': true
                                        },
                                         {
                                       'type': 'TextBlock',
                                         'text': 'Please Confirm your Identity',
                                         'wrap': true
}]
}]
}]
}],
'actions': [
// Firewall Request Form
{
'type': 'Action.ShowCard',
'title': 'Authentication Form',
'speak': '<s>Firewall Request</s>',
'card': {
'type': 'AdaptiveCard',

                        'body': [
                                     {
                                     'type': 'TextBlock',
									 'weight': 'bolder',
                                      'text': 'SLID/Email'
                                        },{
                                'type': 'Input.Text',
                                 'id': 'SLID',
                                 'speak': '<s>Please specify the SLID ID.</s>',
                                //  'placeholder': 'Business Need',
                                     'style': 'text'
                                     }
                               
                           ],
                         'actions': [
                                 {
                                'type': 'Action.Submit',
                                 'title': 'LogIn',
                                 'speak': '<s>Login</s>',
                              //   'data': {
                                //  'type': 'firewallRequest'
//}
}
]

}}]

}
};
 */

/* bot.dialog('/Loginbot', function(session) {
console.log("*********************",session.privateConversationData.loginnumber);
var msg = new builder.Message(session).addAttachment(login_card);
console.log("session.message",session.message.value)
if (session.message && session.message.value) {
	console.log('hello');
    session.privateConversationData.SLID = session.message.value.SLID       
	console.log("****",session.message.value.SLID)
    
                	MongoClient.connect(url, function(err, db) {
          // assert.equal(null, err);
           var collection_auth = db.collection('authentication');
           console.log("Connected correctly to server authentication");
           collection_auth.findOne({
               "SLIDID": session.message.value.SLID,
//               "Password": session.message.value.Password
           }, function(err, document) {
				if (document) {
        	//console.log("document",document);
			    console.log("*******dssdfsdsd",session.privateConversationData.SLID);
					session.privateConversationData.Username = document.UserName			//username
					session.privateConversationData.ManagerName = document.ManagerName                                         
					session.privateConversationData.loginnumber = 1;
					console.log("hkshkhkhkhkhkhkhkhkhkhkhkhkhkj",session.privateConversationData.Username);
					session.send("Welcome!!"+"**"+session.privateConversationData.Username+"**");
					//session.send("Welcome!! " +'**'+session.privateConversationData.Username+'**');
					session.endDialog();
                    session.replaceDialog('/Entryservice');
					
				}
        else{
			session.privateConversationData.loginnumber = 0;
        	//console.log("docum*******ent",document);
			session.send("Sorry your Authenticaton fails. Please try again");
        }

               });

			db.close();
           });
               
                     return;
        }

session.send(msg);
}); */
//**************************
// qna for smalltalk function
bot.dialog('/SmallTalk', [
	function(session) {
		    console.log("In small talk intent route")
			console.log("757",session.privateConversationData.ques)
			session.privateConversationData.ques = 'undefined';
            session.beginDialog('/SmallTalkFunction');
	}
]).triggerAction({
	matches: 'SmallTalk',
	intentThreshold:0.60
	});	


bot.dialog('/SmallTalkFunction', [
    (session, args) => {
        // Post user's question to QnA smalltalk kb
        qnaClient.post({ question: session.message.text }, function (err, res) {
            if (err) {
                console.error('Error from callback:', err);
                session.send('Oops - something went wrong.');
                return;
            }

            if (res) {
                // Send reply from QnA back to user
                session.send(res);
            } else {
                // Put whatever default message/attachments you want here
                session.send('Hmm, I didn\'t quite understand you there. Care to rephrase?')
            }
        });
    }
]);

//######################

// ITSupport BOT

bot.dialog('/ITSupport', [
	function(session) {
			console.log("757",session.privateConversationData.ques)
			session.privateConversationData.ques = 'undefined';
		session.send("How may I help you with Outlook/Remote Access Support");
	    session.endDialog();
	}
]).triggerAction({
	matches: 'ITSUPPORT',
	intentThreshold:0.60
	});	
 
//#############################

//// Firewall BOT intent

bot.dialog('/Firewall', [
	function(session) {
//		console.log("*********************",session.privateConversationData.loginnumber);
		//if (session.privateConversationData.loginnumber === 1){
		session.beginDialog('/firewall_request');
/* 		}else{
		session.beginDialog('/Loginbot');
		//session.send("please Login")
		} */
	}
	
]).triggerAction({
matches: 'FIREWALL',
intentThreshold:0.60
});

//#############################

// for main menu Inent 

bot.dialog('/Main_Menu', [
	function(session) {
		//if (session.privateConversationData.loginnumber === 1){
		console.log('in main menu intent !!!!!!!!!!');

		  session.beginDialog('/Main_Menu_next');
/* 		}else{
		session.beginDialog('/Loginbot');
		//session.send("please Login")
		} */
		
	}	
]).triggerAction({
matches: 'Main_Menu',
intentThreshold:0.60
});

//#############################

// main menu flow next
bot.dialog('/Main_Menu_next', [
    function(session, args, next) {
        //session.send("Let me look it up for you");
        console.log("#Inside Greeting Intent Dialog");
        builder.Prompts.choice(session, "Welcome to Main Menu, Please choose  from  one of the services to assist you better:", ['WMS', 'Firewall', 'Outlook/Remote Access\nSupport'], {
            retryPrompt: getString(),
            listStyle: builder.ListStyle.button,
            maxRetries: 2
        });
    },
    function(session, results) {
        if (results.response) {
            var selection = results.response.entity;
            // route to corresponding dialogs
            switch (selection) {
                case "WMS":

                    session.endDialog();
                    session.replaceDialog('/WMS');
                    break;
                case "Firewall":
                    //session.send(msg);
                    session.endDialog();
                    session.replaceDialog('/Firewall');
                    break;
                case "Outlook/Remote Access\nSupport":
                    session.endDialog();
                    session.replaceDialog('/ITSupport');
                    break;
            }
        } else {
            session.endDialog();
            session.replaceDialog('/Greeting11');
        }
    }
]);

//########################

// for exit Intent

bot.dialog('/Exit', [
function(session) {
     console.log('in exit intent !!!!!!!!!!');
     session.endDialog();
		 session.replaceDialog('/Gettingfeedback');
	}
]).triggerAction({
matches: 'Exit',
intentThreshold:0.60
});

//#############################

// outlook intent 

bot.dialog('/outlook', [

    function(session) {
		      
/*       if(session.privateConversationData.loginnumber != 1){
			  session.send("Please login first")
			  session.beginDialog('/Loginbot');
		  }
		  else{ */
        builder.Prompts.choice(session, "Here is the most frequently searched Outlook Support FAQs. Please choose from the below options:", ['Share a calendar', 'Add a calendar', 'Type your question'], {
            retryPrompt: getString(),
            listStyle: builder.ListStyle.button,
            maxRetries: 2
        });

	//}
    },
    function(session, results) {
        if (results.response) {
            var selection = results.response.entity;
            // route to corresponding dialogs
            switch (selection) {
                case "Share a calendar":
                    session.replaceDialog('/ShareCalendar');
                    break;
                case "Add a calendar":
                    session.replaceDialog('/AddCalendar');
                    break;
                case "Type your question":
                    session.replaceDialog('/Re-EnterITSupport');
                    break;
            }
        } else {
            session.endDialog();
            session.replaceDialog('/Greeting11');
        }
    }
]).triggerAction({
    matches: 'outlook',
    intentThreshold:0.60
});



bot.dialog('/remoteaccess', [

    function(session) {
/*       console.log("*",session.privateConversationData.loginnumber,session.message.text)
      if(session.privateConversationData.loginnumber != 1){
			  session.send("Please login first")
			  session.beginDialog('/Loginbot');
		  }
		  else{ */
        builder.Prompts.choice(session, "Here is the most frequently searched Remote Access Support FAQs. Please choose from the below options:", ['Use Remote Desktop', 'Report a Lost Remote Access Token', 'Type your question'], {
            retryPrompt: getString(),
            listStyle: builder.ListStyle.button,
            maxRetries: 2
        });
	//}
    },
    function(session, results) {
        if (results.response) {
            var selection = results.response.entity;
            // route to corresponding dialogs
            switch (selection) {
                case "Use Remote Desktop":
                    session.replaceDialog('/UseRemoteDesktop');
                    break;
                case "Report a Lost Remote Access Token":
                    session.replaceDialog('/LostRemoteAccessToken');
                    break;
                case "Type your question":
                    session.replaceDialog('/Re-EnterITSupport');
                    break;
            }
        } else {
            session.endDialog();
            session.replaceDialog('/Greeting11');
        }
    }
]).triggerAction({
    matches: 'remoteaccess',
    intentThreshold:0.60
});



//negative_intent

bot.dialog('/Negative_Intent', [

    function(session, args, next) {
        builder.Prompts.choice(session, "We are extremely Sorry for inconvenience. Would you like to continue with our services", ['Yes', 'No'], {
            retryPrompt: getString(),
            listStyle: builder.ListStyle.button,
            maxRetries: 2
        });
    },
    function(session, results) {
        if (results.response) {
            var selection = results.response.entity;
            // route to corresponding dialogs
            switch (selection) {
                case "Yes":

                    session.replaceDialog('/Greeting');
                    break;
                case "No":
                    session.replaceDialog('/Endconversation');;
                    break;
            }
        } else {
            session.endDialog();
            session.replaceDialog('/Greeting11');
        }
    }
]).triggerAction({
    matches: 'Negative_Intent',
    intentThreshold:0.60
});

//reenteritsupport

bot.dialog('/Re-EnterITSupport', [
    function(session) {
        console.log('in itsupport');
					//console.log("1000",session.privateConversationData.ques)
			session.privateConversationData.ques = 'undefined';
			//console.log("1002",session.privateConversationData.ques)
        session.send("Please type Outlook/Remote Access Support related Query here ");
        session.endDialog();
    }
]);

//wms intent
bot.dialog('/WMS', [
	function(session) {
		//console.log("*********************",session.privateConversationData.loginnumber);
	//	if (session.privateConversationData.loginnumber === 1){
    session.beginDialog('/wmsloop');
/* 		}else{
			session.beginDialog('/Loginbot');
      		} */
	}
]).triggerAction({
	matches: 'WMS',
	intentThreshold:0.60
});

//wms loop
bot.dialog('/wmsloop', [function(session) {
    session.beginDialog('/wmsinitiate');
}]);


// wms subham

bot.dialog('/wmsinitiate', [
     function(session, args, next) {
         //console.log("on wmsinitiate",session)
         builder.Prompts.text(session, "How can I help you on WMS?");
     },
     function(session, result) {
     
         session.privateConversationData.questionMap = {
             'ShareCalendar':"Sharing Calendar", 
             'None':"Go back to Main Manu",
             'ITSUPPORT':"Outlook/Remote Service", 
             'help':"Go back to Main Menu", 
             'FIREWALL':"Firewall Service", 
             'remoteaccess':"Remote Access", 
             'outlook':"Outlook",
             'UseRemoteDesktop':"Remote Desktop", 
             'UnlockYourPassword':"Unlock Password", 
             'ReplaceHardToken':"Replacing Hard Token", 
             'TroubleshootRemoteAccessToken':"Troubleshoot Remote Access Token", 
             'Email_iPhone/iPad':"Email on iPhone/iPad", 
             'ConnectRemoteAccess':"Connecting Remote Access", 
             'Login':"Login Issues", 
             'Email_ iOS11':"Integrating Email on iOS11", 
             'LostRemoteAccessToken':"Lost Remote Access Token", 
             'firewall_request':"Firewall Service", 
             'AddCalendar':"Adding Calendar",			 
             'Main_Menu':"Main Menu",
			 'UserDown': "UserDown",
             'UserExcited1': "UserExcited1",
             'UserExcited2': "UserExcited2",
             'UserExcited3': "UserExcited3",
             'UserAnnoyed': "UserAnnoyed",
             'BotAnnoyed': "BotAnnoyed",
             'OutofScope': "OutofScope",
             'WellnessGreeting': "WellnessGreeting",
             'testing_bot': "testing_bot",
             'needs_advice': "needs_advice",
             'happy': "happy",
             'angry': "angry",
             'bye': "bye",
             'good': "good",			
			'bot_happy':'bot_happy',
			'user_happy':'user_happy',
			'bot_bad':'bot_bad',
			'appraisal_bad':'appraisal_bad',
			'appraisal_good':'appraisal_good',
			'answer_my_question':'answer_my_question',
			'bot_beautiful':'bot_beautiful',
			'bot_my_friend':'bot_my_friend',
             'about_bot': 'about_bot',
			 'SmallTalk':'SmallTalk',
             'WMS': "WMS"
         };
     
         console.log(session.message.text)
         var question = session.message.text;
         session.privateConversationData.ques = session.message.text
         //session.privateConversationData.ques=session.message.text
         jsonObject = JSON.stringify({
             "question": question,
             "top": 4
         });
         // console.log(jsonObject)
         request.post({
             headers: {
                 'Content-type': 'application/json',
                 'Ocp-Apim-Subscription-Key': '45bf530d13f14afab04d29b4dbc54f18',
                 'Content-Length': Buffer.byteLength(jsonObject, 'utf8')
             },
             url: 'https://westus.api.cognitive.microsoft.com/qnamaker/v2.0/knowledgebases/' + 'a851fd07-3e03-4deb-9050-83f995a13a5e' + '/generateAnswer',
             // method: 'POST',
             body: jsonObject
         }, function(error, response, body) {
             if (error) {
                 console.log(error);
             }
             if (body) {
                 data = JSON.parse(body);
                 console.log("#################################",data.answers[0].questions)
                 session.privateConversationData.data1 = data;
                 session.save();
                 var pp = data.answers.length;
                 if (((data.answers[0].answer) === "No good match found in the KB") || (data.answers[0].score < 50)) {
 
                      var msg = session.message.text;
					 
                     request("https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/79670c24-b3e7-4223-8c3e-c6502f1227e0?subscription-key=7ff4b9f23cf24e278de904380847811f&verbose=true&timezoneOffset=0&q=" + msg, function(error, response, body) {
                         console.log('error:', error); // Print the error if one occurred 
                         console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
                         console.log('body*****:', body); // Print the HTML for the Google homepage. 
                         var obj = JSON.parse(body);
                         
                         var arr2 = [];
                         session.privateConversationData.query = obj.topScoringIntent.intent;
                         console.log(session.privateConversationData.query + "8797654");
                         if(obj.topScoringIntent.score >= 0.75)
                         {
                           switch (obj.topScoringIntent.intent) 
                           {
                               case 'help': session.privateConversationData.ques = 'undefined';
											session.replaceDialog('/help'); break;
                               case 'Exit': session.privateConversationData.ques = 'undefined';
							   session.replaceDialog('/Exit'); break;
                               case 'Main_Menu': session.privateConversationData.ques = 'undefined';
							   session.replaceDialog('/Main_Menu'); break;
                               case 'Greeting': session.privateConversationData.ques = 'undefined';
							   session.replaceDialog('/Greeting'); break;
                               case 'UserExcited1': session.privateConversationData.ques = 'undefined';
							   session.replaceDialog('/UserExcited1');break;
                               case 'FIREWALL': session.privateConversationData.ques = 'undefined'; 
							   session.replaceDialog('/Firewall');break;
                               case 'about_bot': session.privateConversationData.ques = 'undefined';
							   session.replaceDialog('/about_bot');break;
                                case 'good': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/good'); break;
								case 'bot_happy': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/bot_happy'); break;
								case 'user_happy': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/user_happy'); break;
								case 'bot_bad': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/bot_bad'); break;
								case 'appraisal_bad': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/appraisal_bad'); break;
								case 'bot_beautiful': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/bot_beautiful'); break;
								case 'appraisal_good': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/appraisal_good'); break;
								case 'answer_my_question': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/answer_my_question'); break;
                                case 'bye': session.privateConversationData.ques = 'undefined'; 
								session.replaceDialog('/bye'); break;
                                case 'angry': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/angry'); break;
                                case 'happy': session.privateConversationData.ques = 'undefined'; 
								session.replaceDialog('/happy'); break;
								case 'bot_my_friend': session.privateConversationData.ques = 'undefined'; 
								session.replaceDialog('/bot_my_friend'); break;
								case 'SmallTalk': session.privateConversationData.ques = 'undefined'; 
								session.replaceDialog('/SmallTalk'); break;
                                case 'needs_advice': session.privateConversationData.ques = 'undefined'; 
								session.replaceDialog('/needs_advice'); break;                                
                                case 'testing_bot': session.privateConversationData.ques = 'undefined'; 
								session.replaceDialog('/testing_bot'); break;    
									case 'WMS': session.privateConversationData.ques = 'undefined'; 
									session.replaceDialog('/WMS'); break;
                            case 'UserExcited2': session.privateConversationData.ques = 'undefined'; 
							session.replaceDialog('/UserExcited2');
                                                 break;
                            case 'UserExcited3': session.privateConversationData.ques = 'undefined';
							session.replaceDialog('/UserExcited3');
                                                 break;   
                            case 'UserDown': session.privateConversationData.ques = 'undefined';
							session.replaceDialog('/UserDown');
                                                 break;
                            case 'UserAnnoyed': session.privateConversationData.ques = 'undefined';
							session.replaceDialog('/UserAnnoyed');
                                                 break;
                            case 'BotAnnoyed': session.privateConversationData.ques = 'undefined';
							session.replaceDialog('/BotAnnoyed');
                                                 break;
                            case 'OutofScope': session.privateConversationData.ques = 'undefined';
							session.replaceDialog('/OutofScope');
                                                 break; 
                            case 'WellnessGreeting': session.privateConversationData.ques = 'undefined';
							session.replaceDialog('/WellnessGreeting');
                                                 break;
                               case 'outlook':  
                               case 'ShareCalendar':  
                               case 'LostRemoteAccessToken':                                                        
                               case 'AddCalendar':                                           
                               case 'UseRemoteDesktop':  
                               case 'UnlockYourPassword':  
                               case 'Email_iOS11':  
                               case 'TroubleshootRemoteAccessToken':  
                               case 'Email_iPhone/iPad':  
                               case 'ReplaceHardToken':  
                               case 'ConnectRemoteAccess':  
                               case 'remoteaccess':  session.replaceDialog('/asdf');
                                                     break;
                               default:
                                   session.send("Sorry, I do not have answer for this. I am still learning. I will notify my support team to train me on this question");
                                   session.beginDialog('/listtopics');
   
                                   MongoClient.connect(url, function(err, db) {
                                       db.createCollection('wms_questions');
   
                                       var collection_feedback = db.collection('wms_questions');
                                       console.log("inserting data in wms mongodb repo");
                                       collection_feedback.insert({
                                           "question": session.message.text,
                                           "time": session.message.timestamp,
                                           "sessionid": session.message.address.id,
                                           "user_details": session.message.user
                                       });
   
                                       db.close();
                                   });
                           }
                         }
                         
                         else if(obj.topScoringIntent.score >= 0.40 && obj.topScoringIntent.score < 0.75)
                         {
                             console.log('inside elseif');
                             var arr = [];
                             for(var i=0; i<obj.intents.length; i++){
                                var s = obj.intents[i].intent;
                                 if(s != 'Negative_Intent' && s != 'Greeting' && s != 'WMS' && s!= 'UserExcited1' && s!= 'UserExcited2'
                                    && s!= 'UserExcited3' && s!= 'WellnessGreeting' && s != 'UserDown' && s != 'UserAnnoyed' 
                                    && s!= 'testing_bot' && s!= 'needs_advice' && s != 'happy' && s != 'angry' 
                                    && s!= 'bye' && s!= 'good' && 
                                    s != 'BotAnnoyed' && s != 'OutofScope' && s != 'Exit' && s != 'None' && s != 'Main_Menu' && s != 'FIREWALL'){
                                     console.log(obj.intents[i].intent + obj.intents[i].score);
                                     console.log('******************');
                                     arr.push(obj.intents[i].intent);
                                     console.log("213");
                                     console.log(arr[arr.length-1]);
                                     console.log("123");
                                     if(arr.length == 3)
                                       break;
                                 }
                             }
                             
                             session.privateConversationData.arr2 = [];
                             session.privateConversationData.arr3 = [];
                             session.privateConversationData.arr2[0] = arr[0];
                             session.privateConversationData.arr3.push(session.privateConversationData.questionMap[arr[0]]);
                             session.privateConversationData.arr2[1] = arr[1];
                             session.privateConversationData.arr3.push(session.privateConversationData.questionMap[arr[1]]);
                             session.privateConversationData.arr2[2] = arr[2];
                             session.privateConversationData.arr3.push(session.privateConversationData.questionMap[arr[2]]);

                             //console.log(arr3[0] + arr3[1] + arr3[2]);
                             console.log('forloop done');
                             console.log(session.privateConversationData.arr2[0] + session.privateConversationData.arr2[1] + session.privateConversationData.arr2[2]);

                             builder.Prompts.choice(session, "I think you have a query related to Outlook/Remote Access.\nDo you need help on any of these topics?", session.privateConversationData.arr3,
                             {   retryPrompt: "Please choose amongst the following.",
                                 listStyle: builder.ListStyle.button,
                                 maxRetries: 2
                             });
                         }
                         else {
                             session.send('Sorry, I didn\'t understand your question');
                             builder.Prompts.choice(session, "Please click on the button if you would like to go back to Main Menu", "Main Menu", {
                                retryPrompt: "Please click on the button",
                                listStyle: builder.ListStyle.button,
                                maxRetries: 2
                             });
                         }
                     });
                 } else {
                     session.replaceDialog('/fetchdata');
                 }
             } else if (!body) {
                 console.log('Some issue in connection with QNA maker for WMS');
             }
         });
     },
     function(session, results){
        console.log('Inside results' + results.response.entity);
        //console.log(session.privateConversationData.arr2[0] + session.privateConversationData.arr2[1] + session.privateConversationData.arr2[2]);

        switch(results.response.entity){
            case "Main Menu" :  session.replaceDialog('/Main_Menu');
                                break;
            case (session.privateConversationData.arr3[0]): console.log(session.privateConversationData.arr2[0]); 
                                            session.replaceDialog('/'+session.privateConversationData.arr2[0]);
                                            break;
            case (session.privateConversationData.arr3[1]): console.log(session.privateConversationData.arr2[1]); 
                                            session.replaceDialog('/'+session.privateConversationData.arr2[1]);
                                            break;
            case (session.privateConversationData.arr3[2]): console.log(session.privateConversationData.arr2[2]); 
                                            session.replaceDialog('/'+session.privateConversationData.arr2[2]);
                                            break;
             
         }
     }
]);

////////////////

// wms new 20_12
bot.dialog('/wmsinitiateagain', [
    function(session, args, next) {
        //console.log("on wmsinitiate",session)
        builder.Prompts.text(session, "Please type your question related to WMS");
    },
	
	function(session, result) {
     
         session.privateConversationData.questionMap = {
             'ShareCalendar':"Sharing Calendar", 
             'None':"Go back to Main Manu",
             'ITSUPPORT':"Outlook/Remote Service", 
             'help':"Go back to Main Menu", 
             'FIREWALL':"Firewall Service", 
             'remoteaccess':"Remote Access", 
             'outlook':"Outlook",
             'UseRemoteDesktop':"Remote Desktop", 
             'UnlockYourPassword':"Unlock Password", 
             'ReplaceHardToken':"Replacing Hard Token", 
             'TroubleshootRemoteAccessToken':"Troubleshoot Remote Access Token", 
             'Email_iPhone/iPad':"Email on iPhone/iPad", 
             'ConnectRemoteAccess':"Connecting Remote Access", 
             'Login':"Login Issues", 
             'Email_ iOS11':"Integrating Email on iOS11", 
             'LostRemoteAccessToken':"Lost Remote Access Token", 
             'firewall_request':"Firewall Service", 
             'AddCalendar':"Adding Calendar",
             'Main_Menu':"Main Menu",
			 'UserDown': "UserDown",
             'UserExcited1': "UserExcited1",
             'UserExcited2': "UserExcited2",
             'UserExcited3': "UserExcited3",
             'UserAnnoyed': "UserAnnoyed",
             'BotAnnoyed': "BotAnnoyed",
             'OutofScope': "OutofScope",
             'WellnessGreeting': "WellnessGreeting",
             'testing_bot': "testing_bot",
             'needs_advice': "needs_advice",
             'happy': "happy",
             'angry': "angry",
             'bye': "bye",
             'good': "good",
             'about_bot': "about_bot",
			 'bot_happy':'bot_happy',
		'user_happy':'user_happy',
		'bot_bad':'bot_bad',
		'appraisal_bad':'appraisal_bad',
		'appraisal_good':'appraisal_good',
		'answer_my_question':'answer_my_question',
		'bot_beautiful':'bot_beautiful',
		'bot_my_friend':'bot_my_friend',
		'SmallTalk':'SmallTalk',
             'WMS': "WMS"
         };
     
         console.log(session.message.text)
         var question = session.message.text;
         session.privateConversationData.ques = session.message.text
         //session.privateConversationData.ques=session.message.text
         jsonObject = JSON.stringify({
             "question": question,
             "top": 4
         });
         // console.log(jsonObject)
         request.post({
             headers: {
                 'Content-type': 'application/json',
                 'Ocp-Apim-Subscription-Key': '45bf530d13f14afab04d29b4dbc54f18',
                 'Content-Length': Buffer.byteLength(jsonObject, 'utf8')
             },
             url: 'https://westus.api.cognitive.microsoft.com/qnamaker/v2.0/knowledgebases/' + 'a851fd07-3e03-4deb-9050-83f995a13a5e' + '/generateAnswer',
             // method: 'POST',
             body: jsonObject
         }, function(error, response, body) {
             if (error) {
                 console.log(error);
             }
             if (body) {
                 data = JSON.parse(body);
                 session.privateConversationData.data1 = data;
                 session.save();
                 var pp = data.answers.length;
                 if (((data.answers[0].answer) === "No good match found in the KB") || (data.answers[0].score < 50)) {
 
                     var msg = session.message.text;
                     request("https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/79670c24-b3e7-4223-8c3e-c6502f1227e0?subscription-key=7ff4b9f23cf24e278de904380847811f&verbose=true&timezoneOffset=0&q=" + msg, function(error, response, body) {
                         console.log('error:', error); // Print the error if one occurred 
                         console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
                         console.log('body*****:', body); // Print the HTML for the Google homepage. 
                         var obj = JSON.parse(body);
                         
                         var arr2 = [];
                         session.privateConversationData.query = obj.topScoringIntent.intent;
                         console.log(session.privateConversationData.query + "8797654");
                         if(obj.topScoringIntent.score >= 0.75)
                         {
                           switch (obj.topScoringIntent.intent) 
                           {
                               case 'help': session.privateConversationData.ques = 'undefined';
							   session.replaceDialog('/help'); break;
							   case 'Exit': session.privateConversationData.ques = 'undefined';
							   session.replaceDialog('/Exit'); break;
							   case 'Main_Menu': session.privateConversationData.ques = 'undefined';
							   session.replaceDialog('/Main_Menu'); break;
                               case 'Greeting': session.privateConversationData.ques = 'undefined';
							   session.replaceDialog('/Greeting'); break;
                               case 'UserExcited1': session.privateConversationData.ques = 'undefined';
							   session.replaceDialog('/UserExcited1');break;
							   case 'FIREWALL': session.privateConversationData.ques = 'undefined';
							   session.replaceDialog('/Firewall');break;
							   case 'about_bot': session.privateConversationData.ques = 'undefined';
							   session.replaceDialog('/about_bot');break;
                                case 'good': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/good'); break;
								case 'bot_happy': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/bot_happy'); break;
								case 'user_happy': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/user_happy'); break;
								case 'bot_bad': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/bot_bad'); break;
								case 'appraisal_bad': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/appraisal_bad'); break;
								case 'appraisal_good': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/appraisal_good'); break;
								case 'answer_my_question': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/answer_my_question'); break;
								case 'bot_beautiful': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/bot_beautiful'); break;
                                case 'bye': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/bye'); break;
                                case 'angry': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/angry'); break;
                                case 'happy': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/happy'); break;
                                case 'needs_advice': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/needs_advice'); break;                                
                                case 'testing_bot': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/testing_bot'); break;
								case 'SmallTalk': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/SmallTalk'); break;
								case 'bot_my_friend': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/bot_my_friend'); break;
							case 'WMS': session.privateConversationData.ques = 'undefined';
							session.replaceDialog('/WMS'); break;								
                            case 'UserExcited2': session.privateConversationData.ques = 'undefined';
							session.replaceDialog('/UserExcited2');
                                                 break;
                            case 'UserExcited3': session.privateConversationData.ques = 'undefined';
							session.replaceDialog('/UserExcited3');
                                                 break;   
                            case 'UserDown': session.privateConversationData.ques = 'undefined';
							session.replaceDialog('/UserDown');
                                                 break;
                            case 'UserAnnoyed': session.privateConversationData.ques = 'undefined';
							session.replaceDialog('/UserAnnoyed');
                                                 break;
                            case 'BotAnnoyed': session.privateConversationData.ques = 'undefined';
							session.replaceDialog('/BotAnnoyed');
                                                 break;
                            case 'OutofScope': session.privateConversationData.ques = 'undefined';
							session.replaceDialog('/OutofScope');
                                                 break; 
                            case 'WellnessGreeting': session.privateConversationData.ques = 'undefined';
							session.replaceDialog('/WellnessGreeting');
                                                 break;
                               case 'outlook':  
                               case 'ShareCalendar':  
                               case 'LostRemoteAccessToken':                                                        
                               case 'AddCalendar':                                           
                               case 'UseRemoteDesktop':  
                               case 'UnlockYourPassword':  
                               case 'Email_iOS11':  
                               case 'TroubleshootRemoteAccessToken':  
                               case 'Email_iPhone/iPad':  
                               case 'ReplaceHardToken':  
                               case 'ConnectRemoteAccess':  
                               case 'remoteaccess':  session.replaceDialog('/asdf');
                                                     break;
                               default:
                                   session.send("Sorry, I do not have answer for this. I am still learning.I will notify my support team to train me on this question");
                                   session.beginDialog('/listtopics');
   
                                   MongoClient.connect(url, function(err, db) {
                                       db.createCollection('wms_questions');
   
                                       var collection_feedback = db.collection('wms_questions');
                                       console.log("inserting data in wms mongodb repo");
                                       collection_feedback.insert({
                                           "question": session.message.text,
                                           "time": session.message.timestamp,
                                           "sessionid": session.message.address.id,
                                           "user_details": session.message.user
                                       });
   
                                       db.close();
                                   });
                           }
                         }
                         
                         else if(obj.topScoringIntent.score >= 0.40 && obj.topScoringIntent.score < 0.75)
                         {
                             console.log('inside elseif');
                             var arr = [];
                             for(var i=0; i<obj.intents.length; i++){
                                var s = obj.intents[i].intent;
                                 if(s != 'Negative_Intent' && s != 'Greeting' && s != 'WMS' && s!= 'UserExcited1' && s!= 'UserExcited2'
                                    && s!= 'UserExcited3' && s!= 'WellnessGreeting' && s != 'UserDown' && s != 'UserAnnoyed' 
									&& s!= 'testing_bot' && s!= 'needs_advice' && s != 'happy' && s != 'angry'
                                    && s!= 'bye' && s!= 'good' && 
                                    s != 'BotAnnoyed' && s != 'OutofScope' && s != 'Exit' && s != 'None' && s != 'Main_Menu' && s != 'FIREWALL'){
                                     console.log(obj.intents[i].intent + obj.intents[i].score);
                                     console.log('******************');
                                     arr.push(obj.intents[i].intent);
                                     console.log("213");
                                     console.log(arr[arr.length-1]);
                                     console.log("123");
                                     if(arr.length == 3)
                                       break;
                                 }
                             }
                             
                             session.privateConversationData.arr2 = [];
                             session.privateConversationData.arr3 = [];
                             session.privateConversationData.arr2[0] = arr[0];
                             session.privateConversationData.arr3.push(session.privateConversationData.questionMap[arr[0]]);
                             session.privateConversationData.arr2[1] = arr[1];
                             session.privateConversationData.arr3.push(session.privateConversationData.questionMap[arr[1]]);
                             session.privateConversationData.arr2[2] = arr[2];
                             session.privateConversationData.arr3.push(session.privateConversationData.questionMap[arr[2]]);

                             //console.log(arr3[0] + arr3[1] + arr3[2]);
                             console.log('forloop done');
                             console.log(session.privateConversationData.arr2[0] + session.privateConversationData.arr2[1] + session.privateConversationData.arr2[2]);

                             builder.Prompts.choice(session, "I think you have a query related to Outlook/Remote Access.\nDo you need help on any of these topics?", session.privateConversationData.arr3,
                             {   retryPrompt: "Please choose amongst the following.",
                                 listStyle: builder.ListStyle.button,
                                 maxRetries: 2
                             });
                         }
                         else {
                             session.send('Sorry, I didn\'t understand your question');
                             builder.Prompts.choice(session, "Please click on the button if you would like to go back to Main Menu", "Main Menu", {
                                retryPrompt: "Please click on the button",
                                listStyle: builder.ListStyle.button,
                                maxRetries: 2
                             });
                         }
                     });
                 } else {
                     session.replaceDialog('/fetchdata');
                 }
             } else if (!body) {
                 console.log('Some issue in connection with QNA maker for WMS');
             }
         });
     },
     function(session, results){
        console.log('Inside results' + results.response.entity);
        //console.log(session.privateConversationData.arr2[0] + session.privateConversationData.arr2[1] + session.privateConversationData.arr2[2]);

        switch(results.response.entity){
            case "Main Menu" :  session.replaceDialog('/Main_Menu');
                                break;
            case (session.privateConversationData.arr3[0]): console.log(session.privateConversationData.arr2[0]); 
                                            session.replaceDialog('/'+session.privateConversationData.arr2[0]);
                                            break;
            case (session.privateConversationData.arr3[1]): console.log(session.privateConversationData.arr2[1]); 
                                            session.replaceDialog('/'+session.privateConversationData.arr2[1]);
                                            break;
            case (session.privateConversationData.arr3[2]): console.log(session.privateConversationData.arr2[2]); 
                                            session.replaceDialog('/'+session.privateConversationData.arr2[2]);
                                            break;
             
         }
     }
]);

//
// WMS  => Assistive Support
bot.dialog('/asdf', [function(session) {
        builder.Prompts.choice(session, 'I think your query is related to Outlook/Remote Access Support. Shall we switch to Outlook/Remote Support FAQs ?', ['Yes', 'No, I am Good'], {
            retryPrompt: getString(),
            listStyle: builder.ListStyle.button,
            maxRetries: 2
        });
    },
    function(session, results) {
        if (results.response) {
            console.log(results.response.entity + 'hgj');
            switch (results.response.entity) {
                case "Yes":
                    console.log('adf');
                    session.endDialog();
                    session.replaceDialog('/'+ session.privateConversationData.query);
                    //session.beginDialog('/Re-EnterITSupport');
                    break;
                case "No, I am Good":
				    session.send("Sorry, I am not able to find an answer for your query. I am still learning. I will notify my support team to train me on this topic");
                    //session.send("Sorry i dont have answer for this. I am still learning. I will notify my support team to train me on this question");
                    session.beginDialog('/listtopics');
                    break;
            }
        } else {
            session.endDialog();
            session.replaceDialog('/Greeting11');
        }
    }
]);


bot.dialog('/fetchdata', [
    function(session) {
        var data = session.privateConversationData.data1;
        //console.log("new data here",data);

        if (data.answers[0].score > 80) {
            //session.send(data.answers[0].answer);
            session.endDialog();
            session.replaceDialog('/top80question');
            //session.beginDialog('/AnythingElse');
        } else {
            var bb = '*' + "Did you mean" + '*' + ':' + '**' + data.answers[0].questions + '?' + '**';
            builder.Prompts.choice(session, bb, ['YES', 'NO'], {
                retryPrompt: getString(),
                listStyle: builder.ListStyle.button,
                maxRetries: 2
            });
        }
    },
    function(session, results) {
        var data = session.privateConversationData.data1;
        if (results.response) {
            switch (results.response.entity) {
                case 'YES':
                    session.send(data.answers[0].answer);
                    session.beginDialog('/AnythingElse1');
                    break;
                case 'NO':

                    session.beginDialog('/questionlist');
                    break;

            }
        } else {
            session.endDialog();
            session.replaceDialog('/Greeting11');
        }
    }
]);



// wms abi

bot.dialog('/top80question', [
    function(session, args, next) {
        var data = session.privateConversationData.data1;
        builder.Prompts.text(session, data.answers[0].answer);
        console.log("intop80");
    },
	function(session, result) {
     
         session.privateConversationData.questionMap = {
             'ShareCalendar':"Sharing Calendar", 
             'None':"Go back to Main Manu",
             'ITSUPPORT':"Outlook/Remote Service", 
             'help':"Go back to Main Menu", 
             'FIREWALL':"Firewall Service", 
             'remoteaccess':"Remote Access", 
             'outlook':"Outlook",
             'UseRemoteDesktop':"Remote Desktop", 
             'UnlockYourPassword':"Unlock Password", 
             'ReplaceHardToken':"Replacing Hard Token", 
             'TroubleshootRemoteAccessToken':"Troubleshoot Remote Access Token", 
             'Email_iPhone/iPad':"Email on iPhone/iPad", 
             'ConnectRemoteAccess':"Connecting Remote Access", 
             'Login':"Login Issues", 
             'Email_ iOS11':"Integrating Email on iOS11", 
             'LostRemoteAccessToken':"Lost Remote Access Token", 
             'firewall_request':"Firewall Service", 
             'AddCalendar':"Adding Calendar",
             'Main_Menu':"Main Menu",
			 'UserDown': "UserDown",
             'UserExcited1': "UserExcited1",
             'UserExcited2': "UserExcited2",
             'UserExcited3': "UserExcited3",
             'UserAnnoyed': "UserAnnoyed",
             'BotAnnoyed': "BotAnnoyed",
             'OutofScope': "OutofScope",
             'WellnessGreeting': "WellnessGreeting",
             'testing_bot': "testing_bot",
             'needs_advice': "needs_advice",
             'happy': "happy",
             'angry': "angry",
             'bye': "bye",
             'good': "good",
             'about_bot': "about_bot",
			 'bot_happy':'bot_happy',
'user_happy':'user_happy',
'bot_bad':'bot_bad',
'appraisal_bad':'appraisal_bad',
'appraisal_good':'appraisal_good',
'answer_my_question':'answer_my_question',
'bot_beautiful':'bot_beautiful',
'bot_my_friend':'bot_my_friend',
'SmallTalk':'SmallTalk',
             'WMS': "WMS"
         };
     
         console.log(session.message.text)
         var question = session.message.text;
         session.privateConversationData.ques = session.message.text
         //session.privateConversationData.ques=session.message.text
         jsonObject = JSON.stringify({
             "question": question,
             "top": 4
         });
         // console.log(jsonObject)
         request.post({
             headers: {
                 'Content-type': 'application/json',
                 'Ocp-Apim-Subscription-Key': '45bf530d13f14afab04d29b4dbc54f18',
                 'Content-Length': Buffer.byteLength(jsonObject, 'utf8')
             },
             url: 'https://westus.api.cognitive.microsoft.com/qnamaker/v2.0/knowledgebases/' + 'a851fd07-3e03-4deb-9050-83f995a13a5e' + '/generateAnswer',
             // method: 'POST',
             body: jsonObject
         }, function(error, response, body) {
             if (error) {
                 console.log(error);
             }
             if (body) {
                 data = JSON.parse(body);
                 session.privateConversationData.data1 = data;
                 session.save();
                 var pp = data.answers.length;
                 if (((data.answers[0].answer) === "No good match found in the KB") || (data.answers[0].score < 50)) {
 
                     var msg = session.message.text;
                     request("https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/79670c24-b3e7-4223-8c3e-c6502f1227e0?subscription-key=7ff4b9f23cf24e278de904380847811f&verbose=true&timezoneOffset=0&q=" + msg, function(error, response, body) {
                         console.log('error:', error); // Print the error if one occurred 
                         console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
                         console.log('body*****:', body); // Print the HTML for the Google homepage. 
                         var obj = JSON.parse(body);
                         
                         var arr2 = [];
                         session.privateConversationData.query = obj.topScoringIntent.intent;
                         console.log(session.privateConversationData.query + "8797654");
                         if(obj.topScoringIntent.score >= 0.75)
                         {
                           switch (obj.topScoringIntent.intent) 
                           {
                               case 'help': session.privateConversationData.ques = 'undefined';
							   session.replaceDialog('/help'); break;
							   case 'Exit': session.privateConversationData.ques = 'undefined';
							   session.replaceDialog('/Exit'); break;
							   case 'Main_Menu': session.privateConversationData.ques = 'undefined';
							   session.replaceDialog('/Main_Menu'); break;
                               case 'Greeting': session.privateConversationData.ques = 'undefined';
							   session.replaceDialog('/Greeting'); break;
                               case 'UserExcited1': session.privateConversationData.ques = 'undefined';
							   session.replaceDialog('/UserExcited1');break;
							   case 'FIREWALL': session.privateConversationData.ques = 'undefined';
							   session.replaceDialog('/Firewall');break;
							   case 'about_bot': session.privateConversationData.ques = 'undefined';
							   session.replaceDialog('/about_bot');break;
                                  case 'good': session.privateConversationData.ques = 'undefined';
								  session.replaceDialog('/good'); break;
								  case 'bot_happy': session.privateConversationData.ques = 'undefined';
									session.replaceDialog('/bot_happy'); break;
									case 'user_happy': session.privateConversationData.ques = 'undefined';
									session.replaceDialog('/user_happy'); break;
									case 'bot_bad': session.privateConversationData.ques = 'undefined';
									session.replaceDialog('/bot_bad'); break;
									case 'appraisal_bad': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/appraisal_bad'); break;
								case 'bot_beautiful': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/bot_beautiful'); break;
								case 'answer_my_question': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/answer_my_question'); break;
								case 'appraisal_good': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/appraisal_good'); break;
                                case 'bye': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/bye'); break;
                                case 'angry': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/angry'); break;
                                case 'happy': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/happy'); break;
                                case 'needs_advice': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/needs_advice'); break;                                
                                case 'testing_bot': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/testing_bot'); break;
								case 'SmallTalk': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/SmallTalk'); break;
								case 'WMS': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/WMS'); break;
									case 'bot_my_friend': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/bot_my_friend'); break;
                            case 'UserExcited2': session.privateConversationData.ques = 'undefined';
							session.replaceDialog('/UserExcited2');
                                                 break;
                            case 'UserExcited3': session.privateConversationData.ques = 'undefined';
							session.replaceDialog('/UserExcited3');
                                                 break;   
                            case 'UserDown': session.privateConversationData.ques = 'undefined';
							session.replaceDialog('/UserDown');
                                                 break;
                            case 'UserAnnoyed': session.privateConversationData.ques = 'undefined';
							session.replaceDialog('/UserAnnoyed');
                                                 break;
                            case 'BotAnnoyed': session.privateConversationData.ques = 'undefined';
							session.replaceDialog('/BotAnnoyed');
                                                 break;
                            case 'OutofScope': session.privateConversationData.ques = 'undefined';
							session.replaceDialog('/OutofScope');
                                                 break; 
                            case 'WellnessGreeting': session.privateConversationData.ques = 'undefined';
							session.replaceDialog('/WellnessGreeting');
                                                 break;
                               case 'outlook':  
                               case 'ShareCalendar':  
                               case 'LostRemoteAccessToken':                                                        
                               case 'AddCalendar':                                           
                               case 'UseRemoteDesktop':  
                               case 'UnlockYourPassword':  
                               case 'Email_iOS11':  
                               case 'TroubleshootRemoteAccessToken':  
                               case 'Email_iPhone/iPad':  
                               case 'ReplaceHardToken':  
                               case 'ConnectRemoteAccess':  
                               case 'remoteaccess':  session.replaceDialog('/asdf');
                                                     break;
                               default:
                                   session.send("Sorry, I do not have answer for this. I am still learning. I will notify my support team to train me on this question.");
                                   session.beginDialog('/listtopics');
   
                                   MongoClient.connect(url, function(err, db) {
                                       db.createCollection('wms_questions');
   
                                       var collection_feedback = db.collection('wms_questions');
                                       console.log("inserting data in wms mongodb repo");
                                       collection_feedback.insert({
                                           "question": session.message.text,
                                           "time": session.message.timestamp,
                                           "sessionid": session.message.address.id,
                                           "user_details": session.message.user
                                       });
   
                                       db.close();
                                   });
                           }
                         }
                         
                         else if(obj.topScoringIntent.score >= 0.40 && obj.topScoringIntent.score < 0.75)
                         {
                             console.log('inside elseif');
                             var arr = [];
                             for(var i=0; i<obj.intents.length; i++){
                                var s = obj.intents[i].intent;
                                 if(s != 'Negative_Intent' && s != 'Greeting' && s != 'WMS' && s!= 'UserExcited1' && s!= 'UserExcited2'
                                    && s!= 'UserExcited3' && s!= 'WellnessGreeting' && s != 'UserDown' && s != 'UserAnnoyed'
									&& s!= 'testing_bot' && s!= 'needs_advice' && s != 'happy' && s != 'angry' 
                                    && s!= 'bye' && s!= 'good' && 
                                    s != 'BotAnnoyed' && s != 'OutofScope' && s != 'Exit' && s != 'None' && s != 'Main_Menu' && s != 'FIREWALL'){
                                     console.log(obj.intents[i].intent + obj.intents[i].score);
                                     console.log('******************');
                                     arr.push(obj.intents[i].intent);
                                     console.log("213");
                                     console.log(arr[arr.length-1]);
                                     console.log("123");
                                     if(arr.length == 3)
                                       break;
                                 }
                             }
                             
                             session.privateConversationData.arr2 = [];
                             session.privateConversationData.arr3 = [];
                             session.privateConversationData.arr2[0] = arr[0];
                             session.privateConversationData.arr3.push(session.privateConversationData.questionMap[arr[0]]);
                             session.privateConversationData.arr2[1] = arr[1];
                             session.privateConversationData.arr3.push(session.privateConversationData.questionMap[arr[1]]);
                             session.privateConversationData.arr2[2] = arr[2];
                             session.privateConversationData.arr3.push(session.privateConversationData.questionMap[arr[2]]);

                             //console.log(arr3[0] + arr3[1] + arr3[2]);
                             console.log('forloop done');
                             console.log(session.privateConversationData.arr2[0] + session.privateConversationData.arr2[1] + session.privateConversationData.arr2[2]);

                             builder.Prompts.choice(session, "I think you have a query related to Outlook/Remote Access.\nDo you need help on any of these topics?", session.privateConversationData.arr3,
                             {retryPrompt: getString(),
									listStyle: builder.ListStyle.button,
									maxRetries: 2
										});
                         }
                         else {
                             session.send('Sorry, I didn\'t understand your question');
                             builder.Prompts.choice(session, "Please click on the button if you would like to go back to Main Menu", "Main Menu",{retryPrompt: getString(),
  listStyle: builder.ListStyle.button,
  maxRetries: 2
   });
                         }
                     });
                 } else {
                     session.replaceDialog('/fetchdata');
                 }
             } else if (!body) {
                 console.log('Some issue in connection with QNA maker for WMS');
             }
         });
     },
     function(session, results){
        console.log('Inside results' + results.response.entity);
        //console.log(session.privateConversationData.arr2[0] + session.privateConversationData.arr2[1] + session.privateConversationData.arr2[2]);

        switch(results.response.entity){
            case "Main Menu" :  session.replaceDialog('/Main_Menu');
                                break;
            case (session.privateConversationData.arr3[0]): console.log(session.privateConversationData.arr2[0]); 
                                            session.replaceDialog('/'+session.privateConversationData.arr2[0]);
                                            break;
            case (session.privateConversationData.arr3[1]): console.log(session.privateConversationData.arr2[1]); 
                                            session.replaceDialog('/'+session.privateConversationData.arr2[1]);
                                            break;
            case (session.privateConversationData.arr3[2]): console.log(session.privateConversationData.arr2[2]); 
                                            session.replaceDialog('/'+session.privateConversationData.arr2[2]);
                                            break;
             
         }
     }
]);


//wms new 19
bot.dialog('/listtopics', [
    function(session, next) {
        builder.Prompts.choice(session, "Do you want to ask questions on any of the below listed topics \n**1.Requirements**    \n**2.Lighting**     \n**3.Reports**", ['Yes', 'No, I am Good'], {
            retryPrompt: getString(),
            listStyle: builder.ListStyle.button,
            maxRetries: 2
        });
    },
    function(session, results) {
        if (results.response) {
            //console.log(results.response.entity);
            switch (results.response.entity) {

                case 'Yes':
                    session.beginDialog('/wmsinitiate');
                    break;
                case 'No, I am Good':
                    session.beginDialog('/other_services');
                    break;

            }
        } else {
            session.beginDialog('/Greeting11');
        }
    }
]);


// testing
bot.dialog('/Greeting11', [
    function(session, args, next) {
        builder.Prompts.choice(session, "I am sorry. You have exceeded maximum number of attempts. Let us start over. Please choose one of the services", ['WMS', 'Firewall', 'Outlook/Remote Access\nSupport'], {
            retryPrompt: getString(),
            listStyle: builder.ListStyle.button,
            maxRetries: 2
        });
    },
    function(session, results) {
        if (results.response) {
            var selection = results.response.entity;
            // route to corresponding dialogs
            switch (selection) {
                case "WMS":

                    session.endDialog();
                    session.replaceDialog('/wmsinitiate');
                    break;
                case "Firewall":
                    //session.send(msg);
                    session.endDialog();
                    session.replaceDialog('/Firewall');
                    break;
                case "Outlook/Remote Access\nSupport":
                    session.endDialog();
                    session.replaceDialog('/Re-EnterITSupport');
                    break;
            }
        } else {

            session.endDialog();
            session.replaceDialog('/Greeting11');
        }
    }
]);
// question list wms
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// question list by sachida 29_12
bot.dialog('/questionlist', function(session, args, next) {
	      var data = session.privateConversationData.data1;
        console.log("data in question list", data.answers[1].questions);
		    var abcdq = data.answers[1].questions[0];
        var bcdeq = data.answers[2].questions[0];
        var cdefq = data.answers[3].questions[0];
        var abcdA = "**" + data.answers[1].questions[0] + "**\n\n" + data.answers[1].answer;
        var bcdeA = "**" + data.answers[2].questions[0] + "**\n\n" + data.answers[2].answer;
        var cdefA = "**" + data.answers[3].questions[0] + "**\n\n" + data.answers[3].answer;

    if (session.message && session.message.value) {
        console.log(session);
        checkNewRequestFAQ(session, session.message.value);
        return;
    }

//card of probable FAQ
var probable_FAQ_hero_card = {
    'contentType': 'application/vnd.microsoft.card.adaptive',
    'content': {
                  '$schema': 'http://adaptivecards.io/schemas/adaptive-card.json',
                  "type": "AdaptiveCard",
                  "version": "1.0",
                  //"backgroundImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6MQoq7oTo8XLkrcnneQhPjcgqApKnu-usfWtQuoe17nrWohf-",
                
                  "body": [
                
                    {
                      "type": "TextBlock",
                      "text": "I am not able to find an exact answer for your query. Here are some probable FAQs related to your search",
                      "weight": "bolder",
                      "wrap": true
                    }
                
                  ],
				      "actions": [
        {
            "type": "Action.ShowCard",
            "title": abcdq,
            "card": {
                "type": "AdaptiveCard",
                "body": [
                    {
                        "type": "TextBlock",
                        "text":abcdq,
						"weight": "bolder",
                      "wrap": true
                    }
                ],
                "actions": [
                    {
                        "type":"Action.Submit",
                        "title":"View Answer",
						"data": {
                          "type": "Submit_q1"
                      }
                    }
                ]
            }
        },{
            "type": "Action.ShowCard",
            "title": bcdeq,
            "card": {
                "type": "AdaptiveCard",
                "body": [
                    {
                        "type": "TextBlock",
                        "text":bcdeq,
						"weight": "bolder",
                      "wrap": true
                    }
                ],
                "actions": [
                    {
                        "type":"Action.Submit",
                        "title":"View Answer",
						"data": {
                          "type": "Submit_q2"
                      }
                    }
                ]
            }
        },{
            "type": "Action.ShowCard",
            "title": cdefq,
            "card": {
                "type": "AdaptiveCard",
                "body": [
                    {
                        "type": "TextBlock",
                        "text":cdefq,
						"weight": "bolder",
                      "wrap": true
                    }
                ],
                "actions": [
                    {
                        "type":"Action.Submit",
                        "title":"View Answer",
						"data": {
                          "type": "Submit_q3"
                      }
                    }
                ]
            }
        }
    ]
              }
}

    var msg = new builder.Message(session).addAttachment(probable_FAQ_hero_card);
    session.send(msg);

});

function checkNewRequestFAQ(session, value) {
    console.log("****", value.type);
	var data = session.privateConversationData.data1;
    console.log("data in question list options", data.answers[1].questions);
	var abcdq = data.answers[1].questions[0];
    var bcdeq = data.answers[2].questions[0];
    var cdefq = data.answers[3].questions[0];
    var abcdA = data.answers[1].answer;
    var bcdeA = data.answers[2].answer;
    var cdefA = data.answers[3].answer;
    switch (value.type) {
        case 'Submit_q1':
					session.message.value = '';
					session.send(abcdA);
					session.beginDialog('/AnythingElse1');
					break;	
		case 'Submit_q2':
					session.message.value = '';
                    session.send(bcdeA);
					session.beginDialog('/AnythingElse1');
                    break;
		case 'Submit_q3':
					session.message.value = '';
                    session.send(cdefA);
					session.beginDialog('/AnythingElse1');
                    break;
    }
}

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$



//####################################

//Anything else for wms

bot.dialog('/AnythingElse1', [

    function(session, args, next) {
        builder.Prompts.choice(session, "Is there anything else that I can help you with on WMS?", ['Yes', 'No'], {
            retryPrompt: getString(),
            listStyle: builder.ListStyle.button,
            maxRetries: 2
        });
    },
    function(session, results) {
        if (results.response) {
            var selection = results.response.entity;
            // route to corresponding dialogs
            switch (selection) {
                case "Yes":

                    session.replaceDialog('/wmsinitiate');
                    break;
                case "No":
                    session.replaceDialog('/other_services');
                    break;
            }
        } else {
            session.endDialog();
            session.replaceDialog('/Greeting11');
        }
    }
]);
bot.dialog('/other_services', [
    function(session, args, next) {
        builder.Prompts.choice(session, "Before we exit, Would you like to try the other services:", ['Firewall', 'Outlook/Remote Access\nSupport', 'Exit'], {
            retryPrompt: getString(),
            listStyle: builder.ListStyle.button,
            maxRetries: 2
        });
    },
    function(session, results) {

        if (results.response) {
            var selection = results.response.entity;
            // route to corresponding dialogs
            switch (selection) {
                case "Firewall":
                    session.replaceDialog('/firewall_request');
                    break;
                case "Outlook/Remote Access\nSupport":
                    session.replaceDialog('/ITSupport');
                    break;
                case "Exit":
                    session.replaceDialog('/Gettingfeedback');
                    break;
            }
        } else {
            session.endDialog();
            session.replaceDialog('/Greeting11');
        }

    }
]);

// help intent

bot.dialog('/help', [
    function(session, args, next) {

        console.log("#Inside Greeting Intent Dialog");
        builder.Prompts.choice(session, "I would be happy to help you.\nPlease choose one of the Services to assist you better", ['WMS', 'Firewall', 'Outlook/Remote Access\nSupport'], {
            retryPrompt: getString(),
            listStyle: builder.ListStyle.button,
            maxRetries: 2
        });
    },
    function(session, results) {
        if (results.response) {
            var selection = results.response.entity;
            // route to corresponding dialogs
            switch (selection) {
                case "WMS":
                    //session.send(msg);
                    session.endDialog();
                    //session.replaceDialog('/wmsinitiate');
                    session.replaceDialog('/WMS');
                    break;
                case "Firewall":
                    //session.send(msg);
                    session.endDialog();
                    session.replaceDialog('/Firewall');
                    break;
                case "Outlook/Remote Access\nSupport":
                    //session.send(msg);
                    session.endDialog();
                    session.replaceDialog('/ITSupport');
                    break;
            }
        } else {
            session.endDialog();
            session.replaceDialog('/Greeting11');
        }
    }
]).triggerAction({
    matches: 'help',
    intentThreshold:0.60
});

// ShareCalendar Dialog 

bot.dialog('/ShareCalendar', [
    function(session, args, next) {
        //console.log(session.message.text)
        //session.privateConversationData.userQuery = session.message.text
				console.log("*",session.message.text)
/* 		console.log("nhfjfhfjfhfjfhfk",session.privateConversationData.loginnumber)
 				if(session.privateConversationData.loginnumber != 1){
			session.send("please login first")
			session.beginDialog('/Loginbot');
		}
		else{ */ 
	console.log("2161",session.privateConversationData.ques);
   session.privateConversationData.userQuery = (String(session.privateConversationData.ques)=='undefined')?session.message.text:session.privateConversationData.ques;
   console.log('ashbksbdfkah',session.privateConversationData.userQuery);
        session.send("Sure I will help you in sharing calendar to outlook");
        webscrap(function(res) {
            if (res.length >= 0) {
				//Would you like to read or watch a video related to your topic?
				//Please chose one of the option to help you on Sharing calendar to outlook
                builder.Prompts.choice(session, "Would you like to read or watch a video related to **How to Share calendar to outlook**", ['Video', 'Document'], {
                    retryPrompt: getString(),
                    listStyle: builder.ListStyle.button,
                    maxRetries: 2
                });
            } else {
                session.send("We currently have no video available. Please follow the below content");
                console.log(session.privateConversationData.userQuery)
                qnamaker(session, session.privateConversationData.userQuery, function(res) {
                    if (res != "No good match found in the KB") {
                        session.send(res);
                        session.endDialog();
                        session.replaceDialog('/AnythingElse3');
                    } else {
                        var arr = session.privateConversationData.userQuery.split(" ");
                        var url_ques = "";
                        for (var i = 0; i < arr.length; i++) {
                            if (i == (arr.length - 1)) {
                                url_ques = url_ques + arr[i]
                                url_final = "https://support.office.com/search/results?query=" + url_ques
                                console.log(url_ques)
                                console.log(url_final)
                                try {
                                    request(url_final, function(error, response, html) {
                                        if (error) {
                                            throw (error);
                                        }
                                        if (!error && response.statusCode == 200) {
                                            abc(html, function(res) {
                                                //console.log(res)
                                                var urlbutton = [];
                                                urlbutton.push(builder.CardAction.openUrl(session, res[2][0], "Click here to know more"));
                                                var attachments1 = [];
                                                var card1 = CreateHeroCard(session, builder, res[0][0], res[1][0], " ", " ", urlbutton);
                                                attachments1.push(card1);
                                                var msg1 = new builder.Message(session).attachments(attachments1);
                                                session.send(msg1);
                                                var urlbutton1 = [];
                                                urlbutton1.push(builder.CardAction.openUrl(session, res[2][1], "Click here to know more"));
                                                var attachments2 = [];
                                                var card2 = CreateHeroCard(session, builder, res[0][1], res[1][1], " ", " ", urlbutton1);
                                                attachments2.push(card2);
                                                var msg2 = new builder.Message(session).attachments(attachments2);
                                                session.send(msg2);
                                                var urlbutton2 = [];
                                                urlbutton2.push(builder.CardAction.openUrl(session, res[2][2], "Click here to know more"));
                                                var attachments3 = [];
                                                var card3 = CreateHeroCard(session, builder, res[0][2], res[1][2], " ", " ", urlbutton2);
                                                attachments3.push(card3);
                                                var msg3 = new builder.Message(session).attachments(attachments3);
                                                session.send(msg3);
                                                session.endDialog();
                                                session.replaceDialog('/AnythingElse3');
                                            });
                                        }
                                    });
                                } catch (ex) {
                                    console.log('Issue in connecting outlook support url for share calendar', ex);
                                }

                            } else {
                                url_ques = url_ques + arr[i] + '+'
                            }
                        }
                    }
                });
            }
        });
		//}
    },
    function(session, results) {
        if (results.response) {
            var selection = results.response.entity;
            // route to corresponding dialogs
            switch (selection) {
                case "Video":
                    var msg = new builder.Message(session).attachments([{
                        contentType: "video/mp4",
                        name: "How to Share calendar to outlook",
                        //https://www.youtube.com/embed/aDa2xBAfSFw
                        //"http://elearning/bunit/it/it-help-center/share-calendar.mp4"
                        contentUrl: "http://elearning/bunit/it/it-help-center/share-calendar.mp4"
                    }]);
                    session.send("***How to Share calendar to outlook***");
                    session.send(msg);
                    session.endDialog();
                    session.replaceDialog('/AnythingElse3');
                    break;
                case "Document":
                    console.log(session.privateConversationData.userQuery)
                    qnamaker(session, session.privateConversationData.userQuery, function(res) {
                        if (res != "No good match found in the KB") {
                            session.send(res);
                            session.endDialog();
                            session.replaceDialog('/AnythingElse3');
                        } else {
                            var arr = session.privateConversationData.userQuery.split(" ");
                            var url_ques = "";
                            for (var i = 0; i < arr.length; i++) {
                                if (i == (arr.length - 1)) {
                                    url_ques = url_ques + arr[i]
                                    url_final = "https://support.office.com/search/results?query=" + url_ques
                                    console.log(url_ques)
                                    console.log(url_final)
                                    try {
                                        request(url_final, function(error, response, html) {
                                            if (error) {
                                                throw (error);
                                            }
                                            if (!error && response.statusCode == 200) {
                                                abc(html, function(res) {
                                                    //console.log(res)
                                                    var urlbutton = [];
                                                    urlbutton.push(builder.CardAction.openUrl(session, res[2][0], "Click here to know more"));
                                                    var attachments1 = [];
                                                    var card1 = CreateHeroCard(session, builder, res[0][0], res[1][0], " ", " ", urlbutton);
                                                    attachments1.push(card1);
                                                    var msg1 = new builder.Message(session).attachments(attachments1);
                                                    session.send(msg1);
                                                    var urlbutton1 = [];
                                                    urlbutton1.push(builder.CardAction.openUrl(session, res[2][1], "Click here to know more"));
                                                    var attachments2 = [];
                                                    var card2 = CreateHeroCard(session, builder, res[0][1], res[1][1], " ", " ", urlbutton1);
                                                    attachments2.push(card2);
                                                    var msg2 = new builder.Message(session).attachments(attachments2);
                                                    session.send(msg2);
                                                    var urlbutton2 = [];
                                                    urlbutton2.push(builder.CardAction.openUrl(session, res[2][2], "Click here to know more"));
                                                    var attachments3 = [];
                                                    var card3 = CreateHeroCard(session, builder, res[0][2], res[1][2], " ", " ", urlbutton2);
                                                    attachments3.push(card3);
                                                    var msg3 = new builder.Message(session).attachments(attachments3);
                                                    session.send(msg3);
                                                    session.endDialog();
                                                    session.replaceDialog('/AnythingElse3');
                                                });
                                            }
                                        });
                                    } catch (ex) {
                                        console.log('Issue in connecting outlook support url for share calendar', ex);
                                    }



                                } else {
                                    url_ques = url_ques + arr[i] + '+'
                                }
                            }
                        }
                    });
                    break;
            }
        } else {

            session.endDialog();
            session.replaceDialog('/Greeting11');
        }
    }
]).triggerAction({
    matches: 'ShareCalendar',
    intentThreshold:0.60
});
// AddCalendar Dialog
bot.dialog('/AddCalendar', [
    function(session, args, next) {
		      //console.log("*",session.privateConversationData.loginnumber,session.message.text)
 /*      if(session.privateConversationData.loginnumber != 1){
			  session.send("Please login first")
			  session.beginDialog('/Loginbot');
		  }
		  else{ */
        console.log("!!!",session.message.text)
       // session.privateConversationData.userQuery = session.message.text
       //var abcde = String(session.privateConversationData.ques);
session.privateConversationData.userQuery=(String(session.privateConversationData.ques) == 'undefined')?session.message.text:session.privateConversationData.ques;
        //session.privateConversationData.userQuery= session.message.text
        //console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqq',session.privateConversationData.userQuery)
        session.send("Sure I will help you in adding calendar to outlook");
        webscrap(function(res) {
            if (res.length > 0) {
				
				//Would you like to read or watch a video related to your topic?
				//Please chose one of the option to help you on adding calendar to outlook
                builder.Prompts.choice(session, "Would you like to read or watch a video related to **How to add calendar to outlook**", ['Video', 'Document'], {
                    retryPrompt: getString(),
                    listStyle: builder.ListStyle.button,
                    maxRetries: 2
                });
            } else {
                session.send("We currently have no video available. Please follow the below content");
                console.log(session.privateConversationData.userQuery)
                qnamaker(session, session.privateConversationData.userQuery, function(res) {
                    if (res != "No good match found in the KB") {
                        session.send(res);
                        session.endDialog();
                        session.replaceDialog('/AnythingElse3');
                    } else {
                        var arr = session.privateConversationData.userQuery.split(" ");
                        var url_ques = "";
                        for (var i = 0; i < arr.length; i++) {
                            if (i == (arr.length - 1)) {
                                url_ques = url_ques + arr[i]
                                url_final = "https://support.office.com/search/results?query=" + url_ques
                                console.log(url_ques)
                                console.log(url_final)
                                try {
                                    request(url_final, function(error, response, html) {
                                        if (error) {
                                            throw (error);
                                        }
                                        if (!error && response.statusCode == 200) {
                                            abc(html, function(res) {
                                                //console.log(res)
                                                var urlbutton = [];
                                                urlbutton.push(builder.CardAction.openUrl(session, res[2][0], "Click here to know more"));
                                                var attachments1 = [];
                                                var card1 = CreateHeroCard(session, builder, res[0][0], res[1][0], " ", " ", urlbutton);
                                                attachments1.push(card1);
                                                var msg1 = new builder.Message(session).attachments(attachments1);
                                                session.send(msg1);
                                                var urlbutton1 = [];
                                                urlbutton1.push(builder.CardAction.openUrl(session, res[2][1], "Click here to know more"));
                                                var attachments2 = [];
                                                var card2 = CreateHeroCard(session, builder, res[0][1], res[1][1], " ", " ", urlbutton1);
                                                attachments2.push(card2);
                                                var msg2 = new builder.Message(session).attachments(attachments2);
                                                session.send(msg2);
                                                var urlbutton2 = [];
                                                urlbutton2.push(builder.CardAction.openUrl(session, res[2][2], "Click here to know more"));
                                                var attachments3 = [];
                                                var card3 = CreateHeroCard(session, builder, res[0][2], res[1][2], " ", " ", urlbutton2);
                                                attachments3.push(card3);
                                                var msg3 = new builder.Message(session).attachments(attachments3);
                                                session.send(msg3);
                                                session.endDialog();
                                                session.replaceDialog('/AnythingElse3');
                                            });
                                        }
                                    });
                                } catch (ex) {
                                    console.log('Issue in connecting outlook support url for add calendar', ex);
                                }
                            } else {
                                url_ques = url_ques + arr[i] + '+'
                            }
                        }
                    }
                });
            }
        });
	//}
    },
    function(session, results) {
        if (results.response) {
            var selection = results.response.entity;
            // route to corresponding dialogs
            switch (selection) {
                case "Video":
                    var msg = new builder.Message(session).attachments([{
                        contentType: "video/mp4",
                        name: "How to add calendar to outlook",
                        contentUrl: "http://elearning/bunit/it/it-help-center/share-calendar.mp4"
                    }]);
                    session.send("***How to add calendar to outlook***");
                    session.send(msg);
                    session.endDialog();
                    session.replaceDialog('/AnythingElse3');

                    break;
                case "Document":
                    console.log(session.privateConversationData.userQuery)
                    console.log('443443444444444444444444444444444444',session.privateConversationData.userQuery)
                    qnamaker(session, session.privateConversationData.userQuery, function(res) {
                        if (res != "No good match found in the KB") {
                            session.send(res);
                            session.endDialog();
                            session.replaceDialog('/AnythingElse3');
                        } else {
                            var arr = session.privateConversationData.userQuery.split(" ");
                            var url_ques = "";
                            for (var i = 0; i < arr.length; i++) {
                                if (i == (arr.length - 1)) {
                                    url_ques = url_ques + arr[i]
                                    url_final = "https://support.office.com/search/results?query=" + url_ques
                                    console.log(url_ques)
                                    console.log(url_final)
                                    try {
                                        request(url_final, function(error, response, html) {
                                            if (error) {
                                                throw (error);
                                            }
                                            if (!error && response.statusCode == 200) {
                                                abc(html, function(res) {
                                                    //console.log(res)
                                                    var urlbutton = [];
                                                    urlbutton.push(builder.CardAction.openUrl(session, res[2][0], "Click here to know more"));
                                                    var attachments1 = [];
                                                    var card1 = CreateHeroCard(session, builder, res[0][0], res[1][0], " ", " ", urlbutton);
                                                    attachments1.push(card1);
                                                    var msg1 = new builder.Message(session).attachments(attachments1);
                                                    session.send(msg1);
                                                    var urlbutton1 = [];
                                                    urlbutton1.push(builder.CardAction.openUrl(session, res[2][1], "Click here to know more"));
                                                    var attachments2 = [];
                                                    var card2 = CreateHeroCard(session, builder, res[0][1], res[1][1], " ", " ", urlbutton1);
                                                    attachments2.push(card2);
                                                    var msg2 = new builder.Message(session).attachments(attachments2);
                                                    session.send(msg2);
                                                    var urlbutton2 = [];
                                                    urlbutton2.push(builder.CardAction.openUrl(session, res[2][2], "Click here to know more"));
                                                    var attachments3 = [];
                                                    var card3 = CreateHeroCard(session, builder, res[0][2], res[1][2], " ", " ", urlbutton2);
                                                    attachments3.push(card3);
                                                    var msg3 = new builder.Message(session).attachments(attachments3);
                                                    session.send(msg3);
                                                    session.endDialog();
                                                    session.replaceDialog('/AnythingElse3');
                                                });
                                            }
                                        });
                                    } catch (ex) {
                                        console.log('Issue in connecting outlook support url for add calendar', ex);
                                    }

                                } else {
                                    url_ques = url_ques + arr[i] + '+'
                                }
                            }
                        }
                    });
                    break;
            }
        } else {
            session.endDialog();
            session.replaceDialog('/Greeting11');
        }
    }
]).triggerAction({
    matches: 'AddCalendar',
    intentThreshold:0.60
});
// Email_iPhone/iPad Dialog
bot.dialog('/Email_iPhone/iPad', [
    function(session, args, next) {
/* 		      console.log("*",session.privateConversationData.loginnumber,session.message.text)
      if(session.privateConversationData.loginnumber != 1){
			  session.send("Please login first")
			  session.beginDialog('/Loginbot');
		  }
		  else{ */
        console.log(session.message.text)
       // session.privateConversationData.userQuery = session.message.text
session.privateConversationData.userQuery=(String(session.privateConversationData.ques) == 'undefined')?session.message.text:session.privateConversationData.ques;
        session.send("Sure I will help you on setting up NextEra Email on Your iPhone/iPad");
        webscrap(function(res) {
            if (res.length > 0) {
				//Would you like to read or watch a video related to
				//Please chose one of the option to help you on setting Up NextEra Email on Your iPhone/iPad
                builder.Prompts.choice(session, "Would you like to read or watch a video related to **How to Set Up NextEra Email on Your iPhone/iPad**", ['Video', 'Document'], {
                    retryPrompt: getString(),
                    listStyle: builder.ListStyle.button,
                    maxRetries: 2
                });
            } else {
                session.send("We currently have no video available. Please follow the below content");
                console.log(session.privateConversationData.userQuery)
                qnamaker(session, session.privateConversationData.userQuery, function(res) {
                    if (res != "No good match found in the KB") {
                        session.send(res);
                        session.endDialog();
                        session.replaceDialog('/AnythingElse3');
                    } else {
                        session.send('Sorry, we do not have any document for you question');
                        session.endDialog();
                        session.replaceDialog('/AnythingElse3');
                    }
                });
            }
        });
	//}
    },
    function(session, results) {
        if (results.response) {
            var selection = results.response.entity;
            // route to corresponding dialogs
            switch (selection) {
                case "Video":

                    var msg = new builder.Message(session).attachments([{
                        contentType: "video/mp4",
                        name: "How to Set Up NextEra Email on Your iPhone/iPad",
                        contentUrl: "http://elearning/bunit/it/it-help-center/email-on-mobile.mp4"
                    }]);
                  //  session.send("");
                    session.send("***How to Set Up NextEra Email on Your iPhone/iPad***");
                    session.send(msg);
                    session.endDialog();
                    session.replaceDialog('/AnythingElse3');
                    break;

                case "Document":
                    console.log(session.privateConversationData.userQuery)
                    qnamaker(session, session.privateConversationData.userQuery, function(res) {
                        if (res != "No good match found in the KB") {
                            session.send(res);
                            session.endDialog();
                            session.replaceDialog('/AnythingElse3');
                        } else {
                            session.send("Sorry, we do not have answer to your question");
                            session.endDialog();
                            session.replaceDialog('/AnythingElse3');
                        }
                    });
                    break;
            }
        } else {
            session.endDialog();
            session.replaceDialog('/Greeting11');
        }
    }
]).triggerAction({
    matches: 'Email_iPhone/iPad',
    intentThreshold:0.60
});
bot.dialog('/Email_ iOS11', [
    function(session, args, next) {
/* 		      console.log("*",session.privateConversationData.loginnumber,session.message.text)
      if(session.privateConversationData.loginnumber != 1){
			  session.send("Please login first")
			  session.beginDialog('/Loginbot');
		  } */
		 // else{
        console.log(session.message.text)
       // session.privateConversationData.userQuery = session.message.text
session.privateConversationData.userQuery=(String(session.privateConversationData.ques) == 'undefined')?session.message.text:session.privateConversationData.ques;
        session.send("Sure I will help you on adding Email on iOS 11 Devices");
        webscrap(function(res) {
            if (res.length > 0) {
				//Would you like to read or watch a video related to
				//Please chose one of the option to help you on adding Email on iOS 11 Devices
                builder.Prompts.choice(session, "Would you like to read or watch a video related to **How to Add Email on iOS 11 Devices**", ['Video', 'Document'], {
                    retryPrompt: getString(),
                    listStyle: builder.ListStyle.button,
                    maxRetries: 2
                });
            } else {
                session.send("We currently have no video available. Please follow the below content");
                console.log(session.privateConversationData.userQuery)
                qnamaker(session, session.privateConversationData.userQuery, function(res) {
                    if (res != "No good match found in the KB") {
                        session.send(res);
                        session.endDialog();
                        session.replaceDialog('/AnythingElse3');
                    } else {
                        session.send('Sorry, we do not have any document for you question');
                        session.endDialog();
                        session.replaceDialog('/AnythingElse3');
                    }
                });
            }
        });
	//}
    },
    function(session, results) {
        if (results.response) {
            var selection = results.response.entity;
            // route to corresponding dialogs
            switch (selection) {
                case "Video":

                    var msg = new builder.Message(session).attachments([{
                        contentType: "video/mp4",
                        name: "How to Add Email on iOS 11 Devices",
                        contentUrl: "http://elearning/bunit/it/it-help-center/ios-11-email.mp4"
                    }]);
                    session.send("***How to Add Email on iOS 11 Devices***");
                    session.send(msg);
                    session.endDialog();
                    session.replaceDialog('/AnythingElse3');
                    break;
                case "Document":
                    console.log(session.privateConversationData.userQuery)
                    qnamaker(session, session.privateConversationData.userQuery, function(res) {
                        if (res != "No good match found in the KB") {
                            session.send(res);
                            session.endDialog();
                            session.replaceDialog('/AnythingElse3');
                        } else {
                            session.send("Sorry, we don not have answer to your question");
                            session.endDialog();
                            session.replaceDialog('/AnythingElse3');
                        }
                    });
                    break;
            }
        } else {
            session.endDialog();
            session.replaceDialog('/Greeting11');
        }
    }
]).triggerAction({
    matches: 'Email_ iOS11',
    intentThreshold:0.60
});

bot.dialog('/LostRemoteAccessToken', [
    function(session, args, next) {
        console.log("*",session.message.text)
				//console.log(session.message.text)
/* 		console.log("nhfjfhfjfhfjfhfk",session.privateConversationData.loginnumber)
 				if(session.privateConversationData.loginnumber != 1){
			session.send("please login first")
			session.beginDialog('/Loginbot');
		}
		else{ */ 
        //session.privateConversationData.userQuery = session.message.text
session.privateConversationData.userQuery=(String(session.privateConversationData.ques) == 'undefined')?session.message.text:session.privateConversationData.ques;
        session.send("I am sorry that you lost your Remote access token. I can definitely help you with that");
        webscrap(function(res) {
            if (res.length > 0) {
				//Would you like to read or watch a video related to
				//Please chose one of the option to help you on lost or misplaced remote token
                builder.Prompts.choice(session, "Would you like to read or watch a video related to **How to Report a Lost Remote Access Token**", ['Video', 'Document'], {
                    retryPrompt: getString(),
                    listStyle: builder.ListStyle.button,
                    maxRetries: 2
                });
            } else {
                session.send("We currently have no video available. Please follow the below content");
                console.log(session.privateConversationData.userQuery)
                qnamaker(session, session.privateConversationData.userQuery, function(res) {
                    if (res != "No good match found in the KB") {
                        session.send(res);
                        session.endDialog();
                        session.replaceDialog('/AnythingElse3');
                    } else {
                        session.send('Sorry, we do not have any document for you question');
                        session.endDialog();
                        session.replaceDialog('/AnythingElse3');
                    }
                });
            }
        })
		//}
    },
    function(session, results) {
        if (results.response) {
            var selection = results.response.entity;
            // route to corresponding dialogs
            switch (selection) {
                case "Video":

                    var msg = new builder.Message(session).attachments([{
                        contentType: "video/mp4",
                        name: "How to Report a Lost Remote Access Token",
                        contentUrl: "http://elearning/bunit/it/it-help-center/report-lost-token.mp4"
                    }]);
                     session.send("***How to Report a Lost Remote Access Token***");
                    session.send(msg);
                    session.endDialog();
                    session.replaceDialog('/AnythingElse3');

                    break;
                case "Document":
                    console.log(session.privateConversationData.userQuery)
                    qnamaker(session, session.privateConversationData.userQuery, function(res) {
                        if (res != "No good match found in the KB") {
                            session.send(res);
                            session.endDialog();
                            session.replaceDialog('/AnythingElse3');
                        } else {
                            session.send("Sorry, we do not have answer to your question");
                            session.endDialog();
                            session.replaceDialog('/AnythingElse3');
                        }
                    });
                    break;
            }
        } else {
            session.endDialog();
            session.replaceDialog('/Greeting11');
        }
    }
]).triggerAction({
    matches: 'LostRemoteAccessToken',
    intentThreshold:0.60
});
//****
bot.dialog('/TroubleshootRemoteAccessToken', [
    function(session, args, next) {
		    //  console.log("*",session.privateConversationData.loginnumber,session.message.text)
/*       if(session.privateConversationData.loginnumber != 1){
			  session.send("Please login first")
			  session.beginDialog('/Loginbot');
		  }
		  else{ */
        console.log(session.message.text)
        //session.privateConversationData.userQuery = session.message.text
session.privateConversationData.userQuery=(String(session.privateConversationData.ques) == 'undefined')?session.message.text:session.privateConversationData.ques;
        session.send("Sure I will help you on troubleshooting Remote Access Token");
        webscrap(function(res) {
            if (res.length > 0) {
				//Would you like to read or watch a video related to
				//Please chose one of the option to help you on Troubleshooting Remote Access Token
                builder.Prompts.choice(session, "Would you like to read or watch a video related to **How to Troubleshoot Remote Access Token**", ['Video', 'Document'], {
                    retryPrompt: getString(),
                    listStyle: builder.ListStyle.button,
                    maxRetries: 2
                });
            } else {
                session.send("We currently have no video available. Please follow the below content");
                console.log(session.privateConversationData.userQuery)
                qnamaker(session, session.privateConversationData.userQuery, function(res) {
                    if (res != "No good match found in the KB") {
                        session.send(res);
                        session.endDialog();
                        session.replaceDialog('/AnythingElse3');
                    } else {
                        session.send('Sorry, we do not have any document for you question');
                        session.endDialog();
                        session.replaceDialog('/AnythingElse3');
                    }
                });
            }
        });
	//}
    },
    function(session, results) {
        if (results.response) {
            var selection = results.response.entity;
            // route to corresponding dialogs
            switch (selection) {
                case "Video":

                    var msg = new builder.Message(session).attachments([{
                        contentType: "video/mp4",
                        name: "How to Troubleshoot Remote Access Token",
                        contentUrl: "http://elearning/bunit/it/it-help-center/troubleshoot-token.mp4"
                    }]);
                    session.send("***How to Troubleshoot Remote Access Token***");
                    session.send(msg);
                    session.endDialog();
                    session.replaceDialog('/AnythingElse3');

                    break;
                case "Document":
                    console.log(session.privateConversationData.userQuery)
                    qnamaker(session, session.privateConversationData.userQuery, function(res) {
                        if (res != "No good match found in the KB") {
                            session.send(res);
                            session.endDialog();
                            session.replaceDialog('/AnythingElse3');
                        } else {
                            session.send("Sorry, we do not have answer to your question");
                            session.endDialog();
                            session.replaceDialog('/AnythingElse3');
                        }
                    });
                    break;
            }
        } else {
            session.endDialog();
            session.replaceDialog('/Greeting11');
        }
    }
]).triggerAction({
    matches: 'TroubleshootRemoteAccessToken',
    intentThreshold:0.60
});
//*****
bot.dialog('/UnlockYourPassword', [
    function(session, args, next) {
/* 		      console.log("*",session.privateConversationData.loginnumber,session.message.text)
      if(session.privateConversationData.loginnumber != 1){
			  session.send("Please login first")
			  session.beginDialog('/Loginbot');
		  }
		  else{ */
        //console.log(session.message.text)
        //session.privateConversationData.userQuery = session.message.text
session.privateConversationData.userQuery=(String(session.privateConversationData.ques) == 'undefined')?session.message.text:session.privateConversationData.ques;
        session.send("Sure I will help you in unlocking/resetting your password");
        webscrap(function(res) {
            if (res.length > 0) {
				//Would you like to read or watch a video related to
				//Please chose one of the option to help you on unlocking or resetting password
                builder.Prompts.choice(session, "Would you like to read or watch a video related to **How to Reset or Unlock Your Password Using Press 1**", ['Video', 'Document'], {
                    retryPrompt: getString(),
                    listStyle: builder.ListStyle.button,
                    maxRetries: 2
                });
            } else {
                session.send("We currently have no video available. Please follow the below content");
                console.log(session.privateConversationData.userQuery)
                qnamaker(session, session.privateConversationData.userQuery, function(res) {
                    if (res != "No good match found in the KB") {
                        session.send(res);
                        session.endDialog();
                        session.replaceDialog('/AnythingElse3');
                    } else {
                        session.send('Sorry, we do not have any document for you question');
                        session.endDialog();
                        session.replaceDialog('/AnythingElse3');
                    }
                });
            }
        })
	//}
    },
    function(session, results) {
        if (results.response) {
            var selection = results.response.entity;
            // route to corresponding dialogs
            switch (selection) {
                case "Video":

                    var msg = new builder.Message(session).attachments([{
                        contentType: "video/mp4",
                        name: "How to Reset or Unlock Your Password Using Press 1",
                        contentUrl: "http://elearning/bunit/it/it-help-center/press-one.mp4"
                    }]);
                     session.send("***How to Reset or Unlock Your Password Using Press 1***");
                    session.send(msg);
                    session.endDialog();
                    session.replaceDialog('/AnythingElse3');

                    break;
                case "Document":
                    console.log(session.privateConversationData.userQuery)
                    qnamaker(session, session.privateConversationData.userQuery, function(res) {
                        if (res != "No good match found in the KB") {
                            session.send(res);
                            session.endDialog();
                            session.replaceDialog('/AnythingElse3');
                        } else {
                            session.send("Sorry, we do not have answer to your question");
                            session.endDialog();
                            session.replaceDialog('/AnythingElse3');
                        }
                    });
                    break;
            }
        } else {

            session.endDialog();
            session.replaceDialog('/Greeting11');
        }
    }
]).triggerAction({
    matches: 'UnlockYourPassword',
    intentThreshold:0.60
});
//****
bot.dialog('/ReplaceHardToken', [
    function(session, args, next) {
/* 		      console.log("*",session.privateConversationData.loginnumber,session.message.text)
      if(session.privateConversationData.loginnumber != 1){
			  session.send("Please login first")
			  session.beginDialog('/Loginbot');
		  }
		  else{ */
        //console.log(session.message.text)
        //session.privateConversationData.userQuery = session.message.text
session.privateConversationData.userQuery=(String(session.privateConversationData.ques) == 'undefined')?session.message.text:session.privateConversationData.ques;
        session.send("Sure I will help you in replacing hard token");
        webscrap(function(res) {
            if (res.length > 0) {
				//Would you like to read or watch a video related to
				//Please chose one of the option to help you on replacing hard token
                builder.Prompts.choice(session, "Would you like to read or watch a video related to **How to Replace Hard token with a Soft token**", ['Video', 'Document'], {
                    retryPrompt: getString(),
                    listStyle: builder.ListStyle.button,
                    maxRetries: 2
                });
            } else {
                session.send("We currently have no video available. Please follow the below content");
                console.log(session.privateConversationData.userQuery)
                qnamaker(session, session.privateConversationData.userQuery, function(res) {
                    if (res != "No good match found in the KB") {
                        session.send(res);
                        session.endDialog();
                        session.replaceDialog('/AnythingElse3');
                    } else {
                        session.send('Sorry, we do not have any document for you question');
                        session.endDialog();
                        session.replaceDialog('/AnythingElse3');
                    }
                });
            }
        });
	//}
    },
    function(session, results) {
        if (results.response) {
            var selection = results.response.entity;
            // route to corresponding dialogs
            switch (selection) {
                case "Video":

                    var msg = new builder.Message(session).attachments([{
                        contentType: "video/mp4",
                        name: "How to Replace Hard token with a Soft token",
                        contentUrl: "http://elearning/bunit/it/it-help-center/Replacing-hard-with-soft-token.mp4"
                    }]);
                      session.send("***How to Replace Hard token with a Soft token***");
                    session.send(msg);
                    session.endDialog();
                    session.replaceDialog('/AnythingElse3');


                    break;
                case "Document":
                    console.log(session.privateConversationData.userQuery)
                    qnamaker(session, session.privateConversationData.userQuery, function(res) {
                        if (res != "No good match found in the KB") {
                            session.send(res);
                            session.endDialog();
                            session.replaceDialog('/AnythingElse3');
                        } else {
                            session.send("Sorry, we do not have answer to your question");
                            session.endDialog();
                            session.replaceDialog('/AnythingElse3');
                        }
                    });
                    break;
            }
        } else {
            session.endDialog();
            session.replaceDialog('/Greeting11');
        }
    }
]).triggerAction({
    matches: 'ReplaceHardToken',
    intentThreshold:0.60
});
//****
bot.dialog('/ConnectRemoteAccess', [
    function(session, args, next) {
/* 		      console.log("*",session.privateConversationData.loginnumber,session.message.text)
      if(session.privateConversationData.loginnumber != 1){
			  session.send("Please login first")
			  session.beginDialog('/Loginbot');
		  }
		  else{ */
        console.log(session.message.text)
session.privateConversationData.userQuery=(String(session.privateConversationData.ques) == 'undefined')?session.message.text:session.privateConversationData.ques;
       // session.privateConversationData.userQuery = session.message.text
        session.send("Sure I will help you on connecting with remote access");
        webscrap(function(res) {
            if (res.length > 0) {
				//Would you like to read or watch a video related to
				//Please chose one of the option to help you on connecting with remote access
                builder.Prompts.choice(session, "Would you like to read or watch a video related to **How to Connect to Remote Access on a Corporate Device**", ['Video', 'Document'], {
                    retryPrompt: getString(),
                    listStyle: builder.ListStyle.button,
                    maxRetries: 2
                });
            } else {
                session.send("We currently have no video available. Please follow the below content");
                console.log(session.privateConversationData.userQuery)
                qnamaker(session, session.privateConversationData.userQuery, function(res) {
                    if (res != "No good match found in the KB") {
                        session.send(res);
                        session.endDialog();
                        session.replaceDialog('/AnythingElse3');
                    } else {
                        session.send('Sorry, we do not have any document for you question');
                        session.endDialog();
                        session.replaceDialog('/AnythingElse3');
                    }
                });
            }
        });
	//}
    },
    function(session, results) {
        if (results.response) {
            var selection = results.response.entity;
            // route to corresponding dialogs
            switch (selection) {
                case "Video":

                    var msg = new builder.Message(session).attachments([{
                        contentType: "video/mp4",
                        name: "How to Connect to Remote Access on a Corporate Device",
                        contentUrl: "http://elearning/bunit/it/it-help-center/Connecting-to-IPSEC.mp4"
                    }]);
                    session.send("***How to Connect to Remote Access on a Corporate Device***");
                    session.send(msg);
                    session.endDialog();
                    session.replaceDialog('/AnythingElse3');

                    break;
                case "Document":
                    console.log(session.privateConversationData.userQuery)
                    qnamaker(session, session.privateConversationData.userQuery, function(res) {
                        if (res != "No good match found in the KB") {
                            session.send(res);
                            session.endDialog();
                            session.replaceDialog('/AnythingElse3');
                        } else {
                            session.send("Sorry, we do not have answer to your question");
                            session.endDialog();
                            session.replaceDialog('/AnythingElse3');
                        }
                    });
                    break;
            }
        } else {
            session.endDialog();
            session.replaceDialog('/Greeting11');
        }
    }
]).triggerAction({
    matches: 'ConnectRemoteAccess',
    intentThreshold:0.60
});
//****
bot.dialog('/UseRemoteDesktop', [
    function(session, args, next) {
/* 		      console.log("*",session.privateConversationData.loginnumber,session.message.text)
      if(session.privateConversationData.loginnumber != 1){
			  session.send("Please login first")
			  session.beginDialog('/Loginbot');
		  }
		  else{ */
        console.log(session.message.text)
        //session.privateConversationData.userQuery = session.message.text
session.privateConversationData.userQuery=(String(session.privateConversationData.ques) == 'undefined')?session.message.text:session.privateConversationData.ques;
console.log("3037",session.privateConversationData.userQuery)
        session.send("Sure I  will guide you on how to use Remote Desktop");
        webscrap(function(res) {
            if (res.length > 0) {
				//Would you like to read or watch a video related to
				//Please chose one of the option to help you on **How to Use Remote Desktop
                builder.Prompts.choice(session, "Would you like to read or watch a video related to **How to Use Remote Desktop**", ['Video', 'Document'], {
                    retryPrompt: getString(),
                    listStyle: builder.ListStyle.button,
                    maxRetries: 2
                });
            } else {
                session.send("We currently have no video available. Please follow the below content");
                console.log(session.privateConversationData.userQuery)
                qnamaker(session, session.privateConversationData.userQuery, function(res) {
                    if (res != "No good match found in the KB") {
                        session.send(res);
                        session.endDialog();
                        session.replaceDialog('/AnythingElse3');
                    } else {
                        session.send('Sorry, we do not have any document for you question');
                        session.endDialog();
                        session.replaceDialog('/AnythingElse3');
                    }
                });
            }
        });
	//}
    },
    function(session, results) {
        console.log("results.response", results);
        if (results.response) {
            var selection = results.response.entity;
            // route to corresponding dialogs
            switch (selection) {
                case "Video":

                    var msg = new builder.Message(session).attachments([{
                        contentType: "video/mp4",
                        name: "How to Use Remote Desktop",
                        contentUrl: "http://elearning/bunit/it/it-help-center/Remote-desktop.mp4"
                    }]);
                    session.send("***How to Use Remote Desktop***");
                    session.send(msg);
                    session.endDialog();
                    session.replaceDialog('/AnythingElse3');

                    break;
                case "Document":
                    console.log("3086",session.privateConversationData.userQuery)
                    qnamaker(session, session.privateConversationData.userQuery, function(res) {
                        if (res != "No good match found in the KB") {
                            session.send(res);
                            session.endDialog();
                            session.replaceDialog('/AnythingElse3');
                        } else {
                            session.send("Sorry, we do not have answer to your question");
                            session.endDialog();
                            session.replaceDialog('/AnythingElse3');
                        }
                    });
                    break;
            }
        } else {
            session.endDialog();
            session.replaceDialog('/Greeting11');
        }
    }
]).triggerAction({
    matches: 'UseRemoteDesktop',
    intentThreshold:0.60
});
//********************
//firewall 20_12

// by chandra

bot.dialog('/firewall_request', [function(session) {



        builder.Prompts.choice(session, "How may I help you with firewall:", "New Firewall request|Enquire existing Firewall|Track Firewall request|Firewall-FAQs", {
            listStyle: 3
        });
    },
    function(session, results) {
        if (results.response) {
            session.privateConversationData.businesschoice = results.response.entity;
        }
        if (session.privateConversationData.businesschoice === 'New Firewall request') {

            session.beginDialog('/new_firewall_request');
        }
        if (session.privateConversationData.businesschoice === 'Enquire existing Firewall') {

            session.beginDialog('/existing_firewall_request');
        }
        if (session.privateConversationData.businesschoice === 'Firewall-FAQs') {

            session.beginDialog('/FAQ_firewall_request');
        }
         if (session.privateConversationData.businesschoice === 'Track Firewall request') {

            session.beginDialog('/Track_Request');
        }

    }
                ]);
				
//by chandra
bot.dialog('/Track_Request',[function(session){
builder.Prompts.text(session, "Please Enter your request ticket no");
    },
    function(session, results) {
        if (results.response) {
        console.log(session.message.text);
        
        MongoClient.connect(url, function(err, db) {
        db.collection('statusTable').find({request:session.message.text}).toArray(function(err,result) {
        if(result.length>0) 
        {
        console.log(result[0].status);
        session.send("Hi status for ticket no **"+session.message.text+"** is **"+result[0].status+"**");
        session.beginDialog('/choice_check_in_FAQ'); 
        }
        else
         {session.send("**Invalid Request**");
          session.beginDialog('/choice_check_in_FAQ');   
          }
      db.close();
  
  });
  
  
  });
  
  
      
      
      }}]);
        

bot.dialog('/firewall_request_exit', [function(session) {



        builder.Prompts.choice(session, "How may I help you with firewall:", "New Firewall request|Enquire existing Firewall|Track Firewall request|Firewall-FAQs|Exit", {
            listStyle: 3
        });
    },
    function(session, results) {
        if (results.response) {
            session.privateConversationData.businesschoice = results.response.entity;
        }
        if (session.privateConversationData.businesschoice === 'New Firewall request') {

            session.beginDialog('/new_firewall_request');
        }
        if (session.privateConversationData.businesschoice === 'Enquire existing Firewall') {

            session.beginDialog('/existing_firewall_request');
        }
        if (session.privateConversationData.businesschoice === 'Firewall-FAQs') {

            session.beginDialog('/FAQ_firewall_request');
        }
if (session.privateConversationData.businesschoice === 'Exit') {

            session.beginDialog('/after_exit_from_FAQ');
        }
    }
                ]);
				
// by chandra

bot.dialog('/new_firewall_request', function(session) {
/*       console.log("*",session.privateConversationData.loginnumber,session.message.text)
      if(session.privateConversationData.loginnumber != 1){
                                                  session.send("Please login first")
                                                  session.beginDialog('/Loginbot');
                                  }
                                  else{  */   
    
    var msg = new builder.Message(session).addAttachment(new_firewall_card);
    
    console.log("SM", session.message, session.message.value);
    if (session.message && session.message.value) {
    session.privateConversationData.formName='Firewall Request Form';
        validate_new_firewall_Request(session, session.message.value);
        return;
    }
    session.send('I can certainly help you. Here is the template. Please complete it and click on Validate button.');
    session.send(msg);
//}
});

bot.dialog('/new_firewall_rest_info_request', function(session) {
    console.log("****",session.privateConversationData.ManagerName);
    
//**Shubham

var new_firewall_rest_info_card = {
    'contentType': 'application/vnd.microsoft.card.adaptive',
    'content': {
        '$schema': 'http://adaptivecards.io/schemas/adaptive-card.json',
        'type': 'AdaptiveCard',
        'version': '1.0',
        'body': [{
            'type': 'Container',
            'speak': '<s>Hello!</s><s>Please fill out the following form</s>',
            'items': [{
                'type': 'ColumnSet',
                'columns': [{
                        'type': 'Column',
                        'size': 'auto',
                        'items': [{
                            'type': 'Image',
                            'url': 'https://www.brandeps.com/logo-download/F/Florida-Power-&-Light-01.png',
                            'size': 'medium',
                            'style': 'person'
                        }]
                    },
                    {
                        'type': 'Column',
                        'size': 'stretch',
                        'items': [{
                                'type': 'TextBlock',
                                // 'text': 'Hello!',
                                'weight': 'bolder',
                                'isSubtle': true
                            },
                            {
                                'type': 'TextBlock',
                                'text': 'Please provide additional details to raise this request.',
                                'wrap': true
                            }
                        ]
                    }
                ]
            }]
        }],
        'actions': [
            // Firewall Request Form
            {
                'type': 'Action.ShowCard',
                'title': 'Firewall Request form',
                'speak': '<s>Firewall Request</s>',
                'card': {
                    'type': 'AdaptiveCard',

                    'body': [{
                        'type': 'TextBlock',
                       'weight': 'bolder',
                        'text': 'Business Need'
                    }, {
                        'type': 'Input.ChoiceSet',
                        'id': 'business_need',
                        'speak': '<s>Please specify the business need of the request.</s>',
                        "choices": [{
                            "title": "New Project",
                            "value": "New Project"
                        }, {
                            "title": "New Application",
                            "value": "New Application"
                        }, {
                            "title": "Update to Existing Application",
                            "value": "Update to Existing Application"
                        }, {
                            "title": "New Firewall",
                            "value": "New Firewall"
                        }]
                    }, {
                        'type': 'TextBlock',
                         'weight': 'bolder',
                        'text': 'Communication Flow'
                    }, {
                        'type': 'Input.ChoiceSet',
                        'id': 'comm_flow',
                        'speak': '<s>Please choose communication flow</s>',
                        "choices": [{
                            "title": "One Way",
                            "value": "One way"
                        }, {
                            "title": "Bidirectional",
                            "value": "Bidirectional"
                        }]
                    }, {
                        'type': 'TextBlock',
                         'weight': 'bolder',
                        'text': 'SLID/Email Id'
                    }, {
                        'type': 'Input.Text',
                        'id': 'SLID',
                      //  'placeholder':session.privateConversationData.SLID,
                         'speak': '<s>Please enter your SLID</s>'
                    }, {
                        'type': 'TextBlock',
                         'weight': 'bolder',
                        'text': 'VENDOR B2B CONNECTION?'
                    }, {
                        'type': 'Input.ChoiceSet',
                        'id': 'vendor_b2b',
                        'speak': '<s>Vendor B2B Connection</s>',
                        "choices": [{
                            "title": "Yes",
                            "value": "Yes"
                        }, {
                            "title": "No",
                            "value": "No"
                        }]
                    }, {
                        'type': 'TextBlock',
                         'weight': 'bolder',
                        'text': 'Project Name'
                    }, {
                        'type': 'Input.Text',
                        'id': 'project_name',
                        'speak': '<s>Please enter your project name</s>'
                    }, {
                        'type': 'TextBlock',
                         'weight': 'bolder',
                        'text': 'Manager Name'
                    }, {
                        'type': 'Input.Text',
                        'id': 'manager_name',
       
                       // 'placeholder':session.privateConversationData.ManagerName,
                        'speak': '<s>Please enter your manager\'s name</s>'
                    }, {
                        'type': 'TextBlock',
                         'weight': 'bolder',
                        'text': 'Is approved by manager?.'
                    }, {
                        'type': 'Input.ChoiceSet',
                        'id': 'is_approved',
                        'speak': '<s>Is approval from manager available?</s>',
                        "choices": [{
                            "title": "Yes",
                            "value": "Yes"
                        }, {
                            "title": "No",
                            "value": "No"
                        }]
                    }, {
                        'type': 'TextBlock',
                        'weight': 'bolder',
                        'text': 'Duration'
                    }, {
                        'type': 'Input.ChoiceSet',
                        'id': 'dur_request',
                        'speak': '<s>Please enter duration of request.</s>',
                        "choices":[{
                            "title": "Three Month",
                            "value": "Three Month"
                        }, {
                            "title": "Six Month",
                            "value": "Six Month"
                        }, {
                            "title": "Twelve Month",
                            "value": "Twelve Month"
                        }, {
                            "title": "Forever",
                            "value": "Forever"
                        }]
                    }, ],
                    'actions':  [{
                            'type': 'Action.Submit',
                            'title': 'Submit',
                            'data': {
                              'type': 'restFirewallRequest'
                            }
                        },
                        {   'type': 'Action.Submit',
                            'title': 'Cancel',
                            'data': {
                              'type': 'cancel'
                            }

                        }]
                }
            }
        ]

    }
};


    var msg = new builder.Message(session).addAttachment(new_firewall_rest_info_card);
    console.log("SMN", session.message, session.message.value);
    if (session.message && session.message.value) {
        session.privateConversationData.formName='New Firewall Request Additional Info Form';

        validate_new_firewall_rest_info_Request(session, session.message.value);
        return;
    }
    session.send(msg);
});


//  by chandra
bot.dialog('/existing_firewall_request', function(session) {

    var msg = new builder.Message(session).addAttachment(existing_firewall_card);

    if (session.message && session.message.value) {
        session.privateConversationData.formName = "Firewall Rule Enquiry Form";
        validate_existing_firewall_Request(session, session.message.value);
        return;
    }
    session.send('I can certainly help you. Here is the template. Please complete it and click on Validate button.');
    session.send(msg);
});

// by chnadra
/* bot.dialog('/FAQ_firewall_request', [function(session, args, next) {
        session.send('I can certainly help you on Firewall FAQs. You can search for any of the below listed topics.' + "\n" + '1. Source IP' + "\n" + '2. Source Port' +
            "\n" + '3. Destination IP' + "\n" + '4. Communication Flow- ONE WAY' + "\n" + '5. Communication Flow - BIDIRECTIONAL' + "\n" + '6. Vendor B2B Connection' + "\n" + '7. Network IP Protocols');

        builder.Prompts.text(session, "Please enter your question");
    },
    function(session, result) {
        var question = session.message.text;
        session.privateConversationData.questionMap = {
             'ShareCalendar':"Sharing Calendar", 
             'None':"Go back to Main Manu",
             'ITSUPPORT':"Outlook/Remote Service", 
             'help':"Go back to Main Menu", 
             'FIREWALL':"Firewall Service", 
             'remoteaccess':"Remote Access", 
             'outlook':"Outlook",
             'UseRemoteDesktop':"Remote Desktop", 
             'UnlockYourPassword':"Unlock Password", 
             'ReplaceHardToken':"Replacing Hard Token", 
             'TroubleshootRemoteAccessToken':"Troubleshoot Remote Access Token", 
             'Email_iPhone/iPad':"Email on iPhone/iPad", 
             'ConnectRemoteAccess':"Connecting Remote Access", 
             'Login':"Login Issues", 
             'Email_ iOS11':"Integrating Email on iOS11", 
             'LostRemoteAccessToken':"Lost Remote Access Token", 
             'firewall_request':"Firewall Service", 
             'AddCalendar':"Adding Calendar",
             'Main_Menu':"Main Menu",
             'UserDown': "UserDown",
             'UserExcited1': "UserExcited1",
             'UserExcited2': "UserExcited2",
             'UserExcited3': "UserExcited3",
             'UserAnnoyed': "UserAnnoyed",
             'BotAnnoyed': "BotAnnoyed",
             'OutofScope': "OutofScope",
             'WellnessGreeting': "WellnessGreeting",
             'testing_bot': "testing_bot",
             'needs_advice': "needs_advice",
             'happy': "happy",
             'angry': "angry",
             'bye': "bye",
             'good': "good",
			 'bot_happy':'bot_happy',
'user_happy':'user_happy',
'bot_bad':'bot_bad',
             'about_bot': "about_bot",
             'WMS': "WMS"
         };

        jsonObject = JSON.stringify({
            "question": question,
            "top": 3
        });

        request.post({
                headers: {
                    'Content-type': 'application/json',
                    'Ocp-Apim-Subscription-Key': '45bf530d13f14afab04d29b4dbc54f18',
                    'Content-Length': Buffer.byteLength(jsonObject, 'utf8')
                },
                url: 'https://westus.api.cognitive.microsoft.com/qnamaker/v2.0/knowledgebases/' + '8fa01a3f-5265-49e1-b3ba-9f93df2c6ebe' + '/generateAnswer',

                body: jsonObject
            },
            function(error, response, body) {
                data = JSON.parse(body);
                session.privateConversationData.data1 = data;
                session.save();
                var pp = data.answers.length;
                console.log("3597",data.answers[0].answer,data.answers[0].score );
                if (((data.answers[0].answer) === "No good match found in the KB") || (data.answers[0].score < 50)) {
                        var msg = session.message.text;
                request("https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/ca1c85e6-2574-4f7f-83ac-1cc86731c779?subscription-key=6538d2cf46cb4185ba71872eae6a04d9&verbose=true&timezoneOffset=0&q=" + msg, function(error, response, body) {
                         console.log('error:', error); // Print the error if one occurred 
                         console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
                         console.log('body*****:', body); // Print the HTML for the Google homepage. 
                         var obj = JSON.parse(body);
                         
                         var arr2 = [];
                         session.privateConversationData.query = obj.topScoringIntent.intent;
                         console.log(session.privateConversationData.query + "8797654");
						 session.privateConversationData.ques = session.message.text;
//                         if(obj.topScoringIntent.score >= 0.75)
//                         {
                           switch (obj.topScoringIntent.intent) 
                           {
                                case 'help': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/help'); break;
                                case 'Exit': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/Exit'); break;
                                case 'Main_Menu': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/Main_Menu'); break;
                                case 'Greeting': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/Greeting'); break;
							    case 'about_bot': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/about_bot');break;
                                case 'WMS': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/WMS'); break;
                                case 'good': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/good'); break;
                                case 'bye': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/bye'); break;
								case 'bot_happy': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/bot_happy'); break;
								case 'user_happy': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/user_happy'); break;
								case 'bot_bad': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/bot_bad'); break;
                                case 'angry': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/angry'); break;
                                case 'happy': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/happy'); break;
                                case 'needs_advice': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/needs_advice'); break;                                
                                case 'testing_bot': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/testing_bot'); break;                                                                
                                case 'UserExcited1': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/UserExcited1');
                                                     break;
                                case 'UserExcited2': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/UserExcited2');
                                                     break;
                                case 'UserExcited3': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/UserExcited3');
                                                     break;   
                                case 'UserDown': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/UserDown');
                                                     break;
                                case 'UserAnnoyed': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/UserAnnoyed');
                                                     break;
                                case 'BotAnnoyed': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/BotAnnoyed');
                                                     break;
                                case 'OutofScope': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/OutofScope');
                                                     break; 
                                case 'WellnessGreeting': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/WellnessGreeting');
                                                     break;
                                case 'outlook':  session.replaceDialog('/asdf'); break;
                                case 'ShareCalendar':  session.replaceDialog('/asdf'); break;
                                case 'LostRemoteAccessToken':  session.replaceDialog('/asdf'); break;                                                       
                                case 'AddCalendar': session.replaceDialog('/asdf'); break;                                          
                                case 'UseRemoteDesktop': session.replaceDialog('/asdf'); break; 
                                case 'UnlockYourPassword':  session.replaceDialog('/asdf'); break;
                                case 'Email_iOS11': session.replaceDialog('/asdf'); break; 
                                case 'TroubleshootRemoteAccessToken': session.replaceDialog('/asdf'); break; 
                                case 'Email_iPhone/iPad': session.replaceDialog('/asdf'); break; 
                                case 'ReplaceHardToken':  session.replaceDialog('/asdf'); break;
                                case 'ConnectRemoteAccess':  session.replaceDialog('/asdf'); break;
                                case 'remoteaccess':  session.replaceDialog('/asdf'); break;

                               default:
                                   session.send("Sorry i dont have answer for this. I am still learning.I will notify my support team to train me on this question");
                                   session.beginDialog('/choice_check_in_FAQ');
   
                                   MongoClient.connect(url, function(err, db) {
                                       db.createCollection('firewall_questions');
   
                                       var collection_feedback = db.collection('firewall_questions');
                                       console.log("inserting data in wms mongodb repo");
                                       collection_feedback.insert({
                                           "question": session.message.text,
                                           "time": session.message.timestamp,
                                           "sessionid": session.message.address.id,
                                           "user_details": session.message.user
                                       });
   
                                       db.close();
                                   });
                           }
                     });
    
                } else {
                    // session.send(data.answers[0].answer);
                    session.beginDialog('/answercheckfirewall');
                }
            })
    }
]);

 */
//mukesh

bot.dialog('/FAQ_firewall_request', [function(session, args, next) {
        session.send('I can certainly help you on Firewall FAQs. You can search for any of the below listed topics.' + "\n" + '1. Source IP' + "\n" + '2. Source Port' +
            "\n" + '3. Destination IP' + "\n" + '4. Communication Flow- ONE WAY' + "\n" + '5. Communication Flow - BIDIRECTIONAL' + "\n" + '6. Vendor B2B Connection' + "\n" + '7. Network IP Protocols');

        builder.Prompts.text(session, "Please enter your question");
    },
    function(session, result) {
        var question = session.message.text;
        session.privateConversationData.questionMap = {
             'ShareCalendar':"Sharing Calendar", 
             'None':"Go back to Main Manu",
             'ITSUPPORT':"Outlook/Remote Service", 
             'help':"Go back to Main Menu", 
             'FIREWALL':"Firewall Service", 
             'remoteaccess':"Remote Access", 
             'outlook':"Outlook",
             'UseRemoteDesktop':"Remote Desktop", 
             'UnlockYourPassword':"Unlock Password", 
             'ReplaceHardToken':"Replacing Hard Token", 
             'TroubleshootRemoteAccessToken':"Troubleshoot Remote Access Token", 
             'Email_iPhone/iPad':"Email on iPhone/iPad", 
             'ConnectRemoteAccess':"Connecting Remote Access", 
             'Login':"Login Issues", 
             'Email_ iOS11':"Integrating Email on iOS11", 
             'LostRemoteAccessToken':"Lost Remote Access Token", 
             'firewall_request':"Firewall Service", 
             'AddCalendar':"Adding Calendar",
             'Main_Menu':"Main Menu",
             'UserDown': "UserDown",
             'UserExcited1': "UserExcited1",
             'UserExcited2': "UserExcited2",
             'UserExcited3': "UserExcited3",
             'UserAnnoyed': "UserAnnoyed",
             'BotAnnoyed': "BotAnnoyed",
             'OutofScope': "OutofScope",
             'WellnessGreeting': "WellnessGreeting",
             'testing_bot': "testing_bot",
             'needs_advice': "needs_advice",
             'happy': "happy",
             'angry': "angry",
             'bye': "bye",
             'good': "good",
             'about_bot': "about_bot",
			 'bot_happy':'bot_happy',
			'user_happy':'user_happy',
			'bot_bad':'bot_bad',
			'appraisal_bad':'appraisal_bad',
			'appraisal_good':'appraisal_good',
			'answer_my_question':'answer_my_question',
			'bot_beautiful':'bot_beautiful',
			'bot_my_friend':'bot_my_friend',
			'SmallTalk':'SmallTalk',
             'WMS': "WMS"
         };

        jsonObject = JSON.stringify({
            "question": question,
            "top": 3
        });

        request.post({
                headers: {
                    'Content-type': 'application/json',
                    'Ocp-Apim-Subscription-Key': '45bf530d13f14afab04d29b4dbc54f18',
                    'Content-Length': Buffer.byteLength(jsonObject, 'utf8')
                },
                url: 'https://westus.api.cognitive.microsoft.com/qnamaker/v2.0/knowledgebases/' + '8fa01a3f-5265-49e1-b3ba-9f93df2c6ebe' + '/generateAnswer',

                body: jsonObject
            },
            function(error, response, body) {
                data = JSON.parse(body);
                session.privateConversationData.data1 = data;
                
                session.save();
                var pp = data.answers.length;
                console.log("3597",data.answers[0].answer,data.answers[0].score );
                
                if (((data.answers[0].answer) === "No good match found in the KB") || (data.answers[0].score < 50)) {
                
                        var msg = session.message.text;

                        request("https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/79670c24-b3e7-4223-8c3e-c6502f1227e0?subscription-key=7ff4b9f23cf24e278de904380847811f&verbose=true&timezoneOffset=0&q=" + msg, function(error, response, body) {
                        console.log('error:', error); // Print the error if one occurred 
                        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
                        console.log('body*****:', body); // Print the HTML for the Google homepage. 
                        var obj = JSON.parse(body);
                         
                        var arr2 = [];
                        session.privateConversationData.query = obj.topScoringIntent.intent;
                        console.log(session.privateConversationData.query + "8797654");
						session.privateConversationData.ques = session.message.text
                        if(obj.topScoringIntent.score >= 0.75){

                            switch (obj.topScoringIntent.intent) {
                                case 'help': session.privateConversationData.ques = 'undefined';
                                session.replaceDialog('/help'); break;
                                case 'Exit': session.privateConversationData.ques = 'undefined';
                                session.replaceDialog('/Exit'); break;
                                case 'Main_Menu': session.privateConversationData.ques = 'undefined';
                                session.replaceDialog('/Main_Menu'); break;
                                case 'Greeting': session.privateConversationData.ques = 'undefined';
                                session.replaceDialog('/Greeting'); break;
                                case 'about_bot': session.privateConversationData.ques = 'undefined';
                                session.replaceDialog('/about_bot');break;
                                case 'WMS': session.privateConversationData.ques = 'undefined';
                                session.replaceDialog('/WMS'); break;
                                case 'good': session.privateConversationData.ques = 'undefined';
                                session.replaceDialog('/good'); break;
                                case 'bye': session.privateConversationData.ques = 'undefined';
                                session.replaceDialog('/bye'); break;
                                case 'angry': session.privateConversationData.ques = 'undefined';
                                session.replaceDialog('/angry'); break;
                                case 'happy': session.privateConversationData.ques = 'undefined';
                                session.replaceDialog('/happy'); break;
                                case 'needs_advice': session.privateConversationData.ques = 'undefined';
                                session.replaceDialog('/needs_advice'); break;                                
                                case 'testing_bot': session.privateConversationData.ques = 'undefined';
                                session.replaceDialog('/testing_bot'); break; 
								case 'bot_beautiful': session.privateConversationData.ques = 'undefined';
                                session.replaceDialog('/bot_beautiful'); break; 
                                case 'bot_happy': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/bot_happy'); break;
								case 'user_happy': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/user_happy'); break;
								case 'bot_bad': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/bot_bad'); break;
								case 'appraisal_bad': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/appraisal_bad'); break;
								case 'appraisal_good': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/appraisal_good'); break;
								case 'answer_my_question': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/answer_my_question'); break;
								case 'bot_my_friend': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/bot_my_friend'); break;
								case 'SmallTalk': session.privateConversationData.ques = 'undefined';
								session.replaceDialog('/SmallTalk'); break;
                                case 'UserExcited1': session.privateConversationData.ques = 'undefined';
                                session.replaceDialog('/UserExcited1');
                                                     break;
                                case 'UserExcited2': session.privateConversationData.ques = 'undefined';
                                session.replaceDialog('/UserExcited2');
                                                     break;
                                case 'UserExcited3': session.privateConversationData.ques = 'undefined';
                                session.replaceDialog('/UserExcited3');
                                                     break;   
                                case 'UserDown': session.privateConversationData.ques = 'undefined';
                                session.replaceDialog('/UserDown');
                                                     break;
                                case 'UserAnnoyed': session.privateConversationData.ques = 'undefined';
                                session.replaceDialog('/UserAnnoyed');
                                                     break;
                                case 'BotAnnoyed': session.privateConversationData.ques = 'undefined';
                                session.replaceDialog('/BotAnnoyed');
                                                     break;
                                case 'OutofScope': session.privateConversationData.ques = 'undefined';
                                session.replaceDialog('/OutofScope');
                                                     break; 
                                case 'WellnessGreeting': session.privateConversationData.ques = 'undefined';
                                session.replaceDialog('/WellnessGreeting');
                                                     break;
                                case 'outlook':  session.replaceDialog('/asdf'); break;
                                case 'ShareCalendar':  session.replaceDialog('/asdf'); break;
                                case 'LostRemoteAccessToken':  session.replaceDialog('/asdf'); break;                                                       
                                case 'AddCalendar': session.replaceDialog('/asdf'); break;                                          
                                case 'UseRemoteDesktop': session.replaceDialog('/asdf'); break; 
                                case 'UnlockYourPassword':  session.replaceDialog('/asdf'); break;
                                case 'Email_iOS11': session.replaceDialog('/asdf'); break; 
                                case 'TroubleshootRemoteAccessToken': session.replaceDialog('/asdf'); break; 
                                case 'Email_iPhone/iPad': session.replaceDialog('/asdf'); break; 
                                case 'ReplaceHardToken':  session.replaceDialog('/asdf'); break;
                                case 'ConnectRemoteAccess':  session.replaceDialog('/asdf'); break;
                                case 'remoteaccess':  session.replaceDialog('/asdf'); break;                  
                                default:
                                   session.send("Sorry i dont have answer for this. I am still learning.I will notify my support team to train me on this question");
                                   session.beginDialog('/choice_check_in_FAQ');
   
                                   MongoClient.connect(url, function(err, db) {
                                       db.createCollection('firewall_questions');
   
                                       var collection_feedback = db.collection('firewall_questions');
                                       console.log("inserting data in firewall repo");
                                       collection_feedback.insert({
                                           "question": session.message.text,
                                           "time": session.message.timestamp,
                                           "sessionid": session.message.address.id,
                                           "user_details": session.message.user
                                       });
   
                                       db.close();
                                   });
                           }
                        }else if(obj.topScoringIntent.score >= 0.40 && obj.topScoringIntent.score < 0.75)
                        
                        {
                             console.log('inside elseif');
                             var arr = [];
                             for(var i=0; i<obj.intents.length; i++){
                                var s = obj.intents[i].intent;
                                 if(s != 'Negative_Intent' && s != 'Greeting' && s != 'WMS' && s!= 'UserExcited1' && s!= 'UserExcited2'
                                    && s!= 'UserExcited3' && s!= 'WellnessGreeting' && s != 'UserDown' && s != 'UserAnnoyed' 
                                    && s!= 'testing_bot' && s!= 'needs_advice' && s != 'happy' && s != 'angry' 
                                    && s!= 'bye' && s!= 'good' && 
                                    s != 'BotAnnoyed' && s != 'OutofScope' && s != 'Exit' && s != 'None' && s != 'Main_Menu' && s != 'FIREWALL'){
                                     console.log(obj.intents[i].intent + obj.intents[i].score);
                                     console.log('******************');
                                     arr.push(obj.intents[i].intent);
                                     console.log("213");
                                     console.log(arr[arr.length-1]);
                                     console.log("123");
                                     if(arr.length == 3)
                                       break;
                                 }
                             }
                             
                             session.privateConversationData.arr2 = [];
                             session.privateConversationData.arr3 = [];
                             session.privateConversationData.arr2[0] = arr[0];
                             session.privateConversationData.arr3.push(session.privateConversationData.questionMap[arr[0]]);
                             session.privateConversationData.arr2[1] = arr[1];
                             session.privateConversationData.arr3.push(session.privateConversationData.questionMap[arr[1]]);
                             session.privateConversationData.arr2[2] = arr[2];
                             session.privateConversationData.arr3.push(session.privateConversationData.questionMap[arr[2]]);

                             //console.log(arr3[0] + arr3[1] + arr3[2]);
                             console.log('forloop done');
                             console.log(session.privateConversationData.arr2[0] + session.privateConversationData.arr2[1] + session.privateConversationData.arr2[2]);

                             builder.Prompts.choice(session, "I think you have a query related to Outlook/Remote Access.\nDo you need help on any of these topics?", session.privateConversationData.arr3,
                             {   retryPrompt: "Please choose amongst the following.",
                                 listStyle: builder.ListStyle.button,
                                 maxRetries: 2
                             });
                        }else 
                        {
                             session.send('Sorry, I didn\'t understand your question');
                             builder.Prompts.choice(session, "Please click on the button if you would like to go back to Main Menu", "Main Menu", {
                                retryPrompt: "Please click on the button",
                                listStyle: builder.ListStyle.button,
                                maxRetries: 2
                             });
                        }
                           
                    });
    
                } else {
                    // session.send(data.answers[0].answer);
                    session.beginDialog('/answercheckfirewall');
                }

            
            })
    },
   function(session, results){
        console.log('Inside results' + results.response.entity);
        //console.log(session.privateConversationData.arr2[0] + session.privateConversationData.arr2[1] + session.privateConversationData.arr2[2]);

        switch(results.response.entity){
            case "Main Menu" :  session.replaceDialog('/Main_Menu');
                                break;
            case (session.privateConversationData.arr3[0]): console.log(session.privateConversationData.arr2[0]); 
                                            session.replaceDialog('/'+session.privateConversationData.arr2[0]);
                                            break;
            case (session.privateConversationData.arr3[1]): console.log(session.privateConversationData.arr2[1]); 
                                            session.replaceDialog('/'+session.privateConversationData.arr2[1]);
                                            break;
            case (session.privateConversationData.arr3[2]): console.log(session.privateConversationData.arr2[2]); 
                                            session.replaceDialog('/'+session.privateConversationData.arr2[2]);
                                            break;
             
         }
     }

]);

 
 
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// answercheckfirewall by sachida 29_12

bot.dialog('/answercheckfirewall', function(session, args, next) {
	
	    var data = session.privateConversationData.data1;
        console.log("data in question list", data.answers[1].questions);
		if (data.answers[0].score > 95) {
        session.send(data.answers[0].answer);
        session.beginDialog('/choice_check_in_FAQ');
    }
	else{
		var abcdq1 = data.answers[1].questions[0];
        var bcdeq1 = data.answers[2].questions[0];

    if (session.message && session.message.value) {
        console.log(session);
        checkNewRequestFirewallFAQ(session, session.message.value);
        return;
    }

//card of probable FAQ
var probable_FAQ_hero_card = {
    'contentType': 'application/vnd.microsoft.card.adaptive',
    'content': {
                  '$schema': 'http://adaptivecards.io/schemas/adaptive-card.json',
                  "type": "AdaptiveCard",
                  "version": "1.0",
                  //"backgroundImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6MQoq7oTo8XLkrcnneQhPjcgqApKnu-usfWtQuoe17nrWohf-",
                
                  "body": [
                
                    {
                      "type": "TextBlock",
                      "text": "I am not able to find an exact answer for your query. Here are some probable FAQs related to your search",
                      "weight": "bolder",
                      "wrap": true
                    }
                
                  ],
				      "actions": [
        {
            "type": "Action.ShowCard",
            "title": abcdq1,
            "card": {
                "type": "AdaptiveCard",
                "body": [
                    {
                        "type": "TextBlock",
                        "text":abcdq1,
						"weight": "bolder",
                      "wrap": true
                    }
                ],
                "actions": [
                    {
                        "type":"Action.Submit",
                        "title":"View Answer",
						"data": {
                          "type": "Submit_q1"
                      }
                    }
                ]
            }
        },{
            "type": "Action.ShowCard",
            "title": bcdeq1,
            "card": {
                "type": "AdaptiveCard",
                "body": [
                    {
                        "type": "TextBlock",
                        "text":bcdeq1,
						"weight": "bolder",
                      "wrap": true
                    }
                ],
                "actions": [
                    {
                        "type":"Action.Submit",
                        "title":"View Answer",
						"data": {
                          "type": "Submit_q2"
                      }
                    }
                ]
            }
        }
    ]
              }
}

    var msg = new builder.Message(session).addAttachment(probable_FAQ_hero_card);
    session.send(msg);
	}
});

function checkNewRequestFirewallFAQ(session, value) {
    console.log("****", value.type);
	var data = session.privateConversationData.data1;
    console.log("data in question list options", data.answers[1].questions);
    var abcdA1 = data.answers[1].answer;
    var bcdeA1= data.answers[2].answer;
    switch (value.type) {
        case 'Submit_q1':
					session.message.value = '';
					session.send(abcdA1);
					session.beginDialog('/choice_check_in_FAQ');
					break;	
		case 'Submit_q2':
					session.message.value = '';
                    session.send(bcdeA1);
					session.beginDialog('/choice_check_in_FAQ');
                    break;
    }
}
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//#################################

bot.dialog('/choice_check_in_FAQ', [function(session, args, next) {
        builder.Prompts.choice(session, "How can I help you more on Firewall Services ", ['Firewall FAQs', 'New Firewall Request', 'Enquire Existing Firewall', 'No, I am Good'], {
            listStyle: builder.ListStyle.button
        });
    },
    function(session, results) {
        console.log(results.response.entity);
        switch (results.response.entity) {

            case 'Firewall FAQs':
                session.beginDialog('/FAQ_firewall_request');
                break;
            case 'New Firewall Request':
                session.send('I can certainly help you. Here is the template. Please complete it and click on Validate button.');  
                session.beginDialog('/new_firewall_request');
                break;

            case 'Enquire Existing Firewall':
                session.beginDialog('/existing_firewall_request');
                break;
            case 'No, I am Good':
                session.beginDialog('/after_exit_from_FAQ');
                break;
        }
    }
]);


bot.dialog('/after_exit_from_FAQ', [function(session, args, next) {
        builder.Prompts.choice(session, "Before we exit, Would you like to try the other services:", ['WMS', 'Outlook/Remote Access\n Support','Exit'], {
            listStyle: builder.ListStyle.button
        });
    },
    function(session, results) {
        console.log(results.response.entity);
        switch (results.response.entity) {

            case 'WMS':
                session.beginDialog('/wmsinitiate');
                break;
            case 'Outlook/Remote Access\n Support':
                session.beginDialog('/Re-EnterITSupport');
                break;
            case 'Exit':
                session.beginDialog('/Gettingfeedback');
                break;
        }
    }
]);



bot.dialog('/check_response_new_request', function(session, args, next) {

    if (session.message && session.message.value) {
        console.log(session);
        checkNewRequest(session, session.message.value);
        return;
    }

//subham
var firewall_hero_card = {
    'contentType': 'application/vnd.microsoft.card.adaptive',
    'content': {
                  '$schema': 'http://adaptivecards.io/schemas/adaptive-card.json',
                  "type": "AdaptiveCard",
                  "version": "1.0",
                  //"backgroundImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6MQoq7oTo8XLkrcnneQhPjcgqApKnu-usfWtQuoe17nrWohf-",
                
                  "body": [
                
                    {
                      "type": "TextBlock",
                      "text": "No Firewall Logical Rule Found",
                      "weight": "bolder"
                    },
                    
                    {
                      "type": "TextBlock",
                      "text": "Enquiry Details",
                      "weight": "bolder",
                      "isSubtle": "true"
                    },
                    {
                      "type": "ColumnSet",
                      "spacing": "medium",
                      "columns": [
                        {
                          "type": "Column",
                          "width": "auto",
                          "items": [
                            {
                                "type": "FactSet",
                                "facts": [
                                    {
                                        "title": "Source IP",
                                        "value": session.privateConversationData.sourceIP
                                    },
                                    {
                                        "title": "Source Port",
                                        "value": session.privateConversationData.source_portAddress
                                    },
                                    {
                                        "title": "Destination IP",
                                        "value": session.privateConversationData.destIP
                                    },
                                    {
                                        "title": "Service Type",
                                        "value": session.privateConversationData.protocol_type
                                    }
                                ]
                            }
                          ]
                        },
                      ]
                    },
                
                    {
                      "type": "TextBlock",
                      "text": "Shall we continue to create a new Firewall rule for the above details?",
                      "weight": "bolder",
                      "wrap": true
                    }
                
                  ],
                
                  "actions": [
                
                    {
                      "type": "Action.Submit",
                      "title": "No, I'm Good",
                      "data": {
                          "type": "Submit_no"
                      }
                      
                    },
                    {
                      "type": "Action.Submit",
                      "title": "Yes, create",
                      "data": {
                          "type": "Submit_yes"
                      }
                    }
                  ]
              }
}

    var msg = new builder.Message(session).addAttachment(firewall_hero_card);
    session.send(msg);

});

function checkNewRequest(session, value) {
    console.log("****", value.type);
    switch (value.type) {
        case "Submit_yes":
            //Make changes here
            session.message.value = '';
            session.beginDialog('/new_firewall_rest_info_request');
            break;
        case "Submit_no":
            //Make changes here
            session.beginDialog('/exit_control');
            break;
    }
}

bot.dialog('/exit_control', [function(session, args, next) {
        builder.Prompts.choice(session, "Do you need more assistance on firewall services? ", ['YES', 'NO'], {
            listStyle: builder.ListStyle.button
        });
    },
    function(session, results) {
        console.log(results.response.entity);
        switch (results.response.entity) {

            case 'YES':
                session.beginDialog('/firewall_request');
                break;
            case 'NO':
                session.beginDialog('/after_exit_from_FAQ');
                break;
        }
    }
]);

// cancel form by chandra

bot.dialog('/cancelForm',[
    function(session){
        builder.Prompts.choice(session, "Are you sure you want to quit __" + session.privateConversationData.formName + "__ form?", "Yes|No",{
            retryPrompt: "Please choose among the following",
            listStyle: builder.ListStyle.button,
            maxRetries: 2
        });
    },
    function(session, results){
    console.log(session.privateConversationData.formName);
        switch(results.response.entity){
            case 'Yes': session.replaceDialog('/firewall_request_exit');
                        break;
            case 'No' : if(session.privateConversationData.formName == "Firewall Rule Enquiry Form"){
                            session.replaceDialog("/existing_firewall_request");}
                        else  if(session.privateConversationData.formName=="Firewall Request Form"){
                             session.replaceDialog("/new_firewall_request");
                            }
                         else if(session.privateConversationData.formName=="New Firewall Request Additional Info Form"){
                         session.replaceDialog('/new_firewall_rest_info_request');
                         }   
                        break;  
                       
        }
    }
]);

// validate validate_new_firewall_Request

function validate_new_firewall_Request(session, value) {
    console.log(value.type);
    switch(value.type)
    {
        case 'newFirewallRequest' :
    session.send("Please wait while we are validating your request..");
    session.privateConversationData.sourceIP = value.source_ip;
        session.privateConversationData.source_portAddress = value.source_port;
        session.privateConversationData.destIP = value.destination_ip;
        session.privateConversationData.protocol_type = value.protocol_type;
    console.log(typeof(session.privateConversationData.sourceIP));


    console.log(session.privateConversationData.sourceIP, session.privateConversationData.source_portAddress, session.privateConversationData.destIP, session.privateConversationData.protocol_type);



    MongoClient.connect(url, function(err, db) {
        if (err) throw err;


        if (!session.privateConversationData.sourceIP || !session.privateConversationData.source_portAddress || !session.privateConversationData.destIP || !session.privateConversationData.protocol_type) {
            session.privateConversationData.reply = false;
            session.send('Please fill all the requested information in '+session.privateConversationData.formName+'.');
        } else if (!net.isIP(session.privateConversationData.sourceIP)) {
            session.privateConversationData.reply = false;
            session.send('Please provide a valid Source IP address in '+session.privateConversationData.formName+'.');
        } else if (session.privateConversationData.source_portAddress <= 0 || session.privateConversationData.source_portAddress > 9999 || ((session.privateConversationData.source_portAddress % 1) != 0)) {
            session.send('Please provide a valid source port address in '+session.privateConversationData.formName+'.');
        } else if (!net.isIP(session.privateConversationData.destIP)) {
            session.privateConversationData.reply = false;
            session.send('Please provide a valid Destination IP address in '+session.privateConversationData.formName+'.');
        } else if (session.privateConversationData.sourceIP === session.privateConversationData.destIP) {
            session.send('Source & Target IP address can not be same in '+session.privateConversationData.formName+'.');
        } else {

            var query = {
                "SOURCEIP": session.privateConversationData.sourceIP,
               // Source_port_No: session.privateConversationData.source_portAddress,
                "DestinationIP": session.privateConversationData.destIP,
                "Service": session.privateConversationData.protocol_type
            };

            db.collection("FPL").find(query).toArray(function(err, result) {
                console.log(result);
                if (result.length) {
                   // session.send(`Hey Good news !! A Firewall Logical Rule "Bentley Nevada PSN" already exists  matching the details your provided . Please test the connection from your end. If you still have issues, reach out to Firewall  Support team .`);
                   session.send("Hey! Good news !! A Firewall Logical Rule ***"+result[0].RuleName+"*** already exists  matching the details your provided . Please test the connection from your end. If you still have issues, reach out to **FPL help desk # +1 (305)-552-4357**");
                    db.close();
                    session.beginDialog('/exit_control');
                } else {
                    session.send('We could not find the above firewall rule in the database. Please fill out the additional information required to log a firewall request and click on Submit button.');
                    session.message.value = '';
                    session.beginDialog('/new_firewall_rest_info_request');

                }

            });
        }
    });
break;
case 'cancel' :  session.beginDialog('/cancelForm');
                        break;
}
    return;
}


 
 
 // validate_new_firewall_rest_info_Request by chandra
function validate_new_firewall_rest_info_Request(session, value) {
console.log(value.type);
    switch(value.type)
    {
        case 'restFirewallRequest':
    session.send("Validating your request..");
console.log("in validate_new_firewall_rest_info_Request");
            session.privateConversationData.businessNeed = value.business_need;
            session.privateConversationData.commFlow = value.comm_flow;
            session.privateConversationData.SLID = value.SLID;
            session.privateConversationData.VendorB2B = value.vendor_b2b;
            session.privateConversationData.projectName = value.project_name;
            session.privateConversationData.managerName_entered = value.manager_name;
            session.privateConversationData.approval_info = value.is_approved;
            session.privateConversationData.durationRequest = value.dur_request;
    console.log(session.privateConversationData.businessNeed, session.privateConversationData.commFlow, session.privateConversationData.SLID, session.privateConversationData.VendorB2B, session.privateConversationData.projectName, session.privateConversationData.managerName_entered, session.privateConversationData.approval_info, session.privateConversationData.durationRequest);

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var query_SLID = {
             SLIDID:session.privateConversationData.SLID
        };
        var query_project_Name = {
            ProjectName:session.privateConversationData.projectName
        };
        var query_manager_Name = {
            ManagerName:session.privateConversationData.managerName
        };

  db.collection("FPL").find({}).toArray(function(err, result) {
          session.privateConversationData.ticketnogen = result.length;
          
          });
db.collection("authentication").find(query_SLID).toArray(function(err, result) {
          
          
          });
//console.log("Manager name entered ="+session.privateConversationData.managerName_entered);
//console.log("Manager name in DB ="+session.privateConversationData.managerName);

        db.collection("authentication").find(query_SLID).toArray(function(err, result) {
            session.privateConversationData.SLID_check = result.length;
            db.collection("tb_fpl_details").find(query_project_Name).toArray(function(err, result) {
                session.privateConversationData.project_Name_check = result.length;
                db.collection("authentication").find(query_SLID).toArray(function(err, result) {
                    console.log(result.length);
                    if(result.length){
                    console.log("4130"+result[0].ManagerName);
                     session.privateConversationData.ManagerName = result[0].ManagerName;
                    }
                   if (!session.privateConversationData.businessNeed || !session.privateConversationData.commFlow  || !session.privateConversationData.VendorB2B || !session.privateConversationData.projectName  || !session.privateConversationData.approval_info || !session.privateConversationData.durationRequest) {
                        session.send('Please fill all the requested information in '+session.privateConversationData.formName+'.');
                    } else if (!session.privateConversationData.SLID_check) {
                        session.send('Please enter a registerd SLID in '+session.privateConversationData.formName+'.');
                    } else if (!session.privateConversationData.project_Name_check) {
                        session.send('Please enter a valid project name in '+session.privateConversationData.formName+'.');
                    }  else if (session.privateConversationData.managerName_entered!==session.privateConversationData.ManagerName) {
                        session.send('Please enter a valid manager name in '+session.privateConversationData.formName+'.');
                    }  else {

                        session.send("Hey! Your request has been submitted  with ticket no ***"+"SR000"+session.privateConversationData.ticketnogen+"***. Email has been sent to your registered email. Your manager has been informed about this firewall request. You can  call helpline number **FPL help desk # +1 (305)-552-4357** for any clarification.");


                        var myobj = {
                            Business_need: session.privateConversationData.businessNeed,
                            SLID: session.privateConversationData.SLID,
                            DestinationIP:session.privateConversationData.destIP,
                            Vendor_B2B_connection: session.privateConversationData.VendorB2B,
                            Project_name: session.privateConversationData.projectName,
                            Manager_Name: session.privateConversationData.managerName,
                            SOURCEIP: session.privateConversationData.sourceIP,
                            SourcePort: session.privateConversationData.source_portAddress,
                            RuleName: "Bentley Nevada Plant Port Ever",
                            Approval_INFO: session.privateConversationData.approval_info,
                            Service: session.privateConversationData.protocol_type,
                            Communication_Flow: session.privateConversationData.commFlow,
                            Request_Duration: session.privateConversationData.durationRequest,
                            Ticket_Number: "SR000"+session.privateConversationData.ticketnogen
                        };
//subham
var firewall_new_req_hero_card = {
    'contentType': 'application/vnd.microsoft.card.adaptive',
    'content': {
                  '$schema': 'http://adaptivecards.io/schemas/adaptive-card.json',
                  "type": "AdaptiveCard",
                  "version": "1.0",
                  //"backgroundImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6MQoq7oTo8XLkrcnneQhPjcgqApKnu-usfWtQuoe17nrWohf-",
                  "body": [
                
                    {
                      "type": "TextBlock",
                      "text": "Firewall Request Submitted",
                      "weight": "bolder"
                    },
                    {
                      "type": "ColumnSet",
                      "spacing": "medium",
                      "columns": [
                        {
                          "type": "Column",
                          "width": "auto",
                          "items": [
                            {
                              "type": "TextBlock",
                              "text": "SR000"+session.privateConversationData.ticketnogen,
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "TextBlock",
                      "text": "\t\tRequest Details",
                      "weight": "bolder",
                      "isSubtle": "true"
                    },
                    {
                      "type": "ColumnSet",
                      "spacing": "medium",
                      "columns": [
                        {
                          "type": "Column",
                          "width": "auto",
                          "items": [
                            {
                                "type": "FactSet",
                                "facts": [
                                    {
                                        "title": "Source IP",
                                        "value": session.privateConversationData.sourceIP
                                    },
                                    {
                                        "title": "Source Port",
                                        "value": session.privateConversationData.source_portAddress
                                    },
                                    {
                                        "title": "Destination IP",
                                        "value": session.privateConversationData.destIP
                                    },
                                    {
                                        "title": "Service Type",
                                        "value": session.privateConversationData.protocol_type
                                    }
                                ]
                            }
                          ]
                        },
                      ]
                    }
                  ]
//                  'actions': [
//                    {
//                      'type': 'Action.Submit',
//                      'title': 'Track',
//                      'data': {
//                          'type': 'track'
//                      }
//                    }
//                  ]
              }
}

                        var msg = new builder.Message(session).addAttachment(firewall_new_req_hero_card);


                         var ticketno12= "SR000"+session.privateConversationData.ticketnogen;
                        session.send(msg);
                        var mailOptions_user = {
                            from: 'aimcognitivegurgaon@gmail.com',
                            to: 'abhinish.paul@fpl.com',
                            subject: 'Firewall request details ',
                            text: 'Hi ! Your request for firewall is raised with ticket number : ' + ticketno12 + "\n" +
                                'Please find the details of firewall request. ' + "\n" +
                                ' 1.Source IP: ' + session.privateConversationData.sourceIP + "\n" +
                                ' 2.Source Port Number: ' + session.privateConversationData.source_portAddress + "\n" +
                                ' 3.Destination IP: ' + session.privateConversationData.destIP + "\n" +
                                ' 4.Protocol Type: ' + session.privateConversationData.protocol_type,

                        };
                        var mailOptions_manager = {
                            from: 'aimcognitivegurgaon@gmail.com',
                            to: 'abhinish.paul@fpl.com',
                            subject: 'Firewall request details ',
                            text: 'Hi ! Employee with SLID No.' + session.privateConversationData.SLID + ' has raised a firewall request with ticket number : ' + ticketno12 + "\n" +
                                'Please find the details of firewall request. ' + "\n" +
                                ' 1.Source IP: ' + session.privateConversationData.sourceIP + "\n" +
                                ' 2.Source Port Number: ' + session.privateConversationData.source_portAddress + "\n" +
                                ' 3.Destination IP: ' + session.privateConversationData.destIP + "\n" +
                                ' 4.Protocol Type: ' + session.privateConversationData.protocol_type,

                        };
                         db.collection("statusTable").insertOne({request:ticketno12,status:"InProgress"});
                        db.collection("FPL").insertOne(myobj, function(err, res) {
                            if (err) throw err;
                            console.log("1 record inserted");
                            db.close();
                            transporter.sendMail(mailOptions_user);
                            transporter.sendMail(mailOptions_manager);
                           console.log("aftermail");

                            session.beginDialog('/exit_control');
                        });
                    }
                });
            });
        });


    });

  break;
        
        case 'cancel': session.beginDialog('/cancelForm');
                       break;
    }
}

// validate_existing_firewall_Request by chandra

function validate_existing_firewall_Request(session, value) {
console.log(value.type);
    switch(value.type)
    {
        case 'existingFirewallRequest':
        session.send("Please wait while we are validating your request..");
    session.privateConversationData.reply = true;
    //session.privateConversationData.applicationType = value.application_type;
    session.privateConversationData.sourceIP = value.source_ip;
    session.privateConversationData.source_portAddress = value.source_port;
    session.privateConversationData.destIP = value.destination_ip;
    //session.privateConversationData.dest_portAddress = value.dest_port;
    session.privateConversationData.protocol_type = value.protocol_type;
    //session.privateConversationData.commFlow = value.comm_flow;
    console.log(typeof(session.privateConversationData.sourceIP));

    console.log(session.privateConversationData.sourceIP, session.privateConversationData.source_portAddress, session.privateConversationData.destIP, session.privateConversationData.protocol_type);

    if (!session.privateConversationData.sourceIP || !session.privateConversationData.source_portAddress || !session.privateConversationData.destIP || !session.privateConversationData.protocol_type) {
        session.privateConversationData.reply = false;
        session.send('Please fill all the requested information in '+session.privateConversationData.formName+'.');
    } else if (!net.isIP(session.privateConversationData.sourceIP)) {
        session.privateConversationData.reply = false;
        session.send('Please provide a valid Source IP address in '+session.privateConversationData.formName+'.');
    } else if (session.privateConversationData.source_portAddress <= 0 || session.privateConversationData.source_portAddress > 9999 || ((session.privateConversationData.source_portAddress % 1) != 0)) {
        session.send('Please provide a valid source port address in '+session.privateConversationData.formName+'.');
    } else if (!net.isIP(session.privateConversationData.destIP)) {
        session.privateConversationData.reply = false;
        session.send('Please provide a valid Destination IP address in '+session.privateConversationData.formName+'.');
    } else if (session.privateConversationData.sourceIP === session.privateConversationData.destIP) {
        session.send('Source & Target IP address can not be same in '+session.privateConversationData.formName+'.');
    } else {
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var query = {
                  "SOURCEIP": session.privateConversationData.sourceIP,
                //Source_port_No: session.privateConversationData.source_portAddress,
                 "DestinationIP": session.privateConversationData.destIP,
                  "Service": session.privateConversationData.protocol_type
            };

            db.collection("FPL").find(query).toArray(function(err, result) {
                console.log(result);
                if (result.length) {
                     session.endDialog("Hey! Good news !! A Firewall Logical Rule ***"+result[0].RuleName+"*** already exists  matching the details your provided . Please test the connection from your end. If you still have issues, reach out to  **FPL help desk # +1 (305)-552-4357** for clarification.");
                    db.close();
                    session.beginDialog('/exit_control');
                } else {
                    session.message.value = '';
                    session.send('We could not find the above firewall rule in the database.');

                    session.beginDialog('/check_response_new_request');
                }

            });

        })

    }

break;

        case 'cancel': session.beginDialog('/cancelForm');
                       break; 
    }
}

// Anything else for Firewall
bot.dialog('/AnythingElse2', [

    function(session, args, next) {
        builder.Prompts.choice(session, "Is there anything else that I can help you with on Firewall Support?", ['Yes', 'No, I am Good'], {
            retryPrompt: getString(),
            listStyle: builder.ListStyle.button,
            maxRetries: 2
        });
    },
    function(session, results) {
        if (results.response) {
            var selection = results.response.entity;
            // route to corresponding dialogs
            switch (selection) {
                case "Yes":

                    session.replaceDialog('/firewall_request');
                    break;
                case "No, I am Good":
                    session.replaceDialog('/other_services1');
                    break;
            }
        } else {
            session.endDialog();
            session.replaceDialog('/Greeting11');
        }
    }
]);
bot.dialog('/other_services1', [
    function(session, args, next) {
        builder.Prompts.choice(session, "Before we exit, Would you like to  try our services on:", ['WMS', 'Outlook/Remote Access\nSupport', 'Exit'], {
            retryPrompt: getString(),
            listStyle: builder.ListStyle.button,
            maxRetries: 2
        });
    },
    function(session, results) {

        if (results.response) {
            var selection = results.response.entity;
            // route to corresponding dialogs
            switch (selection) {
                case "WMS":
                    session.replaceDialog('/wmsinitiate');
                    break;
                case "Outlook/Remote Access\nSupport":
                    session.replaceDialog('/ITSupport');
                    break;
                case "Exit":
                    session.replaceDialog('/Gettingfeedback');
                    break;
            }
        } else {
            session.endDialog();
            session.replaceDialog('/Greeting11');
        }

    }
]);

//remote access
// Anything else for Assistive support
bot.dialog('/AnythingElse3', [

    function(session, args, next) {
        builder.Prompts.choice(session, "Is there anything else that I can help you with on Outlook/Remote Access Support?", ['Yes', 'No, I am Good'], {
            retryPrompt: getString(),
            listStyle: builder.ListStyle.button,
            maxRetries: 2
        });
    },
    function(session, results) {
        if (results.response) {
            var selection = results.response.entity;
            // route to corresponding dialogs
            switch (selection) {
                case "Yes":

                    session.replaceDialog('/ITSupport');
                    break;
                case "No, I am Good":
                    session.replaceDialog('/other_services2');
                    break;
            }
        } else {

            session.endDialog();
            session.replaceDialog('/Greeting11');
        }
    }
]);
bot.dialog('/other_services2', [
    function(session, args, next) {
        builder.Prompts.choice(session, "Before we exit, Would you like to try our services on:", ['WMS', 'Firewall', 'Exit'], {
            retryPrompt: getString(),
            listStyle: builder.ListStyle.button,
            maxRetries: 2
        });
    },
    function(session, results) {

        if (results.response) {
            var selection = results.response.entity;
            // route to corresponding dialogs
            switch (selection) {
                case "WMS":
                    session.replaceDialog('/wmsinitiate');
                    break;
                case "Firewall":
                    session.replaceDialog('/firewall_request');
                    break;
                case "Exit":
                    session.replaceDialog('/Gettingfeedback');
                    break;
            }
        } else {
            session.endDialog();
            session.replaceDialog('/Greeting11');
        }

    }
]);




//Gettingfeedback Dialog
bot.dialog('/Gettingfeedback', [
    function(session) {
        console.log("in Feedback");
        //console.log("in Feedback******",session);
        var feed1 = emoji.emojify(':star2: :star2: :star2: :star2: :star2:')
        var feed2 = emoji.emojify(':star2: :star2: :star2: :star2:')
        var feed3 = emoji.emojify(':star2: :star2: :star2:')
        var feed4 = emoji.emojify(':star2: :star2: ')
        var feed5 = emoji.emojify(':star2:')
		//Please rate me on the services provided ?
		//Please provide your feedback.Could you indicate your choice amongst the following?
        builder.Prompts.choice(session, "Please rate me on the services provided ?", [feed1 + '\nExcellent', feed2 + '\nGood', feed3 + '\nOK', feed4 + '\nBad', feed5 + '\nTerrible'], {
            retryPrompt: getString(),
            listStyle: builder.ListStyle.button,
            maxRetries: 2
        });
    },
    function(session, results) {
        console.log(results.response.entity)
        //console.log(results.response.index)
        switch (results.response.index) {
            case 0:
                console.log("0", results.response.index)
                session.send("Thank you for your valuable feedback . I am happy that I was able to resolve your query with no concerns");
                // session.send("Thank you for Valuable Feedback");
                try {
                    MongoClient.connect(url, function(err, db) {
                        if (err) {
                            throw (err);
                        }
                        console.log('1311', err);
                        console.log('1312', db);
                        var collection_feedback = db.collection('feedback');
                        console.log("Connected correctly to server for intent update for Greeting");
                        collection_feedback.insert({
                            "userID": '12345',
                            "feedback": '5 Star'
                        });
                        db.close();
                    });
                } catch (ex) {
                    console.log('Issue in connecting MONGODB at feedback case 0', ex);
                }
                session.endDialog();
				session.replaceDialog('/SubmitFeedback');
                break;
            case 1:
                console.log("1", results.response.index)
                session.send("Thank you for your valuable feedback . I am still learning and I am happy that I was able to resolve your query ");
                // session.send("Thank you for Valuable Feedback");
                try {
                    MongoClient.connect(url, function(err, db) {
                        if (err) {
                            throw (err);
                        }
                        var collection_feedback = db.collection('feedback');
                        console.log("Connected correctly to server for intent update for Greeting");
                        collection_feedback.insert({
                            "userID": '12345',
                            "feedback": '4 Star'
                        });
                        db.close();
                    });
                } catch (ex) {
                    console.log('Issue in connecting MONGODB at feedback case 1', ex);
                }
                //session.endConversation();
                //session.end();
                session.endDialog();
				session.replaceDialog('/SubmitFeedback');
                break;
            case 2:
                console.log("2", results.response.index)
                session.send("Thank you for your valuable feedback . I am still learning and I believe I will be able to service you better next time");
                // session.send("Thank you for Valuable Feedback");
                try {
                    MongoClient.connect(url, function(err, db) {
                        if (err) {
                            throw (err);
                        }
                        var collection_feedback = db.collection('feedback');
                        console.log("Connected correctly to server for intent update for Greeting");
                        collection_feedback.insert({
                            "userID": '12345',
                            "feedback": '3 Star'
                        });
                        db.close();
                    });
                } catch (ex) {
                    console.log('Issue in connecting MONGODB at feedback case 2', ex);
                }
                //session.endDialogWithResult();
                session.endDialog();
				session.replaceDialog('/SubmitFeedback');
                break;
            case 3:
                console.log("3", results.response.index)
                session.send("Thank you for your valuable feedback and it matters a lot . I am sorry that I am not able to provide the best service this time. I will notify my makers on training me better to serve you ahead. ");
                // session.send("Thank you for Valuable Feedback");
                try {
                    MongoClient.connect(url, function(err, db) {
                        if (err) {
                            throw (err);
                        }
                        var collection_feedback = db.collection('feedback');
                        console.log("Connected correctly to server for intent update for Greeting");
                        collection_feedback.insert({
                            "userID": '12345',
                            "feedback": '2 Star'
                        });
                        db.close();
                    });
                } catch (ex) {
                    console.log('Issue in connecting MONGODB at feedback case 3', ex);
                }
                session.endDialog();
				session.replaceDialog('/SubmitFeedback');
                break;
            case 4:
                console.log("4", results.response.index)
                session.send("Thank you for your valuable feedback  and it matters a lot . Sorry for the inconvenience. I am still learning and I will notify my support team on training me better on the topics that you needed help.");
                // session.send("Thank you for Valuable Feedback");
                try {
                    MongoClient.connect(url, function(err, db) {
                        if (err) {
                            //console.log('Issue in connecting MONGODB at feedback case 4');					
                            throw (err);
                        }
                        var collection_feedback = db.collection('feedback');
                        console.log("Connected correctly to server for intent update for Greeting");
                        collection_feedback.insert({
                            "userID": '12345',
                            "feedback": '1 Star'
                        });
                        db.close();
                    });
                } catch (err) {
                    console.log('Issue in connecting MONGODB at feedback case 4');
                }
                session.endDialog();
				session.replaceDialog('/SubmitFeedback');
                break;
            default:
                console.log("3", results.response.index)
                session.endDialog();
				session.replaceDialog('/SubmitFeedback');
                break;
        }
        //session.replaceDialog('/Endconversation');
    }
]);

//************************
bot.dialog('/SubmitFeedback', function(session) {

var msg = new builder.Message(session).addAttachment(feedback_form);
console.log("session.message",session.message.value)
if (session.message && session.message.value) {
	console.log(session.message.value)
 		    switch(session.message.value.type)
    {
	case 'OK' :
			session.send("Your feedback is valuable to us.");
			session.replaceDialog('/Endconversation');
		break;
	
		case 'Not_Interested' :  session.replaceDialog('/Endconversation');
                        break;
}
    return;					
}
session.send(msg);
});

//************************

//End of conversation

bot.dialog('/Endconversation', [
    function(session) {
        var now = new Date();
        var currentdate = dateFormat(now, "isoDateTime");
        var jun = moment(currentdate);
        var datetime = jun.tz('America/New_York').format('dddd MMM DD YYYY hh:mm:ss A hh');
        console.log(datetime)
		var datetime1 = datetime.split(' ')
		var currentday = datetime1[0]  //saturday
		var mm = datetime1[5]			//01 time
        var time = datetime1[6]
		
		if ((mm == 'PM') && (currentday == 'Friday')&&((time === "05") || (time === "04") || (time === "06") || (time === "03") || (time === "07"))) {
			console.log("Happy Weekend")
			            setTimeout(function() {
                session.send('Thank you for using ***Next Era Energy Virtual Assistant***. Have a Happy Weekend');
                session.replaceDialog('/delete');
            session.endConversation();
            }, 1000);
            
            
            
			
		}
		
		else if ((mm == 'PM') && ((time === "12") || (time === "01") || (time === "02") || (time === "03") || (time === "04"))) {
            //session.send(" good Afternoon !! ");
            setTimeout(function() {
                session.send('Thank you for using ***Next Era Energy Virtual Assistant***. Have a great Day Ahead.');
                session.replaceDialog('/delete');
            session.endConversation();
            }, 1000);
            
            //session.send("Thank you for using FPL Intelligent Bot Services. Have a wonderful good afternoon");

        } else if ((mm == 'PM') && ((time === "05") || (time === "06") || (time === "07") || (time === "08") || (time === "09") || (time === "10") || (time === "11"))) {
            //session.send(" good Evening !!");
            setTimeout(function() {
                session.send('Thank you for using ***Next Era Energy Virtual Assistant***. Have a Great Evening Ahead.');
                session.replaceDialog('/delete');
            session.endConversation();
            }, 1000);
            
            //session.send("Thank you for using FPL Intelligent Bot Services. Have a wonderful good evening");
        } else if ((mm == 'AM') && ((time === "01") || (time === "02") || (time === "03") || (time === "12"))) {
            //session.send(" good Evening !!");
            setTimeout(function() {
                session.send('Thank you for using ***Next Era Energy Virtual Assistant***. Have a Great Evening Ahead.');
                session.replaceDialog('/delete');
            session.endConversation();
            }, 1000);
            
            
            //session.send("Thank you for using FPL Intelligent Bot Services. Have a wonderful good evening");
        } else if ((mm == 'AM') && ((time === "04") || (time === "05") || (time === "06") || (time === "07") || (time === "08") || (time === "09") || (time === "10") || (time === "11"))) {
            //session.send(" good Morning !!");
            setTimeout(function() {
                session.send('Thank you for using ***Next Era Energy Virtual Assistant***. Have a Great Day Ahead. ')
                session.replaceDialog('/delete');
                session.endConversation();
            }, 1000);
//            session.replaceDialog('/delete');
//            session.endConversation();
            //session.send("Thank you for using FPL Intelligent Bot Services. Have a wonderful good morning");
        } else {
setTimeout(function() {
                session.send('Thank you for using ***Next Era Energy Virtual Assistant***. Have a wonderful time Ahead.');
                session.replaceDialog('/delete');
                session.endConversation();
            }, 1000);
        }
    }
]);

// none
bot.dialog('/None', [
    function(session) {
/*           console.log("*",session.privateConversationData.loginnumber,session.message.text)
      if(session.privateConversationData.loginnumber != 1){
			  session.send("Please login first")
			  session.beginDialog('/Loginbot');
		  }
		  else{ */
        console.log(session.message.text)
        var question = session.message.text;
        jsonObject = JSON.stringify({
            "question": question,
            "top": 4
        });
        // console.log(jsonObject)
        request.post({
            headers: {
                'Content-type': 'application/json',
                'Ocp-Apim-Subscription-Key': '45bf530d13f14afab04d29b4dbc54f18',
                'Content-Length': Buffer.byteLength(jsonObject, 'utf8')
            },
            url: 'https://westus.api.cognitive.microsoft.com/qnamaker/v2.0/knowledgebases/' + 'a851fd07-3e03-4deb-9050-83f995a13a5e' + '/generateAnswer',
            // method: 'POST',
            body: jsonObject
        }, function(error, response, body) {
            if (error) {
                console.log(error);
            }
            if (body) {
                data = JSON.parse(body);
				console.log('line 4186',data);
                session.privateConversationData.data1 = data;
                session.save();
                var pp = data.answers.length;
                if (((data.answers[0].answer) === "No good match found in the KB") || (data.answers[0].score < 50)) {
                    session.send("Sorry, I didn't get that. Could you please Re-Enter your question?");
                    session.endDialog();
                    
                } else {
                    builder.Prompts.choice(session, 'I think you have a query related to WMS. Shall we switch to WMS Services?', ['Yes', 'No'], {
                        retryPrompt: getString(),
                        listStyle: builder.ListStyle.button,
                        maxRetries: 2
                    });
                }
            } else if (!body) {
                console.log('error with qna maker of none');
            }
        });
		//}
    },
    function(session, results) {
        if (results.response) {
        
            console.log(results.response.entity + 'hgj');
            switch (results.response.entity) {
                case "Yes":
                    console.log('adf');
                    session.beginDialog('/wmsinitiateagain');
                    break;
                case "No":
                    
                    session.send("Sorry, I do not have answer for this.");
                    session.beginDialog('/Re-EnterITSupport');
                    break;
            }
        } else {
            session.endDialog();
            session.replaceDialog('/Greeting11');
        }
    }
]).triggerAction({
    matches: 'None'
});
//###########################################################

// Emotional Handler by Mukesh

bot.dialog('/UserExcited1', [
    function(session) {
      console.log("UserExcited1 Dialog");
      session.send('I am happy for you.');
      session.endDialog();        
  }             
]).triggerAction({
      matches: 'UserExcited1'
});


bot.dialog('/UserExcited2', [
    function(session) {
      console.log("UserExcited2 Dialog");
      session.send('I am glad that you are satisfied.');
      session.endDialog();
    }           
]).triggerAction({
     matches: 'UserExcited2'
});


bot.dialog('/UserExcited3', [
    function(session) {
      console.log("UserExcited3 Dialog");
      session.send('You are welcome.');
      session.endDialog();
                }           
]).triggerAction({
     matches: 'UserExcited3'
});


bot.dialog('/WellnessGreeting', [
    function(session) {
      console.log("WellnessGreeting Dialog");
      session.send('I am doing good. How are you ?');
      session.endDialog();
    }           
]).triggerAction({
     matches: 'WellnessGreeting'
});


bot.dialog('/UserDown', [
    function(session) {
      console.log("UserDown Dialog");
	  randprompt=getStringUserDown();
	  session.send(randprompt);
      //session.send('I am sorry.');
      session.endDialog();
    }             
]).triggerAction({
     matches: 'UserDown'
});


bot.dialog('/UserAnnoyed', [
    function(session) {
      console.log("UserAnnoyed Dialog");
      session.send('I am Sorry. I am learning continously to serve you better');
      session.endDialog();
    }           
]).triggerAction({
     matches: 'UserAnnoyed'
});


bot.dialog('/BotAnnoyed', [
    function(session) {
        console.log("BotAnnoyed Dialog");
        //session.send('I am sorry. I can\'t understand');
        session.send('I am sorry. I can\'t understand ' + session.message.text);
        session.endDialog();
    }          
]).triggerAction({
     matches: 'BotAnnoyed'
});


bot.dialog('/OutofScope', [
    function(session) {
        console.log("OutofScope Dialog");
        //session.send('I am sorry. Can\'t help you with that');
        session.send('I am sorry. I am not trained to answer that yet.');
        session.endDialog();
    }            
]).triggerAction({
     matches: 'OutofScope'
});

// about Neeva**

bot.dialog('/about_bot', [
    function(session) {
        console.log("about_bot Dialog");
        //session.send('I am sorry. Can\'t help you with that');
        //session.send('I am "Neeva" your Virtual Assistant and I love to help.');
        randprompt=getStringabout_bot();
        session.send(randprompt);
        session.endDialog();
    }            
]).triggerAction({
     matches: 'about_bot'
});

//***testing_bot ****
bot.dialog('/testing_bot', [
    function(session) {
        console.log("testing_bot Dialog");
        //session.send('I am sorry. Can\'t help you with that');
		randprompt=getStringtesting_bot();
		session.send(randprompt);
        //session.send('Hope I am doing well. Anyway I am getting better every day. You are welcome to test me as often as you want.');
        session.endDialog();
    }            
]).triggerAction({
     matches: 'testing_bot'
});

//*******needs_advice********
bot.dialog('/needs_advice', [
    function(session) {
        console.log("needs_advice Dialog");
        //session.send('I am sorry. Can\'t help you with that');
        session.send('Probably I wont be able to give you the right answer straight away.');
        session.endDialog();
    }            
]).triggerAction({
     matches: 'needs_advice'
});
//********happy*********

/* bot.dialog('/happy', [
    function(session) {
        console.log("happy Dialog");
        //session.send('I am sorry. Can\'t help you with that');
        session.send('Happiness is relative.');
        session.endDialog();
    }            
]).triggerAction({
     matches: 'happy'
}); */

//*******angry******
bot.dialog('/angry', [
    function(session) {
        console.log("angry Dialog");
        //session.send('I am sorry. Can\'t help you with that');
		randprompt=getStringangry();
        //session.send('I am sorry. What can I do to help?');
		session.send(randprompt);
        session.endDialog();
    }            
]).triggerAction({
     matches: 'angry'
});

//**************
bot.dialog('/bye', [
    function(session) {
        console.log("bye Dialog");
        //session.send('I am sorry. Can\'t help you with that');
		randprompt=getStringbye();
		session.send(randprompt);
        //session.send('Bye-bye! See you soon');
        session.endDialog();
    }            
]).triggerAction({
     matches: 'bye'
});
//*********************
/* bot.dialog('/good', [
    function(session) {
        console.log("good Dialog");
        //session.send('I am sorry. Can\'t help you with that');
        session.send('I am glad you think so.');
        session.endDialog();
    }            
]).triggerAction({
     matches: 'good'
}); */

//************************ bad intent
bot.dialog('/bot_happy', [
    function(session) {
        console.log("bot_happy Dialog");
        //session.send('I am sorry. Can\'t help you with that');
        //session.send("Happiness is relative.");
        randprompt = getStringbot_happy();
		    session.send(randprompt);
        session.endDialog();
    }            
]).triggerAction({
     matches: 'bot_happy'
});
//************************ bad intent
bot.dialog('/user_happy', [
    function(session) {
        console.log("user_happy Dialog");
        //session.send('I am sorry. Can\'t help you with that');
		randprompt = getStringUserHappy();
        //session.send("Great! Glad to hear that.");
		session.send(randprompt);
        session.endDialog();
    }            
]).triggerAction({
     matches: 'user_happy'
});



//************************ bad intent
bot.dialog('/bot_bad', [
    function(session) {
        console.log("bad Dialog");
        //session.send('I am sorry. Can\'t help you with that');
		    randprompt = getStringbot_bad();
        //session.send("Stick with me. I'm getting better all the time.");
        session.send(randprompt);
        session.endDialog();
    }            
]).triggerAction({
     matches: 'bot_bad'
});

//************************appraisal bad intent
bot.dialog('/appraisal_bad', [
    function(session) {
        console.log("appraisal_bad Dialog");
        //session.send('I am sorry. Can\'t help you with that');
		randprompt = getStringappraisal_bad();
        //session.send("Stick with me. I'm getting better all the time.");
		session.send(randprompt);
        session.endDialog();
    }            
]).triggerAction({
     matches: 'appraisal_bad'
});

//************************appraisal_good intent
bot.dialog('/appraisal_good', [
    function(session) {
        console.log("appraisal_good Dialog");
        //session.send('I am sorry. Can\'t help you with that');
		randprompt = getStringappraisal_good();
        //session.send("Stick with me. I'm getting better all the time.");
		session.send(randprompt);
        session.endDialog();
    }            
]).triggerAction({
     matches: 'appraisal_good'
});

//************************answer_my_question intent
bot.dialog('/answer_my_question', [
    function(session) {
        console.log("answer_my_question Dialog");

        session.send("Can you try asking it in a different way?");
		    //session.send(randprompt);
        session.endDialog();
    }            
]).triggerAction({
     matches: 'answer_my_question'
});

//************************bot_beautiful intent
bot.dialog('/bot_beautiful', [
    function(session) {
        console.log("bot_beautiful Dialog");
        randprompt=getStringbot_beautiful();
        //session.send("Can you try asking it in a different way?");
		    session.send(randprompt);
        session.endDialog();
    }            
]).triggerAction({
     matches: 'bot_beautiful'
});


//************************bot_my_friend intent
bot.dialog('/bot_my_friend', [
    function(session) {
        console.log("bot_my_friend Dialog");
        randprompt=getStringbot_my_friend();
        //session.send("Can you try asking it in a different way?");
		    session.send(randprompt);
        session.endDialog();
    }            
]).triggerAction({
     matches: 'bot_my_friend'
});

//########################################## Small Talk prompt functions

// bot_my_friend prompt
function getStringbot_my_friend() {
    //session.endDialog();
    console.log("i am in getString function");
    var rand = randnum(0, 2, 1);
    var retrymessage = ["Absolutely. You don't have to ask.","Of course we are."];
    return retrymessage[rand];
};


// bot_beautiful prompt
function getStringbot_beautiful() {
    //session.endDialog();
    console.log("i am in getString function");
    var rand = randnum(0, 2, 1);
    var retrymessage = ["Flattery will get you everywhere.","Thank you! What a sweet thing to say."];
    return retrymessage[rand];
};


// about bot prompt
function getStringabout_bot() {
    //session.endDialog();
    console.log("i am in getString function");
    var rand = randnum(0, 3, 1);
    var retrymessage = ["I am '***Neeva***' your Virtual Assistant and I love to help.","I am '***Neeva***' your Virtual Assistant.","I am the '***Neeva***' , and I can help you with your queries."];
    return retrymessage[rand];
};

// bot_bad prompt
function getStringbot_bad() {
    //session.endDialog();
    console.log("i am in getString function");
    var rand = randnum(0, 2, 1);
    var retrymessage = ["Stick with me. I'm getting better all the time."," I am sorry that I am not able to provide the best service."];
    return retrymessage[rand];
};

// bot happy prompt
function getStringbot_happy() {
    //session.endDialog();
    console.log("i am in getString function");
    var rand = randnum(0, 3, 1);
    var retrymessage = ['Happiness is relative.',"I am happy.","I'd like to think so"];
    return retrymessage[rand];
};

// user happy prompt
function getStringUserHappy() {
    //session.endDialog();
    console.log("i am in getString function");
    var rand = randnum(0, 4, 1);
    var retrymessage = ['Great! Glad to hear that.',"Excellent! That's what I like to see.","If you're happy then I'm happy.","Well, your good mood is certainly contagious."];
    return retrymessage[rand];
};
//*************************
// user appraisal_bad prompt
function getStringappraisal_bad() {
    //session.endDialog();
    console.log("i am in getString function");
    var rand = randnum(0, 4, 1);
    var retrymessage = ["I'm sorry. Please let me know if I can help in some way.","Oh no. Hope it's not too bad.","I'm sorry. Please let me know if I can help in some way.","Oh no. Hope it's not too bad."];
    return retrymessage[rand];
};

// user bye prompt
function getStringbye() {
    //session.endDialog();
    console.log("i am in getString function");
    var rand = randnum(0, 4, 1);
    var retrymessage = ["See you soon!","Bye-bye!","Till next time!","Bye."];
    return retrymessage[rand];
};

// user angry prompt
function getStringangry() {
    //session.endDialog();
    console.log("i am in getString function");
    var rand = randnum(0, 4, 1);
    var retrymessage = ["I'm sorry. What can I do to help?","Take a deep breath. What can I do to make things better?","I'm sorry. What can I do to help?","Take a deep breath. What can I do to make things better?"];
    return retrymessage[rand];
};

// user testing_bot prompt
function getStringtesting_bot() {
    //session.endDialog();
    console.log("i am in getString function");
    var rand = randnum(0, 4, 1);
    var retrymessage = ["Hope I'm doing well. Anyway I'm getting better every day. You're welcome to test me as often as you want.","That's good. I like being tested. It helps keep me sharp and lets my developers know how I can improve.","I encourage you to test me often. That helps my developers improve my performance.","I hope to pass your tests. But feel free to test me often. That's the best way to help improve my performance."];
    return retrymessage[rand];
};

// user appraisal_good prompt
function getStringappraisal_good() {
    //session.endDialog();
    console.log("i am in getString function");
    var rand = randnum(0, 5, 1);
    var retrymessage = ["Terrific!","Great!","Wonderful!","Awesome!","Tremendous!"];
    return retrymessage[rand];
};

// UserDown prompt
function getStringUserDown() {
    //session.endDialog();
    console.log("i am in getString function");
    var rand = randnum(0, 4, 1);
    var retrymessage = ["Oh no. What's wrong?","Oh. What's the matter?","What's got you down?","I'm sorry to hear that. What's troubling you?"];
    return retrymessage[rand];
};
//*************************
//ww
bot.dialog('/delete', (session) => {
session.privateConversationData = {};
session.endDialog();
});

//#################################################  


//starting point
bot.dialog('/', function(session) {
    //session.send("You said: %s", session.message.text);
    var abc = session.message.text;
    console.log('*******$$*********', abc.length);
	//if (abc.length >0){
    switch (abc) {
        case "WMS":
            console.log('abc.................');
            session.endDialog();
            session.replaceDialog('/wmsinitiate');
            break;
        case "Firewall":
            //session.send(msg);
            console.log('abc.................11111111');
            session.endDialog();
            session.replaceDialog('/Firewall');
            break;
        case "Outlook/Remote Access\nSupport":
            console.log('abc................jhsdhkhaskhkhasdk.');
            session.endDialog();
            session.replaceDialog('/ITSupport');
            break;
        default:
		console.log("*/",session.message.text)
/* 		if(session.privateConversationData.loginnumber != 1){
			  session.send("Please login first")
			  session.beginDialog('/Loginbot');
		  }
		  else{ */
        session.endDialog();
        session.replaceDialog('/None');
		 // }
        

   // }
}

});

//Function to webScraping video URL

function webscrap(cb) {
    cb('https://www.youtube.com/embed/aDa2xBAfSFw')
}

//Function for hero card generation
function CreateHeroCard(session, builder, title, subtitle, text, url, buttons) {
    var card = new builder.HeroCard(session).title(title).subtitle(subtitle).text(text).buttons(buttons);
    return card;
};
//Function to webscrap outlook search on https://support.office.com
function abc(html, cb) {
    var $ = cheerio.load(html);
    var href = []
    var title = []
    var content = []
    var comm = []
    var a_href = $('h2 a')
    var a_href1 = $('h2 div.ocSearchResultDesc')
    $(a_href).each(function(i, link) {
        var url = $(link).attr('title')
        title.push(url);
    });
    $(a_href1).each(function(i, link) {
        var url = $(link).text()
        content.push(url);
    });
    $(a_href).each(function(i, link) {
        var url = $(link).attr('href')
        href.push(url);
    });
    comm.push(title);
    comm.push(content);
    comm.push(href);
    console.log(comm)
    cb(comm)
}

// Qna Maker Function for Assistive Support

function qnamaker(session, userQuery, cb) {
    //var question = session.message.text
    //var question = session.privateConversationData.userQuery;
    console.log('line 4488',userQuery);
    var question = userQuery;
    jsonObject = JSON.stringify({
        "question": question,
        "top": 1
    });

    request.post({
        headers: {
            'Content-type': 'application/json',
            'Ocp-Apim-Subscription-Key': '45bf530d13f14afab04d29b4dbc54f18',
            'Content-Length': Buffer.byteLength(jsonObject, 'utf8')
        },
        //0a74c1ec-6338-4a5f-9fb5-4939fa3efab3
        url: 'https://westus.api.cognitive.microsoft.com/qnamaker/v2.0/knowledgebases/' + '0a74c1ec-6338-4a5f-9fb5-4939fa3efab3' + '/generateAnswer',
        // method: 'POST',
        body: jsonObject
    }, function(error, response, body) {
        if (error) {
            //throw (error);
            console.log('3233', error);
        } else if (response.statusCode != 404) {
            console.log("\nStatus: ", response.statusCode);
            console.log("\nAdded new utterances to LUIS");
            var data = JSON.parse(body)
            console.log("**************", data);
            //console.log("MMMMM",data.answers[0].answer);
            //
            if ((data.answers[0].answer) === "No good match found in the KB") {
                cb("No good match found in the KB");
            } else {
                cb(data.answers[0].answer);
            }
        } else {
            console.log('got some connection error');
        }
    });
    

};
