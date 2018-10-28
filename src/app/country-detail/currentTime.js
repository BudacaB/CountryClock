// let country = [{"name":"Afghanistan","topLevelDomain":[".af"],"alpha2Code":"AF","alpha3Code":"AFG","callingCodes":["93"],"capital":"Kabul","altSpellings":["AF","Afġānistān"],"region":"Asia","subregion":"Southern Asia","population":27657145,"latlng":[33.0,65.0],"demonym":"Afghan","area":652230.0,"gini":27.8,"timezones":["UTC+04:30"],"borders":["IRN","PAK","TKM","UZB","TJK","CHN"],"nativeName":"افغانستان","numericCode":"004","currencies":[{"code":"AFN","name":"Afghan afghani","symbol":"؋"}],"languages":[{"iso639_1":"ps","iso639_2":"pus","name":"Pashto","nativeName":"پښتو"},{"iso639_1":"uz","iso639_2":"uzb","name":"Uzbek","nativeName":"Oʻzbek"},{"iso639_1":"tk","iso639_2":"tuk","name":"Turkmen","nativeName":"Türkmen"}],"translations":{"de":"Afghanistan","es":"Afganistán","fr":"Afghanistan","ja":"アフガニスタン","it":"Afghanistan","br":"Afeganistão","pt":"Afeganistão","nl":"Afghanistan","hr":"Afganistan","fa":"افغانستان"},"flag":"https://restcountries.eu/data/afg.svg","regionalBlocs":[{"acronym":"SAARC","name":"South Asian Association for Regional Cooperation","otherAcronyms":[],"otherNames":[]}],"cioc":"AFG"}]
// let country2 = [{"name":"Antarctica","topLevelDomain":[".aq"],"alpha2Code":"AQ","alpha3Code":"ATA","callingCodes":["672"],"capital":"","altSpellings":[],"region":"Polar","subregion":"","population":1000,"latlng":[-74.65,4.48],"demonym":"","area":1.4E7,"gini":null,"timezones":["UTC-03:00","UTC+03:00","UTC+05:00","UTC+06:00","UTC+07:00","UTC+08:00","UTC+10:00","UTC+12:00"],"borders":[],"nativeName":"Antarctica","numericCode":"010","currencies":[{"code":"AUD","name":"Australian dollar","symbol":"$"},{"code":"GBP","name":"British pound","symbol":"£"}],"languages":[{"iso639_1":"en","iso639_2":"eng","name":"English","nativeName":"English"},{"iso639_1":"ru","iso639_2":"rus","name":"Russian","nativeName":"Русский"}],"translations":{"de":"Antarktika","es":"Antártida","fr":"Antarctique","ja":"南極大陸","it":"Antartide","br":"Antártida","pt":"Antárctida","nl":"Antarctica","hr":"Antarktika","fa":"جنوبگان"},"flag":"https://restcountries.eu/data/ata.svg","regionalBlocs":[],"cioc":""}]

// "timezones":["UTC+04:30"]
// "timezones":["UTC-03:00","UTC+03:00","UTC+05:00","UTC+06:00","UTC+07:00","UTC+08:00","UTC+10:00","UTC+12:00"]

/* for (timezone of country) {
    var moment = require('moment-timezone');
    console.log(moment().tz(timezone.region+"/"+timezone.capital).format('h:mm:ss a'))
} */

// one TZ
/* for (timezone of country) {
    let moment = require('moment-timezone');
    // get timeszones value
    let offset = timezone.timezones
    // stringify array object offset
    const offsetString = offset.toString()
    // split string by 'UTC' separator
    let breakOffsetString = offsetString.split('UTC')
    // stringify array object breakOffsetString
    let breakOffsetStringified = breakOffsetString[1].toString()

    console.log(moment().utcOffset(breakOffsetStringified).format('h:mm:ss a'))
} */

// multiple TZs

/* let currentTime = (country) => {
    for (timezone of country) {
        let moment = require('moment-timezone');
        // get timeszones value
        let offset = timezone.timezones
        //console.log(offset)
        // stringify array object offset
        const offsetString = offset.toString()
        //console.log(offsetString)
        // split string by 'UTC' separator
        let breakOffsetString = offsetString.split('UTC')
        //console.log(breakOffsetString)
        // stringify array object breakOffsetString
        for (i=1; i<breakOffsetString.length; i++) {
            let breakOffsetStringified = breakOffsetString[i].toString()
        
            console.log(moment().utcOffset(breakOffsetStringified).format('h:mm:ss a'))
        }
    }
}

currentTime(country2) */



let currentTime = (tara) => {
    let moment = require('moment-timezone');
    // get timeszones value
    let offset = tara.timezones
    //console.log(offset)
    // stringify array object offset
    const offsetString = offset.toString()
    //console.log(offsetString)
    // split string by 'UTC' separator
    let breakOffsetString = offsetString.split('UTC')
    //console.log(breakOffsetString)
    // stringify array object breakOffsetString
    for (i=1; i<breakOffsetString.length; i++) {
        let breakOffsetStringified = breakOffsetString[i].toString()
    
        console.log(moment().utcOffset(breakOffsetStringified).format('h:mm:ss a'))
    }
}


currentTime(tara)