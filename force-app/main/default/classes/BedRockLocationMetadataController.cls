public with sharing class BedRockLocationMetadataController {


    /**
     * Get the head quarter location from the custom metadata
     * @return List<bedRocks_location__mdt>
     */
    @AuraEnabled(cacheable=true)
    public static List<bedRocks_location__mdt> getHeadQuarterLocation() {
        List<bedRocks_location__mdt> locationMetadataList = [SELECT Id, City__c, Country__c, PostalCode__c, State__c, Street__c, value__c FROM bedRocks_location__mdt];
        if (locationMetadataList.isEmpty()) {
            throw new AuraHandledException(
                'Custom metadata record BedRock_HeadQuarter was not found for bedRocks_location__mdt.'
            );
        }

        return locationMetadataList;
    }
}
