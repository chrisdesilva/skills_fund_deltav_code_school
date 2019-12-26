import logo from "../images/logo_deltav.jpg" // add school logo to images folder and import here

export const applicationsLive = true // set to false if not currently accepting applications
export const disabledLoanAppFormID = '69140c47-bb03-4a1b-b674-cc136fdea23d' // Hubspot ID for all disabled apply now lead captures
export const nextCohortStartDate = 'October 29, 2019'

// ***** BEGIN TERMS AND FAQ INFO *****

export const schoolInfo = { // term details section
    interestRate36: '8.99%',
    interestRate60: '10.99%',
    APRRange36: '11.08 - 11.34%',
    APRRange60: '12.48 - 12.58%',
    interestOnly: [
        { // for multiple examples of interest only, add items to interestOnly array
            programName: 'the 201 course or 301 course',
            APR36: '11.34%',
            financeCharge36: '$1,068.91',
            IOPayment36: '$38.96',
            FullMonthlyPayment36: '$165.33',
            APR60: '12.58%',
            financeCharge60: '$1,924.95',
            IOPayment60: '$47.62',
            FullMonthlyPayment60: '$113.03',
            LoanExampleAmt: '$5,000',
            LoanExampleOFeeAmt: '$200',
            LoanExampleAmtPlusOFee: '$5,200',
            programLength: '1' // program length in months
        },
        { // for multiple examples of interest only, add items to interestOnly array
            programName: 'the 201 + 301 bundle or 401 course',
            APR36: '11.25%',
            financeCharge36: '$2,215.73',
            IOPayment36: '$77.91',
            FullMonthlyPayment36: '$330.67',
            APR60: '12.55%',
            financeCharge60: '$3,945.15',
            IOPayment60: '$95.25',
            FullMonthlyPayment60: '$226.07',
            LoanExampleAmt: '$10,000',
            LoanExampleOFeeAmt: '$400',
            LoanExampleAmtPlusOFee: '$10,400',
            programLength: '2' // program length in months
        },
        { // for multiple examples of interest only, add items to interestOnly array
            programName: 'the 301 + 401 bundle',
            APR36: '11.16%',
            financeCharge36: '$2,293.64',
            IOPayment36: '$77.91',
            FullMonthlyPayment36: '$330.67',
            APR60: '12.51%',
            financeCharge60: '$4,040.39',
            IOPayment60: '$95.25',
            FullMonthlyPayment60: '$226.07',
            LoanExampleAmt: '$10,000',
            LoanExampleOFeeAmt: '$400',
            LoanExampleAmtPlusOFee: '$10,400',
            programLength: '3' // program length in months
        },
        { // for multiple examples of interest only, add items to interestOnly array
            programName: 'the 201 + 301 + 401 bundle',
            APR36: '11.08%',
            financeCharge36: '$2,371.56',
            IOPayment36: '$77.91',
            FullMonthlyPayment36: '$330.67',
            APR60: '12.48%',
            financeCharge60: '$4,135.64',
            IOPayment60: '$95.25',
            FullMonthlyPayment60: '$226.07',
            LoanExampleAmt: '$10,000',
            LoanExampleOFeeAmt: '$400',
            LoanExampleAmtPlusOFee: '$10,400',
            programLength: '4' // program length in months
        },
    ],
    immediateRepayment: [
        { // for multiple examples of immmediate repayment, add items to immediateRepayment array
            programName: 'PROGRAM NAME',
            APR36: 'XX.XX%',
            financeCharge36: '$X,XXX.XX',
            FullMonthlyPayment36: '$XXX.XX',
            APR60: 'XX.XX%',
            financeCharge60: '$X,XXX.XX',
            FullMonthlyPayment60: '$XXX.XX',
            LoanExampleAmt: '$10,000',
            LoanExampleOFeeAmt: '$400',
            LoanExampleAmtPlusOFee: '$10,400'
        }
    ]
}

export const faq = { // faq section
    costOfLiving: true, // true if at least one program has cost of living included
    costOfLivingPrograms: '', // leave as empty string is cost of living availability is the same across all programs
    multCostOfLivingPrograms: false, // true if costOfLivingPrograms string has more than one program
    interestOnly: true, // true if interest-only payments are an option
    immediateRepayment: false, // true if immediate repayment is an option
    multipleLoanLengths: true, // true if 36 and 60 month options are both available
    multipleLoanTypes: false, // true if both IR and IO are available
    multiPrograms: true, // only true if there are multiple programs
    onlinePrograms: false, // true if at least one program is remote/online
    schoolHQState: 'WA',
    origFee: 0.04,

    // interest payment FAQ info
    exampleLoanAmount: '$10,000',
    interestRate36: '8.99%',
    interestRate60: '10.99%',
    APR36: '11.08 - 11.34%',
    APR60: '12.48 - 12.58%',
    IOPayment36: '$77.91',
    IOPayment60: '$95.25',

    // max loan amounts by program for faq1
    loanRange: [
        {
            programName: "201",
            maxAmount: "$3,500",
            col: true,
            colAmount: "$2,000"
        },
        {
            programName: "301",
            maxAmount: "$4,500",
            col: true,
            colAmount: "$2,000"
        },
        {
            programName: "401",
            maxAmount: "$12,000",
            col: true,
            colAmount: "$5,000"
        },
        {
            programName: "the 201 + 301 bundle",
            maxAmount: "$8,000",
            col: true,
            colAmount: "$4,000"
        },
        {
            programName: "the 301 + 401 bundle",
            maxAmount: "$16,500",
            col: true,
            colAmount: "$7,000"
        },
        {
            programName: "the 201 + 301 + 401 bundle",
            maxAmount: "$20,000",
            col: true,
            colAmount: "$9,000"
        },
    ]
}

// ***** END TERMS AND FAQ INFO ***** 

// ***** BEGIN GENERAL SCHOOL INFO ***** 

export const schoolLogo = logo // go to header.js if height needs adjustment

export const schoolName = "DeltaV Code School"

export const schoolURL = 'https://www.deltavcodeschool.com' // update with url of school's website

export const skfURL = 'https://deltavcodeschool.skills.fund/' // update with Skills Fund url

export const headline = "Learn to Code at DeltaV Code School" // update headline as appropriate

export const leadContent = {
    header: "Your last step on the path toward changing your career",
    paragraph: `${schoolName} designs its programs to provide students a foundation for a career in software development. ${schoolName} partners with Skills Fund to offer tuition${faq.costOfLiving ? ' and cost of living' : ''} financing so more students like you can access their program.`
}

export const threeStepCardText = {
    step1: "",
    step2: {
        header: "select your program",
        text: "Choose between the Code 201, Code 301, Code 401, the 201 + 301 bundle, the 301 + 401 bundle, or the 201 + 301 + 401 bundle."
    },
    step3: `You'll be on your way to an exciting career in tech as part of ${schoolName}'s powerful network.`
}

export const netlifyFormName = 'deltavcodeschool_contact'

export const GATracking = 'UA-68312423-1'

export const hubspotFormId = "56774e4f-e103-47d2-805a-5a7bb121ada5" // create Hubspot form, get form id after publishing

export const selectAProgram = "select_a_deltavcodeschool_program" // update school name to match form field on Hubspot, *** change to "program_name" if only one program ***"

// ***** END GENERAL SCHOOL INFO ***** 


// ***** BEGIN LOAN APP AND CALC INFO *****

export const defaultLoanAmount = 5500
export const placeholder = '$5,500'
export const interestRates = {
    ir36: 8.99,
    ir60: 10.99
}
export const moreThanSixPrograms = false // set to true if there are 7 or more programs in the loan application. True will render a dropdown menu, false will render buttons for each program.

export const programLoanInfo = [ // update with program names and corresponding loan URLs with market segment code from Master Loan Parameters
    {
        name: "201",
        url: "https://my.skills.fund/application?lenderCode=SKDV217",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 5500,
            loanTerm36: true,
            loanTerm60: true,
            '0': { // interest-only 
                k: 3, 
                apr36: 11.34, 
                apr60: 12.58
            },
            '1': null // immediate repayment
        },
        defaultLoanType: "0", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
        showLoanTypes: false, // true if both IR and IO are available
        locations: ["Metro 1", "Metro 2", "Metro 3"],
        metros: [ // list in same order as locations array above
          {
            location: "Metro 1",
            loanInfo: { // // match loanInfo to Program 1 above
              maxLoanAmt: 5500,
              loanTerm36: true,
              loanTerm60: true,
              '0': { 
                  k: 3, 
                  apr36: 11.34, 
                  apr60: 12.58
              },
              '1': null
            }
          }
        ]
    },
    {
        name: "301",
        url: "https://my.skills.fund/application?lenderCode=SKDV317",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 6500,
            loanTerm36: true,
            loanTerm60: true,
            '0': { 
                k: 3, 
                apr36: 11.34, 
                apr60: 12.58
            },
            '1': null
        },
        defaultLoanType: "0", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: false,
        showLoanTypes: false,
        locations: ["Metro 1", "Metro 2"],
        metros: [
            {
              location: "Metro 1",
              loanInfo: { // match loanInfo to Program 2 loanInfo above
                maxLoanAmt: 6500,
                loanTerm36: true,
                loanTerm60: true,
                '0': { 
                    k: 3, 
                    apr36: 11.34, 
                    apr60: 12.51
                },
                '1': null
              }
            }
          ]
    },
    {
        name: "401",
        url: "https://my.skills.fund/application?lenderCode=SKDV417",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 17000,
            loanTerm36: true,
            loanTerm60: true,
            '0': { 
                k: 4, 
                apr36: 11.25, 
                apr60: 12.55
            },
            '1': null
        },
        defaultLoanType: "0", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: false,
        showLoanTypes: false,
        locations: ["Metro A", "Metro B", "Metro C"],
        metros: [
            {
              location: "Metro A",
              loanInfo: { // match loanInfo to Program 3 loanInfo above
                maxLoanAmt: 17000,
                loanTerm36: true,
                loanTerm60: true,
                '0': { 
                    k: 4, 
                    apr36: 11.25, 
                    apr60: 12.55
                },
                '1': null
              }
            }
          ]
    },
    {
        name: "201 + 301",
        url: "https://my.skills.fund/application?lenderCode=SKDV2317",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 12000,
            loanTerm36: true,
            loanTerm60: true,
            '0': { 
                k: 4, 
                apr36: 11.25, 
                apr60: 12.55
            },
            '1': null
        },
        defaultLoanType: "0", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: false,
        showLoanTypes: false,
        locations: ["Metro A", "Metro B", "Metro C"],
        metros: [
            {
              location: "Metro A",
              loanInfo: { // match loanInfo to Program 3 loanInfo above
                maxLoanAmt: 12000,
                loanTerm36: true,
                loanTerm60: true,
                '0': { 
                    k: 4, 
                    apr36: 11.25, 
                    apr60: 12.55
                },
                '1': null
              }
            }
          ]
    },
    {
        name: "301 + 401",
        url: "https://my.skills.fund/application?lenderCode=SKDV3417",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 23500,
            loanTerm36: true,
            loanTerm60: true,
            '0': { 
                k: 5, 
                apr36: 11.16, 
                apr60: 12.51
            },
            '1': null
        },
        defaultLoanType: "0", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: false,
        showLoanTypes: false,
        locations: ["Metro A", "Metro B", "Metro C"],
        metros: [
            {
              location: "Metro A",
              loanInfo: { // match loanInfo to Program 3 loanInfo above
                maxLoanAmt: 23500,
                loanTerm36: true,
                loanTerm60: true,
                '0': { 
                    k: 5, 
                    apr36: 11.16, 
                    apr60: 12.51
                },
                '1': null
              }
            }
          ]
    },
    {
        name: "201 + 301 + 401",
        url: "https://my.skills.fund/application?lenderCode=SKDV23417",
        loanInfo: { // match loanInfo in first metro below
            maxLoanAmt: 29000,
            loanTerm36: true,
            loanTerm60: true,
            '0': { 
                k: 6, 
                apr36: 11.08, 
                apr60: 12.48
            },
            '1': null
        },
        defaultLoanType: "0", // leave at 0 for interest-only, set to 1 for immediate repayment
        showMetros: false,
        showLoanTypes: false,
        locations: ["Metro A", "Metro B", "Metro C"],
        metros: [
            {
              location: "Metro A",
              loanInfo: { // match loanInfo to Program 3 loanInfo above
                maxLoanAmt: 29000,
                loanTerm36: true,
                loanTerm60: true,
                '0': { 
                    k: 6, 
                    apr36: 11.08, 
                    apr60: 12.48
                },
                '1': null
              }
            }
          ]
    },
]

// ***** BEGIN LOAN CALC TEXT INFO *****
export const programMaxText = "Choose the loan amount that works best for you. Borrow up to your program's max for tuition and cost of living according to the table below."

export const paymentTable = {
    headers: ["Program", "Tuition", "Cost of Living", "Max Total"],
    data: [
        {
            name: "CODE 201",
            tuition: "$3,500",
            col: "$2,000",
            max: "$5,500"
        },
        {
            name: "CODE 301",
            tuition: "$4,500",
            col: "$2,000",
            max: "$6,500"
        },
        {
            name: "CODE 401",
            tuition: "$12,000",
            col: "$5,000",
            max: "$17,000"
        },
        {
            name: "CODE 201 + 301",
            tuition: "$8,000",
            col: "$4,000",
            max: "$12,000"
        },
        {
            name: "CODE 301 + 401",
            tuition: "$16,500",
            col: "$7,000",
            max: "$23,500"
        },
        {
            name: "CODE 201 + 301 + 401",
            tuition: "$20,000",
            col: "$9,000",
            max: "$29,000"
        },
    ],
    show: true
}

// ***** END LOAN CALC TEXT INFO *****


// ***** Snippets for Netlify ***** 

// before body Hubspot

// <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/3871135.js"></script>

// before head Crazyegg

// <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0076/9926.js" async="async"></script>

// before body Yotpo

// <script type="text/javascript"> (function e(){var e=document.createElement("script");e.type="text/javascript",e.async=!0, e.src="//staticw2.yotpo.com/vDnpGV6DFy9oeKaj5UugzYG5TCeQ4gxgEVs9BO3n/widget.js";var t=document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e,t)})(); </script>

