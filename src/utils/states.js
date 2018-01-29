// // // // // // // // // //
//
//      Data on States
//
// // // // // // // // // //

const Obj_keys = Object.keys || require('object-keys');

function searchStates(val) {
    val = val.toLowerCase();
    const stateNames = Obj_keys(states); // from states obj below!
    let results = [];
    for(let state of stateNames) {
        let added = false;
        // To catch matches with a space e.g. "New York"
        if(state.toLowerCase().startsWith(val)) {
            results.push(state);
            added = true;
        }
        // if not already added, check for match within any word in name
        if(!added) {
            // spitting up states by word allows searches to return results 
            // for either word in a state e.g. "New" or "York" both return "New York"
            let arr = state.split(' ');
            
            for(let word of arr) {
                if(word.toLowerCase().startsWith(val)) {
                    results.push(state);
                    added = true;
                    break; // state is at least a partial match, no need to check any further words
                }
            }
        }
    }
    return results;
}

// * * * * * * * * * * * * * * *
// returns full name associated 
// with abbreviation
// * * * * * * * * * * * * * * *
function getFullName(abbr) {
    switch (abbr) {
        case 'DC':
            return 'Washington D.C.';
        case 'AL':
            return 'Alabama';
        case 'AK':
            return 'Alaska';
        case 'AZ':
            return 'Arizona';
        case 'AR':
            return 'Arkansas';
        case 'CA':
            return 'California';
        case 'CO':
            return 'Colorado';
        case 'CT':
            return 'Connecticut';
        case 'DE':
            return 'Delaware';
        case 'FL':
            return 'Florida';
        case 'GA':
            return 'Georgia';
        case 'HI':
            return 'Hawaii';
        case 'ID':
            return 'Idaho';
        case 'IL':
            return 'Illinois';
        case 'IN':
            return 'Indiana';
        case 'IA':
            return 'Iowa';
        case 'KS':
            return 'Kansas';
        case 'KY':
            return 'Kentucky';
        case 'LA':
            return 'Louisiana';
        case 'ME':
            return 'Maine';
        case 'MD':
            return 'Maryland';
        case 'MA':
            return 'Massachusetts';
        case 'MI':
            return 'Michigan';
        case 'MN':
            return 'Minnesota';
        case 'MS':
            return 'Mississippi';
        case 'MO':
            return 'Missouri';
        case 'MT':
            return 'Montana';
        case 'NE':
            return 'Nebraska';
        case 'NV':
            return 'Nevada';
        case 'NH':
            return 'New Hampshire';
        case 'NJ':
            return 'New Jersey';
        case 'NM':
            return 'New Mexico';
        case 'NY':
            return 'New York';
        case 'NC':
            return 'North Carolina';
        case 'ND':
            return 'North Dakota';
        case 'OH':
            return 'Ohio';
        case 'OK':
            return 'Oklahoma';
        case 'OR':
            return 'Oregon';
        case 'PA':
            return 'Pennsylvania';
        case 'RI':
            return 'Rhode Island';
        case 'SC':
            return 'South Carolina';
        case 'SD':
            return 'South Dakota';
        case 'TN':
            return 'Tennessee';
        case 'TX':
            return 'Texas';
        case 'UT':
            return 'Utah';
        case 'VT':
            return 'Vermont';
        case 'VA':
            return 'Virginia';
        case 'WA':
            return 'Washington';
        case 'WV':
            return 'West Virginia';
        case 'WI':
            return 'Wisconsin';
        case 'WY':
            return 'Wyoming';
        default: 
            return 'Unknown'
    }
}

// * * * * * * * * * * * * * * *
// returns abbreviation 
// for given state
// * * * * * * * * * * * * * * *
function getAbbr(state) {
    switch (state) {
        case 'Washington D.C.':
            return 'DC';
        case 'Alabama':
            return 'AL';
        case 'Alaska':
            return 'AK';
        case 'Arizona':
            return 'AZ';
        case 'Arkansas':
            return 'AR';
        case 'California':
            return 'CA';
        case 'Colorado':
            return 'CO';
        case 'Connecticut':
            return 'CT';
        case 'Delaware':
            return 'DE';
        case 'Florida':
            return 'FL';
        case 'Georgia':
            return 'GA';
        case 'Hawaii':
            return 'HI';
        case 'Idaho':
            return 'ID';
        case 'Illinois':
            return 'IL';
        case 'Indiana':
            return 'IN';
        case 'Iowa':
            return 'IA';
        case 'Kansas':
            return 'KS';
        case 'Kentucky':
            return 'KY';
        case 'Louisiana':
            return 'LA';
        case 'Maine':
            return 'ME';
        case 'Maryland':
            return 'MD';
        case 'Massachusetts':
            return 'MA';
        case 'Michigan':
            return 'MI';
        case 'Minnesota':
            return 'MN';
        case 'Mississippi':
            return 'MS';
        case 'Missouri':
            return 'MO';
        case 'Montana':
            return 'MT';
        case 'Nebraska':
            return 'NE';
        case 'Nevada':
            return 'NV';
        case 'New Hampshire':
            return 'NH';
        case 'New Jersey':
            return 'NJ';
        case 'New Mexico':
            return 'NM';
        case 'New York':
            return 'NY';
        case 'North Carolina':
            return 'NC';
        case 'North Dakota':
            return 'ND';
        case 'Ohio':
            return 'OH';
        case 'Oklahoma':
            return 'OK';
        case 'Oregon':
            return 'OR';
        case 'Pennsylvania':
            return 'PA';
        case 'Rhode Island':
            return 'RI';
        case 'South Carolina':
            return 'SC';
        case 'South Dakota':
            return 'SD';
        case 'Tennessee':
            return 'TN';
        case 'Texas':
            return 'TX';
        case 'Utah':
            return 'UT';
        case 'Vermont':
            return 'VT';
        case 'Virginia':
            return 'VA';
        case 'Washington':
            return 'WA';
        case 'West Virginia':
            return 'WV';
        case 'Wisconsin':
            return 'WI';
        case 'Wyoming':
            return 'WY';
        default: 
            return 'Unknown'
    }
}

const states = {
    'Washington D.C.': 'DC',
    'Alabama': 'AL',
    'Alaska': 'AK',
    'Arizona': 'AZ',
    'Arkansas': 'AR',
    'California': 'CA',
    'Colorado': 'CO',
    'Connecticut': 'CT',
    'Delaware': 'DE',
    'Florida': 'FL',
    'Georgia': 'GA',
    'Hawaii': 'HI',
    'Idaho': 'ID',
    'Illinois': 'IL',
    'Indiana': 'IN',
    'Iowa': 'IA',
    'Kansas': 'KS',
    'Kentucky': 'KY',
    'Louisiana': 'LA',
    'Maine': 'ME',
    'Maryland': 'MD',
    'Massachusetts': 'MA',
    'Michigan': 'MI',
    'Minnesota': 'MN',
    'Mississippi': 'MS',
    'Missouri': 'MO',
    'Montana': 'MT',
    'Nebraska': 'NE',
    'Nevada': 'NV',
    'New Hampshire': 'NH',
    'New Jersey': 'NJ',
    'New Mexico': 'NM',
    'New York': 'NY',
    'North Carolina': 'NC',
    'North Dakota': 'ND',
    'Ohio': 'OH',
    'Oklahoma': 'OK',
    'Oregon': 'OR',
    'Pennsylvania': 'PA',
    'Rhode Island': 'RI',
    'South Carolina': 'SC',
    'South Dakota': 'SD',
    'Tennessee': 'TN',
    'Texas': 'TX',
    'Utah': 'UT',
    'Vermont': 'VT',
    'Virginia': 'VA',
    'Washington': 'WA',
    'West Virginia': 'WV',
    'Wisconsin': 'WI',
    'Wyoming': 'WY'
};

module.exports = { searchStates, getFullName, getAbbr, states };