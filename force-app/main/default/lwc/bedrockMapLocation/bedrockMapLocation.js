// bedrockMapLocation.js
import { LightningElement } from 'lwc';

const DEFAULT_ZOOM = 12;

export default class BedrockMapLocation extends LightningElement {
    zoomLevel = DEFAULT_ZOOM;

    mapMarkers = [
        {
            location: {
                Street: 'The Landmark @ One Market, Suite 300',
                City: 'San Francisco',
                State: 'CA',
                PostalCode: '94105',
                Country: 'US'
            },
            title: 'Bedrock Headquarters',
            description: 'San Francisco, CA 94105',
            icon: 'standard:account',
            value: 'BEDROCK_HQ'
        }
    ];
}