import { LightningElement } from 'lwc';

export default class BedrockMapLocation extends LightningElement {
    zoomLevel = 10;
    mapMarkers = [
        {
            location: {
                Street: 'One Market, Suite 300',
                City: 'San Francisco',
                State: 'CA',
                PostalCode: '94105'
            },
              title: 'The Landmark @ One Market',
            description: 'Salesforce West Tower Area',
            icon: 'standard:location',
             value: "BedRock",
            icon: "standard:account",
            title: "BedRock Headquarter",
            description: "This is a long description",
        }
    ];

}