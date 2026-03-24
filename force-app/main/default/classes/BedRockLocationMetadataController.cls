public with sharing class BedRockLocationMetadataController {
    @AuraEnabled(cacheable=true)
    public static bedRocks_location__mdt getHeadQuarterLocation() {
        bedRocks_location__mdt locationMetadata = bedRocks_location__mdt.getInstance('BedRock_HeadQuarter');

        if (locationMetadata == null) {
            throw new AuraHandledException(
                'Custom metadata record BedRock_HeadQuarter was not found for bedRocks_location__mdt.'
            );
        }

        return locationMetadata;
    }
}
