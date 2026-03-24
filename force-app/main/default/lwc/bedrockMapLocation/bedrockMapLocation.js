// bedrockMapLocation.js
import { LightningElement, wire } from 'lwc';
import getHeadQuarterLocation from '@salesforce/apex/BedRockLocationMetadataController.getHeadQuarterLocation';

const DEFAULT_ZOOM = 12;
const MARKER_TITLE = 'Bedrock Headquarters';
const MARKER_DESCRIPTION = 'Bedrock Corporate Headquarters';

export default class BedrockMapLocation extends LightningElement {
    zoomLevel = DEFAULT_ZOOM;

    @wire(getHeadQuarterLocation)
    headquartersLocation;

    get hasLocation() {
        return !!this.headquartersLocation?.data;
    }

    get hasError() {
        return !!this.headquartersLocation?.error;
    }

    get isLoading() {
        return !this.hasLocation && !this.hasError;
    }

    get mapMarkers() {
        const locationData = this.headquartersLocation?.data;
        if (!locationData) {
            return [];
        }

        return [
            {
                location: {
                    Street: locationData.Street__c,
                    City: locationData.City__c,
                    State: locationData.State__c,
                    PostalCode: locationData.PostalCode__c,
                    Country: locationData.Country__c
                },
                title: MARKER_TITLE,
                description: MARKER_DESCRIPTION,
                icon: 'standard:account',
                value: 'BEDROCK_HQ'
            }
        ];
    }
}