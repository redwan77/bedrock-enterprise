import { LightningElement, wire } from 'lwc';
import getHeadQuarterLocation from '@salesforce/apex/BedRockLocationMetadataController.getHeadQuarterLocation';

const DEFAULT_ZOOM = 12;
const MARKER_TITLE = 'Bedrock Headquarters';
const MARKER_DESCRIPTION = 'Bedrock Corporate Headquarters';

export default class BedrockMapLocation extends LightningElement {
    zoomLevel = DEFAULT_ZOOM;

    @wire(getHeadQuarterLocation)
    headquartersLocations;

    /**
     * Get the map markers for the headquarters locations
     * @returns {Array} of map markers
     */
    get mapMarkers() {
        return this.locationData.map((location) => {
            return {
                location: {
                    Street: location.Street__c,
                    City: location.City__c,
                    State: location.State__c,
                    PostalCode: location.PostalCode__c,
                    Country: location.Country__c
                },
                title: MARKER_TITLE,
                description: MARKER_DESCRIPTION,
                icon: 'standard:account',
                value: location.value__c || location.Id
            };
        });
    }

    get locationData() {
        return this.headquartersLocations?.data ?? [];
    }

    get hasLocation() {
        return this.locationData.length > 0;
    }

    get hasError() {
        return !!this.headquartersLocations?.error;
    }

    get isLoading() {
        return !this.hasLocation && !this.hasError;
    }
}