import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    public imgsize1: any = 24;
    public imgsize2: any = 42;

    public dropdownstyle = "color: #32aeb1;";

    // Wellness component routes
    public ayushroutes : any = [
        {routepath: "/products/productList/ayurvedicProducts", category : "Ayurvedic"},
        {routepath: "", category : "Unani"},
        {routepath: "", category : "Homeopathy"},
        {routepath: "", category : "Siddha"}
    ];

    public covidroutes : any = [
        {routepath: "", category : "Oxygen Can"},
        {routepath: "", category : "Personal & Home Essentials"},
        {routepath: "", category : "Business Essentials"},
        {routepath: "", category : "Mask, Gloves & Protective Equipment"},
        {routepath: "", category : "Travel Essentials"},
    ];

    public devicesroutes : any = [
        {routepath: "", category : "Breathe Easy"},
        {routepath: "", category : "Surgical Accessories"},
        {routepath: "", category : "Measurements"},
        {routepath: "", category : "Orthopaedics"}
    ];

    public diabetesroutes : any = [
        {routepath: "", category : "Glucometers"},
        {routepath: "", category : "Sugar Substitutes"},
        {routepath: "", category : "Diabetes Management Supplements"},
        {routepath: "", category : "Diabetes Care Ayurveda"},
        {routepath: "", category : "Lancets & Test Strips"}
    ];

    public fitnessroutes : any = [
        {routepath: "", category : "Weight Management"},
        {routepath: "", category : "Sports Supplements"},
        {routepath: "", category : "Smoking Cessation Support"},
        {routepath: "", category : "Vitamins And Supplements"},
        {routepath: "", category : "Family Nutrition"},
        {routepath: "", category : "Health Food And Drinks"},
        {routepath: "", category : "Ayurvedic Supplements"}
    ];

    public healthroutes : any = [
        {routepath: "", category : "Women's Care"},
        {routepath: "", category : "Bone And Joint Pain"},
        {routepath: "", category : "Liver Care"},
        {routepath: "", category : "Piles Care"},
        {routepath: "", category : "Weight Care (EW)"},
        {routepath: "", category : "Stomach Care"},
        {routepath: "", category : "Mental Care"},
        {routepath: "", category : "De-Addiction"},
        {routepath: "", category : "Diabetic Care"},
        {routepath: "", category : "Cardiac Care"},
        {routepath: "", category : "Cold And Fever"},
        {routepath: "", category : "Immunity Care"},
        {routepath: "", category : "Lung Care"}
    ];

    public mombabyroutes : any = [
        {routepath: "", category : "Baby Care"},
        {routepath: "", category : "Feminine Hygiene"},
        {routepath: "", category : "Maternity Care"},
        {routepath: "", category : "Baby Bath Time"},
        {routepath: "", category : "Maternity Accessories"}
    ];

    public personalcareroutes : any = [
        {routepath: "", category : "Home & Health"},
        {routepath: "", category : "Senior Care"},
        {routepath: "", category : "Face Personal Care"},
        {routepath: "", category : "Hands & Feet"},
        {routepath: "", category : "Oral Care"},
        {routepath: "", category : "Bath & Shower"},
        {routepath: "", category : "Body Care"},
        {routepath: "", category : "Personal Care Tools & Accessories"},
        {routepath: "", category : "Lip Care"},
        {routepath: "", category : "Bathing Accessories"}
    ];

    public sexualwellnessroutes : any = [
        {routepath: "", category : "Condoms"},
        {routepath: "", category : "Massagers/Vibrators"},
        {routepath: "", category : "Sexual Health Supplements"},
        {routepath: "", category : "Lubricants"},
        {routepath: "", category : "Sprays/Gels"}
    ];

    public surgicalroutes : any = [
        {routepath: "", category : "Respiratory Supplies"},
        {routepath: "", category : "Surgical Consumables"},
        {routepath: "", category : "Iv Infusion"},
        {routepath: "", category : "Surgical Instrument"},
        {routepath: "", category : "Dressing"},
        {routepath: "", category : "Gi Care"},
        {routepath: "", category : "Urinary Care"},
        {routepath: "", category : "Wound Treatment"}
    ];

    // Beauty component routes
    public hairroutes : any = [
        {routepath: "", category : "Hair Care"},
        {routepath: "", category : "Hair Color"},
        {routepath: "", category : "Hair Styling"},
        {routepath: "", category : "Hair Tools & Accessories"},
        {routepath: "", category : "Scalp Treatments"},
        {routepath: "", category : "Shop By Hair Type"}
    ];

    public makeuproutes : any = [
        {routepath: "", category : "Eyes"},
        {routepath: "", category : "Face Makeup"},
        {routepath: "", category : "Lips"},
        {routepath: "", category : "Make-Up Tools & Brushes"},
        {routepath: "", category : "Nails"}
    ];

    public momnbabyroutes : any = [
        {routepath: "", category : "Baby Bath Time"},
        {routepath: "", category : "Baby Care"},
        {routepath: "", category : "Feminine Hygiene"},
        {routepath: "", category : "Maternity Accessories"},
        {routepath: "", category : "Maternity Care"},
        {routepath: "", category : "Toys & Games"}
    ];

    public skincareroutes : any = [
        {routepath: "", category : "Aromatherapy"},
        {routepath: "", category : "Cleansers"},
        {routepath: "", category : "Eye Care"},
        {routepath: "", category : "Face Skin Care"},
        {routepath: "", category : "Masks"},
        {routepath: "", category : "Moisturizers"},
        {routepath: "", category : "Sunscreen"},
        {routepath: "", category : "Toners & Serums"}
    ];

    // second navbar routes
    public secondnav : any = [
        {routepath: "", category : "Covid Essentials"},
        {routepath: "", category : "Diabetes"},
        {routepath: "", category : "Cardiac Care"},
        {routepath: "", category : "Stomach Care"},
        {routepath: "", category : "Ayurvedic"},
        {routepath: "", category : "Homeopathy"},
        {routepath: "", category : "Fitness"},
        {routepath: "", category : "Mom & Baby"},
        {routepath: "", category : "Devices"},
        {routepath: "", category : "Surgicals"},
        {routepath: "", category : "Sexual Wellness"},
        {routepath: "", category : "Treatments"},
        {routepath: "", category : "Skin Care"},
        {routepath: "", category : "Personal Care"}
    ]
}
